/***************/
/**
 *   Importing Modules
 */
/***************/

require('dotenv').config()
let createError = require('http-errors')
let express = require('express')
let exphbs = require('express-handlebars')
let path = require('path')
let cookieParser = require('cookie-parser')
let logger = require('morgan')

// Router contains ALL routes for specific group of routes
// e.g. userRouter routes all pages affiliated with user-specific tasks
let indexRouter = require('./routes/index')
let usersRouter = require('./routes/users')

//initializing app
let app = express()

/***************/
/**
 *   HBS
 */
/***************/

// Create `ExpressHandlebars` instance
// so we set the config
var hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs',
  defaultLayout: 'main',
  // Partials are in /partials, templates are in /layouts
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/',
})

// HBS gets used as view engine
// and gets initialized here
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

/***************/
/**
 *   app-config
 */
/***************/

// setting webpack-devServer (just for live-reload)
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// set location for html (and assets) to serve
app.use(express.static(path.join(__dirname, 'public')))

/***************/
/**
 *   routes
 */
/***************/

app.use('/', indexRouter)
app.use('/users', usersRouter)

/***************/
/**
 *   catch 404 and forward to error handler
 */
/***************/

app.use(function (req, res, next) {
  next(createError(404))
})

/***************/
/**
 *   error handler
 */
/***************/

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('partials/error')
})

module.exports = app
