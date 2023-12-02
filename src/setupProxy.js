const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
      headers: {
        'X-CMC_PRO_API_KEY': 'd1c2a97c-03c8-472c-8cfb-1cbc45efae28',
      },
    })
  );
};
