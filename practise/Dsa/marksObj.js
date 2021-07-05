// Create an object which can store the name and different subject marks for multiple students
// The object must have a method to print the name and average of the student who scored the least average marks
// Nrupul 30 40 50
// Prateek 20 10 10
// Yogesh 40 20 20
// Aman 10 20 40
// Albert 25 15 25

var data = {
    names: ["Nrupal", "Prateek", "Yogesh", "Aman", "Albert"],
    marks: [[30, 40, 50], [20, 10, 10], [40, 20, 20], [10, 20, 40], [25, 15, 25]],
    leastAvg: function() {
        var data = this.marks;
        var n= data.length;
        var avg = [];
        for (var i=0;i<n;i++) {
          avg.push((data[i][0]+data[i][1]+data[i][2])/3)
        }
        var min = avg[0];
        var res = this.names[0]
        for (var j=1;j<avg.length;j++) {
          if (avg[j]<min) {
            min = avg[j];
            res = this.names[j];
          }
        }
        return res + " scored least average marks -> " + min;
    }

}
    

console.log(data.leastAvg());
