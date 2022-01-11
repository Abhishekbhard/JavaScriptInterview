let str='Abhi';


const rev=str=>{
    let reversed='';
    for(let character of str ){
        reversed=character+reversed;
    }
    return reversed;

}
console.log(rev(str));


