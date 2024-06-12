class Node{
    constructor(data, next = null, prev = null){
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}
class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
}

DoublyLinkedList.prototype.insertAtBegin = function(data){
    const newNode = new Node(data, this.head, null);
    if(this.head!=null){
        this.head.prev = newNode;
    }
    this.head = newNode;
    if(this.tail==null){
        this.tail = newNode
    }
    
}
    
DoublyLinkedList.prototype.insertAtEnd = function(data){
    const newNode = new Node(data,null,this.tail)
    // console.log(this.tail)
    if(this.head===null){
        this.head = newNode
    }
    if(this.tail!=null){
        this.tail.next = newNode;
    }
    
    this.tail = newNode
}

DoublyLinkedList.prototype.insertBeforeGivenNode = function(next, data){
    const newNode = new Node(data,next,next.prev);
    if(this.head==null){
        return "Link list is empty cannot search the given node";
    }

    next.prev.next = newNode
    next.prev = newNode;

    // let current = this.head;
    // while(current.next!=null){
    //     if(current.data==next){
    //         current.prev = newNode
    //         newNode.next = current
    //     }
    // }

}

DoublyLinkedList.prototype.insertAfterGivenNode = function(prevNode, data){
    if(prevNode == null){
        return "Invalid prev node";
    }
    const newNode = new Node(data, prevNode.next, prevNode)
    if(prevNode.next != null){
        prevNode.next.prev = newNode;
    }
    if(prevNode.next == null){
        this.tail = newNode
    }
    prevNode.next = newNode;
}

DoublyLinkedList.prototype.deleteFirstNode = function(){
    if(this.head==null){
        return "Linked list is empty";
    }

    if(this.head==this.tail){
        this.head = this.tail = null;
    }
    else{
        this.head = this.head.next;
        this.head.prev = null;

    }
}

DoublyLinkedList.prototype.deleteLastNode = function(){
    if(!this.tail){
        return "link list is empty"
    }
    if(this.head==this.tail){
        this.head = this.tail = null;
    }
    else{
        this.tail = this.tail.prev;
        this.tail.next = null;
    }
}

DoublyLinkedList.prototype.reverse = function(){
    if(this.head==null){
        return "List is empty";
    }
    let current = this.head;
    let temp = null

    while(current!=null){
        //swapping
        temp = current.prev;
        current.prev = current.next;
        current.next = temp

        //moving to next node
        current = current.prev
    }

    // if(this.head!=this.tail){
    //     let temp = this.head;
    //     this.head = this.tail;
    //     this.tail = temp;
    // }
    if(temp!=null){
        this.tail = this.head;
        this.head = temp.prev;
    }

}

DoublyLinkedList.prototype.printlist = function(){
    if(this.head==null){
        return "Link list is empty"
    }
        
    let current = this.head;
    let listVal = [];
    while(current){
        console.log(current, this.head, this.tail)
        listVal.push(current.data);
        current = current.next;
    }
    return listVal;
}


//usage 
let dll = new DoublyLinkedList();
console.log(dll.printlist());
dll.insertAtBegin(2);
dll.insertAtBegin(3);
dll.insertAtEnd(4);
dll.insertAtEnd(5);
console.log("dll: "+dll);
console.log("printlist: "+dll.printlist());
