// this => it refers current context


// 'this' refers to the current object from which the method is called.
// this.username -> accesses the username property of the current object.

// console.log(this);  Prints the entire current object.
const user = {
    username : "ankit",                                        
    price : "999",

    welcomeMessage : function(){
           console.log(`${this.username} , welocme to the website`)   
        //    console.log(this)   
    },
}

// browser ke andr global object window hai.
// user.welcomeMessage()
// user.username = "sonal"
// user.welcomeMessage()

// console.log(this)  // {} empty object

// function chai(){
//     let username = "ankit"
//     console.log(this)       //kuch kuch
//     console.log(this.username);  //undefined , this does not work inside a function
// }

// chai()

//arrow functions
// () => {}
const chai = () => {
    let username = "ankit"
    console.log(this)  //empty{}
    // console.log(this.username) //undefined
}
chai()

// 2 tarah se arrow function use kr skte hai
// 1. (with {} , write return) / Explicit return
// const addTwo = (num1 , num2) => {
//     return num1+num2
// }

// 2. (without {} , no need of return) / implicit return
const addTwo = (num1 , num2) => num1+num2     //we can do this also by using arrow function
// const addTwo = (num1 , num2) => (num1+num2)  //same


// return object krna hai toh 
// const addTwo = (num1 , num2) => {username  : "ankit"}      //error , cant return object ike this
// const addTwo = (num1 , num2) => ({username  : "ankit"})    //correct

