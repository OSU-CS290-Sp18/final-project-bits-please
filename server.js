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
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var mongoHost = process.env.MONGO_HOST;
var mongoPort= process.enc.MONGO_PORT || '27017';
var mongoUsername = process.env.MONGO_USERNAME;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB_NAME;

var mongoURL = "mongodb://" + mongoUsername + ":" + mongoPassword + "@"  + mongoHost + ":" + mongoPort + "/" + mongoDBName;

var mongoDB = null;
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var rawData = fs.readFileSync('./twitData.json');//fix
var twitData = JSON.parse(rawData);//fix
var port = process.env.PORT || 3000;



app.use(express.static('public'));
app.use(bodyParser.json());//come back to

app.get('/', function(req,res) {
	res.status(200).render('twitPage', {twit: twitData, index: 1});//fix
			//^^handlebars in views folder

});

app.get('/twits/:num', function(req,res,next){
	var num = req.params.num;

	if (twitData[num]) {
		res.status(200).render('twitPage', {twit: [twitData[num]], noButton: true});
	}//render handlebars in views folder^^
	else {
		next();
	}
	
	/**************COME BACK TO
	var photoCollection = mongoDB.collection('photos');
	photoCollection.find().toArray(function (err, people) {
	if (err) {
	res.status(500).send("Error fetching photos from DB.");
	} else {
	res.status(200).render('photoPage', {
	photos: photos
	});
	}
	});
	});
	*/
});//fix
app.get('*', function (req, res) {
res.render('404page');
	//	res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
	//	res.status(404).render('404Page', {});
});

app.listen(port, function () {
	console.log("== Server is listening on port", port);
});
 
