var details = `Nrupul cmd
Prateek js
Aman ds
Nrupul python
Albert js
Albert react
Aman algo
Prateek html
Nrupul sql`

var input = details.trim().split("\n");
var skills = "js";
var array = [];
for (var i=0;i<input.length;i++) {
  array.push(input[i].trim().split(" "));
}

var details_object = {};
for (var j=0;j<array.length;j++) {
  if (details_object[array[j][0]] == undefined ) {
    details_object[array[j][0]] = [array[j][1]];
  }
  else {
    details_object[array[j][0]].push(array[j][1]);
  }
}

for (keys in details_object) {
  for (var i=0;i<details_object[keys].length;i++) {
    if (details_object[keys][i]=== "js") {
      console.log(keys);
    }
  }
}