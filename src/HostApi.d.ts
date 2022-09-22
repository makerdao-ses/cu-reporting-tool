declare global {
    const electronHostApi: HostApi | undefined;
}

interface HostApi {
    versions: {
        node: () => string,
        chrome: () => string,
        electron: () => string,
    },
    hostType: () => string
}

export { HostApi };