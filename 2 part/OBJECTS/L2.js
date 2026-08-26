const user = new Object()//Singleton object
//console.log(user)
                     
// only difference between them is upper one is singleton and lower one non singleton rest enternal working is same

const user2 = {} // Non singleton objects
//console.log(user2)

user2.id = "2341"
user2.name = "asd"
user2.isloggedin = false

//console.log(user2)

const regularuser ={
    email: "anything.asfi",
    fullname: {
        userfullname:{
            firstname: "aditya",
            lastname: "bhardwaj",
        }
    }
}
//console.log(regularuser.fullname.userfullname.)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}//spreading  
//console.log(obj3)

const users = [
    {
        id: 1,
        emaill: "asfsa.df"
    },
    {
        id: 2,
        emaill: "3r2eer"
    },
    {
        id: 3,
        emaill: "fsadff"
    },
]

//console.log(users[0].emaill)

//console.log(user2)
//console.log(Object.keys(user2));// take or put all the vlaues of key of the user2 in one single array 
//console.log(Object.values(user2));
//console.log(Object.entries(user2));

//console.log(user2.hasOwnProperty('isloggedin'))

