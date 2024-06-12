class Stack{
    constructor(){
        this.stack = []
    }

    push(data){
        this.stack.push(data)
    }

    pop(){
        this.stack.pop()
    }

    peek(){
        return this.stack[this.stack.length - 1]
    }

    isempty(){
        return this.stack.length == 0;
    }

    size(){
        return this.stack.length;
    }

    clear(){
        return this.stack = [];
    }

    contains(element){
        return this.stack.includes(element)
    }

    reverse(){
        this.stack.reverse()
    }

    printStack(){
        let str = "";
        for(let i=0;i<this.stack.length;i++){
            str += this.stack[i]+"\n" ;
        }
        return str;
    }
}

//usage 

let myStack = new Stack()
myStack.push(4)
myStack.push(2)
myStack.push(6)
myStack.push(5)
myStack.push(7)
myStack.push(9)
myStack.push(1)

console.log("============\n"+myStack.printStack());
myStack.pop();

console.log("============\n"+myStack.printStack());