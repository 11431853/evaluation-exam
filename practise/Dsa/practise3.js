// function DiamondTraversal(matrix){
//   ans = []
//   int n = arr.length;
//   int m = arr.length-1;
//   for (int i=n/2;i>=0;i--) ans.add(arr[i][m--]);
//   for (int i=1;i<=n/2;i++) ans.add(arr[i][m--]);
//   m = 1;
//   for (int i=n/2+1;i<=n-1;i++) ans.add(arr[i][m++]);
//   for (int i=n-2;i>n/2;i--) ans.add(arr[i][m++]);
//   return ans;
// }
var data = [
  [1, 2, 3],
  [5, 4, 6],
]
var m = data.length-1;
for (var i=0;i<data.length;i++) {
  console.log(data[i][m--]);
}