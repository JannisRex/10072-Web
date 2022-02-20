let express = require('express')
let router = express.Router()

/*
----------------------------
          BEER 
----------------------------
*/

router.get('/beer/weizen', function (req, res, next) {
  res.render('items/weizen', { title: 'flüssiges.de' })
})

router.get('/beer/pils', function (req, res, next) {
  res.render('items/pils', { title: 'flüssiges.de' })
})

router.get('/beer/pale', function (req, res, next) {
  res.render('items/pale', { title: 'flüssiges.de' })
})

router.get('/beer/irish', function (req, res, next) {
  res.render('items/irish', { title: 'flüssiges.de' })
})

router.get('/beer/blond', function (req, res, next) {
  res.render('items/blond', { title: 'flüssiges.de' })
})

router.get('/beer/koelsch', function (req, res, next) {
  res.render('items/koelsch', { title: 'flüssiges.de' })
})

router.get('/beer/malt', function (req, res, next) {
  res.render('items/malt', { title: 'flüssiges.de' })
})

router.get('/beer/budweiser', function (req, res, next) {
  res.render('items/budweiser', { title: 'flüssiges.de' })
})

/*
----------------------------
          WINE 
----------------------------
*/

router.get('/wine/red', function (req, res, next) {
  res.render('items/red', { title: 'flüssiges.de' })
})

router.get('/wine/white', function (req, res, next) {
  res.render('items/white', { title: 'flüssiges.de' })
})

router.get('/wine/rose', function (req, res, next) {
  res.render('items/rose', { title: 'flüssiges.de' })
})

/*
----------------------------
          SOFT 
----------------------------
*/

router.get('/soft/aa', function (req, res, next) {
  res.render('items/aa', { title: 'flüssiges.de' })
})

router.get('/soft/bb', function (req, res, next) {
  res.render('items/bb', { title: 'flüssiges.de' })
})

router.get('/soft/cc', function (req, res, next) {
  res.render('items/cc', { title: 'flüssiges.de' })
})

router.get('/soft/dd', function (req, res, next) {
  res.render('items/dd', { title: 'flüssiges.de' })
})

/*
----------------------------
          WATER 
----------------------------
*/

router.get('/water/classic', function (req, res, next) {
  res.render('items/classic', { title: 'flüssiges.de' })
})

router.get('/water/medium', function (req, res, next) {
  res.render('items/medium', { title: 'flüssiges.de' })
})

router.get('/water/nature', function (req, res, next) {
  res.render('items/nature', { title: 'flüssiges.de' })
})

router.get('/water/still', function (req, res, next) {
  res.render('items/still', { title: 'flüssiges.de' })
})

module.exports = router
