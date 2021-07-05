var num = [1, 2, 3, 4, 5, 6];
var res = "";
 
for (i=0;i<num.length;i++) {
    if (num[i]==2 && i!=num.length-1) {
      res += num[i+1];
      break;
    }
    else if (num[i]!=2||num[num.length-1]==2) {
        res += -1;
    }
 
}
console.log(res);

    
