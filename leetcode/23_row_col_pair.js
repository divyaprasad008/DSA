/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const len = grid.length
    const rowMap = new Map()
    const colMap = new Map()
    for(let i=0;i<len;i++){
        // console.log(i, grid[i])
        let rowStr = grid[i].join(',')
        rowMap.set(rowStr, (rowMap.get(rowStr) || 0)+1 )
    }
    
    let count = 0;
    for(let j=0;j<len;j++){
        let colArr = []
        for(let i=0;i<len;i++){
            colArr.push(grid[i][j])
        }
        let colStr = colArr.join(',')
        colMap.set(colStr, (colMap.get(colStr) || 0)+1 )

        if(rowMap.has(colStr)){
            count += rowMap.get(colStr)
        }
    }
   
    return count

};
grid = [[3,2,1],[1,7,6],[2,7,7]]
// Output: 1
console.log(equalPairs(grid))

grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
// Output: 3
console.log(equalPairs(grid))