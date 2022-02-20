let express = require('express')
let router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'flüssiges.de' })
})

router.get('/products/beer', function (req, res, next) {
  res.render('beer', { title: 'flüssiges.de' })
})

router.get('/products/wine', function (req, res, next) {
  res.render('wine', { title: 'flüssiges.de' })
})

router.get('/products/soft', function (req, res, next) {
  res.render('soft', { title: 'flüssiges.de' })
})

router.get('/products/water', function (req, res, next) {
  res.render('water', { title: 'flüssiges.de' })
})

router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'flüssiges.de' })
})

router.get('/cart', function (req, res, next) {
  res.render('cart', { title: 'flüssiges.de' })
})

module.exports = router
