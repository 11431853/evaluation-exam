

function triangle(items) {
    for (var i=0;i<items.length;i++) {
        if (items[0]<items[1]+items[2] && items[1]<items[0]+items[2] && items[2]<items[0]+items[1]) {
            var res = "Yes";
        }
        else {
            res = "No";
        }
    }
    return res;
}

console.log(p);

function runProgram(input) {
    var newInput = input.split["\n"];
    var times = Number(newInput[0]);
    for (var i=1;i<=times;i++) {
        var num = newInput[i].split(" ").map(Number);
        var p = triangle(num);
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