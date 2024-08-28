/*const coding=["js","ruby","java"]
const values=coding.forEach((item)=>{
    return Item
})
console.log(values);*/

//const nums=[1,2,3,4,5,6]
//const newnums=nums.filter((num)=>{
  //  return num>4
//})
//console.log(newnums);

//Same through  foreach

/*const newnums=[]
nums.forEach((num) => {
if(num>4){
    newnums.push(num)
}
})
console.log(newnums);*/
//MAP METHOD

const numbers=[1,2,3,4,5,6,7,8,9]
//const newnums = numbers.map((num) => num+10)
const newnums=numbers
            .map((num) => num*10)
            .map((num) => num+1)
            .filter((num) => num>=40)

console.log(newnums);

