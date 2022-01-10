// Importing Modules
require('dotenv').config()
let createError = require('http-errors')
let express = require('express')
let path = require('path')
let cookieParser = require('cookie-parser')
let logger = require('morgan')

// Router contains ALL routes for specific group of routes
// e.g. userRouter routes all pages affiliated with user-specific tasks
let indexRouter = require('./routes/index')
let usersRouter = require('./routes/users')

let app = express()

// HBS gets used as view engine
// so we initialize and set it
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

// setting webpack-devServer (just for live-reload)
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// set location for html (and assets) to serve
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/', indexRouter)
app.use('/users', usersRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
