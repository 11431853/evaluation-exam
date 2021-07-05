function runProgram(input) {
    var newInput = input.split(" ");
    var a = Number(newInput[0]);
    for (i=1;i<=a;i++) {
      result = "";
      for (j=1;j<=a-1;j++) {
        if (j>=2) {
          result += " ";
        }
        else {
          result += "* ";
        }
        if (i==a) {
          result += "* ";
      }
      
      }
      console.log(result);
    }
    
    

}
if (process.env.USERNAME === "Sagar") {
    runProgram(`5`);
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