// var b = a.toString().split(".")[0]; ///before
// var c = a.toString().split(".")[1]; ///after
// console.log(b, c);

var data = 93;
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
var remainders = [];

for (var i=data;i!=0;i=i/16) {
  var res = i%16;
  for (var j=0;j<num.length;j++) {
    if (res==num[j]) {
      remainders.push(hex[j]);
    }
    res = i%16;
  }
  
}
console.log(remainders[0]);