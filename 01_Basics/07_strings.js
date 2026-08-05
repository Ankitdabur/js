const name = "Ankit"
const age = 19

// this is outdated. do not use this
// console.log(name + age + " years") 

// use this
// console.log(`My name is ${name} an my age is ${age} years old`)



// let string1 = "Ankit"
let string2 = new String("Ankit-Yadav-Dabur")

// console.log(typeof string1) => string(primitive)
// console.log(typeof string2) => object(non primitive and behave like a object)

//  **********************************PROPERTIES OF STRING***************************************

//       BASIC (LENGTH , UPPER CASTE , FIND INDEX , FIND CHAR)
// console.log(string2.length)  to find length
// console.log(string2.toUpperCase())  to covert all alphabet in upper 
// console.log(string2.charAt(2))   
// console.log(string2.indexOf("k"))

//        SUBSTRING
// last index will not be included                
// cant use negative value
let anotherstring = string2.substring(0,3)
console.log(anotherstring)


//       SLICE
// We can use negative value also and negative means start from end
let anotherstring2 = string2.slice(-1,4)
console.log(anotherstring2)



//      TRIM
// it remove the space before nd after jo hai string ke
let college = "   DTU     "
console.log(college)
console.log(college.trim())



//     REPLACE  
let url = "http://ankit.com/ankit%20yadav"
console.log(url.replace('%20' , '-'))


// INCLUDES (give bool as a output)
console.log(url.includes("ankit"))


//     SPLIT
//  convert string into array
console.log(string2.split('-'))