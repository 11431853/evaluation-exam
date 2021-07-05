


function runProgram(input) {
    var input = input.split("\n");
    var data1 = input[0].split("").sort();
    var data2 = input[1].split("").sort();
    data1 = data1.join("").trim();
    data2 = data2.join("").trim();
    if (data1==data2) {
      console.log("True");
    }
    else {
      console.log("False");
    }
    
  }
  
  if (process.env.USERNAME === "Sagar") {
    runProgram(`anagram
    nag a ram`);
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
  