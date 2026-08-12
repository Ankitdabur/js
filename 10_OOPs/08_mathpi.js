// getOwnPropertyDescriptor => to get info about
// writable => usse change kr skte ho ya nhi
//enumerable => Should this property appear when we loop through the object's properties?
//configurable => Can I change/delete this property's settings later? 

// Object.defineProperty => khudke obj ki property ko define krne ke liye

const descripter = Object.getOwnPropertyDescriptor(Math , "PI") //iss property ke baare mein bta dega sab ki writeable etc hai ya nhi 

console.log(descripter)

//**hum haramare object ko bhi koi aisi property de skte hai hardcode krke ki vo usse change na kr paaye

// console.log(Math.PI); 3.14
// Math.PI = 5
// console.log(Math.PI); 3.14

// const myObj = Object.create(null)
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`); //enumerable : false hai name ka toh vo print nhi higa kyuki loop usse read hi nhi kr paayega
    }
}


