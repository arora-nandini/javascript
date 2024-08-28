const balance=980
if(balance<500){
    console.log(" less than 500");
}
else if(balance<750){
console.log("less than 750");
}
else{
    console.log("anything");
    }
    
    const emptyObj={}
    if (Object.keys(emptyObj).length===0){
        console.log("object is empty");
        }

// nullish  coalescing operator (??) :Null undefined
let val1;
val1=5 ?? 10   // first value is assigned if null not present  aother wise second value
val2 = undefined ??50
console.log(val1);
console.log(val2);
//Terniary operator
//condition ?true  :false
const teaprice=100
teaprice>=80 ?console.log("more than"):console.log("less than");





