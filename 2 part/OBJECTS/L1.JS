// SINGLETON  ---->  jab literals se bnta hai tb singleton nhi bnta hai 
// par jb literals se bnta hai, tb singleton bnta hai 

// ******************************* OBJECT LITERALS *************************

const mysymbol = Symbol("key1")//keep in mind these 


const JSuser = {
    name: "ADITYA",
    "Full name": "Aditya Bhardwaj",
    [mysymbol]: "AD",
    age: 19,
    location: "VARANASI",
    email: "ADITYA@THEGOD",
    isLoggedIn: false,
    lastLoginDays: ["Monady","Saturdays"]
}
// fetching objects data
// console.log(JSuser.email)
// console.log(JSuser["email"])
// console.log(JSuser["Full name"])
// console.log(JSuser[mysymbol])

//changing objects data
JSuser.email = "Thegod@aditya"
//console.log(JSuser)
//Object.freeze(JSuser)// won't allow to change the data further 
JSuser.email = "asasfaf";
//console.log(JSuser)

JSuser.greeting = function(){
    console.log("Heloo all user ")
}
console.log(JSuser.greeting())

JSuser.greeting2 = function(){
    console.log(`Hello all and aditya user, ${this.name}`)
}
console.log(JSuser.greeting2());