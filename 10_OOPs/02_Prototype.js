//prototypes :
//new keyword ka access bhi issi ke through mil raha hai
//classes bhi iske through hi mili hai
//"this" bhi issi ke through kaam kr raha hai

//In js everything is a object like array, string, function.they behave like what they are but if we want toh hum ussse object ki tarah behave krva skte hai 
// prototype refrence
// string.prototype = object prototype
// object prototype = null

function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2
const multiple = multipleBy5(5)

// console.log(multipleBy5(5)); //25
// console.log(multipleBy5.power); //showing object property....output=>2
console.log(multipleBy5.prototype);//an empty object

//by using the .prototype we have injected increment and printMe function
function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    // score++    //ab score kiska bhadaye chai ka ya tea ka? so we have to use "this" now...jisne bhi mujhe call kra hai uska score bhadao
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

// const chai = createUser("chai", 25)
// const tea = createUser("tea", 250)
// chai.printMe()
 //error(Cannot read properties of undefined (reading 'printMe'))
//jb humne function se chai aur tea mein value transfer kri tb humne usse btaya nhi ki additional properties add kri hai
//ye btane ka kaam new keyword krta hai

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)
chai.printMe()




// console.log(typeof chai)  //object
// console.log(typeof createUser)  //function
// console.log(createUser.prototype) //Printme and increment

/*  

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

//purely prototype info

// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`); //bina this ke smjh kaise aayega ki kiske spiderman ki baat ho rhi hai
    }
}

Object.prototype.hitesh = function(){      //now by default ye property sabmein hogi like .map , .forEach
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);  //
}

// heroPower.hitesh()
// myHeros.hitesh() //ye properties array mein bhi aajyegi ab and also in string
// myHeros.heyHitesh() //lekin array mein koi property add kri vo object mein by deafault as a peroperty use nhi kr skte
// heroPower.heyHitesh() //error

//object new property - array by deafault YES...vive versa is wrong


//inhertance
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport //TeacgingSupport ki saari properties TASupport mein aajayengi
}

Teacher.__proto__ = User  //same working

// modern syntax (iske andr properties aayengi , iski)
Object.setPrototypeOf(TeachingSupport, Teacher) 

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()
//ab ye truelength waala method har ek string mein applhy kr skte ha