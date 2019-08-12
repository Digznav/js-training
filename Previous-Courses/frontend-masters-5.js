import _ from 'lodash';

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
            {library: false},
            {bar: false}
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

function notInRoom(suspect) {
  var emptyRooms = suspect.rooms.reduce((acc, room) => {
    var kys = Object.keys(room);

    if (room[kys[0]] === false) acc.push(kys[0]);
    return acc;
  }, []);
  
  return emptyRooms;
}

var notInRooms = newDevelopment.map(notInRoom);
notInRooms;
_.intersection(...notInRooms);

_.difference(...notInRooms);
