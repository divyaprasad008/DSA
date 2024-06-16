/*
Given two nodes (start and dest) in a directed acylic graph(DAG), return true if there is a directed path from start to dest, otherwise return false

Example 1:

Input: start=1, dest=3
Output: true
Explaination: There is directed path 1->2->3
-----------------

Example 2:

Input: start=1, dest=4
Output: false
Explaination: There is no path 1 to 4

*/

const graph = {
    1:[2,4],
    2:[3],
    3:[],
    4:[],
    5:[]
}

function hasPathDFS(graph,start,dest,visited = new Set()){
    if(dest==start){
        return true
    }
    console.log(graph,start,dest)
    if(!visited.has(start)){
        visited.add(start)
        for(neighbour of graph[start]){
            hasPathDFS(graph,neighbour,dest,visited)
        }
    }
    return visited
}
let findPath = hasPathDFS(graph,1,3)
// console.log(typeof  findPath);return;
if(findPath){
    // findPath = findPath.join('->');
   console.log( `There is directed path `);console.log(findPath)
}
else{
    console.log(`There is no path from 1 to 3`)
}

function hasPathBFS(graph,start,dest,visited = new Set(), queue=[]){
    console.log(dest,start)
    if(dest==start){


        return true
    }
    
    for(let neighbour of graph[start] ){
        if(!visited.has(neighbour)){
            visited.add(neighbour)
            queue.push(neighbour)
        }
    }
    let node = queue.shift();
    if(!node){
        return false
    }
    console.log(node,visited,queue)
    hasPathBFS(graph,node,dest,visited,queue)

}
let findPath1 = hasPathBFS(graph,1,5)
if(findPath){
    // findPath = findPath.join('->');
   console.log( `There is directed path `);console.log(findPath)
}
else{
    console.log(`There is no path from 1 to 3`)
}


//method of sir
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