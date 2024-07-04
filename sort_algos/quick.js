function quick(arr, low=0, high=arr.length-1){
    
    if(low<high){
        let {myarr,pivotIndex} = partition(arr,low,high)
        // console.log(myarr,pivotIndex)
        quick(myarr,low,pivotIndex-1)
        quick(myarr,pivotIndex+1,high)
    }
    return myarr

}
function partition(arr, low, high){
    let i=low-1
    let pivot = arr[high]
    for(j=low;j<high;j++){
        if(arr[j]<pivot){
            i++
            [arr[i],arr[j]] = [arr[j],arr[i]] // swap 
        }
        
    }
    // swap pivot with i
    i++
    [arr[i],arr[high]] = [arr[high],arr[i]]
    
    myarr = arr
    pivotIndex = i
    return {myarr,pivotIndex};
}

let arr = [8,2,4,7,1,3,9,6,5]
console.log(quick(arr))