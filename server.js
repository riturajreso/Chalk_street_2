var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('chalkStreet',['cs_article','cs_users']);

var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

	app.post('/authenticate',function(req,res){
		console.log("I recevie data from server --- authenticate");
		db.cs_users.find(req.body).toArray(function(err, docs){
			//console.log(docs);
			res.json(docs);
		})
	});

	app.get('/articleList',function(req,res){
		console.log("I recevie a GET request --- articleList");
		db.cs_article.find(function(err, docs){
			//console.log(docs);
			res.json(docs);
		})
	});

app.listen(3000);
console.log("Server is running");

