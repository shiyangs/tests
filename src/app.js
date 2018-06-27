var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var port = normalizePort(process.env.PORT || '8000');
var mongoose = require('mongoose');
mongoose.connect('Mongodb://localhost:27017');
app.set('port', port);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var hw2Router = require('./routes/hw2');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'src')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/hw2', hw2Router);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));

});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.get('*', function(req, res) {
  res.rendFile(path.join(_dirname + '/src/index.html'));
});

app.listen(port);
module.exports = app;
