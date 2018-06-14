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

app.get('/rentals/:searchTermsURL', function(req,res,next){
    
    //This index creation command only needs to be done ONCE! Not sure if that will mess stuff up. Perhaps run it on inventory before presentation then remove?
    db.collection('inventory').createIndex( { name: "text", description: "text" } );
    
    var searchTerms = decodeURI(req.params.searchTermsURL);
    
    console.log("Searchterms: " + searchTerms);
    //searching mongo for things that match search terms
    var inventoryCollection = db.collection('inventory');
    var inventory = inventoryCollection.find( { $text: { $search: searchTerms } });
    
    
    inventory.toArray(function (err, photobox) {
    if (err) {
    res.status(500).send("Error fetching items from DB.");
    } 
    else {    
    res.status(200).render('rentalsPage', {photobox});
    }
});
});

app.get('/rentals', function(req,res,next){
    var inventoryCollection = db.collection('inventory');
    var inventory = inventoryCollection.find();
    
    inventory.toArray(function (err, photobox) {
    if (err) {
    res.status(500).send("Error fetching people from DB.");
    } 
    else {    
    res.status(200).render('rentalsPage', {photobox});
    }
});
});

/*404*/
app.get('*', function(req,res,next){
    res.status(404).render('404Page');
});

/*Uploading New Items*/
app.post('/addItem', function(req,res){
   db.collection('inventory').insertOne({
       "name": req.body.name,
       photoURL: req.body.photoURL,   
       price: req.body.price, 
       qty: req.body.qty,  
       "description": req.body.description    
   });
});

MongoClient.connect(mongoURL, function (err, client) {
  if (err) {
    throw err;
  }
  db = mongoDBDatabase = client.db(mongoDBName);
  app.listen(port, function () {
    console.log("== Server listening on port " + port);
  });
});
