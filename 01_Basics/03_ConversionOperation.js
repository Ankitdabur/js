// let score = "33"

// console.log(typeof score)

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber)

// console.log(valueInNumber)

/*
score = "33"=> 33
score = "33abc" => NaN
score = true=>1 ; false=> 0
score = null=> 0
*/


let isLoggedIn = 1
//  console.log(typeof isLoggedIn)

let boolIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof boolIsLoggedIn)

// console.log(boolIsLoggedIn)

/*
isLoggedIn = 1 => true , 0 => false
isLoggedIn = "" =>  false
isLoggedIn = "anything" => true
*/


let someNum = 33
let stringNum = String(someNum)

// console.log(typeof stringNum)
// console.log(stringNum)

//  ********************************   OPERATIONS   *********************************************

let Num = 3
let NegNum = -Num

// console.log(NegNum)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(4%3)
// console.log(2/2)

let str1 = "hello"
let str2 = " Ankit"

let str3 = str1 + str2  
//  hello Ankit



// console.log(1 + 2)  => 3
// console.log(1 + "2")  => 12
// console.log("1" + "2")  => 12
// console.log("1" + 2 + 2)  => 122  
// console.log(1 + 2 + "2")  => 32  

// At each (+) operation, if either operand is a string,
// JavaScript performs string concatenation. Otherwise, it performs numeric addition.





//  + se conversion ho raha hai idhr            
// console.log(true)   => true
// console.log(+true)     => 1
// console.log(true+)   => error  
// console.log(+"")        => 0 
// console.log(+"Ankit")    => NaN




let gamecounter = 100
gamecounter++
// console.log(gamecounter)  101




// post increment
let x = 3;
const y = x++;
console.table([x,y])
// x is 4; y is 3


// prefix increment
let x2 = 3n;
const y2 = ++x2;
// x2 is 4n; y2 is 4n

