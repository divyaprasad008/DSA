/**
 * Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.


{
    a:2,
    b:3
}
{
    f:3,
    g:2
}

Steps to solve
==============
1. check length
2. create FrequencyMap1 and FM2
3. FM -> keys compare size
4. have same char
5. values -> arr -> sort
6. arr->string
7. string compare
 */



/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if(word1.length!=word2.length) return false;

    // 2. create FM1 and FM2
    let frequencyMap1 = new Map()
    let frequencyMap2 = new Map()

    for(let ch of word1){
        frequencyMap1.set(ch,(frequencyMap1.get(ch) || 0) + 1 )
    }
    for(let ch of word2){
        frequencyMap2.set(ch,(frequencyMap2.get(ch) || 0) + 1 )
    }

    // 3. FM -> keys compare size
    const fm1Keys = new Set(frequencyMap1.keys())
    const fm2Keys = new Set(frequencyMap2.keys())

    if(fm1Keys.size !==fm2Keys.size ){
        return false
    }

    // 4. have same char
    const hasSameChar = [...fm1Keys].every(i => fm2Keys.has(i))
    if(!hasSameChar){
        return false
    }

    // 5. values -> arr -> sort
    const sortFreq1 = Array.from(frequencyMap1.values()).sort((a,b)=>a-b)
    const sortFreq2 = Array.from(frequencyMap2.values()).sort((a,b)=>a-b)

    // 6. arr->string
    const stringFreq1 = sortFreq1.toString()
    const stringFreq2 = sortFreq2.toString()

    // 7. compare string
    if(stringFreq1 !== stringFreq2)
    {
        return false
    }
    return true


   
};

word1 = "abc", word2 = "bca"
console.log(closeStrings(word1,word2))
// Output: true
// Explanation: You can attain word2 from word1 in 2 operations.
// Apply Operation 1: "abc" -> "acb"
// Apply Operation 1: "acb" -> "bca"


word1 = "a", word2 = "aa"
console.log(closeStrings(word1,word2))
// Output: false
// Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.


word1 = "cabbba", word2 = "abbccc"
console.log(closeStrings(word1,word2))
// Output: true
// Explanation: You can attain word2 from word1 in 3 operations.
// Apply Operation 1: "cabbba" -> "caabbb"
// Apply Operation 2: "caabbb" -> "baaccc"
// Apply Operation 2: "baaccc" -> "abbccc"