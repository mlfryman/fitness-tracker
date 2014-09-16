'use strict';

var Burn = require('../models/burn');


exports.index = function(req, res){
  Burn.all(function(burns){
    res.send({burns:burns});
  });
};
