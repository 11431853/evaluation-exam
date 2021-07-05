var data = "acdba";
var n = data.length;
var data1 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var n1 = data1.length;
var data2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
var count = 0;
for (var i=0;i<data.length;i++) {
  for (var j=0;j<data1.length;j++) {
    if (data[i]==data1[j]) {
      count += data2[j];
    }
  }

}
console.log(count);