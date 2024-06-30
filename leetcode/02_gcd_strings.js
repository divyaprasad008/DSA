/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  if(str1+str2 != str2+str1)  {
    return "";
  }

  function gcd(a,b){
    if(b.length==0){
        return a
    }

    return gcd(b, a.slice(0,a.length%b.length))
  }
  
  return gcd(str1,str2)
};
console.log(gcdOfStrings("ababab","abab"))