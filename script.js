dummydata: undefined;
var simple;
// let simple;
simple = add;
// simple=100; weakness of TS
function add(n1, n2) {
    return n1 + n2;
}
function printdata(number2) {
    console.log("The answer is:" + number2);
}
printdata(add(10, 20));
console.log("result of result:" + printdata(add(10, 20)));
console.log(add(10, 30));
console.log(simple(2000, 1000));
