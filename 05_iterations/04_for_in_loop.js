//for in loop
//on object,array,
//mainly used for object

const myObj = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby"
}

for (const key in myObj) {
    // console.log(`${key} is the shortcut of ${myObj[key]}`)
}

// on array
const arr = ["js","ruby","cpp"]
for(const key in arr){
    console.log(`on index ${key} the value is ${arr[key]}`)
}

//on map
//iw will not run because map is not iterable like this
const map = new Map()
map.set("IN","INDIA")
map.set("PAK","PAKISTAN")
map.set("fr","FRANCE")
map.set("IN","INDIA") 

for(const key in map){
    console.log(key)
}