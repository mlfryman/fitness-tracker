'use strict';

var Nom = require('../models/nom');

exports.create = function(req, res){
  Nom.create(req.body, req.user, function(err, nom){
    res.send({nom:nom});
  });
};

exports.index = function(req, res){
  Nom.all(req.user, function(err, noms){
    res.send({noms:noms});
  });
};
