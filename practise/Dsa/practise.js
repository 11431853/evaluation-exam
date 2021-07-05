function happy (data) {
    var count = 0;
    while (count=1) {
      for (var i=0;i<data.length;i++) {
        count += data[i]**2;
      }
      if (count!=1) {
        
      }
    }
    
    
}
function runProgram(input) {
  input = input.split("\n");
  var times = +input[0];
  for (var i=1;i<input.length;i++) {
    var data = input[i].trim().split("").map(Number);
    happy(data);
  }
  
 


}
if (process.env.USERNAME === `Sagar`) {
  runProgram(`abcxyz`);
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
