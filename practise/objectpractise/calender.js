function getDayOfMonth (year, month) {
    if (
        month=="jan" ||
        month=="mar" ||
        month=="may" ||
        month=="jul" ||
        month=="aug" ||
        month=="oct" ||
        month=="dec"
    ) 
    {
      return 31;
    }
    else if (month==="feb") {
      if ((year%4===0 && year%100 !== 0) || year%400 ===0) {
        return 29;
      } else {
          return 28;
      }
    } else {
      return 30;
    }
}      
function getFirstDayIndex (days, dayname) {
    for (var i=0;i<days.length;i++) {
      if (days[i]===dayname) {
        return i;
      }
    }
}    
     


function runProgram(input) {
    var newInput = input.split(" ");
    var given_year = +newInput[0];
    var given_month = newInput[1].trim();

    var calender = {};

    var month = [
        "jan",
        "feb",
        "mar",
        "apr",
        "may",
        "jun",
        "jul",
        "aug",
        "sep",
        "oct", 
        "nov",
        "dec",
    ];
    var week_day_name = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

    for (var i=0;i<month.length;i++) {
      calender[month[i]]={};
      for (var j=0;j<week_day_name.length;j++) {
        calender[month[i]][week_day_name[j]] = [];
      }
    }

    var startDay = getFirstDayIndex(week_day_name, given_month);
    
    for (month in calender) {
      var getDays = getDayOfMonth(given_year, month)
      for (var i=1;i<=getDays;i++) {
        var day = (i + startDay -1)%7;
        if (day===0) {
          calender[month].sun.push(i);
        }
        else if (day===1) {
          calender[month].mon.push(i);
        }
        else if (day===2) {
          calender[month].tue.push(i);
        }
        else if (day===3) {
          calender[month].wed.push(i);
        }
        else if (day===4) {
          calender[month].thu.push(i);
        }
        else if (day===5) {
          calender[month].fri.push(i);
        }
        else {
          calender[month].sat.push(i);
        }
      
      }
      startDay +=getDays%7;
    }
    
    var week_days = "sun";
    var month = "mar";
    var res = [];
    for (m in calender) {
      if (m === month) {
        res = calender[m][week_days];
      }
    }
    console.log(`${week_days}-${res.join(",")}`);
      
    
    


}
if (process.env.USERNAME === `Sagar`) {
    runProgram(`2020 wed`);
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
