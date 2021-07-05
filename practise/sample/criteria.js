var data = [2, 4, 5, 3, 6, 8];

function even(num) {
    var Eindex = [];
    for (var i = 0;i<num.length;i+=2) {
        Eindex.push(num[i]);
    }
    return Eindex;
}

var isEven = function (el) {
    return (el%2 ==0);
}
console.log(even(data).filter(isEven));
