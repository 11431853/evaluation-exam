var n = [7, 2, 5, 0, 3, 2];


for (i=0;i<n.length;i++) {
  if (n[i]==2 && i!=n.length-1) {
    res =i;
    break;
  }
  
}
if (res==i) {
  console.log(String(n[res+1]));
}
else {
  console.log("-1");
}