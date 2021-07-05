var data = "1234";
var char =0;
var num=0;
for (i=0;i<data.length;i++) {
    if (data[i]/1==data[i]) {
        num++;
    }
}
if (num==data.length) {
    console.log("numbers")
}
else if (num==0) {
    console.log("charcter");
}
else {
    console.log("alphanumeric");
}
console.log(data.length);
        
  