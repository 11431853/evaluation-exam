function arraySum(data) {
    var sum = 0;
    for (var i=0;i<data.length;i++) {
      for (var j=0;j<data[i].length;j++) {
        sum += data[i][j];
      }
    }
    return sum;
}
function lines2Array(row) {
    return row.trim().split(" ").map(Number);
}

function runProgram(input) {
    var newInput = input.split("\n");
    var arr1_rc = newInput[0].trim().split(" ").map(Number);
    var r1 = arr1_rc[0];
    var arr2_rc = newInput[r1+1].trim().split(" ").map(Number);
    var r2 = arr2_rc[0];
    var arr3_rc = newInput[r1+1+r2+1].trim().split(" ").map(Number);
    var r3 = arr3_rc[0];
    

    var arr1_lines = newInput.slice(1, r1+1);

    var arr2_lines = newInput.slice(r1+2, r1+r2+2);

    var arr3_lines = newInput.slice(r1+1+r2+1+1, r1+r2+r3+3);

    var data1 = arr1_lines.map(lines2Array);
    var data2 = arr2_lines.map(lines2Array);
    var data3 = arr3_lines.map(lines2Array);
    console.log(data1, data2, data3);
    
    var sum1 = arraySum(data1);
    
    var sum2 = arraySum(data2);
    var sum3 = arraySum(data3);

    console.log(Math.max(sum1, sum2, sum3));


}
if (process.env.USERNAME === `Sagar`) {
    runProgram(`3 4
    1 2 3 4
    0 5 6 1
    9 3 0 8
    2 2
    8 8
    8 8
    4 3
    1 2 3
    4 5 6
    7 8 9
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
