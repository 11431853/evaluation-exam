function arrsumbor (data,row, col) {
    var sum = 0;
    for (var i=1;i<row-1;i++) {
      for (var j=1;j<col-1;j++) {
        sum += data[i][j];
      }
    }
    console.log(sum);
}

function runProgram(input) {
    input = input.split("\n");
    var times = +input[0].trim();
    
    var j=1;
    for (var i=1;i<=times;i++) {
      var line1 = input[j++].trim().split(" ").map(Number);
      var row = line1[0];
      var col = line1[1];
      var data = [];
      for (var k=0;k<row;k++) {
        data.push(input[j++].trim().split(" ").map(Number));
      }
      arrsumbor(data, row, col);
    }


}
if (process.env.USERNAME === `Sagar`) {
    runProgram(`1
    3 3 
    1 2 3
    4 5 6
    7 8 9`);
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