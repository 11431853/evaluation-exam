function printTraversal(matrix,rows,cols)
    top = 0;
    bottom = rows - 1
    left = 0
    right = cols - 1
    size = n * m // this variable denotes the number of elements to be traversed.
    ans[] //This empty array will store the elements in spiral order
    while(ans.size() < size){
        for (i = top;i<=bottom && ans.size() < size;i++) //traversing the left most unvisited column from top to botoom
            ans.add(arr[i][left])
        left++ //incrementing the left boundary
        for (i = left;i<=right && ans.size() < size;i++) //traversing the bottom most unvisited row from left to right
            ans.add(arr[bottom][i])
        bottom-- //decrementing the bottom boundary
        for (i = bottom;i>= top && ans.size() < size;i--) //traversing the right most unvisited column from bottom to top
            ans.add(arr[i][right])
        right--//decrementing the right boundary
        for (i = right;i>= left && ans.size() < size;i--) //traversing the top most unvisited row from right to left
            ans.add(arr[top][i])
        top++ //incrementing the top boundary
    }
    return ans