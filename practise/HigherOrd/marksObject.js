var object = {
    names: ["Nrupal", "Prateek", "Aman", "Albert", "Yogesh"],
    marks: [10, 20, 30, 5, 15],
    average: function() {
        var count = 0;
        for (var i=0;i<this.marks.length;i++) {
            count+= this.marks[i];
        }
        return count/this.marks.length;
        
    },
    minimum: function() {
        var min = this.marks[0];
        for (var i=1;i<this.marks.length;i++) {
          if (this.marks[i]<min) {
              min = this.marks[i];
              var pos = i;
          }
        }
        return this.names[pos] + " has got minimum marks ->" + min;
    },
    maximum: function() {
        var max = this.marks[0];
        for (var i=1;i<this.marks.length;i++) {
          if (this.marks[i]>max) {
              max = this.marks[i];
              var pos = i;
          }
        }
        return this.names[pos] + " has got maximum marks ->" + max;
    }
    
    
}
console.log(object.average());
console.log(object.minimum());
console.log(object.maximum());