const graph = {
    a:['b','c'],
    b:['a','c','d'],
    c:['a','b','d'],
    d:['b','c'],
    e:['f'],
    f:['e']
}

function connectedIsland(graph){
    const visited = new Set()
    let count = 0

    function dfs(node){
        if(!visited.has(graph[node])){
            visited.add(node)
        }
        for (const neighbour of graph[node]) {
            dfs(neighbour)
        }
    }
    for(node in graph){
        if(!visited.has(node)){
            dfsRecursive(node)
            count++
        }
    }
}