class BSTNode{
    constructor(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(key){
        const newNode = new BSTNode(key);
        if(this.root === null){
            // if(!this.root){
            this.root = newNode
        }
        else{
            this.insertNode(this.root, newNode)
        }

    }

    insertNode(node, newNode){ // node= root node
        if(newNode.key < node.key){
            if(node.left===null){
                node.left = newNode
            }
            else{
                this.insertNode(node.left,newNode)
            }
        }
        else{
            if(node.right === null){
                node.rigt = newNode;
            }
            else{
                this.insertNode(node.right, newNode);
            }
        }
    }

    
}

BinarySearchTree.prototype.delete = function(key){
    this.root = this.deleteNode(this.root,key)
}

BinarySearchTree.prototype.deleteNode = function(node, key){ //node->root
    if(node==null){
        return null;
    }
    if(key < node.key){
        node.left = this.deleteNode(node.left,key)
    }
    else if(key > node.key){
        node.right = this.deleteNode(node.right, key)
    }
    else{
        if(node.left===null && node.right===null){
            //leaf node
            return null;
        }
        else if(node.left==null){
            return node.right;
        }
        else if(node.right==null){
            return node.left;
        }else{
            // both child are present
            let tempNode = this.findMinNode(node.right)
            node.key = tempNode.key;
            node.right = this.deleteNode(node.right, tempNode.key)
        }
    }
    return node
}

BinarySearchTree.prototype.findMinNode = function(node){
    while(node.left!==null){
        node = node.left
    }
    return node
}

BinarySearchTree.prototype.inOrderTraversal = function(){
    const result = [];
    this.inorder(this.root,result);
    return result;
}

BinarySearchTree.prototype.inorder = function(node, result){
    if(node != null){
        this.inorder(node.left, result)
        result.push(node.key)
        this.inorder(node.right,result)
    }
}

BinarySearchTree.prototype.preOrderTraversal = function(node, result){
    const result = [];
    this.preOrder(this.root, result)
    return result;
}

BinarySearchTree.prototype.preOrder = function(node, result){
    if(node!=null){
        result.push(node.key);
        this.preOrder(node.left,result);
        this.preOrder(node.right,result);
    }
}

BinarySearchTree.prototype.postOrderTraversal = function(node, result){
    const result = [];
    this.postOrderTraversal(this.root,result)
    return result;
}

BinarySearchTree.prototype.postOrder = function(node, result){
    if(node!=null){
        this.postOrder(node.left, result)
        this.postOrder(node.right, result)
        result.push(node.key)
    }
}




// usage
// let bst = BinarySearchTree(3)
