var data = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 2, 3]
]


for (var i=0;i<data[i].length;i++) {
  var res = "";
  for (var j=0;j<data.length;j++) {
    res += data[j][i] + " ";
  }
  console.log(res);
}
