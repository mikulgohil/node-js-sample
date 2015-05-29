var express = require('express')
var app = express();
app.set('view engine', 'jade');

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function (request, response) {
  response.render('index', { title: 'Hey', message: 'Hello there!', detail: 'Welcome to My app'});
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})