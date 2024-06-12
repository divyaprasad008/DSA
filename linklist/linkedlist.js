class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        // this.tail = null;
    }
}

// insert at beginning
LinkedList.prototype.insertAtBeginning = function(data){
    const newNode = new Node(data);
    let current = this.head;
    if(current){
        newNode.next = current;
    }
    this.head = newNode;

}

//insert at end
LinkedList.prototype.insertAtEnd = function(data){
    const newNode = new Node(data)
    // if(this.head==null)
    if(!this.head){
        this.head = newNode;
    }

    // if head is last
    let last = this.head
    while(last.next){
        last = last.next
    }
    
    last.next = newNode
}


// insert after given node
LinkedList.prototype.insetAtgivenNode = function(prevNode,data){
    if(!prevNode){
        console.log("The given prev node cannot be null");
        return;
    }

    const newNode = new Node(data, prevNode.next);
    prevNode.next = newNode;
}
/*LinkedList.prototype.insetAtgivenNode = function(search,data){
    const newNode = new Node(data);

    // if no element in ll
    if(!this.head){
        this.head = newNode;
    }

    // init traverse var with head
    let last, prev = this.head;

    //check if search is head
    if(last == search){

        newNode.next = last;
        this.head = newNode;
    }
    else{

        while(last.next){
            prev = last;
            if(last.data == search){
                prev.next = newNode;
                newNode.next = last
            }
            last = last.next;
        }
    }
}*/

// delete first node
LinkedList.prototype.deleteFirstNode = function(){
    if(!this.head){
        return
    }
    this.head = this.head.next
}

// delete last node
LinkedList.prototype.deleteLastnode = function(){
    if(!this.head){
        return "Linked list is empty"
    }
    if(!this.head.next){
        this.head = null // if there is only one  node
        return
    }
    let secondlast = this.head;
    while(!secondlast.next.next){
        secondlast = secondlast.next;
    }
    secondlast.next = null;
}


//delete by key
LinkedList.prototype.deleteByKey = function(key){
    if(!this.head){
        return "Linked list is empty";
    }

    // data found at head
    if(this.head.data===key){
        this.head = this.head.next;
        return 
    }
    
    let current = this.head;
    while(current.next != null){
        if(current.next.data===key){
            current.next = current.next.next
            return;
        }
        current = current.next
    }

    return "No node found with given key";
}


// search operation
LinkedList.prototype.search = function(key){
    let current = this.head;
    while(current){
        if(current.data===key){
            return true;
        }
        current  = current.next;
    }
}

//traversal
LinkedList.prototype.printList = function(){
    let current = this.head;
    console.log(current);
    let listVal = [];
    while(current){
        listVal.push(current.data)
        current = current.next
    }
    return listVal;
}

//traversal
LinkedList.prototype.printListFor = function(){
    let listVal = [];
    for(let current=this.head;current;current = current.next){
        listVal.push(current.data)
    }
    return listVal;
}


// reverse linked list
LinkedList.prototype.reverse = function(){
    let current = this.head;
    let prev = null;
    if(current){
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    this.head = prev;
}

// usage
let ll = new LinkedList()
ll.insertAtBeginning(3)
console.log(ll)
ll.insertAtBeginning(4)
console.log(ll)
console.log(ll.printList())
console.log(ll.printListFor())

// ll.insertAtEnd(5)
// ll.insertAtEnd(6)