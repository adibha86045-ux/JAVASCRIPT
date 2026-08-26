//comparison operators
console.log(null>0); // false
console.log(null<0); // false
console.log(null==0); // false
console.log(null>=0); // true

console.log(undefined>0); // false
console.log(undefined<0); // false
console.log(undefined==0); // false
console.log(undefined>=0); // false

// === (strict equality)
console.log("2" === 2); // false

const id= Symbol('322')
const id2= Symbol('322')
console.log(id === id2); // false

// ARRAY
const fruits = ["apple", "banana", "orange"];

// OBJECT
let myobj={
    name: "Aditya",
    age: 245454223,
}

// FUNCTION
const myfunc = function(){
    console.log("Hello World");
}

// Non-prmitive data types ka return type object hota hai
