// Immediatly invoked function expression
// A function that is executed immediately after it is defined.
// Global scope ke pollution ko avoid karne ke liye IIFE ka use karte hain.
//  (function defination)(execute);

//named iife
(function chai(){
    console.log('DB CONNECTED')
}) ();

//unnamed iife
( () => {
    console.log("DB CONNECTED 2")
}) ();

//with parameters
( (name) => {
  console.log(`my name is ${name}`)
}) ("ankit")
