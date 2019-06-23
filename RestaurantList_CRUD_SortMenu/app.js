// 引入相依套件與檔案
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
require('./handlebars-helpers')

// 使用 express 與設定 port 為 3000
const app = express()
const port = 3000

// 引入 Mongoose 與連結設定
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/Restaurant', { useNewUrlParser: true })
const db = mongoose.connection

//  db 連線成功與錯誤處理
db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

// 設定 template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(methodOverride('_method'))

// 設定路由
// home 路由
app.use(require('./routes'))

// restaurants 路由

// 啟動伺服器
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
