var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Ok');
});
console.log("Listenning...")
var server = app.listen(process.env.PORT || 3000);
