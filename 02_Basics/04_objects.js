// const instaUser = new Object() => singleton object
const instaUser = {}  // =>non singleton object
instaUser.id = "123abc"
instaUser.name = "sammy"
instaUser.isLoggedIn = false

// console.log(instaUser)

const regularUser = {
    email : "ankit@gmail.com",
    fullname : {
         username : {
             firstname : "ANKIT",
             lastname : "YADAV",
         }
    }
}

// console.log(regularUser.fullname.username.firstname)

// assign object ( return a new object jismein saare objects ki keys hai  ) 
//less use
const obj1 = {1 : "a" , 2 : "b" }
const obj2 = {3 : "a" , 4 : "b" }
const obj3 = {5 : "a" , 6 : "b" }

const obj4 = Object.assign({},obj1,obj2,obj3) //in {} object all the three object are merged
// console.log(obj4)

// most use (spread)
const obj5 = {...obj1, ...obj2, ...obj3}
// console.log(obj5)



// objects in array
const user = [
    {
        id :"123",
        email : "ankit@gmail.com",
    },
    {
        id :"123",
        email : "ankit@gmail.com",
    },
    {
        id :"123",
        email : "ankit@gmail.com",
    }
]

user[1].email // we have to access like this

//something about object keys. *IMPORTANT*
// console.log(Object.keys(instaUser))   // it will give all the keys in a array.*REMEMBER*
// console.log(Object.values(instaUser)) // it will give all the values in a array.*REMEMBER*

// console.log(instaUser.hasOwnProperty('isLoggedIn')) //returm a bool 

const course = {
    coursename : "js",
    price : "999",
    courseInstructor : "Ankit"
}

//if we have to use course.courseInstruvtor many time then it will not look clean , to make it clean we do:
const {courseInstructor} = course   //destructure

console.log(courseInstructor) //USE this wherever courseInstructor info needed

//we can modify name of courseinstructor if we want
const {courseInstructor:instructor} = course
console.log(instructor)