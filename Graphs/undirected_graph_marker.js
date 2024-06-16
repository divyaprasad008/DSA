/*
const edges=[
    ['b','a'],
    ['c','a'],
    ['b','c'],
    ['q','r'],
    ['q','s'],
    ['q','u'],
    ['q','t']
];

const graph = {
    b:[a,c]
    a:[b,c]
    c:[a,b]
}

loop =>check if DOES NOT exist then add key =>

write a function, undirectedPath that takes in an array of edges for an undirected graph and 2 nodes

After that you can find and node path etc
Take care of cycle via visited technique
*/ 


function createGraph(edges){
    const graph = {}

    for(const edge of edges){
        let [a,b]=edge
        if(!(a in graph)){
            graph[a] = [];
        }
        if(!(b in graph)){
            graph[b] = []
        }
        graph[a].push('b')
        graph[b].push('a')
    }
    return graph
}

// find a path from start to dest-key
function hasPathRec(graph, start, dest, visited = new Set()){
    if(start==dest) return true;
    if(visited.has(start)){
        return false
    }
    visited.add(start)
    
    for(const neighbour of graph[start]){
        if(hasPathRec(graph, neighbour, dest) == true){
            return true
        }
    }
    return false
}


//search node in undirected graph
function finalFunctionBundle(edges, start, dest){
    const graph = createGraph(edges)
    return hasPathRec(graph, start, dest)
}