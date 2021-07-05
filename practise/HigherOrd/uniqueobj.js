var items = ["A", "V", "X", "A", "D", "W", "X"];

var data = {};

// for (var i=0;i<items.length;i++) {
//     data[items[i]] = true;
// }

// console.log(Object.keys(data));

for (var i=0;i<items.length;i++) {
    if (data[items[i]] == undefined) {
        data[items[i]] = 1;
    }
    else {
        var prev = data[items[i]];
        data[items[i]] = prev + 1;
    }
}

for (k in data) {
    console.log(k + "->" + data[k]);
}