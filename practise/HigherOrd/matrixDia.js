var data = [
    [1, 2, 3, 4],
    [5, 6, 7, 6],
    [7, 8, 9, 9],
    [2, 4, 1, 3]
];
var d1 = 0;
var d2 = 0;
for (var i=0;i<data.length;i++) {
    for (var j=0;j<data.length;j++) {
        if (i==j) {
          d1 +=data[i][j];
        }
        if (j==data.length-1-i) {
          d2 +=data[i][j];
        }
    }
    
}
var res = d1 - d2;
console.log(res);
