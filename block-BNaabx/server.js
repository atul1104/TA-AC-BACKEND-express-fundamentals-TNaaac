var express = require('express');
var logger = require('morgan');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send('Welcome to index page');
});

app.listen(3000, () => {
  console.log(`Server is listening on port 3000`);
});
