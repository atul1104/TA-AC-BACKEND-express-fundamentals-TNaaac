var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.use(logger('dev'));
app.use(cookieParser());

app.use((req, res, next) => {
  res.cookie('username', 'sushil');
  next();
});

//routes
app.get('/', (req, res) => {
  res.send('<h2>Welcome to Express</h2>');
});
app.get('/about', (req, res) => {
  res.send('My name is qwerty');
});
app.post('/form', (req, res) => {
  res.json(req.body);
});
app.post('/json', (req, res) => {
  res.send(req.body);
});
app.get('/users/:username', (req, res) => {
  var userName = req.params.username;
  res.send(`<h3>${userName}</h3>`);
});
//404 handler
app.use((req, res, next) => {
  res.send(`Page not found`);
});
//custom error handler
app.use((err, res, req, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
