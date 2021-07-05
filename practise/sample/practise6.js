var data = "7 6";
var a = data.split(" ");
var n = +a[0];
var m = +a[1];
var test = [4, 3, 7, 6, 7, 2, 2];
console.log(a, n, m);

function noddy(items, m) {
    
    
    for (i=0;i<items.length;i++) {
        var count =0;
        var limit=0;
      if (items[i]<= m) {
          count++;
      }
      else if (items[i]>m) {
          limit++;
          if (limit==3) {
              count=count;
              break;
          }
      }
      
      
    }
    return count;
}
var p = noddy(test, m);
console.log(p);