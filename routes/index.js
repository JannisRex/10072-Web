let express = require('express')
let router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'flüssiges.de' })
})

router.get('/test', function (req, res, next) {
  res.render('test', { title: 'flüssiges.de' })
})

module.exports = router
