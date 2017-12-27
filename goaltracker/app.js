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

app.get('/goals', function(req, res){
    db.goals.find(function(err, docs){
        if(err) {
            res.send(err);
        } else {
            console.log('Getting goals...');
            res.json(docs);
        }
    });
});

app.post('/goals', function(req, res) {

});

app.listen(PORT, function(){
    console.log('Running on',PORT);
});