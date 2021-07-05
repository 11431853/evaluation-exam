var n = 9;
var isPrime = true;
for ( i =2; i <= n**0.5; i++) {
  if (n%i == 0) {
    isPrime = false;
    console.log("Not a Prime Number");
  } 
}
if (isPrime == true) {
  console.log("Prime Number");
}
   








  
