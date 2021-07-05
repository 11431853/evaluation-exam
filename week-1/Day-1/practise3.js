function runProgram(input) {
    var a = Number(input[0]);
    for (i=1;i<=a;i++) {
      result = "";
      for (j=1;j<=a-i;j++) {
        result += " ";
      }
      for (var k=1;k<=i;k++) {;
      result += "* "
      }
      console.log(result);
    }

}
if (process.env.USERNAME === "Sagar") {
    runProgram(`8`);
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
