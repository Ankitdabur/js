const score = new Number(100)   // it help you to predefine that the variable is number data type
// console.log(score)

// *********************************** PROPERTIES OF NUMBER **************************************

//   toString
// it convert number to string so we able to use all properties of string on number
// console.log(score.toString().length) //3

//  toFixed
//  precision value large hai tb use krte hai. Like 98.23836638 => (2) =>
// console.log(score.toFixed(2)) //100.00

//   toPrecision(n)
//  give precise value 
//  remember n>= decimal se pehle digit  else it will give answer in exponential form
const num = 12.892
// console.log(num.toPrecision(2)) //13 
// console.log(num.toPrecision(1)) //1e+1

//  toLocalString
//  covert the number with comma like 10,00,000
const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))



// ************************************** MATHS ***********************************************

console.log(Math) //Print the entire Math object to the console.

console.log(Math.PI);        // 3.141592653589793
console.log(Math.abs(-10));  // 10
console.log(Math.round(4.6)); // 5
console.log(Math.floor(4.9)); // 4  (always give the bottom value)
console.log(Math.ceil(4.1));  // 5  (always give the top value)
console.log(Math.max(10, 20, 30)); // 30
console.log(Math.min(10, 20, 30)); //10

// Random
console.log(Math.random());   // (0<= Random number < 1 )
//  we want random number between 1 and 10 and it must be a integer
console.log(Math.floor((Math.random()*10)+1))

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

