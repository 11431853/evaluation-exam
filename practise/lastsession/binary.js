function runProgram(input) {
    input = input.split("\n");
    for (var i=1;i<input.length;i++) {
      var data = input[i].trim();
      var sum = 0;
      for (var j=0;j<data.length;j++) {
        if (data[j]==="1") {
          sum += 2**(data.length-1-j);
        }
      }
      console.log(""+sum);
      
    }    


}
if (process.env.USERNAME === `Sagar`) {
    runProgram(`2
    10101
    1001001`);
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