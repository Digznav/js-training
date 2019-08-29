"use strict";

function increment(x) { return x + 1; }
function decrement(x) { return x - 1; }
function double(x) { return x * 2; }
function half(x) { return x / 2; }

function compose(...fns) {
    return function composed(value) {
        var result = fns[fns.length - 1](value);

        if (fns.length > 1) {
            for (let idx = fns.length - 2; idx >= 0; idx--) {
                result = fns[idx](result);
            }
        }

        return result;
    };
}
function pipe(...fns) {

    return function piped(value) {
        var result = fns[0](value);

        if (fns.length > 1) {
            for (let idx = 1; idx < fns.length; idx++) {
                result = fns[idx](result);
            }
        }

        return result;
    }
}

var f1 = compose(increment,decrement);
var f2 = pipe(decrement,increment);
var f3 = compose(decrement,double,increment,half);
var f4 = pipe(half,increment,double,decrement);
var f5 = compose(increment);
var f6 = pipe(increment);

console.log( f1(3) === 3 );
console.log( f1(3) === f2(3) );
console.log( f3(3) === 4 );
console.log( f3(3) === f4(3) );
console.log( f5(3) === 4 );
console.log( f5(3) === f6(3) );
