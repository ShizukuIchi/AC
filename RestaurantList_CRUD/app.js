// 引入相依套件與檔案
const express = require('express')
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const Restaurant = require('./models/restaurant')

// 引入 Router
const HomeRouter = require('./routes/home')
const RestaurantsRouter = require('./routes/restaurants')

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
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(methodOverride('_method'))

// 設定路由
// home 路由
app.use('/', HomeRouter)

// restaurants 路由
app.use('/restaurants', RestaurantsRouter)

// 啟動伺服器
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})