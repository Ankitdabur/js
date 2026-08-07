# Project related to DOM

## Project link
[click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js
)
# Solution code

## Project 1

``` javascript
const buttons = document.querySelectorAll(".button") 
const body = document.querySelector("body")

buttons.forEach(function(button){
  console.log(button)
  button.addEventListener("click",function(e){  
    console.log(e) //PointerEvent 
    console.log(e.target)  //tell us event aa kahan se raha hai
    switch(e.target.id){
      case "grey": body.style.backgroundColor = "grey"
      break;

      case "white" : body.style.backgroundColor = "white"
        break;

      case "blue" : body.style.backgroundColor = "blue"
        break;

      case "yellow" : body.style.backgroundColor = "yellow"
        break;

    }
  })
})

```