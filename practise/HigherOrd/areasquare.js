var square = {
    side : 4,
    area : function() {
        console.log(this.side * this.side);
    },
    perimeter : function() {
        return this.side * 4;
    }
}
square.area();
square.side = 5;
square.area();
console.log(square.perimeter());