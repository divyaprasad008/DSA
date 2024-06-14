// [1,2,5,6,2,4,6,2,1,7.8]
//key =2

// iterative
function countItem(arr,key){
    count=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]==key){
            count++;
        }
    }
    return count;
}
console.log("Iterative"+countItem([1,2,5,6,2,4,6,2,1,7,8],1))

// recursive
function countItemRecursive(arr,key, index){
    if(arr.length==0){
        return 0
    }
    count=0;
    if(arr[0]==key){
        // console.log(arr.slice(1))
        return 1+countItemRecursive(arr.slice(1),key)
    }
    else{
        return 0+countItemRecursive(arr.slice(1),key)
    }
}
console.log("Recursive"+countItemRecursive([1,2,5,6,2,4,6,2,1,7.8],2))

