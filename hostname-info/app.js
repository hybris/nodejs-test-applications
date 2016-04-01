var express = require('express');
var os = require('os');
var ip = require('ip');

var app = express();

app.get('/', function (req, res) {
  res.send("hostname: " + os.hostname() + " | IP:" + ip.address());
});

console.log("Listenning...")
var server = app.listen(process.env.PORT || 3000);
