

var data = {
    items: ['a', 'b', 'c', 'd', 'a', 'c'],
    unique: function() {
        var array = [];
        for (var i=0;i<this.items.length;i++) {
          for (var j=i+1;j<this.items.length;j++) {
            if (this.items[i]==this.items[j]) {
              array.push(this.items[i]);
            }
          }
        }
        return array;
    }
    
}

console.log(data.unique());