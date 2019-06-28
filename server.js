/*
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8082);
*/

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));

//app.use(express.static(__dirname + '/build'));

//adding that to have sourcemap enabled....
//will rewrite that in future
app.use(express.static(__dirname + '/')); 

app.get('/', function(request, response) {
  response.sendfile(__dirname + '/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
