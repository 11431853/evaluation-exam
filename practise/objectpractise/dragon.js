function palindrome(data, result) {
    var isFlag = true;
    for (var i=0;i<data.length;i++) {
      if (data[i]!=data[data.length-1-i]) {
        var isFlag = false;
      }
    }
    if (isFlag) {
      result.push(data.length);
    }
    console.log(result);
}
function runProgram(input) {
    var data = input.split("");
    var result = [];
    for (var i=0;i<data.length;i++) {
      var res = "";
      for (var j=i;j<data.length;j++) {
        res += data[j];
        palindrome(res, result); 
      }
    }
        
}
      
    
    


if (process.env.USERNAME === `Sagar`) {
    runProgram(`thisracecarisgood`);
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