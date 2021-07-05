// Nrupul 32
// Prateek 30
// Aman 26
// Albert 28
// Yogesh 44
// Given a list of user data with name and age, create a list of key-value pairs from the input
// From the generated data, print the users whose age is more than 30

var data = [
    ["Nrupal", 32],
    ["Prateek", 30],
    ["Aman", 26],
    ["Albert", 28],
    ["Yogesh", 44]
]
function addobj(data) {
    var object = [];
    for (i=0;i<data.length;i++) {
      object.push({name:data[i][0], age: data[i][1]});
    }
    return object;
}

var p = addobj(data);
for (key in p) {
    if (p[key].age>30) {
      console.log(p[key].name);
    }
}

