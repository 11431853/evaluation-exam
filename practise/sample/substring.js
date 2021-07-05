var a = ["masai"];
var b = ["mai"];

var a1 = a[0].split("");
var n = a1.length;

var n1 = b.length;
var isFlag = true;

for (var i=0;i<n;i++) {
  var result = "";
  for (var j=i;j<n;j++) {
    result +=a1[j];
    if (b==result) {
      isFlag = false;
      console.log("Yes");
      break;
    }
    
  }
  
}
if (isFlag) {
  console.log("No");
}

  




