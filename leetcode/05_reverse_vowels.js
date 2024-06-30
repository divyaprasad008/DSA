/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    s = s.split('')
    function isVowel(str){
        let vowel = "aeiouAEIOU"
        if(vowel.indexOf(str)!==-1){
            return true
        }
        else {
            return false
        }
    }
   
    let i=0
    let j=s.length-1
    while(i<=j){
        if(isVowel(s[i]) && isVowel(s[j])){
            //swap
            let temp = s[i]
            s[i] = s[j]
            s[j] = temp
            i++
            j--
        }
        if(!isVowel(s[i])){
            // console.log("i"+i);return;
            i++
        }
        if(!isVowel(s[j])){
            // console.log("j",j);return;

            j--
        }
    }
    
    return s.join("")

};
console.log(reverseVowels("hello"))
console.log(reverseVowels("leetcode"))