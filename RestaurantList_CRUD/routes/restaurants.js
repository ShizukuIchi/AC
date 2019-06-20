//  引入套件與檔案
const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurant')

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