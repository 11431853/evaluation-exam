var data = [
    ["sagar", 26, "M"],
    ["suman", 24, "M"],
    ["sonu", 19,"M" ],
]

var users = [];

for (var i=0;i<data.length;i++) {
  var user = createUser(data[i][0], data[i][1], data[i][2]);
  users.push(user);
}

function createUser(name, age, gender) {
    return {name: name, age: age, gender: gender}
}

console.log(users);

var items = [13, 5, 7, 34, 23, 67, 45];
items.sort(function(a, b){
    return a - b;
})

console.log(items);

users.sort(function(a, b){
    return a.age - b.age;
})
console.log(users);

data.sort(function(a, b){
    return a[1] - b[1];
})

console.log(data);

