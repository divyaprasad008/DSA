function mergeSort(arr){
    if(arr.length==1){
        return array
    }

    const middle = Math.floor(arr.length/2)
    const left = arr.slice(0,middle)
    const right = arr.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right){
    let result = []
    let l=0;
    let r=0;

    while(l<left.length || r<right.length){
        if(left[l]<right[r]){
            result.push(left[l])
            l++
        }
        else{
            result.push(right[r])
            r++
        }
    }

}

arr = [5,4,3,2,1]
console.log(mergeSort(arr))
console.log("==========================")

arr = [5,4,1,2,3]
console.log(mergeSort(arr))
