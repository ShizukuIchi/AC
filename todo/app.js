const express = require('express')               // 載入 express
const app = express()                            // 啟用 express
const mongoose = require('mongoose')             // 載入 mongoose

// 引用 express-handlebars
const exphbs = require('express-handlebars')

// 引用 body-parser
const bodyParser = require('body-parser')

// 引用 method-override
const methodOverride = require('method-override')

// 設定 bodyParser
app.use(bodyParser.urlencoded({ extended: true }))

// 告訴 express 使用 handlebars 當作 template engine 並預設 layout 是 main
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 設定 method-override
app.use(methodOverride('_method'))

// Mongoose 的 connect 方法的完整指令
// mongoose.connect('mongodb://[資料庫帳號]:[資料庫密碼]@[MongoDB位置]:[port]/[資料庫名稱]')
mongoose.connect('mongodb://localhost/todo', { useNewUrlParser: true })  // 設定連線到 mongoDB

// mongoose 連線後透過 mongoose.connection 拿到 Connection 的物件
const db = mongoose.connection

// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})

// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})

// 載入 todo model
const Todo = require('./models/todo')

// 載入路由器
app.use('/', require('./routes/home'))
app.use('/todos', require('./routes/todo'))

// 設定 express port 3000
app.listen(3000, () => {
  console.log('App is running!!')
})