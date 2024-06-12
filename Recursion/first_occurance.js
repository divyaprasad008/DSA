// arr = [3,4,1,8,1,7]
// findMe = 1;
// currIndex = 0;
// output = 2
// if not found = -1


//iterative
function firstOccuranceIterative(arr,find, currentIndex){
    while(currentIndex < arr.length){
        if(arr[currentIndex] == find){
            return currentIndex
        }
        currentIndex+=1
    }
    return -1;
}

//recursive 
function firstOccuranceRecursive(arr, find, currentIndex){
    if(arr.length == currentIndex){
        return -1
    }
    if(arr[currentIndex]==find){
        return currentIndex;
    }
    console.log(arr,find,currentIndex)
    let res = firstOccuranceRecursive(arr,find,currentIndex+1);
    return res

}

console.log(firstOccuranceRecursive([3,4,1,8,1,7],1,0))
