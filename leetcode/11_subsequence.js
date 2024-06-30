/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i=0
    for(let str of t){
        if(i==s.length) break;
        if(str==s[i]) i++;
    }
    return i==s.length
};
s = "abc", t = "ahbgdc"
console.log(isSubsequence(s,t))
s = "axc", t = "ahbgdc"
console.log(isSubsequence(s,t))