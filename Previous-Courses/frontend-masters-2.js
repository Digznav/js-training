function toBoolean(value) {
    var valueToTest = value;

    if (typeof valueToTest == 'string') {
        valueToTest = valueToTest.trim();

        if (valueToTest == 'true' || valueToTest == 'false') {
            return JSON.parse(valueToTest);
        }
    }

    return Boolean(valueToTest);
}

[' true', 'false ', 1, 0, '1a', '1', ' 0', '', ' ', undefined, null].forEach(itm => {
     console.log(typeof itm == 'number' ? itm : `[${itm}]`, toBoolean(itm));
});

const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];

// ['Miss Scarlet', 'Reverend Green', ...]

function from(arrLike) {
  return Array.prototype.slice.call(arrLike); // new array
}



function add() {
  var [ a, b ] = from(arguments);

  return a + b;
};

add(3, 5); // 8


// var present = videoData
//   .filter(itm => itm.present )
//   .map(itm => itm.name );

// var presentNames = present.map(itm => itm.name );

// console.log(present);
// []