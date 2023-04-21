function buildGraphqlUrl(protocol: 'http' | 'ws'): string {
    const urlSetting = process.env.REACT_APP_THARSIS_API_ENDPOINT ? process.env.REACT_APP_THARSIS_API_ENDPOINT : (window as any).env.THARSIS_API_ENDPOINT;
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
    const urlSetting = process.env.REACT_APP_THARSIS_DOCUMENTS_URL ? process.env.REACT_APP_THARSIS_DOCUMENTS_URL : (window as any).env.THARSIS_DOCUMENTS_URL;
    const defaultSetting = 'https://tharsis.martian-cloud.io';

    if (!urlSetting || urlSetting === '__THARSIS_DOCUMENTS_URL__') {
        return defaultSetting;
    }

    return urlSetting;
}

const cfg = {
    apiUrl: buildGraphqlUrl('http'),
    wsUrl: buildGraphqlUrl('ws'),
    docsUrl: buildDocumentsUrl()
};

export default cfg;
