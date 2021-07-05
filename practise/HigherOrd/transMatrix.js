var data = [
    [1, 2, 3],
    [4, 5, 6]
];
// console.log(data.length);

// var newA = [];
// for (var i=0;i<data.length;i++) {
//   newA.push([]);
// }
// for (var i=0;i<data.length;i++) {
//   for (var j=0;j<data.length;j++) {
//     newA[j].push(data[i][j]);
//   }
// }
// console.log(newA);
var result = [];
for (var i in data[0]){
    result.push(data.map(function(e,j){return e[i]}));
}
console.log(result);