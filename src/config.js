var GAME = {
  canvas : {
    width : 600,
    height : 600
  },
  started : true,
  level : 1
};

var BLOOD = {
  collectedDrops : 0
};

var COORD = {
  x1 : Math.random()*600,
  y1 : Math.random()*600,
  x2 : Math.random()*600,
  y2 : Math.random()*600,
  x3 : Math.random()*600,
  y3 : Math.random()*600,
  x4 : Math.random()*600,
  y4 : Math.random()*600,
  x5 : Math.random()*600,
  y5 : Math.random()*600,
  x6 : Math.random()*600,
  y6 : Math.random()*600,
  x7 : Math.random()*600,
  y7 : Math.random()*600,
  x8 : Math.random()*600,
  y8 : Math.random()*600
};
var DETECTIVE = {
latest : {
  x : 1,
  y : 1,
  v: 0,
  a: .06,
},
};
var LIGHT = {
  x : COORD.x7,
  y : COORD.y7
};
