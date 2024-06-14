//Recursive
function recurLength(mystring){
    // let sum=0;
    if(mystring == ""){
        return 0
    }
    return sum = 1+recurLength(mystring.substring(1));
}
console.log(recurLength("Hello"));


//Iterative
function iterLength(mystring){
    let i=0
    // console.log(mystring, mystring[0], mystring[5]);

    while(mystring[i]!=undefined){
        // console.log(i)
        // mystring = mystring.substring(1)
        i++
    }
    return (i)
}
console.log(iterLength("Hello"))