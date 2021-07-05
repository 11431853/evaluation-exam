// OnePlus Electronics 29000
// Coffee Grocery 400
// Pen Office 30
// Book Office 60
// Rice Grocery 100
// Earphones Electronics 1000

var data = [
    ["OnePlus", "Electronics", 29000],
    ["Coffee", "Grocery", 400],
    ["Pen", "Office", 30],
    ["Book", "Office", 60],
    ["Rice", "Grocery", 100],
    ["Earphones", "Electronics", 1000],
]

var obj = [];
for (var i=0;i<data.length;i++) {
    obj.push([{name:data[i][0], category: data[i][1], price: data[i][2]}]);
}
function  least(obj) {
    var min = obj[0].price;
    var pos = 0;
    for (var i=1;i<data.length;i++) {
      if (obj[i].price<min) {
        min = obj[i].price;
        var pos = i;
      }
    }
    return obj[pos].name + " of " + obj[pos].category + " has least price of ->" + min;
}

for (key in obj) {
  if (key === price) {
    console.log(obj[key]);
  }
}