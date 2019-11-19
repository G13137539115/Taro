module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  weapp: {},
  h5: {
    devServer: {
      port: 10086,
      proxy: {
        '/admin/api': {
          target: 'http://192.168.1.151:10048',
          secure: false,
          changeOrigin: true,
          onProxyReq: function onProxyReq(proxyReq, req, res) {
            // add custom header to request
            //proxyReq.setHeader('x-added', 'foobar')
            // or log the req
            // console.log(req);
          }
        }
      }
    }
  }
}
