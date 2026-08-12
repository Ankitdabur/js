class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){         //jb hum ye property har uss object ko nhi dena chahte jo iss class ka instance hai tb static use krte hai
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())  //error //not accessible

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId()); //error  //not accessible