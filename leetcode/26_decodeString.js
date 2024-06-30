/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    let currNum=0;
    let currStr='';

    for(let char of s){
        if(char >= '0' && char<='9'){
            currNum = currNum*10 + (char - '0')

        }
        else if(char=='['){
            stack.push(currNum)
            stack.push(currStr)

            // reset
            currNum = 0
            currStr=''
        }
        else if(char===']'){
            let prevStr = stack.pop()
            let repeatTimes = stack.pop()

            currStr = prevStr + currStr.repeat(repeatTimes)
        }
        else{
            currStr+=char
        }
    }
    return currStr
};

s = "3[a]2[bc]"
// Output: "aaabcbc"
console.log(decodeString(s))

s = "3[a2[c]]"
// Output: "accaccacc"
console.log(decodeString(s))

s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"
console.log(decodeString(s))