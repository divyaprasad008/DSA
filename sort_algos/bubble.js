function bubble(arr){
    let isSwap;

    do{
        isSwap=false;
        for(i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                isSwap = true
                console.log("hhere",i)
            }
        }
    }while(isSwap)
    
    return arr
}

arr = [5,4,3,2,1]
console.log(bubble(arr))

arr = [5,4,1,2,3]
console.log(bubble(arr))