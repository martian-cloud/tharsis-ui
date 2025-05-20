function buildGraphqlUrl(protocol: 'http' | 'ws'): string {
    const urlSetting = import.meta.env.VITE_THARSIS_API_ENDPOINT ? import.meta.env.VITE_THARSIS_API_ENDPOINT : (window as any).env.THARSIS_API_ENDPOINT;

    if (!urlSetting) {
        return `${protocol}://localhost:8000`
    }

    const apiUrl = new URL(urlSetting);
    const ssl = apiUrl.protocol === 'https:';

    let scheme;
    if (protocol === 'http') {
        scheme = ssl ? 'https' : 'http';
    } else {
        scheme = ssl ? 'wss' : 'ws';
    }

    return `${scheme}://${apiUrl.host}`;
}

function buildDocumentsUrl(): string {
    const urlSetting = import.meta.env.VITE_THARSIS_DOCUMENTS_URL ? import.meta.env.VITE_THARSIS_DOCUMENTS_URL : (window as any).env.THARSIS_DOCUMENTS_URL;
    const defaultSetting = 'https://tharsis.martian-cloud.io';

    if (!urlSetting || urlSetting === '__THARSIS_DOCUMENTS_URL__') {
        return defaultSetting;
    }

    return urlSetting;
}

function buildVersion(): string {
    const version = import.meta.env.VITE_THARSIS_UI_VERSION ? import.meta.env.VITE_THARSIS_UI_VERSION : (window as any).env.THARSIS_UI_VERSION;
    const defaultVersion = 'dev';

    if (!version || version === '__THARSIS_UI_VERSION__') {
        return defaultVersion;
    }

    return version;
}

function buildSupportUrl(): string {
    const urlSetting = import.meta.env.VITE_THARSIS_SUPPORT_URL ? import.meta.env.VITE_THARSIS_SUPPORT_URL : (window as any).env.THARSIS_SUPPORT_URL;

    if (!urlSetting || urlSetting === '__THARSIS_SUPPORT_URL__') {
        return '';
    }

    return urlSetting;
}

const cfg = {
    apiUrl: buildGraphqlUrl('http'),
    wsUrl: buildGraphqlUrl('ws'),
    docsUrl: buildDocumentsUrl(),
    version: buildVersion(),
    supportUrl: buildSupportUrl(),
};

export default cfg;
