const course ={
    coursename: "JS in hindii",
    price: "9999",
    courseinstructor: "hitesh"
}
//course.courseinstructor

const {courseinstructor} = course
//console.log(courseinstructor)

// destructuring
const {courseinstructor: instructor} = course
console.log(instructor)

// API -----> Both key and value are in string unlike the object which have only value in string not the key also 
{
    "name": "Aditya",
    "coursename": "JavaScript",
    "price": "1231231"
}

[
    {},
    {},   // -----------> it is also a api 
    {}    // -----------> only object like api is not there it can also be like this array containing objects
]