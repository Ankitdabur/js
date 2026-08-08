# Project related to DOM

## Project link
[click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js
)
# Solution code

## Project 4

```javascript
let randomNumber = Math.floor(Math.random() *100 + 1)

const submit = document.querySelector("#subt"),
const userInput = document.querySelector("#guessField"),
const guessSlot = document.querySelector(".guesses"), //with the help of this we will display previous guesses by storing them into array
const remaining = document.querySelector(".lastResult"),
const lowOrHi = document.querySelector(".lowOrHi"),
const startOver = document.querySelector(".resultParas") 

const p = document.createElement("p")

let preGuess = [] //will store previous guesses and show them to user
let numGuess = 1 //jaise hi 10 hoga submit ko disable
let playGame = true

if(playGame === true){
  submit.addEventListener("click",function(e){
      e.preventDefault()
      const guess = Number(userInput.value)
      validateGuess(guess)
  })
}

//input is number or not..input is between 1 and 100 or not etc
function validateGuess(guess){
if(isNaN(guess)){
     alert('Please enter a valid number')
} else if(guess<=1){
     alert('Enter number greater than 1')
} else if(guess>=100){
    alert('Enter number less than 100')
} else{
   preGuess.push(guess)
   if(numGuess === 11){
     displayGuess(guess)
     displayMessage(`Game Over and the random number is ${randomNumber}`)
     endGame()
   }
   else{
     displayGuess(guess)
     checkGuess(guess)
     //here no need of displayMessage...will do that in checkGuess(guess is low high?? correct??)
   }
}}

//message will print here on: guess value correct?? guess value low or high??
function checkGuess(guess){
if(guess === randomNumber){
  displayMessage(`You guessed it right`)
  endGame()
} else if(guess < randomNumber){
  displayMessage(`Number is TOOO low`)
} else {
  displayMessage(`Number is TOOO high`)
}}

//it will interact with dom directly(changes :Userinput empty,prevguesses , remaining etc)
function displayGuess(guess){
 userInput.value = ''
 guessSlot.innerHTML = `${preGuess}`
 remaining.innerHTML = `${10-numGuess}`
 numGuess++
}

function displayMessage(message){
     lowOrHi.innerHTML = `<h2>${message}<h2/>`
}

function endGame(){
  userInput.value = '' //unecessary
  userInput.setAttribute("disabled","") //so that we cannot type any number in the guess field
  p.classList.add('button')
  p.innerHTML = `<h2 id='newGame'> Start new Game <h2/>` //also added id so that we can use this in newGame also
  startOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame(){
 const newGameButton = document.querySelector("#newGame")
 newGameButton.addEventListener("click" ,function(e){
   //basically we reset all values here
   randomNumber = Math.round(Math.random() *100 + 1)
   preGuess = []
   numGuess = 1
   remaining.innerHTML = `10`
   guessSlot.innerHTML = ''
   displayMessage('')
   userInput.removeAttribute("disabled") //so that we can enter in guess field when game start
   startOver.removeChild(p) //so that new game button disapper
   
   playGame = true
 })
}

```


