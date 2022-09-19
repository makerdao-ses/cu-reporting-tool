module.exports = {
    productName: "MakerDAO-CU-Reporting",
    appId: "com.makerdao.cuReportingTool",
    files: [
        "./build/main/**/*",
        "./build/renderer/**/*",
        "./assets/**/*",
    ],
    mac: {
        category: "public.app-category.developer-tools",
        icon: "assets/images/budgetToolLogo.png",
        hardenedRuntime: true,
        gatekeeperAssess: false,
    },
    dmg: {
        contents: [
          {
            x: 130,
            y: 220
          },
          {
            x: 420,
            y: 220,
            type: "link",
            path: "/Applications"
          }
        ],
    },
    win: {
        icon: "assets/images/budgetToolLogo.png",
        target: [
            "nsis"
        ],
    },
    linux: {
        target: [
            "deb",
            "rpm",
            "AppImage"
        ],
        category: "Development",
    },
};