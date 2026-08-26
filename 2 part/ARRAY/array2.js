const marvelheroes = ["thor","ironman","spiderman"]
const dcheroes = ["superman","flash","batman"]

//marvelheroes.push(dcheroes) // take dcheroes input as a single element not merge or combine both of them 
//console.log(marvelheroes); // print four elemrnt 3 of marvel heroes and single element for whole dc heroes

//console.log(marvelheroes[3][0]);// gives the output for the 3rd elemtent's element

const hereos = marvelheroes.concat(dcheroes)
// console.log(hereos)

const heroes = [...marvelheroes, ...dcheroes] // spread 
// console.log(heroes)

const anotherarray = [1,2,3,[4,5,6],7,[4,3,[3,4,6]]]
const realanotherarray = anotherarray.flat(Infinity)
//console.log(realanotherarray)

console.log(Array.isArray("ADITYA"))
console.log(Array.from("ADITYA"))
console.log(Array.from({name: "ADITYA"}))

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3))