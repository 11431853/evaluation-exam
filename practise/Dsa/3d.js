function traverse(data,layer,row,col) {
    
    for (var i=0;i<layer;i++) {
      for (var j=0;j<row;j++) {
        var res = "";
        for (var k=0;k<col;k++) {
          res += data[i][j][k] + " ";
        }
        break;
      }
    }
    console.log(res);
}

function runProgram(input) {
    input = input.split("\n");
    var line1 = input[0].trim().split(" ").map(Number);
    var layer = line1[0];
    var row = line1[1];
    var col = line1[2];
    var data = input[1].trim().split(" ").map(Number);
    traverse(data,layer,row,col);

    

}
if (process.env.USERNAME === `Sagar`) {
    runProgram(`2 2 2
    1 2 3 4 5 6 7 8`);
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
