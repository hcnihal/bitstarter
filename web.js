var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var b = fs.readFileSync('./index.html','utf8');
    var greeting = b.toString('utf8',0,b.length);
    response.send(greeting);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
