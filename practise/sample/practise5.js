

function table(num){
    var res = "";
    for (i=1;i<=10;i++) {
        res += num*i +" ";
    }
    return res;
}

function runProgram(input) {
    var newInput = input.split("\n");
    var times = Number(newInput[0]);
    for (var i=1;i<=times;i++) {
        var num = +newInput[i];
        var p = table(num);
        table(p);

    }
}
if (process.env.USERNAME === `Sagar`) {
    runProgram(`Tuesday`);
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


