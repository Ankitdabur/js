// arrays
//not neccessary same data type ho
//shallow copies banata hai (means same refrence address of the copy)
const myArray = [0,1,2,7,9,10]
const myArray2 = new Array(1,4,2,6)

// console.log(myArray2[2])

//  some array methods
myArray.push(8)
myArray.pop()
myArray.unshift(7)  //add 7 at the begninning 
myArray.shift()  //remove first element

// console.log(myArray.includes(19))
// console.log(myArray.indexOf(19))

const newArr = myArray.join() // convert the array into strings
// console.log(myArray)
// console.log(newArr)
// console.log(typeof newArr)  //string

// slice and splice
console.log("A" , myArray)
//using slice
// last index is not included
const new1 = myArray.slice(1,3)
console.log("B" , myArray)
console.log(new1)

//using splice
// ** splice remove the part from orignal array
//last index is also included in splice
const new2 = myArray.splice(1,3)
console.log("C" , myArray)
console.log(new2)