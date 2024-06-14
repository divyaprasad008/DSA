// find gcd of two numbers
// input: 42 and 18
// output: 6
// 42 divisors are 1,2,3,6,7,14,21,42
// 18 divisors are 1,2,3,6,9,18

// gcd = m                if(m==n)
//     gcd(m-n,n)         if(m>n)
//     gcd(m,n-m)         if(m<n)

function gcdNormal(n1,n2){
    let n1factor = [];
    let n2factor = [];
    let commonfactor = [];
    for(let i=1;i<=n1;i++){
        if(n1%i==0){
            n1factor.push(i)
        }
    }
    for(let j=1;j<=n2;j++){
        if(n2%j===0){
            n2factor.push(j)
            
            if(n1factor.includes(j)){
                commonfactor.push(j)

            }
        }
    }
    return commonfactor?Math.max(...commonfactor):0;
}
console.log(gcdNormal(12,18))

function gcdRecursive(m,n){
    if(m==n){
        return m
    }
    if(m>n){
        return gcdRecursive(m-n,n)
    }
    if(m<n){
        return gcdRecursive(m,n-m)
    }

}

console.log(gcdRecursive(12,18));