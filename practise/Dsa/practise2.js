function diamondTraversal (data, row) {
    var res = "";
    
    var m = row-1;
    for (var i=Math.floor(row/2);i>=0;i--) {
      res += data[i][m--] + " ";
    }
    console.log(res);
    for (var i=1;i<=Math.floor(row/2);i++) {
      res += data[i][m--] + " ";
    }
    console.log(res);
    var m=1;
    for (var i=(Math.floor(row/2))+1;i<=row-1;i++) {
      res += data[i][m++] + " ";
    }
    console.log(res);
    for (var i=row-2;i>Math.floor(row/2);i--) {
      res += data[i][m++] + " ";
    }
    console.log(res);
}
function runProgram(input) {
  input = input.split("\n");
  var times = +input[0];
  
  var j=1;
  for (var i=1;i<=times;i++) {
    var row = +input[j++].trim();
    var data = [];
    for (var k=0;k<row;k++) {
      data.push(input[j++].trim().split(" ").map(Number));
    }
    diamondTraversal(data, row);
  }

}
  


if (process.env.USERNAME === `Sagar`) {
  runProgram(`1
  3
  1 2 3
  4 5 6
  7 8 9`);
} else {
      process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
      read += input;
});
process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
  read = read.replace(/\n$/, "");
  runProgram(read);
});
process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
}
