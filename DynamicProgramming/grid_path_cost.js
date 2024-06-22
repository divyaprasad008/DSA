function countPathCost(grid,row=0,col=0,memo={}){
    const pos = row+","+col;
    if(row>grid.length || col>grid[0].length)//|| grid[row][col]=='X'
        {
        return -Infinity
    }

    if(row==grid.length-1 || col==grid[0].length){
        return grid[row][col]
    }

    if(pos in memo) return memo[pos]

    memo[pos] = grid[row][col] = countPathCost(grid,row+1,col,memo)+countPathCost(grid,row,col+1,memo)

    return memo[pos]
}
