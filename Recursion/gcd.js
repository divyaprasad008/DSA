// find gcd of two numbers
// input: 42 and 18
// output: 6
// 42 divisors are 1,2,3,6,7,14,21,42
// 18 divisors are 1,2,3,6,9,18

// gcd = m                if(m==n)
//     gcd(m-n,n)         if(m>n)
//     gcd(m,n-m)         if(m<n)

// function