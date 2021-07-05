function runProgram(input) {
    var data = input;
    var n = data.length;
    var result = "";
    var count = 0;
    
    for (var i = 0;i<n;i+=count) {
      for (var j=0;j<n;j+=count) {
        if (data[i]==data[j]) {
          count+=2;
        
        }
        else {
          result+="";
          count++;
        }
        
        
      }
      result+=data[i];
    }
    console.log(result);
}
if (process.env.USERNAME === "Sagar") {
    runProgram(`aaabccddd`);
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