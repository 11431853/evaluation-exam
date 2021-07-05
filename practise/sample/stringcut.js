var data = "abcfxyz";
var n = data.length;
var first = [];
var second = [];
if (n%2==0) {
  for (i=0;i<n/2;i++) {
    first.push(data[i]);
  }
  for (i=n/2;i<n;i++) {
    second.push(data[i]);
  }
  var one = [];
  var two = [];
  for (j=first.length-1;j>=0;j--) {
    one.push(first[j]);
  }
  for (j=second.length-1;j>=0;j--) {
    two.push(second[j]);
  }
  
  var result = one.concat(two);
  var res = result.join(" ");
  console.log(res);

}
else {
  for (i=0;i<Math.floor(n/2);i++) {
    first.push(data[i]);
  }
  for (i=Math.ceil(n/2);i<n;i++) {
    second.push(data[i]);
  }
  var mid = data[Math.floor(n/2)];
  
  var one = [];
  var two = [];
  for (j=first.length-1;j>=0;j--) {
    one.push(first[j]);
  }
  for (j=second.length-1;j>=0;j--) {
    two.push(second[j]);
  }
  var result = one.concat(mid).concat(two);
  var res = result.join(" ");
  console.log(res);
}
