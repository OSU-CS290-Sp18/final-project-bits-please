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
var mongoPort= process.env.MONGO_PORT || '27017';
var mongoUsername = process.env.MONGO_USERNAME;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB_NAME;

var mongoURL = "mongodb://" + mongoUsername + ":" + mongoPassword + "@"  + mongoHost + ":" + mongoPort + "/" + mongoDBName;

var mongoDB = null;
app.engine('handlebars', exphbs({defaultLayout: 'mainLayout'}));
app.set('view engine', 'handlebars');


var port = process.env.PORT || 3000;


app.use(express.static('public'));
app.use(bodyParser.json());//come back to


/*Getting Different Pages*/
app.get('/', function(req,res,next){
    res.status(200).render('homePage');
});

app.get('/aboutus', function(req,res,next){
    res.status(200).render('aboutPage');
});

app.get('/cart', function(req,res,next){
    res.status(200).render('cartPage');
});

app.get('/contact', function(req,res,next){
    res.status(200).render('contactPage');
});


app.get('/rentals', function(req,res,next){
    res.status(200).render('rentalsPage');
});

/*404*/
	
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

app.listen(port, function () {
	console.log("== Server is listening on port", port);
});
 
