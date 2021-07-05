
function runProgram(input) {
    var newInput = input.split("\n");
    var day = newInput[0];
    var k = +newInput[1].trim();
    var days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    var n = days.length;
    for (var i=0;i<n;i++) {
      if (days[i]==day) {
        console.log(days[(i+k)%7]);
      }
    }


}
if (process.env.USERNAME === `Sagar`) {
    runProgram(`Wednesday
    8`);
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
