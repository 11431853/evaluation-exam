var calc = {
    a: 5,
    b: 8,
    addition: function() {
        return this.a + this.b;
    },
    subtraction: function() {
        return this.a - this.b;
    },
    division: function() {
        return this.a/this.b;
    },
    multiplication: function() {
        return this.a * this.b;
    }

}
console.log(calc.addition());
console.log(calc.subtraction());
console.log(calc.division());
console.log(calc.multiplication());