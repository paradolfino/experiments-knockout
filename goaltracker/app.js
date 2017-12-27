var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongojs = require('mongojs');
var db = mongojs('goaltracker',['goals']);
var PORT = 3000 || process.env.PORT;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client')));

app.get('/', function(req, res){
    res.send('Hi');
});

app.listen(PORT, function(){
    console.log('Running on',PORT);
});