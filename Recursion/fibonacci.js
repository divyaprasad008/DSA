// 0 1 1 2 3 5 8
//iterative
function fibonacciIterative(value){
    
    let n1 = 0
    let n2 = 1;
    let sum = 0;
    for(i=0;i<value;i++){
        sum = n1+n2;
        n1 = n2
        n2 = sum
    }
    return n1;
}
console.log(fibonacciIterative(5))


//recursive
function fibonacciRecursive(value){
    if(value==0){
        return 0
    }
    if(value==1){
        return 1
    }
    return fibonacciRecursive(value-2)+fibonacciRecursive(value-1)
}
console.log(fibonacciRecursive(6))
