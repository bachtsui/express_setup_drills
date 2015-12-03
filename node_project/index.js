 var express = require('express');
 var app = express();

 var fastFood = [
 	{name: "McDonalds"},
 	{name: "Taco Bell"},
 	{name: "Panda Express"},
 ];


 var bartStations = [
 	{name: "Market"},
 	{name: "Powell"},
 	{name: "Montgomery"},
 	{name: "Daly City"},
 	{name: "Millbrae"}
 ];

 app.use(express.static('public'));

//Route 1
 app.get("/api/fastFood", function (req, res){
 	console.log("Fast Food Function working.");
 	res.json(fastFood);
 });

//Route 2
 app.get("/api/bartStations", function (req, res){
 	console.log("Bart Station Function working.");
 	res.json(bartStations);
 });

 var server = app.listen(3000, function() {
 	var host = server.address().address;
  	var port = server.address().port;

  console.log('Listening to server', host, port);
 });