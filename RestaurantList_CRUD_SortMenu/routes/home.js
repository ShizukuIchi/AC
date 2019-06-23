// 引入套件與檔案

const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurant')

const sortTypes = {
  nameAsc: {
    sortObject: {
      name: 'asc'
    },
    display: 'A -> Z'
  },
  nameDesc: {
    display: 'Z -> A',
    sortObject: {
      name: 'desc'
    }
  },
  categoryAsc: {
    display: '餐廳類別',
    sortObject: {
      category: 'asc'
    }
  },
  ratingDesc: {
    display: '餐廳評分',
    sortObject: {
      rating: 'desc'
    }
  }
}

// 列出全部餐廳
router.get('/', (req, res) => {
  // 宣告搜尋與篩選變數
  const searchKeyword = req.query.searchKeyword
  // 使用 Regular Expression 進行搜尋
  const searchKeywordRegExp = new RegExp(req.query.searchKeyword, 'i')
  // 以 name 欄位進行小到大排序
  const sortType = req.query.sortType
    ? sortTypes[req.query.sortType]
    : sortTypes.nameAsc

  // 搜尋 MongoDB 並將結果傳給 index 頁面進行顯示
  Restaurant.find({
    $or: [
      {
        name: {
          $regex: searchKeywordRegExp
        }
      },
      {
        category: {
          $regex: searchKeywordRegExp
        }
      }
    ]
  })
    .sort(sortType.sortObject)
    .exec((err, restaurants) => {
      if (err) return console.error(err)
      return res.render('index', {
        restaurants,
        searchKeyword,
        sortType,
        sortTypes
      })
    })
})

// 匯出模組
module.exports = router
