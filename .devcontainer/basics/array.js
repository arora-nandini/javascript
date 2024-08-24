const myArr = [9,1,2,3]
const myArr2=new Array(5,6,7)
console.log(myArr[0]);
// ARRAY METHODS
myArr.push(6)
console.log(myArr);
myArr.pop()//last value removes
const newarr=myArr.join()
console.log(newarr);//string forms

//slice,splice
console.log("A",myArr);
const myn1=myArr.slice(1,3)  //third index is excluded
console.log(myn1);

const myn2=myArr.splice(1,3)  //manipulate original array
console.log(myn2);
console.log("B"+myArr);

const fruits=["apple", "mango"]
const vegetables=["peas","spinach"]
const together=fruits.concat(vegetables)
console.log(together);






