// FOR LOOP
/*for(let index=0;index<=10;index++){
    const element=index;
    console.log(element);
    
}*/
/*for (let i =0 ;i<=10; i++) {
    console.log(`outer loop: ${i}`);
    
    for (let j= 0;  j<=10; j++) {
        console.log(`inner loopvalue:${j}`);
         } 
}*/

// continue and break
/*for (let index = 1; index <= 20; index++) {
    if(index==5){
        console.log(`detected 5`);
        break
        }
    console.log(`value of i id ${index}`);
    }

    for (let index = 1; index <= 20; index++) {
        if(index==5){
            console.log(`detected 5`);
            continue
            }
        console.log(`value of i id ${index}`);
        }*/
    //----------------------------------------------------------------------------------------------
    //WHILE LOOP
    /*let myarray=["flash","batman"]
    let arr=0
while (arr<myarray.length) {
    console.log(`value is  ${myarray[arr]}`);
    arr++ ;
    }
//--------------------------------------------------------
//DO WHILE LOOP
let score =1
do{
    console.log(` score is ${score}`);
    score++
    }while(score<10);*/
   // -------------------------------------------------------------
//FOR OF LOOP    mostly for array
//const array = [1,2,3,4,5]
//for(const num of arr){
 //   console.log(num);
//}

//Maps
const map=new Map()
map.set('IN',"india")
map.set('FR',"france")
//console.log(map);
for(const[key,value] of map){
    console.log(key,':-',value);
    }
