var data = [1, 2, 3, 4, 5, 6];
var n = data.length;
var square = function (el) {
    var res = "";
    console.log(res += (el ** 2));
}
var double = function (el) {
  console.log(el*2);
}
var odd = function (el) {
    if (el%2==1) {
      return el
    }
}


var pro = function (ac, el) {
  return ac * el;
}
var sum = function (ac, el) {
    return ac + el;
}

var div3 = function (el) {
    if (el%3==0) {
      return el;
    }
}
var cube = function (el) {
    return el**3;
}

console.log(data.filter(div3).map(cube).reduce(sum));