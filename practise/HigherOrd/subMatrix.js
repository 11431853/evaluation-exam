var data = [
    [1, 2, 3],
    [5, 6, 7],
    [7, 8, 9]
];

for (var i=1;i<data.length;i++) {
    var res = "";
    for (var j=1;j<data[i].length;j++) {
        res += data[i][j] + " ";
    }
    console.log(res);
}
