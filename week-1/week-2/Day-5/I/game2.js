var a = true && false && !(true) || false; // The result will be false
console.log(a);
var b = true || !(false) && (true || false); // The result will be true
console.log(b);
var c = false || (true && false) || true ; // The result will be true
console.log(c);
var d = true || (false && true || true); // The result will be true
console.log(d);
