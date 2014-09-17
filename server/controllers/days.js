'use strict';

var Day = require('../models/day');

exports.create = function(req, res){
  Day.create(req.body, req.user, function(err, day){
    res.send({day:day});
  });
};

exports.index = function(req, res){
  Day.all(req.user, function(err, days){
    res.send({days:days});
  });
};
