// npm install mongoose

const mongoose = require('mongoose');
const Restaurant = require('../restaurant');
const restaurantsList = require('../../restaurant.json').results;

mongoose.connect('mongodb://localhost/Restaurant', { useNewUrlParser: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('db error')
})

db.once('open', () => {
  console.log('mongodb connected!')

  console.log(`restaurantsList count: ${restaurantsList.length}`)
  restaurantsList.forEach(item => {
    // console.log(`${item['name']}`)
    Restaurant.create({
      ...item
    })
  })

  console.log('Restaurant data insert DB done ~')
})