

function bigger(num, l) {
  var data = []; 
  for (var i=0;i<num.length;i++) {
    if (num[i]>l) {
      data.push(num[i]);
    }
  }
  
  var min = data[0];
  for (var j=1;j<data.length;j++) {
    if (data[j]< min) {
      min = data[j]
    }
  }
  console.log(min);
}

function runProgram(input) {
  var newInput = input.split("\n");
  
  var items = newInput[1].split(" ").map(Number);
  var times = +newInput[2];
  for (var i=3;i<=times+2;i++) {
    var l = +newInput[i];
    bigger(items, l);
    
  }

}
if (process.env.USERNAME === `Sagar`) {
  runProgram(`10
  13 89 81 66 81 63 71 76 73 81
  2
  65
  93
  `);
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

    
  

