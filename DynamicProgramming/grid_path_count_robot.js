function countPath(grid, row = 0, col=0, memo={})
{
    const pos = row+","+col;
    if(row > grid.length || col > grid[0].length || grid[row][col]==='X' ) //X or Wall or Snake
    {
        return 0;
    }

    //check if you have arrived at given location
    // if(grid[row][col]==grid[grid.length-1][grid[0].length-1]){
    if(row == grid.length-1 && col == grid[0].length-1){
        return 1;
    }

    //return cache result
    if(pos in memo) return memo[pos];

    memo[pos] = countPath(grid, row+1, col, memo) + countPath(grid, row, col+1, memo) 
    // const downPaths = countPath(grid,row+1,col,memo); // same as above
    // const rightPaths = countPath(grid,row,col+1,memo);
    // memo[pos] = rightPaths+downPaths

    return memo[pos]
}