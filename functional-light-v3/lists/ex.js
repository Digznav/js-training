"use strict";

// Put your code here! :)

// function no1() {
//     return 2;
// }

// function no2() {
//     return 9;
// }

function num(value) {
    return function fn() {
        return value;
    }
}

function add(n1, n2) {
    return n1 + n2;
}

function add2(fn1, fn2) {
    return add(fn1(), fn2());
}

function addn(fns) {
    var result = 0;

    for (let idx = 0; idx < fns.length; idx++) {
        result = add2(num(result), fns[idx]);
    }

    return result;
}

addn([num(1), num(2), num(3), num(4), num(5)]);