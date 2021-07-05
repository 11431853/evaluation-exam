function primecount (num) {
  var array = [];
  
  for (var i=1;i<=num;i++) {
    var count = 0;
    for (var j=1;j<=i;j++) {
      if (i%j==0) {
        count++;
      }
      
    } 
    if (count == 2) {
      array.push(i);
    }
    
  }
  console.log(array.length);

}



function runProgram(input) {
input = input.split("\n");
for (var i=1;i<input.length;i++) {
  var num = +input[i];
  primecount(num);
}


}
if (process.env.USERNAME === `Sagar`) {
runProgram(`1
13`);
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
