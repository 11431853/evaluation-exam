// array = [1, 2, 5, 4, 0, 6];
// var n = array.length;
// var result = array.splice(0,4);
// var res = array.concat(result);
// console.log(res);
// console.log(result);
// console.log(array);


function runProgram(input) {
    var newInput = input.split("\n");
    var line1 = newInput[0].split(" ").map(Number);
    var k = +line1[1];
    var res = forEach(function(el))



}
if (process.env.USERNAME === `Sagar`) {
    runProgram(`6 4
    1 2 5 4 0 6`);
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

