let express = require('express')
let router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'flüssiges.de' })
})

router.get('/beer', function (req, res, next) {
  res.render('beer', { title: 'flüssiges.de' })
})

router.get('/wine', function (req, res, next) {
  res.render('wine', { title: 'flüssiges.de' })
})

module.exports = router
