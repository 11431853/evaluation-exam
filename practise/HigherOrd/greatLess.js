var numbers = {
    data: [1, 2, 6, 7, 3, 4, 9, 0],
    lessThanItems: function() {
        var items = this.data;
        var array = [];
        for (var i=0;i<items.length;i++) {
          if (items[i]<4) {
            array.push(items[i]);
          }
        }
        return array;
    },
    greaterThanItems: function() {
        var items = this.data;
        var array = [];
        for (var i=0;i<items.length;i++) {
          if (items[i]>6) {
            array.push(items[i]);
          }
        }
        return array;
    }
   
}
console.log(numbers.lessThanItems());
console.log(numbers.greaterThanItems());