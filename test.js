function f(n)
{
    if(n<=0){
        return 0;
    }
    if(n==1){
        return 1;
    }

    result = f(n-1)+f(n-2);
    console.log(result);
    
}
console.log(f(5))