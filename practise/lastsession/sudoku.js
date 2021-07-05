function checkrepeatition(items) {
    var isFlag = true;
    for (var i=0;i<items.length;i++) {
      for (var j=i+1;j<items.length;j++) {
        if (data[i]!=data[j]) {
          isFlag = false;
          break;
        }
      }
    }
    return isFlag;

}
var data = [
    [3, 9, 4, 1, 7, 2, 5, 8, 8],
    [1, 5, 7, 3, 8, 6, 2, 4, 9],
    [2, 8, 6, 9, 4, 5, 7, 1, 3],
    [5, 3, 8, 7, 9, 4, 6, 2, 1],
    [9, 4, 1, 2, 6, 3, 8, 7, 5],
    [7, 6, 2, 8, 5, 1, 3, 9, 4],
    [4, 1, 3, 5, 2, 8, 9, 6, 7],
    [6, 2, 9, 4, 3, 7, 1, 5, 8],
    [8, 7, 5, 6, 1, 9, 4, 3, 2],
]
var isFlag = true;
for (var i=0;i<data.length;i++) {
  var rows = [];
  for (var j = 0;j<data[i].length;j++) {
    rows.push(data[i][j]);
  }
  if (checkrepeatition(rows) == true) {
    isFlag = false;
    break;
  }
}
if (isFlag == false) {
  console.log("Wrong");
}
if (isFlag == true) {
  var isTree = true;
  for (var i=0;i<data[0].length;i++) {
    var colms = [];
    for (var j=0;j<data.length;j++) {
      colms.push(data[j][i]);
    }
    if (checkrepeatition(colms)==true) {
      isTree = false;
      break;
    }
  }
  if (isTree == false) {
    console.log("WRONG");
  }
  if (isTree == true) {
    console.log("CORRECT");
  }
}