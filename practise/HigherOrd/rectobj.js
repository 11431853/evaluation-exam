var rectangle = {
    length : 12,
    breadth : 8,
    area : function() {
        console.log(this.length * this.breadth);
    },
    perimeter : function() {
        console.log(this.length*2 + this.breadth*2);
    }
}
rectangle.area();
rectangle.perimeter();