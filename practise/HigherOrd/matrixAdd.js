function arraysum(data1, data2) {
    
    for (var i=0;i<data1.length;i++) {
      var res = "";
      for (var j=0;j<data1[i].length;j++) {
        res += data1[i][j] + data2[i][j] + " ";
      }
      console.log(res);
    }
    
  }

function linesarray(row) {
    return row.trim().split(" ").map(Number);
}

function runProgram(input) {
    var newInput = input.trim().split("\n");
    var arr1_rc = newInput[0].trim().split(" ").map(Number);
    var r1 = arr1_rc[0];
    var r2 = arr1_rc[2];

    var arr1_lines = newInput.splice(1, r1);
    var arr2_lines = newInput.splice(1, r2);

    var data1 = arr1_lines.map(linesarray);
    var data2 = arr2_lines.map(linesarray);

    arraysum(data1, data2);



    


}
if (process.env.USERNAME === `Sagar`) {
    runProgram(`2 2 2 2
    1 2
    3 4
    2 3
    4 5`);
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
