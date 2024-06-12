function sum_num(num){
    if(num==0){
        return 0
        
    }
    return res = num+sum_num(num-1)
}
console.log(sum_num(5))