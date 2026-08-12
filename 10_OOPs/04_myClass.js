// class User {
//     constructor(username , email , password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }  
    
//     encryptPassword(){
//         return `${this.password}abc`
//     }//jaise hi class ka objrct bnega ussi time constructor call hoga
// }

// const chai = new User("Ankit" , "ankit@gmail.com" , "123")
// console.log(chai.encryptPassword())

//behind the scene...agr claases nhi hoti toh kya krte
//this function doing same work as class
function User(username, email , password){
    this.username = username;
        this.email = email;
        this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

const tea = new User("ankit" , "ankit@gmail.com" , "123")
console.log(tea.encryptPassword())