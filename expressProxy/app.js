const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()
const options = {
  target: 'http://www.lwp.fun:7000',
  changeOrigin: true,
  ws: true, // proxy websockets
  pathRewrite: {
    '^/api': ''
  }
}
const exampleProxy = createProxyMiddleware(options)
app.use('/api', exampleProxy)
app.listen(7000)
