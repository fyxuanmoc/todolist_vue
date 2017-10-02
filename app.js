/**
 * Created by fengy on 2017/10/1.
 */
var express = require('express')
var proxy = require('http-proxy-middleware')
var app = express()

app.use('/allList', proxy({
  target: 'http://127.0.0.1:8080',
  changeOrigin: true
}))
app.use(express.static('dist'))

app.get('*', function (req, res) {
  res.sendfile('./dist/index.html')
})

app.listen(8081, function () {
  console.log('连接成功')
})
