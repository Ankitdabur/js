// js is purely prototype based language only , not class based nor function based
// when we say "JavaScript is not a class-based language", 
// we don't mean JavaScript doesn't have class. 
// It means class isn't the fundamental mechanism underneath JavaScript's object inheritance.

//Objects
//collection of properties and methods
//Ex : LowerCase

// why we use OOPs
// We use OOP in JavaScript mainly to organize large and 
// complex code by grouping related data and functions together.

//Parts of OOPs
// Constructor function
// Prototypes
// Classes
// Instances (new, this)

//4 pillars
// Abstraction
// Hide unnecessary implementation details.
// → Show only what is needed. 

// Encapsulation
// Bundle related data + methods together.

// Inheritance 
// One class can reuse/extend another class's properties/methods

// Polymorphism
// Same method/interface can have different behavior.

//object literals

const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);  //print the object
    }
} 
console.log(user.prototype)
console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this) //{} global context mein abhi kuch nhi hai mtlb




//Constructor functions
//new => constructor functions...it allows us to make multiple instances from a single object literal
//new makes an empty object  , everytime
//"this" points to the empty object (2nd)

//this is a special keyword whose value depends on where you are using it
// 2 places where "this" is used as in diff. way.
// 1st => current context
// 2nd => new ki help se nyya instance bnaya uske baad "this" is push the info

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    //return this //not necessary, by default hota hi hai
}

//without using new
// const userOne =  User("hitesh", 12, true)
// const userTwo =  User("ChaiAurCode", 11, false) //overwrite the userOne object
// console.log(userOne); // give => "ChaiAurCode", 11, false

//with using new
const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)

