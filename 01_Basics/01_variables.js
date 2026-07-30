const accountId = 19821
let accountEmail = "ankit@gmail.com"
var accountPass = "1234"
// not recommended. just for knowledge that we can do this 
accountCity = "Jaipur"   
let accountState;

// accountId = 2   not allowed

/*
prefer not to use var
beacuse of issue in block scope and fuctional scope
*/

console.table([accountId , accountEmail , accountPass, accountCity,accountState])
