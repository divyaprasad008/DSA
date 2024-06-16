const graph = {
    a:['b','c'],
    b:['a','c','d'],
    c:['a','b','d'],
    d:['b','c'],
    e:['f'],
    f:['e']
}

function biggest_island(graph){
    const visited = new Set()
    const largest = 0

    function dfs(node){
        if(visited.has(node)){
            return 0
        }
        let count=0;
        visited.add(node)
        for(let neighbour of graph[node]){
            count+=dfs(neighbour)
        }
        return count;
    }
    for(const node in graph){
        if(!visited.has(node)){
            visited.add(node)
            let componentSize = dfs(node)
            if(componentSize > largest){
                largest = componentSize;
            }

        }
    }
    return largest
}