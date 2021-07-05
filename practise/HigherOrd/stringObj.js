var stringObj = {
    item: "FireFox",
    vowelsCount: function() {
        var data = this.item;
        var count = 0;
        for (var i=0;i<data.length;i++) {
          if (data[i]=="a"||data[i]=="e"||data[i]=="i"||data[i]=="o"||data[i]=="u") {
            count++;
          }
        }
        return "vowels count of item is "+ count;

    },
    reverse: function() {
        var data = this.item;
        var res = "";
        for (var i=data.length-1;i>=0;i--) {
          res +=data[i];
        }
        return "revese of item is "+res;
    },
    changeCase: function() {
        var big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var small = "abcdefghijklmnopqrstuvwxyz";
        var data = this.item;
        var res = "";
        for (var i=0;i<data.length;i++) {
          for (var j=0;j<big.length;j++) {
            if (data[i]==big[j]) {
              res += small[j];
            }
            if (data[i]==small[j]) {
              res += big[j];
            }
          }
        }
        return "changeCase of item is "+res;
    }
}
console.log(stringObj.vowelsCount());
console.log(stringObj.reverse());
console.log(stringObj.changeCase());


