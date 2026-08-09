// Why Promise?
// → Used to handle asynchronous operations.
// → Represents a future result.
// → Can be pending, fulfilled, or rejected.
// → .then() handles success.
// → .catch() handles failure.
// → async/await is another way to handle Promises.


//creating promise by storing it in const
// const promiseOne = new Promise(call back)
// promiseOne.then(call back)

// .then() and .catch() are used to handle the result/outcome of a Promise.
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()  // Promise fulfilled → .then() executes
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

//creating promise without storing it in any variable
//new Promise(call back func).then(call back funch)
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2 is completed")
        resolve()
    },1000)
}).then(function(){
    console.log("promise 2 consumed")
})

//resolve(data) => fulfills the Promise and passes data to .then()v
const promiseThree = new Promise(function(resolve , reject){

    setTimeout(function(){
    resolve({username : "ANKIT" , email : "ankitdabur@gmail.com"}) //it will retuen a object to .then
    },1000)
})

promiseThree.then(function(user){
 console.log(user)  //print the object 
})

//here we doing => multiple .then , catch , finally ,chaining
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
     let error = false;
     if(!error){
        resolve({username : "ankit" , password : "123"}) //let say this data we got
     }
     else{
        reject("ERROR! Something went wrong")
     }
    },1000)
})

promiseFour
.then((user)=>{
  console.log(user)
  return user.username    //this username is returned for next .then
})
.then( (username)=> {
 console.log(username)
})
.catch(function(error){       //if rejected this will run
    console.log(error)
})
.finally(() => console.log(`the promise is either resolved or rejected`)) //this will always run

// Handling the Promise using async/await instead of .then()/.catch()
// await → waits for a Promise and gets its result
// catch → handles the error/rejection from the Promise
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
     let error = true;
     if(!error){
        resolve({username : "Javascript" , password : "123"}) //let say this data we got
     }
     else{
        reject("ERROR! js went wrong")
     }
    },1000)
})

async function consumerPromiseFive(){
    try {                  //run if the promise is fulfilled
         const response = await promiseFive
         console.log(response)
        } catch (error) {      //run if the promise is rejected
        console.log(error)
           }  
} 

consumerPromiseFive()


//here 
//response.json() returns a Promise
//fetch() returns a Promise 
//so we have to wait for it...for which we have to use await
// response.json()
// → reads the response body and converts JSON into JavaScript data
// → returns a Promise, so we use await to get the actual data
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()   //converts JSON into JavaScript data
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()


//same example using .then , .catch
fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
  return response.json() 
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})