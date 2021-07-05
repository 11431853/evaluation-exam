function runProgram(input) {
    input = input.split("\n");
    var line1 = input[0].trim().split(" ").map(Number);
    var r1 = line1[0];
    var c1 = line1[1];
    
    var matrix = [];
    for (var i=1;i<input.length;i++) {
      matrix.push(input[i].trim().split(""));
    }
    var s = "saba";
    var count = 0;
    for (var i=0;i<r1;i++) {
      for (var j=0;j<c1;j++) {
        //horizontal
        if (j<c1-3) {
          var temp = "";
          temp += matrix[i][j] + matrix[i][j+1] + matrix[i][j+2] + matrix[i][j+3];
          if (temp == s) {
            count++;
          }
        }
        //vertical
        if (i<r1-3) {
          var temp = "";
          temp += matrix[i][j] + matrix[i+1][j] + matrix[i+2][j] + matrix[i+3][j];
          if (temp == s) {
            count++;
          }
        }
        //diagonal down
        if ((j<c1-3) && (i<r1-3)) {
          var temp = "";
          temp += matrix[i][j] + matrix[i+1][j+1] + matrix[i+2][j+2] + matrix[i+3][j+3];
          if (temp == s) {
            count++;
          }
        }
        //diagonal up
        if ((i>=3) && (j<c1-3)) {
          var temp = "";
          temp += matrix[i][j] + matrix[i-1][j+1] + matrix[i-2][j+2] + matrix[i-3][j+3];
          if (temp == s) {
            count++;
          }
        }
      }
    }
    console.log(count);
  
          


}
if (process.env.USERNAME === `Sagar`) {
  runProgram(`5 5
  safer
  amjad
  babol
  aaron
  songs`);
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
