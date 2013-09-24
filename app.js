var express = require('express'),
	path = require('path'),
    exphbs  = require('express3-handlebars'),

    app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname));
app.get('/', function (req, res) {
    res.render('home');
});

var port = process.env.PORT || 3000;
app.listen(port);

console.log('express3-handlebars server listening on: ' + port + ' and dir ' + __dirname);
