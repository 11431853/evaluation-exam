var n = 20;
for (i=1;i<=n;i++) {
  result = "";
  for (j=1;j<=n;j++) {
    if (i==j || j==n-i+1) {
      result += "*"; 
    } 
    else {
        result += " ";
    }
    
  }
  console.log(result)
}