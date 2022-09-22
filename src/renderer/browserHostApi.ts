import { HostApi } from "../HostApi";

const getChromeVersion = ():string => {
    const result = navigator.userAgent.match(/Chrom(e|ium)\/([0-9.]+)/);
    return result ? result[2] : "n/a";
}

// Equivalent implementation of the Electron Host API
const browserHostApi = ():HostApi => ({
    versions: {
        node: () => 'n/a',
        chrome: () => getChromeVersion(),
        electron: () => 'n/a'
    },
    hostType: () => 'browser'
});

export { browserHostApi };