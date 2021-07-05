

function runProgram(input) {
  input = input.trim().split("\n");
  var r1 = +input[0]
  
  var matrix = [];
  for (var i=1;i<=r1;i++) {
    matrix.push(input[i].trim().split(" ").map(Number));
  }
  
  for (var i=r1-1;i>=0;i--) {
    var res = "";
    for (var j=0;j<r1;j++) {
      res += matrix[j][i] + " ";
    }
    console.log(res);
  }
 
  
  
}
if (process.env.USERNAME === `Sagar`) {
  runProgram(`4
  1 2 3 4
  5 6 7 8
  1 2 3 4
  5 6 7 8`);
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
