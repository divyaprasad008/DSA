// let myString = "aabcc"
// let i=1
// console.log(myString.substring(0, i))
// console.log(myString.substring(i + 1))
// console.log(myString.substring(0, 1) + myString.substring(i+1))


function removeAdjDuplicate(myString){
    let res=""
    for(let i=0;i<myString.length-1;i++){
        if(myString[i]==myString[i+1]){
            i++;
        }
            res +=myString[i];
    }
    return res
}
console.log(`Remove adjacent duplicate of aabcc: ${removeAdjDuplicate("aabcc")} `)


function removeDuplicate(myString){
    let res=""
    for(let i=0;i<myString.length-1;i++){
        if(myString[i]==myString[i+1]){
            i++;
        }
        else{
            res +=myString[i];
        }
    }
    return res
}
console.log(`Remove duplicate of aabcc: ${removeDuplicate("aabcc")}`)


function removeAdjDuplicateRecursive(myString){
    console.log(myString);
    // if(myString[0] === removeAdjDuplicateRecursive(slice(myString[1]))){
    if(myString.length <= 1){
        return myString
    }
    if(myString[0] === myString[1]){
        console.log(`subString if ${myString.substring(1)}`)
        return  removeAdjDuplicateRecursive(myString.substring(1));
    }
    else{
        console.log(`subString else ${myString.substring(1)}`)
    return (myString[0]+removeAdjDuplicateRecursive(myString.substring(1)))

    }    
}
console.log(`Remove adjacent duplicate of aabcc recursive: ${removeAdjDuplicateRecursive("aabcc")}`)


//using stack
function removeDARStack(myString){
    myStack = [];
    if(myString.length<=1){
        return myString;
    }
    
    console.log(myString)
    myStack.push(myString[0]);
    let top = myStack[myStack.length-1];
    if(top === myString[1]){

        return removeDARStack(myString[2]);
    }
    else{
        return removeDARStack(myString[1])
    }
}

console.log(`stack representation remove duplicate: ${removeDARStack("aabcc")}`);