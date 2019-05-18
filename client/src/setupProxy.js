const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', { "target": 'http://localhost:3001/', "logLevel": "debug", "secure": false, "changeOrigin": true, "headers": { "Connection": "keep-alive"} }));
};