function runProgram(input) {
    var newInput = input.split("\n");
    var data = newInput[1].split(" ").map(Number);
    for (var i = 0; i<data.length; i++) {
      if(data[i] == 42) {
        console.log("Yes");
        break;
      } else {
          console.log("No");
          break;
      }
    }
  
                    
   
}
if (process.env.USERNAME === `Sagar`) {
    runProgram(`5
    3 42 0 9 42`);
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