var data = [2, 4, 5, 3, 6, 8];
var evenI = [];
for (var i=0;i<data.length;i+=2) {
    evenI.push(data[i])
}
var even = function eve(el) {
    return el%2==0;
}

console.log(evenI.filter(even));