// count vowels in string

function isVowel(character){
    let lowerChar = character.toLowerCase();
    let vowel = "aeiou";

    if(vowel.indexOf(lowerChar)!=-1){
        return true;
    }
    else{
        return false;
    }
}

function countVowel(str){
    let count = 0;
    for(let i=0;i<str.length;i++){
        isVowel(str[i]){
            count+=1;
        }
    }
    return count;
}

countVowel("Hello")


function recursiveCountVowel(str,strLength){
    if(strLength==1){
        return Number(isVowel(string[0]))
    }
    return recursiveCountVowel(str,str.length-1)+isVowel(str[strLength-1])
}
console.log(recursiveCountVowel("Hello",5))