var data = [
    [1, 2, 3],
    [3, 2, 2],
    [0, 1, 7]
];
var diagonal = [];
for (var i=0; i<data.length;i++) {
    for (var j=0;j<data[i].length;j++) {
        if (i == j) {
            diangonal.push(data[i][j]);
        }
    }
}
console.log(diagonal);