function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername(username)
     SetUsername.call(this , username)  //SetUsername ka refrence hold krke rkhna hai iske liye call use kra..
     //(kyuki iska toh environment delete exexute hone ke baad toh iske saare variable bhi delete toh usko hold krna pdega)
     // we are giving our this to store the value (createUser this) 
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);