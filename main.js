//solution 1
var Name = "Refilwe" 
var Institution = "MTN App Academy"
var github_username = "Refilwe3533"

var introduction = "My Name is" +" "+ Name +" "+" , I'm a student at" +" "+ Institution +" "+ "my Github Username is" +" "+ github_username

console.log(introduction)

//Solution 2
var category = ["Best Enterprise Solution","Best Consumer Solution","Best Gaming Solution","Best African Solution","Most Innovative Solution","Best Incubated Solution","Best Educational Solution","Best Agricultural Solution","Best Finacial Solution","Best Health Solution","Best Breakthrough Developer","Best South African Solution","Campus Cup","Hauwei AppgALLERY Categoty 15"]

var dice = Math.random() * 13;
let number = Math.round(dice)

console.log("Dice roll")
console.log(number)

console.log("WINNING category for MTN Business App of the Year in the year 2022")
console.log(category[number])

//Solution 3
const fs = require ('fs')

//Data which will write in a file.
let Data = "App Name - UniWise, Developer - OGO Studio, Category - Educational."

//write data in 'output.txt' .
fs.writeFile('output.txt', Data, (err) => {

    //in case of a error throw err.
    if (err) throw err;
})

console.log ("")
//Read data from file then log
fs.readFile('output.txt', (err, Data) => {
    if (err) throw err;
    console.log("file content")
    console.log(Data.toString());
})