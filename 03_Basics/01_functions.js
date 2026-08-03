function sayMyName(){
     console.log("A")
     console.log("N")
     console.log("K")
     console.log("I")
     console.log("T")
}

// sayMyName //Refrence
// sayMyName() //execution

// function addTwoNumber(number1 , number2){
//    console.log(number1+number2)
// }

// let result = addTwoNumber(3,5)
// console.log(result)  //undefined.....because the function is not returning anything

function addTwoNumber(number1 , number2){
//    number3 = number1+number2
//       return number3
    return number1 + number2
}

let result = addTwoNumber(3,5)
// console.log(result)

function loginUserMessage(username){
    if(username===undefined){
        console.log("Please enter a username")
        return
    }
    else
      return  console.log(`${username} is just logged in`)
}
// loginUserMessage("ankit")


//when we dont know about how many parameter are coming(spred operator ...)
function calculateCartPrice(...num1){
    return num1  //return a array which contain all parameter 
}

function calculateCartPrice2(var1 , var2 , ...num1){
    return num1  //return a array which contain all parameter 
}
// console.log(calculateCartPrice(200,300,400,500,600))
// console.log(calculateCartPrice2(200,300,400,500,600))  //[400,500,600]


// passing the object as parameter in functions 
const user = {
    username : "Ankit",
    price : "100",
}

function handleObject(anyobj){
    console.log(`the username is ${anyobj.username} and the price is ${anyobj.price}`)
}

// handleObject(user)  1st way (pass any object)
handleObject({
    username : "Sonal",             //pass the object by manullay giving the data
    price : "10000",
})



// passing the array as parameter in function 
const myNewArray = [1,5,3,7,4]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))