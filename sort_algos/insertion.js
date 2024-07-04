function insertion(arr){
    for(i=0;i<arr.length;i++){
        let j=i-1
        let curr = arr[i];
        while(j>=0 && arr[j]>curr){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = curr
    }
    return arr
}

arr = [5,4,3,2,1]
console.log(insertion(arr))
console.log("==========================")

arr = [5,4,1,2,3]
console.log(insertion(arr))
