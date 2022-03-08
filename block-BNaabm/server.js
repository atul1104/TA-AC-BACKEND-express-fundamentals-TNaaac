var express = require('express');

var app = express();

//middleware

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get('/', (req, res) => {
  console.log('Welcome to express');
});

app.listen(4000, () => {
  console.log('Server s listening on port 4000');
});
