function oddElement (data) {
    var count = 0;
    for (var i=0;i<data.length;i++) {
      count += data[i];
    }
    if (count%2==1) {
      console.log("Yes");
    }
    else {
      console.log("No");
    }

}



function runProgram(input) {
    var newInput = input.trim().split("\n");
    for (i=2;i<newInput.length;i+=2) {
      var data = newInput[i].trim().split(" ").map(Number);
      
      oddElement (data);
    }


}
if (process.env.USERNAME === `Sagar`) {
    runProgram(`3
    1
    1
    2
    1 101
    2
    1 200`);
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