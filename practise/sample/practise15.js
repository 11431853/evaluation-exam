// var n = 12;
// var data = [12, 20, 39, 45, 89];
// var count = 1;
// var max = data[0];
// for (i=1;i<data.length;i++) {
//   if (data[i]>max) {
//     count++;
//     max=data[i];
//   }
// }
// console.log(count*n);

function earn (items, rs) {
    var res = "";
    var count = 1;
    var max = items[0];
    for (i=1;i<items.length;i++) {
      if (items[i]>max) {
        count++;
        max = items[i];
      }
    }
    res += (rs*count);
    console.log(res);
}

function runProgram(input) {
    input = input.trim().split("\n");
    for (var i=1;i<input.length;i+=2) {
      var line1 = input[i].trim().split(" ");
      var line2 = input[i+1].trim().split(" ")

      var rs = +line1[1];
      var items = +line2[0];
      earn (items, rs);
    }
}
if (process.env.USERNAME === `Sagar`) {
    runProgram(`2
    6 3
    8 2 3 11 11 10
    5 12
    12 20 39 45 89`);
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