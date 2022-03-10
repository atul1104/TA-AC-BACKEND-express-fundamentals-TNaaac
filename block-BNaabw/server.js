//require
var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

//instantiate the app
var app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(static(__dirname + '/public'));
app.use(logger('dev'));

//routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/project', (req, res) => {
  res.sendFile(__dirname + '/project.html');
});
app.get('/users', (req, res) => {
  res.send('users page');
});

//error handler middleware
//404 error handler
app.use((req, res, next) => {
  res.send('Page not found');
});
//custom client/server error
app.use((err, req, res, next) => {
  res.send(err);
});

//listener
app.listen(4000, () => {
  console.log(`Server is listening on port 4000`);
});
