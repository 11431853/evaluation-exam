var item = [1, 2, 3, 4, 5, 6, 7, 8];

var printDouble = function(el) {
    console.log(el ** 2);
}

var double = function(el) {
    return el*2;
}

var isOdd = function(el) {
    return (el%2 == 1);
}
var product = function(ac, el) {
    return ac * el;
}
var sum = function(ac, el) {
    return ac + el;
}

var div3 = function(el) {
    return (el%3==0);
}

var cube = function(el) {
    return (el ** 3);
}

console.log(item.filter(div3).map(cube).reduce(sum));
// item.forEach(printDouble);
