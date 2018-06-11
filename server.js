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

app.post('/items/addPhoto', function (req, res, next) {
	var person = req.params.person.toLowerCase();
	if (req.body && req.body.caption && req.body.photoURL) {
		var photo = {
			caption: req.body.caption,
			photoURL: req.body.photoURL
		};
		/*
		    var peopleCollection = mongoDB.collection('people');
    peopleCollection.updateOne(
      { personId: person },
      { $push: { photos: photo } },
      function (err, result) {
        if (err) {
          res.status(500).send("Error inserting photo into DB.")
        } else {
          console.log("== mongo insert result:", result);
          if (result.matchedCount > 0) {
            res.status(200).end();
          } else {
            next();
          }
        }
      }
    );
		*/
	}
	else {
		res.status(400).send("Request needs a JSON body with caption and photoURL.")
	}
});
app.get('*', function (req, res) {
res.render('404page');
	//	res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
	//	res.status(404).render('404Page', {});
});

/*app.listen(port, function () {
	console.log("== Server is listening on port", port);
});
 */
MongoClient.connect(mongoURL, function (err,client) {
	if (err) {
		throw err;
	}
	mongoDB = client.db(mongoDBName);
	app.listen(port, function () {
		console.log("== Server listening on port", port);
	});
})
