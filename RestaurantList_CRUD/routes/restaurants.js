//  引入套件與檔案
const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurant')
const { check, validationResult } = require('express-validator/check');

// 顯示新增餐廳頁面 
router.get('/new', (req, res) => {
  return res.render('addUpdate', {
    action: "新增"
  })
})

// 新增餐廳動作
router.post('/', [
  check('phone')
    .exists()
    .isLength({ min: 10 })
    .withMessage('電話欄位要有 10 位數')
    .isNumeric()
    .withMessage('電話欄位需為數字')
], (req, res) => {

  const errors = validationResult(req)

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

  if (!errors.isEmpty()) {
    res.render('addUpdate', { errors: errors.array(), restaurant: restaurant, action: "新增" })
  } else {
    restaurant.save(err => {
      if (err) return console.error(err)
      return res.redirect('/')
    })
  }

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

// 刪除餐廳動作
router.delete('/:id/delete', (req, res) => {
  // 從 db 取資料
  Restaurant.findOne({
    _id: req.params.id,
  }, (err, restaurant) => {
    if (err) return console.error(err)

    // 將 db 中相對應的資料移除，
    // 再導頁到首頁
    restaurant.remove(err => {
      if (err) return console.error(err)
      return res.redirect('/')
    })
  })
})

// 匯出模組
module.exports = router