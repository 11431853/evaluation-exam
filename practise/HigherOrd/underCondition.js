function runProgram(input) {
    var data = input.split("");
    var count = 0;
    for (var i=0;i<data.length;i++) {
      for (var j=i;j<data.length;j++) {
        if (data[i]==data[j]) {
          count++;
        }
      }
      
    }
    console.log(count);
    


}
if (process.env.USERNAME === `Sagar`) {
    runProgram(`abcab`);
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
