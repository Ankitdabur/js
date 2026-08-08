# Project related to DOM

## Project link
[click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js
)
# Solution code

## Project 2

``` javascript
const form = document.querySelector('form')
// form sumbit 2 tarah se hota...lekin jb bhi submit hota hai toh server ke pass data chla jaata hai...toh iske ye default action ko rokna pdega

// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit" , function(e){
      e.preventDefault()

  // document.querySelector("#height").value // return in string so  convert in number 
  const height = Number(document.querySelector("#height").value);
  const weight = Number(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if( height<0 || isNaN(height) || height === ''){
    result.innerHTML = `Please Enter a valid height ${height}`
  }
  else if( weight<0 || isNaN(weight) || weight === ''){
    result.innerHTML = `Please Enter a valid weight ${weight}`
  }
  else{
    const mybmi = (weight / ((height * height) / 10000)).toFixed(2)
    result.innerHTML = `<span>${mybmi}<span/>`

    if(mybmi<18.6){
      result.innerHTML += "under weight"
    }
    else if(18.6<=mybmi<24.9){
      result.innerHTML += "<p>Normal Range</p>"; 
    }
    else{
      result.innerHTML += "<p>Overweight</p>"; 
    }
  }
})

//without using form , adding eventlistner on calculate 
const calculate = document.querySelector("button");

calculate.addEventListener("click", function (e) {
    e.preventDefault()
    console.log(e) 
    const height = Number(document.querySelector("#height").value);
    const weight = Number(document.querySelector("#weight").value);
    const result = document.querySelector("#results");

    if (height <= 0 || isNaN(height)) {
        result.innerHTML = "Please enter a valid height";
    }
    else if (weight <= 0 || isNaN(weight)) {
        result.innerHTML = "Please enter a valid weight";
    }
    else {
        const mybmi = Number(
            (weight / ((height * height) / 10000)).toFixed(2)
        );

        result.innerHTML = `<span>BMI: ${mybmi}</span>`;

        if (mybmi < 18.6) {
            result.innerHTML += "<p>Underweight</p>";
        }
        else if (mybmi >= 18.6 && mybmi < 24.9) {
            result.innerHTML += "<p>Normal Range</p>";
        }
        else {
            result.innerHTML += "<p>Overweight</p>";
        }
    }
});

```