var data1 = [
    [1, 2, 3],
    [5, 6, 7],
    [7, 8, 9]
];
var data2 = [
    [2, 1, 2],
    [1, 2, 1],
    [2, 1, 2]
];

var res = "";
for (var i=0;i<data1.length;i++) {
    for (var j=0;j<data1[i].length;j++) {
        res += data1[i][j] + data2[i][j] + " ";
    }
}
console.log(res);