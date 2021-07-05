
var obj = {
    array1: [1, 2, 3, 4],
    array2: [2, 4, 6, 8],
    intersection: function() {
        var one = obj.array1;
        var two = obj.array2;
        var res = [];
        for (var i=0;i<one.length;i++) {
          for (var j=0;j<two.length;j++) {
            if (one[i]==two[j]) {
              res.push(one[i]);
            }
          }
        }
        return res;
    }
    
};

console.log(obj.intersection());
