// Create a triangle object which has three properties side1, side2
// Assume the triangle is a right angle triangle
// Create a method to calculate the hypotenuse
// 3 and 4

var triangle = {
    side1: 3,
    side2: 4,
    hypotenuse: function() {
        var a = this.side1;
        var b = this.side2;
        return (a**2 + b**2)**(1/2);
    }
}
console.log(triangle.hypotenuse());