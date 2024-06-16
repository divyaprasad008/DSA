const graph = {
    a:['b','c'],
    b:['a','c','d'],
    c:['a','b','d'],
    d:['b','c'],
    e:['f'],
    f:['e']
}

function depthFS(graph,start){
    const stack = [start];
    const visited = new Set()
    while(stack.length>0){
        const node = stack.pop()        
        if(!visited.has(node)){
            visited.add(node);
            for(const neighbour of graph[node]){
                if(!visited.has(neighbour)){
                    stack.push(neighbour)
                }
            }
        }
    }
    // console.log(visited)
    return visited;
}
console.log(`Iterative:`);
console.log(depthFS(graph,'a'))
console.log("====================")

function dfsRecursive(graph,start, visited = new Set())
{
    // console.log(graph,graph[start]);
    if(!visited.has(start)){
        visited.add(start);
        for(let neighbour of graph[start]){
            dfsRecursive(graph,neighbour,visited)
           
        }
    }
    return visited
}

console.log("Recursive: " +dfsRecursive(graph,'a'));