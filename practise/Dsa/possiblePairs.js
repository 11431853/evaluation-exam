function runProgram(input) {
    input = input.split(" ");
    var n = +input[0];
    var m = +input[1];
    var count = 0;
    var min = Math.min(n, m);
    for (var i=0;i<=min;i++) {
      for (var j=0;j<=min;j++) {
        if (i**2+j==n && j**2+i==m) {
          count++;
        }
      }
    }
    console.log(count);


}
if (process.env.USERNAME === `Sagar`) {
    runProgram(`9 3`);
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
