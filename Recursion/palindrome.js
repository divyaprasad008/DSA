//madam
//ada
//d

function palindromeRecursive(str){
    // console.log(str, str[0],str[str.length-1],str[0]==str[str.length-1]);
    if(str.length<=1){
        // console.log("length"+str.length)
        return true
    }
    if(str[0]==str[str.length-1]){
        // console.log("false", str, str[0],str[str.length-1])

        return palindromeRecursive(str.substring(1,str.length-1))
    }
    else{
        // console.log("false", str, str[0],str[str.length-1])
        return false;
    }
}
console.log("string 12321: "+palindromeRecursive("12321"))
console.log("string 12322: "+palindromeRecursive("12322"))
palindromeRecursive("madam")?console.log("Palindrome"):console.log("Not Palindrome");
