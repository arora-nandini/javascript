let score=22
let value="22"
console.log(typeof score);
console.log(typeof value);
let valueinNumber=Number(value)
console.log(typeof value);
//33abc gives NaN
//true gives 1
let isLoggedin=1
let booleanIsLoggedin=Boolean(isLoggedin)
console.log(booleanIsLoggedin);

///------operations------

console.log(+true);
//PRIMITIVE DATATYPE--string,number,null,undefined,boolean,symbol,BigInt
//REFERENCE(NON PRIMITIVE)--arrays,objects,functions

const heros=["shaktiman","doga"];//array
let myObj={
    name:"nandini",
    age:19 ,    //objects
}
const myFunction=function(){
    console.log("hello world");
    }

/*-----------memmory-----
stack (primitive),heap(non primitive)
*/
