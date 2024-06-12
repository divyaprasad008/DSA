//recursive
function power(base, exponent){
    if(exponent==0){
        return 1;
    }
    return base*power(base,exponent-1);
}
console.log(power(2,3))


//iterative
function powerIterate(base,exponent){
    let res=1;
    for(let i=1; i<=exponent;i++){
        res *= base
    }
    return res;
}
console.log(powerIterate(2,3))