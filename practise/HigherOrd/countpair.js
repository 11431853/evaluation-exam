function runProgram(input) {
    var input = input.split("\n");
    var data1 = input[1].trim().split(" ").map(Number);
    var data2 = input[2].trim().split(" ").map(Number);
    
    
    for (var i=0;i<data1.length;i++) {
      for (var j=i;j<data2.length;j++) {
        if (data1[i] == data2[j]) {
          console.log(data1[i]);
        }
      }
    }
    
    
}
if (process.env.USERNAME === `Sagar`) {
    runProgram(`3
    4 5 7
    9 2 5`);
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