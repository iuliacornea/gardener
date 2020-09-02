const DEFAULT_TARGET = "http://localhost:8080";
const PROXY_CONFIG = {
  "/api": {
    "target": process.env.SERVER_BASE_URL || DEFAULT_TARGET,
    "secure": false,
    "pathRewrite": {
      "^/api": "/api"
    },
    "changeOrigin": true
  }
};

module.exports = PROXY_CONFIG;
