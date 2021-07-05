var data = ["A", "Good", "Problem"];

var sum = function(ac, el) {
    return ac + el;
}
var isOdd = function (el) {
    return (el%2==1);
}
var len = function (el) {
    return el.length;
}

console.log(data.map(len).filter(isOdd).reduce(sum));
