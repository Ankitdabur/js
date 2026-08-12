//getter setter by default class ke paas hote hai pr unhe hum use nhi krenge toh by default jo nature hai vo show krenge ye
//getter define kra toh setter bhi define krna pdega class mein
//_email etc private tarah se hi use krenge 

class User {
    //_email , _password kind of private hi hai isse hum bahar use nhi kr skte
    constructor(email, password){
        this.email = email;
        this.password = password //behind the scene ye constructor email ko j]toh set kr raha hai pr password ko nhi kr raha
    }

    // get email(){
    //     return this._email.toUpperCase()
    // }
    // set email(value){
    //     this._email = value
    // }

    get password(){
        return `${this._password}hitesh` //bina _ constructor aur get mein race lg jaayegi ki konsa waala hoga aur error aayega stcak full ka...toh humne kind of nyya variable hi bna diya _password
    }

    set password(value){
        //password set toh jo aayega wahi ho raha hai(abc) pr jb usse get krenge toh haatho haath get waala mein jo kra hai vo print hoga
        this._password = value //bina _ constructor aur set mein race lg jaayegi ki konsa waala hoga aur error aayega stcak full ka...toh humne kind of nyya variable hi bna diya _password
    }

}


const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.password);

//function get and set (pehle ke time mein ye bc hoti thi)
function myUser(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new myUser("chai@chai.com", "chai")

console.log(chai.email);

//object get and set
const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){  //idhr ye email ek property hi hai
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);