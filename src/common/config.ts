function buildGraphqlUrl(protocol: 'http' | 'ws'): string {
    const ssl = process.env['REACT_APP_THARSIS_API_USE_SSL'] === 'true';
    let scheme;
    if (protocol === 'http') {
        scheme = ssl ? 'https' : 'http';
    } else {
        scheme = ssl ? 'wss' : 'ws';
    }
    return `${scheme}://${process.env['REACT_APP_THARSIS_API_HOST']}${process.env['REACT_APP_THARSIS_API_PORT'] ? `:${process.env['REACT_APP_THARSIS_API_PORT']}` : ''}/graphql`
}

const cfg = {
    apiUrl: buildGraphqlUrl('http'),
    wsUrl: buildGraphqlUrl('ws')
};

export default cfg;
