"use strict";

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
    return fns.reduce(function reducer(result, fn) {
        return add2(num(result), fn);
    }, 0);
}

addn([num(1), num(2), num(3), num(4), num(5)]);
