import axios from 'axios';
import jwt_decode from 'jwt-decode';
import moment from 'moment';
import { UserManager } from 'oidc-client';

const HOST = `${window.location.protocol}//${window.location.host}`;

const AUTHORITY = process.env.REACT_APP_OAUTH_PROVIDER_AUTHORITY;
const CLIENT_ID = process.env.REACT_APP_OAUTH_PROVIDER_CLIENT_ID;
const SCOPE = process.env.REACT_APP_OAUTH_PROVIDER_SCOPE;
const LOGOUT_REDIRECT_URL = process.env.REACT_APP_OAUTH_PROVIDER_LOGOUT_REDIRECT_URL;
const JWT_SUBJECT_FIELD = process.env.REACT_APP_JWT_SUBJECT_FIELD as string;

const QUERY_PARAMS_CACHE_KEY = 'queryParamsBeforeSSORedirect';

const AUTH_CONFIG = {
    authority: AUTHORITY,
    client_id: CLIENT_ID,
    scope: SCOPE,
    loadUserInfo: false,
    monitorSession: false,
    response_type: 'id_token',
    automaticSilentRenew: false,
    silent_redirect_uri: `${HOST}${process.env.PUBLIC_URL}/silent-refresh.html`,
    post_logout_redirect_uri: `${LOGOUT_REDIRECT_URL}/oauth2/v2.0/logout?post_logout_redirect_uri=${HOST}`
};

class AuthenticationService {
    private user: any;
    private accessToken: string | null = null;
    private expiration = 0;
    private pendingRenewPromise: Promise<any> | null = null;
    private manager: UserManager;

    constructor() {
        this.manager = new UserManager(AUTH_CONFIG);
        const endpoint = process.env.REACT_APP_API_URL;

        // Set auth header that will be applied to all http requests
        axios.interceptors.request.use(
            config => {
                if (!endpoint || config.url?.startsWith(endpoint)) {
                    return this.getAccessToken().then(accessToken => {
                        if (config.headers) {
                            config.headers.Authorization = accessToken;
                        }
                        return config;
                    });
                } else {
                    return config;
                }
            },
            err => Promise.reject(err),
        );
    }

    login() {
        return this.manager.getUser().then(user => {
            return new Promise(resolve => {
                if (!user || !user.access_token || this._isExpired(this._decodeAccessToken(user.access_token).exp)) {
                    if (window.location.href.indexOf('#') !== -1) {
                        resolve(this._completeAuthentication());
                    } else {
                        this._renewSession();
                    }
                } else {
                    resolve(user);
                }
            });
        }).then(authResult => {
            const { accessToken, expiration, user } = this._processAuthResult(authResult);
            this.accessToken = accessToken;
            this.expiration = expiration;
            this.user = user;
            return user;
        });
    }

    getAccessToken() {
        if (this.accessToken && !this._isExpired(this.expiration)) {
            // Token is valid
            return Promise.resolve(this.accessToken);
        } else if (this.pendingRenewPromise) {
            // Renew is pending
            return this.pendingRenewPromise;
        } else {
            // Renew token
            return this._renewSession();
        }
    }

    getCurrentUser() {
        return this.user;
    }

    isAuthenticated() {
        return !!this.user;
    }

    signOut() {
        this.manager.signoutRedirect();
    }

    _startAuthentication() {
        console.log('Starting authentication by redirecting to SSO provider...');
        window.sessionStorage.setItem(QUERY_PARAMS_CACHE_KEY, window.location.search);
        return this.manager.signinRedirect({
            redirect_uri: this._build_redirect_uri()
        });
    }

    _completeAuthentication() {
        console.log('Completing authentication...');
        return this.manager.signinRedirectCallback().then(user => {
            // Clear token from url fragment
            window.location.replace('#');
            // Slice off the remaining fragment
            if (typeof window.history.replaceState === 'function') {
                let newUrl = window.location.href.slice(0, -1);
                // Restore query params
                const queryParams = window.sessionStorage.getItem(QUERY_PARAMS_CACHE_KEY);
                if (queryParams) {
                    newUrl += queryParams;
                }
                window.sessionStorage.removeItem(QUERY_PARAMS_CACHE_KEY);

                window.history.replaceState({}, '', newUrl);
            }

            return user;
        });
    }

    _renewSession() {
        this.pendingRenewPromise = new Promise(() => this._startAuthentication());
        return this.pendingRenewPromise;
    }

    _processAuthResult(authResult: any) {
        const decodedToken = this._decodeAccessToken(authResult.id_token);
        return {
            accessToken: authResult.id_token,
            expiration: decodedToken.exp,
            user: {
                email: decodedToken[JWT_SUBJECT_FIELD].toLowerCase(),
                firstName: decodedToken.given_name,
                lastName: decodedToken.family_name
            }
        };
    }

    _isExpired(exp: any) {
        return !moment.unix(exp).isAfter(moment().add(1, 'm'));
    }

    _decodeAccessToken(token: any) {
        return (jwt_decode(token) as any);
    }

    _build_redirect_uri() {
        return `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
    }
}

export default AuthenticationService;
