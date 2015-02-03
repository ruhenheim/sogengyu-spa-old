var express = require('express'),
    app = express(),
    server = require('http').createServer(app);

app.set('port', (process.env.PORT || 8888));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile('/index.html');
});

server.listen(app.get('port'), function() {
  console.log('Node app is running at listening on *:' + app.get('port'));
});
