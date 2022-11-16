const PROXY_CONFIG = [
    {
        context: ["/**"],
        target: "http://localhost:8080",
        secure: false,
        logLavel: "debug",
        changeOrigin: true,
    },
];
module.exports = PROXY_CONFIG;