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
    db.goals.insert(req.body, function(){
        if(err) {
            res.send(err);
        } else {
            console.log('Setting goals...');
            res.json(docs);
        }
    });
});

app.put('/goals/:id', function(req, res) {
    db.goals.findAndModify({query:{_id: mongojs.ObjectId(req.params.id)},
    update:{ $set: {
        name: req.body.name,
        type: req.body.type,
        deadline: req.body.deadline
    }},
    new: true
}, function(err,doc){
        if(err) {
            res.send(err);
        } else {
            console.log('Editing goals...');
            res.json(doc);
        }
    });
});

app.delete('/goals/:id', function(req, res) {
    db.goals.remove({_id: mongojs.ObjectId(req.params.id)}, function(err,docs){
        if(err) {
            res.send(err);
        } else {
            console.log('Removing goals...');
            res.json(docs);
        }
    });
});

app.listen(PORT, function(){
    console.log('Running on',PORT);
});