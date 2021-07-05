var user = {
    name: "Ironman",
    year_of_birth: 1974,
    printAge: function() {
        return this.name + " age is " +(2021 - this.year_of_birth);
    }
}

console.log(user.printAge());
