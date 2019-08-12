const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    }
];

var magicMike = [];

newDevelopment.forEach(function(obj) {
  var allRooms = obj.rooms.reduce(function(acc, current) {
    return {...acc, ...current};
  }, {});
  
  Object.keys(allRooms).forEach(roomName => {
    if (!allRooms[roomName]) {
      magicMike.push(roomName);
    }
  });
});

var magicAngel = magicMike.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});

Object.keys(magicAngel).forEach(key => {
  if (magicAngel[key] == newDevelopment.length) {
    console.log(key);
  }
});
