function position(data) {
    var sum = 0;
    for (var i=0;i<data.length;i++) {
      for (var j=i+1;j<data.length;j++) {
        if (primecheck(j-i)==true && (j-i)!=1) {
          sum +=data[j]-data[i];
        }
      }
    }
    console.log(sum);
}
function primecheck (res) {
    
    var isPrime = true;
    for (var i=2;i<res;i++) {
      if (res%i==0) {
        isPrime = false;
      }
    }
    return isPrime;
}

function runProgram(input) {
    var newInput = input.split("\n");
    var data = newInput[1].trim().split(" ").map(Number);
    position(data);


}
if (process.env.USERNAME === `Sagar`) {
    runProgram(`6
    1 2 3 5 7 12`);
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
