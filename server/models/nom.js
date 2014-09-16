'use strict';

function Nom(){
}

Object.defineProperty(Nom, 'collection', {
  get: function(){return global.mongodb.collection('noms');}
});

Nom.create = function(o, user, cb){
  o.userId = user._id;
  Nom.collection.save(o, cb);
};

Nom.all = function(user, cb){
  Nom.collection.find({userId:user._id}).toArray(cb);
};

module.exports = Nom;
