function runProgram(input) {
    var newInput = input.split(" ").map(Number);
    var base = newInput[0];
    var perpend = newInput[1];
    var result = base*base + perpend*perpend;
    console.log(String(result));


}
if (process.env.USERNAME === `Sagar`) {
    runProgram(`12 5`);
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
