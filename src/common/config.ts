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

const cfg = {
    apiUrl: buildGraphqlUrl('http'),
    wsUrl: buildGraphqlUrl('ws')
};

export default cfg;
