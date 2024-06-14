/* Task is to remove all tabs and spaces from a string
 This includes the char \t and " " from a string

 */

function TAS(word){
    newStr = "";
    for(let i=0;i<word.length;i++){
        if(word[i]!="\t" && word[i]!=" "){
            newStr += word[i];
        }
    }
    return newStr;
}

// console.log(TAS(`Task is to remove all tabs and spaces from a string
//     This includes the char \t and " " from a string`))

function removeTAS(word){
    let length = word.length;
    let res= "";
    if(word.length===0){
        return ""
    }
        
    let firstWord = word[0];
    let restOfString = word.slice(1)
    // console.log(firstWord, restOfString)
    if(firstWord===" " || firstWord==="\t"){
        return removeTAS(restOfString)
    }
    return firstWord+removeTAS(restOfString);
}
console.log(removeTAS(`Task is to remove all tabs and spaces from a string
    This includes the char \t and " " from a string`))