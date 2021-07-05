
    

function runProgram(input) {
    var newInput = input.split("\n");
    var data = newInput[1].trim().split(" ").map(Number);
    var n = data.length;
    var count = 1;
    var res = 0;
    for (var i=0;i<n-1;i++) {
      if (data[i]%2==1) {
        if (data[i]==data[i+1]) {
            count++;
        }
        else if (count>res) {
          res = count;
          count = 1;
        }
      }
    }
    console.log(res);
    
    
    

}
if (process.env.USERNAME === `Sagar`) {
    runProgram(`12
    1 1 1 1 2 2 2 2 2 1 1 1`);
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
