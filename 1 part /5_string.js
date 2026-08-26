const name = "Aditya ";
const name2 = "Bhardwaj ";
const count = 23;

// wrong----->console.log(name + name2 + count + " Jai");

//string interpretaion
//console.log(`Hello my name is ${name}${name2}and my repo count is ${count}`)

const gamename = new String ('Aditya')

//console.log(gamename[0].toLocaleLowerCase())
//console.log(gamename.length)
//console.log(gamename.__proto__)


const num = "ABCDEFGH";

const chotastring = num.substring(0,5)
//console.log(chotastring);

const sliiii = num.slice(-8,5);
//console.log(sliiii);

const stri = "     Aditya    bh    "
//console.log(stri)
//console.log(stri.trim())

const url = "https://aditya.bhardwaj/aditya%20bhardwja"
const newurl = url.replace('%20','-')
//console.log(newurl)
//console.log(url.includes("aditya"))
//console.log(url.includes("jai"))

const naam = "aditya-bhardwaj-13-af";
//console.log(naam.split('-'));