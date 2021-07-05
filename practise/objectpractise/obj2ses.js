// Create a user object with a marks key having an array of subject marks, with a method to add a new subject marks and also 
// methods to calculate the lowest, highest and total marks 

var data = {
    name: "Sagar", 
    score: [],
    addMarks: function(sub, mks) {
        this.score.push({subject: sub, marks: mks});
    },
    lowest: function() {
        var marksData = this.score;
        marksData.sort(function(a, b) {
            return a.marks - b.marks;
        })
        return marksData[0];
    },
    highest: function() {
        var marksData = this.score;
        marksData.sort(function(a, b) {
            return b.marks - a.marks;
        })
        return marksData[0];

    },
    total: function() {
        var sum = this.score.reduce(function(ac, el) {
            return ac + el.marks;
        }, 0)
        return sum;

    }
}
data.addMarks("maths", 90);
data.addMarks("english", 80);
data.addMarks("hindi", 94);
data.addMarks("science", 72);
console.log(data.score);
console.log(data.lowest());
console.log(data.highest());
console.log(data.total());
