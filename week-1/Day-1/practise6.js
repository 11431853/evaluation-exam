


function arrayProduct(items) {
    var prod = 1;
    for (var i=0;i<items.length;i++) {
        prod = prod*items[i];
    }
    return prod
}
function arrayProductDivide(items, prod) {
    var prodDivide = [];
    for (var i=0;i<items.length;i++) {
        prodDivide.push(prod/items[i]);
    }
    return prodDivide;
}

function printArray(items) {
    var output = "";
    for (var i=0;i<items.length;i++) {
        output = output + items[i];
        if (i!=items.length-1) {
            output=output+" ";
        }
    }
    console.log(output);
}

var prod = arrayProduct(num);
var prodD = arrayProductDivide(num,p);
printArray(prodD)
