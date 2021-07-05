var num = [1, 2, 3, 4, 5, 6]

function findTwo(items) {
    for (i=0;i<items.length;i++) {
        if (items[i]==2) {
          var res = i;
          break;
        }
    }
    return res;
}
// var p = findTwo(num);
// console.log(p);
function pos(items,res) {
    for (i=0;i<items.lenth;i++) {
        if (res == true) {
            var ans = items[res+1] ;
        }
        else {
            ans = -1;
        }
    }
    return ans;
}
var p = findTwo(num);
var r = pos(num,p);
console.log(r);

