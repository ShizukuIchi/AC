// 引入相依套件與檔案
const express = require('express')
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')

// 使用 express 與設定 port
const app = express()
const port = 3000

// 設定 template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

// 設定路由
app.get('/', (req, res) => {
  res.render('index', { restaurants: restaurantList.results });
})

app.get('/restaurants/:restaurant_id', (req, res) => {
  const restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)
  res.render('show', { restaurant: restaurant })
})

app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const restaurants = restaurantList.results.filter(restaurants => {
    return restaurants.name.toLowerCase().includes(keyword.toLowerCase())
  })
  res.render('index', { restaurants: restaurants, keyword: keyword })
})

// 啟動伺服器
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})