// function runProgram(input) {
//     var newInput = input.split("\n");
    


// }
// if (process.env.USERNAME === `Sagar`) {
//     runProgram(`9 9
//     3 9 4 1 7 2 5 8 6
//     1 5 7 3 8 6 2 4 9
//     2 8 6 9 4 5 7 1 3
//     5 3 8 7 9 4 6 2 1
//     9 4 1 2 6 3 8 7 5
//     7 6 2 8 5 1 3 9 4
//     4 1 3 5 2 8 9 6 7
//     6 2 9 4 3 7 1 5 8
//     8 7 5 6 1 9 4 3 2`);
// } else {
//         process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//         read += input;
//   });
//   process.stdin.on("end", function () {
//         read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//         read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }

var data = [3, 9, 4, 1, 7, 2, 5, 8, 6];
var isFlag = true;
for (var i=0;i<data.length;i++) {
  for (var j=i+1;j<data.length;j++) {
    if (data[i]==data[j]) {
      isFlag = false;
    }
  }
}
if (isFlag) {
  console.log("correct");
}
if (isFlag == false) {
  console.log("wrong");
}