// var n = "aaabbcccfegghhhj";
// var result ="";
// for (i=0;i<n.length;i++) {
//   if (n[i]!=n[i+1]) {
//       result +=n[i];
//   }
// }
// console.log(result);

function goodstr(items) {
    var result ="";
    for (i=0;i<items.length;i++) {
      if (items[i]!=items[i+1]) {
        result +=items[i];
      }
    }
    console.log(result);
}

function runProgram(input) {
    var newInput = input.split("\n");
    var times = +newInput[0];
    for (var i=1;i<=times*2;i++) {
      var data = newInput[i];
      goodstr(data);
    }
}
if (process.env.USERNAME === `Sagar`) {
    runProgram(`3
    abaaabbaa
    aaab
    ababa`);
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