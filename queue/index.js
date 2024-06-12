class Queue{
    constructor(){
        this.queue = [];
    }
    enqueue(data){
        return this.queue.push(data);
    }

    dequeue(){
        if(this.isEmpty()){
            return "Queue is empty";
        }
        return this.queue.shift();
    }

    isEmpty(){
        return this.queue.length ===0;
    }

    peek(){
        if(this.isEmpty()){
            return "Queue is empty";
        }
        return this.queue[0];
    }

    size(){
        return this.queue.length;
    }

    clear(){
        this.queue = [];
    }

    printQueue(){
        let str = "";
        for(let i = 0; i<this.queue.length; i++){
            str += "\n"+ this.queue[i];
        }
        return str;
    }
}

//usage Example
myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(30);
myQueue.enqueue(50);
myQueue.enqueue(70);
myQueue.enqueue(20);

console.log(myQueue.printQueue())

myQueue.dequeue()

console.log(myQueue.printQueue())
myQueue.clear()
console.log("here"+myQueue.printQueue())
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
console.log(myQueue.dequeue())
