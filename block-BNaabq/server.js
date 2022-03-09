var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.use(logger('dev'));
app.use(cookieParser());

app.use('/about', (req, res, next) => {
  res.cookie('username', 'Atul');
  res.end('About page');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
  console.log(`Server is listening on port 3000`);
});
