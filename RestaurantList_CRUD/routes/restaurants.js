//  引入套件與檔案
const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurant')

// 顯示新增餐廳頁面 
router.get('/new', (req, res) => {
  return res.render('addUpdate', {
    action: "新增"
  })
})

// 新增餐廳動作
router.post('/', (req, res) => {

  const restaurant = Restaurant({
    name: req.body.name,
    name_en: req.body.name_en,
    category: req.body.category,
    image: req.body.image || "https://api.fnkr.net/testimg/600x400/EBF5FB/FFF/?text=img",
    location: req.body.location,
    phone: req.body.phone,
    google_map: req.body.google_map,
    rating: req.body.rating,
    description: req.body.description
  })


  restaurant.save(err => {
    if (err) return console.error(err)
    return res.redirect('/')
  })

})

// 顯示餐廳詳細資料頁面
router.get('/:id', (req, res) => {
  Restaurant.findOne({
    _id: req.params.id,
  }, (err, restaurant) => {
    if (err) return console.error(err)
    return res.render('show', {
      restaurant: restaurant
    })
  })
})

// 匯出模組
module.exports = router