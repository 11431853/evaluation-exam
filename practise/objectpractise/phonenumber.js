var directory = {
    "Yogesh" : 915678,
    Nrupal : 512345,
    "Prateek" : 213456,
    "Aman" : 120987,
    "Madhukar" : 1009871
}

var user = "Prateek";
var flag = false;

for(key in directory) {
    console.log(typeof key)
}

for(key in directory) {
    if (key === user) {
        console.log(directory[key]);
        flag = true;
        break;
    }
}

if (flag == false){
    console.log("not found")
}