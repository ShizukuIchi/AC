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
    .isLength({ min: 11 })
    .withMessage('電話欄位要有 11 位數，例如: 02-28825252')
    .custom(value => /^02-\d{8}$/.test(value))
    .withMessage('電話格式要為 02-號碼，例如: 02-28825252')
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

// 修改餐廳頁面
router.get('/:id/edit', (req, res) => {
  Restaurant.findOne({
    _id: req.params.id,
  }, (err, restaurant) => {
    if (err) return console.error(err)
    return res.render('addUpdate', {
      restaurant: restaurant, action: "修改"
    })
  })
})

// 修改餐廳動作
router.put('/:id', [
  check('phone')
    .exists()
    .isLength({ min: 11 })
    .withMessage('電話欄位要有 11 位數，例如: 02-28825252')
    .custom(value => /^02-\d{8}$/.test(value))
    .withMessage('電話格式要為 02-號碼，例如: 02-28825252')
], (req, res) => {

  const errors = validationResult(req)

  // 從 db 取資料
  Restaurant.findOne({
    _id: req.params.id,
  }, (err, restaurant) => {

    if (err) return console.error(err)

    // 更新表單資料
    Object.assign(restaurant, req.body)

    if (!errors.isEmpty()) {
      res.render('addUpdate', { errors: errors.array(), restaurant: restaurant, action: "修改" })
    } else {
      // 將更新後的資料存入 db
      // 再導頁到餐廳詳細頁面
      restaurant.save(err => {
        if (err) return console.error(err)
        return res.redirect(`/restaurants/${req.params.id}`)
      })
    }
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