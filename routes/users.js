let express = require('express')
let router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('me', { title: 'flüssiges.de' })
})

router.get('/login', function (req, res, next) {
  res.render('login', { title: 'flüssiges.de' })
})

router.get('/register', function (req, res, next) {
  res.render('register', { title: 'flüssiges.de' })
})

router.get('/logout', function (req, res, next) {
  res.render('logout', { title: 'flüssiges.de' })
})

module.exports = router
