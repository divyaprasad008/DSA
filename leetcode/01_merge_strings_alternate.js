var mergeAlternatelyRecursive = function(word1, word2){
    console.log(word1, word2)
    if(word1.length==1){
        return word1;
    }
    if(word2.length==1){
        return word2;
    }

    if(word1.length>1 && word2.length>1){
        return merged = word1[0]+word2[0]+mergeAlternately(word1.substring(1,word1.length),word2.substring(1,word2.length))

    }
    if(word1.length>1){
        return merged = word1[0]+mergeAlternately(word1.substring(1,word1.length))
    }
    if(word2.length>1){
        return merged = word2[0]+mergeAlternately(word2.substring(1,word2.length))
    }
    
    // return merged = word1[0]+word2[0]+mergeAlternately(word1.substring(1,word1.length),word2.substring(1,word2.length))
}
console.log(mergeAlternatelyRecursive("abc","pqr"))

var mergeAlternately = function(word1, word2){
    let merged =""
    let i=0;
    let j=0;

    while(i<word1.length && j<word2.length){
        merged += word1[i]
        merged += word2[j]
        i++
        j++
    }

    //add word1 remainder
    while(i<word1.length){
        merged += word1[i]
        i++
    }
    while(j<word12.length){
        merged += word2[j]
        j++
    }

    console.log(merged);
}