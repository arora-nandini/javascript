const mySym=Symbol("key")

const JsUser={
name:"nandini",
age:19,         //declare objects
location: "bhopal",
lastLoggedIn:["monday","sunday"],
[mySym]:"mykey"

}
//access objects   

console.log(JsUser[mySym]);

JsUser.age=99 // changing value

console.log(JsUser["age"]);
console.log(JsUser);


//function
JsUser.greeting=function(){
    console.log(" hello user");
    }

    JsUser.greeting2=function(){
        console.log(`hello user,${this.name}`);//reference name
        }    
    console.log(JsUser.greeting());
       console.log(JsUser.greeting2());

     // const appUser= new Object() ------------- SINGLETON OBJECT
     const appUser={}       //NON SINGLETON 
appUser.id="12ab"
appUser.name="sammy"

console.log(appUser);
const regularUser={
    email:"sam@gmail.com",
    fullname:{
        username:{
            firstname:"alex",
            lastname:"edward"
        }
    }
}
console.log(regularUser.fullname.username.lastname); //accessing
//---------------de structure----------
const course={
    coursename:"js",
    price:"999"
}
const{price}=course
console.log(price);
//------------API----------they come in jason
{
     
}






     
