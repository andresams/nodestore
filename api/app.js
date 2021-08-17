const express = require('express');
const cors = require('cors');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const products = require('./routes/products');
const connectDatabase = require('./config/mongo');

connectDatabase();

const app = express();

app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', routes);
app.use('/products', products);

/**
 * Catch 404 errors and move to the error handler
 */
app.use((req, res, next) => {
  const err = new Error('Page Not Found');
  err.status = 404;
  next(err);
});

/**
 * Only the development error handler should display error messages
 */
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err,
  });
});

module.exports = app;
