//breadth

const treeSumWithBreadthFirstSearch = (root) => {
    let sum=0;
    if(root==null){
        return sum;
    }
    queue = [root];
    while(queue.length > 0){
        const node = node.shift()
        sum += node.key

        if(node.left!=null){
            queue.push(node.left)
        }
        if(node.right!=null){
            queue.push(node.right)
        }
        
    }
}


// depth
const treeSumDepth  =(root) => {
    let sum = 0;
    if(root == null){
        return sum;
    }
    return root.key+treeSumDepth(root.left)+treeSumDepth(root.right)
}