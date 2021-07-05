function arrrotate (data) {
    for (var i=data.length-1;i>=0;i--) {
      var res = "";
      for (var j=data[0].length-1;j>=0;j--) {
        res += data[i][j] + " ";
      }
      console.log(res);
    }
}

function runProgram(input) {
    input = input.split("\n");
    var times = +input[0].trim();
    
    var j=1;
    for (var i=1;i<=times;i++) {
      var row = +input[j++];
      var data = [];
      for (var k=0;k<row;k++) {
        data.push(input[j++].trim().split(" ").map(Number));
      }
      console.log(data);
      arrrotate(data);
    }


}
if (process.env.USERNAME === `Sagar`) {
    runProgram(`2
    3 
    1 2 3
    4 5 6
    7 8 9
    4
    1 2 3 4
    5 6 7 8
    9 0 1 2
    3 4 5 6`);
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

