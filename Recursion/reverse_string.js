// Reverse string

//iterative

//Hello

function reverseString(string){
    let reverse = "";
    let length = string.length-1;

    while(length >= 0){
        reverse = reverse+ string[length];
        length = length-1
    }
    return reverse
}
console.log(reverseString("hello"));

function reverseStringRecursive(string){
    // let str = "";
    let length = string.length;
    console.log(string,length);
    if(string===""){
        return string;
    }
    let reversePart = reverseStringRecursive(string.substring(0,length-1))
    let result = string[string.length-1] + reversePart
    return result;

}

console.log(reverseStringRecursive("Hello"));