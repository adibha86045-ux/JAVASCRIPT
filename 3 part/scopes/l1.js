// let a = 10;
// const b = 20;
var c = 300;


if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}

//console.log(a);
//console.log(b);
// console.log(c);
// console.log();

function one(){
    const username = "Aditya"

    function two(){
        const website = "yt"
        console.log(username)
    }
    //console.log(website)
    two()
}
//one()


if(true){
    const username = "Aditya"
    if(username === "Aditya"){
        const web = "  youuutube"
        //console.log(username + web)
    }
    //console.log(web)
}
//console.log(username);

// ===================================

console.log(addone(5)) // --------> this is acceptable
function addone(num){
    return num + 1;
}


// Declaration matter when storing function in another variable 
console.log(addtwo(5)) // --------> this is not acceptable 
const addtwo = function (num){
    return num + 2;
}
console.log(addtwo(5)) // --------> this is acceptable 

