const coding = ["js" , "cpp" , "py"]

//forEach (function)
// parameter jo hum isse de skte hai => (item , index , arr)

coding.forEach( function (item) {
    // console.log(item)
} )

coding.forEach( (item) => {
    // console.log(item)
} )

// printMe function
function printMe(item){
    console.log(item)
}

// coding.forEach(printMe)  //only give reference 

coding.forEach((item , index , arr ) => {
    //    console.log(item, index , arr)
})

// [{} , {} , {}]  iterating something like this
const mycoding = [
  {
       mycodingLanguage : "js",
       fileName : "javascript",
  }
       ,
   {
       mycodingLanguage : "java",
       fileName : "java",
  }
        ,
   {
       mycodingLanguage : "py",
       fileName : "pyton",
  }
]

mycoding.forEach((item) => {
    //   console.log(item.mycodingLanguage)
})

for (const key of mycoding){
    // console.log(key.mycodingLanguage)
}

for(const key in mycoding){
    console.log(mycoding[key].mycodingLanguage)
}