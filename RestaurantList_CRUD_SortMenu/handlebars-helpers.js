const Handlebars = require('handlebars')

Handlebars.registerHelper('ifEquals', function (arg1, arg2, options) {
  return (arg1 === arg2) ? options.fn(this) : options.inverse(this)
})

Handlebars.registerHelper('assign', function (name, value, context) {
  this[name] = value
})