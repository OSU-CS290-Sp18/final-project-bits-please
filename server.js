/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Erin Villasenor
 * Email: villaser@oregonstate.edu
 */

var path = require('path');
var express = require('express');

var fs = require('fs');
var app = express();
var exphbs = require('express-handlebars');


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var rawData = fs.readFileSync('./twitData.json');
var twitData = JSON.parse(rawData);
var port = process.env.PORT || 3000;



app.use(express.static('public'));


app.get('/', function(req,res) {
	res.status(200).render('twitPage', {twit: twitData, index: 1});
	//	res.render('twitButton');

});

app.get('/twits/:num', function(req,res,next){
	var num = req.params.num;

	if (twitData[num]) {
		res.status(200).render('twitPage', {twit: [twitData[num]], noButton: true});
	}
	else {
		next();
	}
});
app.get('*', function (req, res) {
res.render('404page');
	//	res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
	//	res.status(404).render('404Page', {});
});

app.listen(port, function () {
	console.log("== Server is listening on port", port);
});
