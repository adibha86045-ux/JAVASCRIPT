let score ='33'
console.log(typeof score)
console.log(typeof(score))

//type changing
let newScore = Number(score)
console.log(typeof newScore)


// always check whether the number which is converted is valid
// type of NaN is number

// converting null, undefined, string to number
let n1=null
let n2=undefined
let n3='abc'
let n4= "33hws"
let newN1 = Number(n1)
let newN2 = Number(n2)
let newN3 = Number(n3)
let newN4 = Number(n4)
console.log("null:", newN1) 
console.log("undefined:", newN2) 
console.log("abc:", newN3)
console.log("33hws:", newN4) 

// converting number to string
let n5=21
let stringN5 = String(n5)
console.log("21:", stringN5)
console.log("type of 21:", typeof stringN5)