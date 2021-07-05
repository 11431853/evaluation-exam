function evenCondition(data) {
    if (data.length = 1) {
      return "YES";
    }
    var sum = 0;
    for (var i=0;i<data.length;i++) {
      sum += data[i];
    }
    if (sum%2==0) {
      return "YES";
    }
    else {
      return "NO";
    }
    
}

function runProgram(input) {
    input = input.split("\n");
    for (var i=2;i<input.length;i+=2) {
      var data = input[i].trim().split(" ").map(Number);
      var p = evenCondition(data);
      console.log(p);
    }


}
if (process.env.USERNAME === `Sagar`) {
    runProgram(`2
    1
    2
    3
    1 2 3`);
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
