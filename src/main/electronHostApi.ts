import { HostApi } from "../HostApi";

const electronHostApi= ():HostApi => ({
    versions: {
        node: () => process.versions.node,
        chrome: () => process.versions.chrome,
        electron: () => process.versions.electron,
    }
});

export { electronHostApi };