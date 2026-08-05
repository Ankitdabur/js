//for of
// works only with iterable objects.
//array , string , maps etc

// ["" , "" , ""]
// [{} , {} , {}]
const arr = [1,2,3,4,5]

for (const num of arr){
    // console.log(num)
}

const greeting = "hello ankit!"
for (const greet of greeting){
    // console.log(`the char of greeting are ${greet}`)
}

//Maps
// only store unique values
const map = new Map()
map.set("IN","INDIA")
map.set("PAK","PAKISTAN")
map.set("fr","FRANCE")
map.set("IN","INDIA")  //map will not store this
// console.log(map); 

//for of loop on map
for(const [key,value] of map){
    console.log(`${key} -: ${value}`)
}

//on object
const myObj ={
    username : "ANKIT",
    id : "124",
}

//myObj is not iterable like this 
// for(const [key,value] of myObj){
//    console.log(`${key} -: ${value}`)
// }