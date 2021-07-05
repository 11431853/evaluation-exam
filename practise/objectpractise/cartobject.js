var items = `Rice 2 60
Dal 3 50
Salt 1 20`;

var input = items.trim().split("\n");
var array = [];

for (var i=0;i<input.length;i++) {
    array.push(input[i].trim().split(" "));
}

function addobj (array) {
    var items = [];
    for (var i=0;i<array.length;i++) {
      items.push({name: array[i][0], quantity: +array[i][1], price: +array[i][2]});
    }
    return items;
}

var data = addobj(array);

function total(items){
    var totalItemsPrice = 0;
    for (var i=0;i<data.length;i++) {
      var res = data[i].quantity * data[i].price;
      totalItemsPrice += res;
    }
    console.log(totalItemsPrice);
}

total(data);

