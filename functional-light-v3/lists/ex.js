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

    if (fns.length <= 1) return add2(num(0), fns[0]);

    var result = add2(fns[0], fns[1]);

    return result + addn(fns.slice(2));
}

addn([num(1), num(2), num(3), num(4), num(5)]);