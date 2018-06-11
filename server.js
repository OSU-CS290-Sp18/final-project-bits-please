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
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var port = process.env.PORT || 3000;


app.use(express.static('public'));
app.use(bodyParser.json());//come back to

/*This if else will get them the partial of a file that ends in "Page"
So, if they enter url.com/item it will render itemPage.handlebars.
If it does not exist, then it will catch the error and give them the 404
This way, we can add as many pages as we wish in the future without changing server.js
found this method at https://stackoverflow.com/questions/4482686/check-synchronously-if-file-directory-exists-in-node-js
*/
app.get('/:pageRequested', function(req,res,next){
	let pageRequested = req.params.pageRequested.toLowerCase() + "Page";
    let fileCheck = pageRequested + ".handlebars";
    
    if(fs.existsSync("views/" + fileCheck)){
        res.status(200).render(pageRequested);
    }
    
    else{
        res.write("404 heh");
        res.send();
    }
});
	
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
 
