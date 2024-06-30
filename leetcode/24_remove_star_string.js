/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let final = []
    for(let i=0;i<s.length;i++){
        if(s[i]==="*" && i!==0){
            final.pop()
        }
        else{
            final.push(s[i]);
        }
    }
    return final.join("")
};

s = "leet**cod*e"
// Output: "lecoe"
console.log(removeStars(s))

s = "erase*****"
// Output: ""
console.log(removeStars(s))