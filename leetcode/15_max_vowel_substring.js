/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    vowels = new Set(['a','e','i','o','u'])
    let maxVowel = 0
    let currVowelCount = 0

    for(let i=0;i<k;i++){
        if(vowels.has(s[i])){
            currVowelCount++
        }
    }
    maxVowel = currVowelCount;
    for(let i=k;i<s.length;i++){
       if(vowels.has(s[i])) currVowelCount++;
       if(vowels.has(s[i-k])) currVowelCount--;
       maxVowel = Math.max(maxVowel,currVowelCount);
    }
    return maxVowel
};

s = "abciiidef", k = 3
// Output: 3
console.log(maxVowels(s,k))

s = "aeiou", k = 2
// Output: 2
console.log(maxVowels(s,k))