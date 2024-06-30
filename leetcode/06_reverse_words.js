/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let res=[];
    let word="";
    for(i=0;i<s.length;i++){
        if(s[i]!=" "){
            word+=s[i];
        }
        else if(word.length>0){
            res.unshift(word)
            word = ""
        }
    }
    if(word.length>0){
        res.unshift(word)
        word = ""
    }

    console.log(res.join(" "))
};
console.log(reverseWords("the sky is blue"))
console.log(reverseWords("a good   example"))

var reverseWordsMy = function(s) {
    word = s.split(" ")
    
    let res=[];
    let i=word.length-1
    while(i>=0){
        // if(word[i].trim()=="") console.log("Yes")
        if(word[i].trim()!=""){
            console.log(word[i])
            res.push(word[i])
        }
        i--
    }
    return res.join(" ").trim()
};
// console.log(reverseWordsMy("the sky is blue"))
// console.log(reverseWordsMy("a good   example"))