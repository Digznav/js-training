const suspects = [
    {
        name: 'Rusty',
        color: 'orange'
    },
    {
        name: 'Miss Scarlet',
        color: 'red'
    },
    {
        name: 'Haydee',
        color: 'yellow'
    },
    {
        name: 'Gaby',
        color: 'blue'
    },
    {
        name: 'Irwing',
        color: 'purple'
    },
    {
        name: 'Gianella',
        color: 'italian'
    },
    {
        name: 'Paco',
        color: 'gray'
    },
    {
        name: 'Darwin',
        color: 'black'
    }
];

var [
    {
        color
    },
    {
        color: color2
    }
] = suspects;

// console.log(color, color2);

// Object.keys(suspects[0]);

for (let i = 0; i < suspects.length; i += 1) {
    if (suspects[i].color === 'italian') {
        suspects[i].guilty = true;
    }

    if (suspects[i].name === 'Haydee') {
        suspects[i].guilty = 'maybe';
    }

    console.log(suspects[i].name);
    console.log(suspects[i].color);
}

console.log(suspects);


_.each = function(list, callback) {
  for(var i = 0; i < list.length; i++) {
    callback(list[i], i, list);
  }
};

_.each(['suspects', 'asd', 'foo'], function(itm, idx, list) {
  console.log(idx, itm, list);
});



























var _ = {};

var weapons = ['rifle', 'grenade launcher', 'katana', 'pistol'];

var makeBroken = function(itm, idx, list) {
  return `Broken ${itm}`; // 'Broken ' + itm
};

_.map = function(list, callback) {
  var newArray = [];

  for(var i = 0; i < list.length; i++) {
    newArray.push(callback(list[i], i, list));
  }
  
  return newArray;
};

var brokenWeapons = _.map(weapons, makeBroken);

console.log(brokenWeapons);




