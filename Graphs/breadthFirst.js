const graph = {
    a:['b','c'],
    b:['a','c','d'],
    c:['f'],
    d:['e'],
    e:[],
    f:[]
}

function breadthFS(graph, start, visited=new Set()){
    let queue = [start]
    while(queue.length>0){
        const node = queue.shift()
        console.log(queue.length, node, typeof(graph[node]));
        for(let neighbour of graph[node]) {
            if(!visited.has(neighbour)){
                visited.add(neighbour);
                queue.push(neighbour)
            }
        }
        console.log(queue)
        // return;
    }
    return visited
}
console.log("Iterative");
console.log(breadthFS(graph,'a'));


//generally bfs recursive is asked less
// function bfsRecursive(graph,start, visited = new Set()){
//     if(!visited.has(start)){
//         for(let neighbour of graph[start]){
//             if(!visited.has(neighbour))
//             {
//                 visited.add(neighbour)   
//                 bfsRecursive(graph,neighbour,visited);
//             }
//         }
//         // visited.add(start)
//     }
//     return visited;
// }
// console.log("Recursive");
// console.log(bfsRecursive(graph,'a'));
