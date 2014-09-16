'use strict';

function Burn(){
}

Object.defineProperty(Burn, 'collection', {
  get: function(){return global.mongodb.collection('burns');}
});

Burn.all = function(cb){
  Burn.collection.find().toArray(cb);
};

module.exports = Burn;
