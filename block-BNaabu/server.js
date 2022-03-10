var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var app = express();

//middleware
app.use(logger('dev'));

app.use('/admin', (req, res, next) => {
  next('Unauthorized');
});

//routes
app.get('/', (req, res) => {
  res.send('Welcome');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

//404 handler
app.use((req, res, next) => {
  res.send(`Page Not Found`);
});

//custom error handler
app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log(`Server is listening on port 3000`);
});
