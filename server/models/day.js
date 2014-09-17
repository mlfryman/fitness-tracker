'use strict';

var Mongo = require('mongodb');

function Day(userId, o){
  this.userId = Mongo.ObjectID(userId);
  this.date = new Date(o.date);
  this.intensity = o.intensity;
  this.goalNetCals = o.goalNetCals;
  this.noms = [];
  this.burns = [];
}

Object.defineProperty(Day, 'collection', {
  get: function(){return global.mongodb.collection('days');}
});

Object.defineProperty(Day.prototype, 'calsAte', {
  get: function(){
    return this.noms.reduce(function(sum, nom){return nom.calories + sum;} , 0);
  }
});

Object.defineProperty(Day.prototype, 'calsBurned', {
  get: function(){
    return this.burns.reduce(function(sum, burn){return burn.calories + sum;} , 0);
  }
});

Object.defineProperty(Day.prototype, 'goalAchieved', {
  get: function(){
  }
});

Object.defineProperty(Day.prototype, 'goalNetCals', {
  get: function(intensity){
    var goalNetCals;
    switch(intensity){
      case 'low':
        goalNetCals = 1500;
        break;
      case 'medium':
        goalNetCals = 1000;
        break;
      case 'high':
        goalNetCals = 500;
        break;
    }
    return goalNetCals;
  }
});

Day.create = function(userId, o, cb){
  var d = new Day(userId, o);
  Day.collection.save(d, cb);
};

Day.all = function(userId, cb){
  Day.collection.find({userId: userId}).toArray(cb);
};

Day.eatNom = function(dayId, nom, cb){
  Day.collection.findOne({_id: Mongo.ObjectID(dayId)}, function(err, day){
    day.noms.push(nom);
    Day.collection.save(day, cb);
  });
};

Day.goBurn = function(dayId, burn, cb){
  Day.collection.findOne({_id: Mongo.ObjectID(dayId)}, function(err, day){
    day.burns.push(burn);
    Day.collection.save(day, cb);
  });
};

module.exports = Day;
