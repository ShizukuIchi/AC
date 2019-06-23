const express = require('express')
const router = express.Router()

// 列出全部餐廳
router.use('/', require('./home'))
router.use('/restaurants', require('./restaurants'))

module.exports = router
