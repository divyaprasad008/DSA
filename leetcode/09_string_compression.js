/**
 * @param {character[]} chars
 * @return {number}
 */

var compress = function(chars) {
    let i=0
    let index = 0
    while (i<chars.length){
        let j = i
        while(j<chars.length && chars[j] == chars[i]){
            j++
        }
        let count = j-i
        chars[index++] = chars[i]
        if(count>1){
            for(cnt of count.toString()){
                chars[index++] = cnt;
            }
        }
        i=j
    }
    return index;
}
console.log(compress(["a","a","b","b","c","c","c"]))
console.log(compress(["a"]))
console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]))

var compress2 = function(chars) {
    let i=0
    let index = 0
    let count =1
    if(chars.length>1){
        for(let j = 1;j<chars.length;j++)  {
            if(chars[j-1]==chars[j]){
                count++
            }
            else{
                if(count>1){
                    strcount = count.toString()
                    for(cnt of strcount){
                        chars[++i] = cnt
                    }
                }
                    i++
                    chars[i] = chars[j]
                    count=1
                // return

            }
        }
        strcount = count.toString()
        for(cnt of strcount){
            i++
            chars[i] = cnt
            i++
        }
        while(i<chars.length){
            chars.pop()
        }
    }
    return chars
};

// console.log(compress2(["a","a","b","b","c","c","c"]))
// console.log(compress2(["a"]))
// console.log(compress2(["a","b","b","b","b","b","b","b","b","b","b","b","b"]))