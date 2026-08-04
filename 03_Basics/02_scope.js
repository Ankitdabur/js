var c = 200
let a = 100
if(true){
    let a = 30
    const b = 20
    var c = 40
    console.log("INNER" , a)  //30
}

// console.log(a) //not defined
// console.log(b) //not defined
// console.log(c) // 40 => thats why we dont use var


function one(){
    const username = "Ankit"

    function two(){
        const website = "YOUTUBE"  //inner function can use variable of outer function
        console.log(username)
    }
    //    console.log(website) //error
    two()
}

one()

// **************************** INTRESTING (HOISTING) ********************************

// 2 Types to declare a function

// 1.
console.log(addOne(5))
function addOne(num){
    return num + 1
}

// 2. storing the value in variable
// console.log(addTwo(5))   //**if we declare a function like 2 we cant acces the function before its intialization
const addTwo = function(num){
    return num + 2
}