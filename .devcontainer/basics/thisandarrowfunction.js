const user={                   // 'this' tells about current context
    name:"alex",
    price:999,

welcomeMessage:function(){
console.log(`${this.name} ,welcome to web`);
}
}
user.welcomeMessage()

/*const chai=function(){
    let username="sam"
    console.log(this.username);
    }*/

    //const chai=() => {  //arrow fun
      //  let username="sam"
     //   console.log(this.username);
      //  }


const addTWO=(num1,num2) => num1+num2
console.log(addTWO(3,4));
//-----------------------------immediately invoked function exp IIFE--------- "to remove pollution from global scope variables"
(function chai(){
    console.log(`DB connected  `);
    })();
    ((name)=>{
        console.log(`DB connected two ${name}`);
        })('nandini')



