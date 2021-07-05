var year = 2003;

if (year % 100 == 0 && year % 400 ==0) {
  console.log("Leap year");
} else {
  if (year % 100 != 0 && year % 4 == 0) {
    console.log("Leap year");
  } else {
    console.log("Not a Leap year");
  }
}