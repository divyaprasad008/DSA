function shortest_path(edges, start, dest){
    let graph = createGraph(edges)
    let queue = [[start, 0]]
    let visited = new Set([start])

    while(queue.length>0){
        const [node, distance] = queue.shift()
        
        if(node==dest){
            return distance;
        }

        for(neighbour of graph[node]){
            if(!visited.has(node)){
                visited.add(neighbour)
                queue.push([neighbour, distance +1])
            }

        }
        
    }
}

function createGraph(edges){
    for(edge in edges){
        let [a,b] = edge
        if(!(a in graph)){
            graph[a] = [];
        }
        if(!(b in graph)){
            graph[b] = [];
        }
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph
}
const edges = [
    [a,b],
    [b,c],
    [c,d]
];