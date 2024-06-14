// Input = ["(","(",")",")","(",")"]
function balancePar(arr, startIndex = 0, currentIndex = 0){
    if(startIndex==arr.length){
        return currentIndex==0 // true or false
    }
    
    if(arr[startIndex]=="("){
        return balancePar(arr,startIndex+1,currentIndex+1)
    }
    else if(arr[startIndex]==")"){
        return balancePar(arr,startIndex+1,currentIndex-1)
    }
    else{
        return false;
    }
}
console.log(balancePar(["(","(",")",")","(",")"],0))
console.log(balancePar(["(","(",")",")","(",")","("],0))
console.log(balancePar(["(","(",")",")","(",")","(",")"],0))


// perform balance parenthesis with [{[()]}] with stack