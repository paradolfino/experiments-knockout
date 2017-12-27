var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var db = mongojs('goaltracker',['goals']);

app.use(bodyParser.json());