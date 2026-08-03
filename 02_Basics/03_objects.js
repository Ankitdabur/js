// singleton
// object.create

// object literals

const mysym2 = Symbol("Key1")   //ye bahar kyu declare krna pd raha hai???

const user = {
   name : "Ankit" , //by default name => "name" this will happen automatically
   "full name" : "Ankit Yadav",
   mysym : "mykey1",     //mysym symbol ki tarah use nhi hora. 
   [mysym2] : 123,  // ye symbol is tarah use hora hai ab
   age : 19,
   location : "Narnaul",
   email : "ankit@gmail.com",
   isLoggedIn : false,
   lastLoginDays : ["MONDAY" , "SATURDAY"],
}
 
// two ways to call
// console.log(user.name)   //in mostly cases
// console.log(user["name"])   //in some cases we have to do this 

// if any key have space between them then we cannot access it by dot
// console.log(user.full name) //error
// console.log(user["full name"])
// console.log(typeof (user[mysym2])) // =>Number  //** this will give the typeof mysym2 value 
console.log(user[mysym2]) //only syntax to access symbol in object

user.email = "ankit@chatgpt.com" //over write

//freeze
// Object.freeze(user) //nowonwards if you do any change it will not happen and it will not show any error
user.email = "ankit@microsoft.com"  // this will not happen
// console.log(user)

// adding function to object
user.greeting= function(){            //can use any valid name in place of greeting
    console.log("ankit");
}
user.greeting2= function(){
    console.log("Yadav")
}
console.log(user.greeting())
console.log(user.greeting2())