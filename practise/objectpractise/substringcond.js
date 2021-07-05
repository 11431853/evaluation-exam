function substring(data) {
    var items = [];
    for (var i=0;i<data.length;i++) {
      var res = "";
      for (var j=i;j<data.length;j++) {
        res +=data[j];
        if (palindrome(res)==true) {
          items.push(res.length);
        }
      }
    }
    return highest(items)
}
function highest(items) {
    var max = items[0];
    for (var i=1;i<items.length;i++) {
      if (items[i]>max) {
        max = items[i];
      }
    }
    console.log(max);
}
function palindrome(data) {
    var isFlag = true;
    var n = data.length;
    for (var i=0;i<data.length;i++) {
      if (data[i]!=data[n-1-i]) {
        isFlag = false;
      }
    }
    return isFlag;
}
function runProgram(input) {
    var data = input;
    substring(data);
    
}
      
if (process.env.USERNAME === `Sagar`) {
    runProgram(`thisracecarisgood`);
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