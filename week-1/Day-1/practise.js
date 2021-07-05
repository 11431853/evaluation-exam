function runProgram(input) {
    var data = input.trim().split("\n");
    var a = data[0];
    var n = a.length;
    var b = data[1];
    var n1 = b.length;
    var isFlag = false;

    for (var i=0;i<n;i++) {
      var result="";
      for (var j=i;j<n;j++) {
        result +=a[j];
      }
    
      if (b==result) {
      isFlag = true;
      console.log("Yes");
      }
      else if (isFlag) {
      console.log("No");
      }
    }

    
    
  

    
    



    
      
    
      

    
  
    

}
if (process.env.USERNAME === "Sagar") {
    runProgram(`masai
    sai`);
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
