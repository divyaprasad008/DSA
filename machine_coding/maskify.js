function maskify(cardno){
    if(typeof cardno === 'number'){
        cardno = cardno.toString()
    }
    //optional
    if(cardno.length < 6){
        return cardno;
    }

    let first = cardno[0];
    let last = cardno.slice(-4);
    let mask = '';
    for(let i=1;i<cardno.length-4;i++){
        let mychar = cardno[i]
        mask += isNaN(parseInt(mychar))? mychar:'#';
    }
    return (first+mask+last)
}
console.log(maskify('55142353232334234'));
//5############4234
console.log(maskify('4556-3642-1234-0453'))
//4###-####-####-0453
console.log(maskify(''))
//''
console.log(maskify('paypalisgreat'))
//paypalisgreat
