// var a = 12345.67;

// var b = a.toString().split(".")[0]; ///before
// var c = a.toString().split(".")[1]; ///after
// console.log(b, c);


// var data = [100, 121, 93];
// var a = 100;
// var array = [];  [45, 0, 210], [0, 255, 0], [12, 24, 36]

function runProgram(input) {
    input = input.split("\n");
    for (var i=1;i<input.length;i++) {
      var data = input[i].trim().split(" ").map(Number);
      var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
      var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
      
    }


}
if (process.env.USERNAME === `Sagar`) {
    runProgram(`3
    45 0 210
    0 255 0
    12 24 36`);
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