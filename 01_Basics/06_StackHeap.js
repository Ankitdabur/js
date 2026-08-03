//  Stack(Primitive , copy is passed)  , Heap (non primitive , the reference is copied, not the object itself.)

// Primitive
let myname = "Ankit"
let mygfname = myname
mygfname = "sonal"

// console.log(myname)
// console.log(mygfname)


// Non Primitive
let userOne = {
    name:"ankit",
    age : 19
}
let userTwo = userOne
userTwo.name = "Sonal",

console.log(userOne.name)
console.log(userTwo.name)