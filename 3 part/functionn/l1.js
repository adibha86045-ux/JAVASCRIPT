function saymyname(){
    console.log("A")
    console.log("D")
    console.log("I")
    console.log("T")
    console.log("Y")
    console.log("A")
}

//saymyname()

function addTwoNumbers(number1, number2){ // here they are parameters 
    //console.log(number1 + number2)
    let sum = number1 + number2
    return sum;
    // return number1 + number2   -----> also correct
    //console.log("ADITYA") // won't ever excute because we have returned the valuse or exited the function before this line 
}

const result = addTwoNumbers(3,6) // here they are arguments 

//console.log("Result: ",result)

function loginusermessage(username ="USER" ){ // USER is a default value if nothing is input then user will print 
    if (username === undefined /* Or this is also correct ----> !username */){
        //console.log("Please enter a name ")
        return
    }
    return `${username} just logged in` 
}

//console.log(loginusermessage("ADITYA"))
//console.log(loginusermessage())

 //***************************************
 //     ... (three dots ) are also lnown as rest operators and also known as spread operatores 
 //      it is said rest operatores or spread operators on the method or place where we use it 
 //      on that basis it is defined 
 //  *************************************/


function calculatecartprice(...num1){/*(if i do (val1,val2,...num1   ----> only 300 ,400,500 will print becacuse val1 will occupy 100 and val2 will occupy 200 ))* */ // if i do without ... the console will print or the function will only return the first value but when we do this (...)all element will return in the form a single array 
    return num1
}
//console.log(calculatecartprice(100,200,300,400,500))

const krta = {
    upaygnaam: "Aditya",
    daam: 21312
}
function handleobjects(anyobjects){
   // console.log(`upaygnaam is ${anyobjects.upaygnaam} and the price is ${anyobjects.daam}`);
}
handleobjects(krta)


const mynewarray = [200,400,100,500]
function returnsecondeement(getarray){
    return getarray[1]
}
//console.log(returnsecondeement(mynewarray))
//console.log(returnsecondeement([100,200,300,400]))

