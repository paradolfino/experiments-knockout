var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongojs = require('mongojs');
var db = mongojs('goaltracker',['goals']);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client')));