let myDate = new Date()

// console.log(myDate)
// console.log(myDate.toLocaleString())
// console.log(myDate.toDateString())
// console.log(typeof myDate) //object

//    Date stamp   
// let myCreatedDate = new Date(2006, 00, 25) // YYYY/MM/DD (Month start from 00)
// let myCreatedDate = new Date(2006, 00, 25, 5, 03, 16)
// let myCreatedDate = new Date("2006-08-16")
let myCreatedDate = new Date("08-24-2006") // MM-DD-YYYY (Month start from 01)
// console.log(myCreatedDate.toLocaleString())

//   Time stamp
let myTimeStamp = Date.now()  // it will give the time in milliseconds from 1 jan 1970 to now
// console.log(myTimeStamp)

// getTime() (used to convert the time b/w 01 jan 1970 and date created in milli seconds)
// console.log(myCreatedDate.getTime())

// milli seconds to seconds
// console.log(Math.round(Date.now()/1000))

// Basic info we can get
let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth()+1)
// console.log(newDate.getDate())
// console.log(newDate.getDay()) // ( 0=> SUNDAY )



// toLocaleString(locale, options)
// locale = language/region ('default' = system language)
// options decide what to display (weekday, month, year, day, etc.)
// weekday: "long" -> Sunday, "short" -> Sun, "narrow" -> S
const today = new Date();

console.log(
    today.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    })
);

