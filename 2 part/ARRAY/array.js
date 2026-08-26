// SHALLOW COPY MEAN CHANGE BY REFERANCE 
// DEEP COPY MEAN CHANGE BY VALUE 

const arr = [0,1,2,3,4,5,6]
//console.log(arr)
const arr2 = ["iron man","spider man","thor "]
//console.log(arr2)
const arr3 = new Array(1,2,3,4,5,6)

arr3.push(7) // add in the last
//console.log(arr3)

arr3.pop() // remove from the last
//console.log(arr3)

arr3.unshift(-1) // add in the first position 
//console.log(arr3)

arr3.shift() // remove in the first position 
//console.log(arr3)

//console.log(arr3.includes(23))
//console.log(arr3.indexOf(23))
//console.log(arr3.indexOf(3))

const newarr3 = arr3.join() // change the array into string  
//console.log(newarr3)

//slice and splice
console.log("A = ",arr3)
const arr3new = arr3.slice(1,3)
console.log(arr3new);
console.log("B = ",arr3)
const arr3new2 = arr3.splice(1,3)
console.log(arr3new2);
console.log("C = ",arr3)
/*
            splice me jo array ke elements splice hote hai vo original 
            array me se nikal jaate hai jbki slice me aisa nhi hota hai 
*/
