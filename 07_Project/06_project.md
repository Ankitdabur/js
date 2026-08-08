# Project related to DOM

## Project link
[click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js
)
# Solution code

## Project 6
``` javascript
// color = #XXXXXX
// X => 0 to F
const randomColor = function(){
  const Hexa = '0123456789ABCDEF'
  let color = '#'
  for(let i = 0 ; i<6 ; i++){
    color += Hexa[Math.floor(Math.random()*16)]
  }
  return color
}

let intervalId

//for changing color
document.querySelector("#start").addEventListener("click",function(){
  if(!intervalId){
  intervalId =  setInterval(function(){
    document.querySelector("body").style.backgroundColor = randomColor()
  },1000)}
})

//for stopping
document.querySelector("#stop").addEventListener("click",function(){
 clearInterval(intervalId)
 intervalId = null
})

```