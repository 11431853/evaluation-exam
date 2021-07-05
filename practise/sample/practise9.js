

function numbers(items) {
  var num =0;
  for (i=0;i<items.length;i++) {
    if (items[i]/1==items[i]) {
      num++;
    }
    
  }
  if (num==items.length) {
    var res = "numbers";
  }
  else if (num==0) {
    var res = "chars";
  }
  else {
    var res = "alphanumeric";
  }
  console.log(res);
  
}





function runProgram(input) {
  var newInput = input.split("\n");
  var times = Number(newInput[0]);
  for (i=2;i<=times;i=i+2) {
    var data = newInput[i];
    numbers(data);
  }

   
}
if (process.env.USERNAME === `Sagar`) {
  runProgram(`3
  5
  ab2cd
  5
  acfgh
  3
  123`);
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
    
   
      