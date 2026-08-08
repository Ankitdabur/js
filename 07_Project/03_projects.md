# Project related to DOM

## Project link
[click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js
)
# Solution code

## Project 3

``` javascript
const clock = document.querySelector("#clock")
//repeat the method after the interval
//inverval will be in ms
setInterval(function(){   
  const time = new Date();
  clock.innerHTML = <span>time.toLocaleTimeString()</span>
},1000);
```