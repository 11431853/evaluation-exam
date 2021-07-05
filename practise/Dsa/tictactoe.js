function tictactoe (data, c) {
    if (data[0][0]==c && data[1][1]==c && data[2][2]==c) {
      return true;
    }
    if (data[2][0]==c && data[1][1]==c && data[0][2]==c) {
        return true;
      }
    for (var i=0;i<data.length;i++) {
      if (data[0][i]==c && data[1][i]==c && data[2][i]==c) {
            return true;
      }
      if (data[i][0]==c && data[i][1]==c && data[i][2]==c) {
        return true;
      }
    }
    return false;
}

function runProgram(input) {
    input = input.split("\n");
    var data = [];
    var player1 = "x";
    var player2 = "o";
    for (var i=0;i<input.length;i++) {
      data.push(input[i].trim().split(" "));
    }
    if (tictactoe(data,player1)==true) {
      console.log("x");
    }
    else if (tictactoe(data,player2)==true) {
      console.log("o");
    }
    else {
      console.log("Tie");
    }



}
if (process.env.USERNAME === `Sagar`) {
    runProgram(`x o x
    o x x
    o o o`);
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