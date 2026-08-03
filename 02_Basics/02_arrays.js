const marvel = ["thor" , "iron man" , "spiderman"]
const dc = ["superman" , "batman" , "flash"]

// marvel.push(dc) // push the dc array in marvel....not good
// console.log(marvel)

//concat
// return a new array by merging the two array
const all_hero = marvel.concat(dc)
// console.log(all_hero)

//spread
// work same as concat. but here we can merge many array
const all = [...marvel ,...dc]
// console.log(all)

//flat
// array ke andr array and so on toh this will return a new array jismein saare element honge
const newArray = [1,2,[3,4,[5,6]]]
const anotherArray = newArray.flat(Infinity)
// console.log(anotherArray)


console.log(Array.isArray("Ankit"))  //return a bool according to array exist or no


//   from() INTRESTING
// Array.from() works only with:
// 1. Iterables (String, Array, Set, Map)
// 2. Array-like objects (having numeric indexes + length)
// Plain objects {} are neither, so it returns []
// 1.
console.log(Array.from("Ankit"))
// 2.
const obj = {
    0: "HTML",
    1: "CSS",
    2: "JavaScript",
    length: 3
};

console.log(Array.from(obj)); 

// 3. (it is not 1 and 2 hence it will give empty array)
console.log(Array.from({name : "ANKIT"}))  //[]


// of (return a new array from set of elements)
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3))