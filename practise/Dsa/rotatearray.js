var data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
var array= [];
for (var i=0;i<data[0].length;i++) {
  var arr1 = [];
  var res = "";
  for (var j=data.length-1;j>=0;j--) {
    res += data[i][j] + " ";
    
  }
  var p = arr1.push(res);
}
array.push(p);
