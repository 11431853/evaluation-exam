var n = 5;
var isPrime = true;
for (var i=2; i*i <=n;i++) {
  if (n%i==0) {
    isPrime=false;
    break;
  }
}
if (isPrime) {
  console.log("It is a Prime number")
} else {
    console.log("It is not a Prime number")
  }
