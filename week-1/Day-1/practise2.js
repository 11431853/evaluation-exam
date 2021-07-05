function runProgram(input) {
    var newInput = input.split(" ");
    var a = Number(newInput[0]);
    var b = Number(newInput[1]);
    var result = "";
    for (i=a;i<=b;i++) {
      var isPrime = true;
      for (j=2;j*j<=i;j++) {
        if (i%j==0) {
          isPrime = false;
          break;
        }
      }
      if(isPrime && i!=1) {
        result +=i + " ";
      }
       
    }
    console.log(result)
    
  


}
if (process.env.USERNAME === "Sagar") {
    runProgram(`2 132`);
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
