const fs = require("fs")
const input = require("./input")

// handles final writing of file.
async function renderlogo(contents){
fs.promises.writeFile("Demo.svg", contents)
console.log("file was written to the lib folder under the name demo.svg")
}


// creates the logo based on input from input.js.
function createlogo(parameters){
console.log(parameters)
// assigns the start of the svg file.
let contents = "<svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'>" 
// uses "parameters" from input to contruct the rest of the file.
switch (shape){
case shape = "circle":
shape = "<circle cx='50' cy='50' r='40' />"
return shape;
case shape = "triangle":
shape = "<polygon points='50 15, 100 100, 0 100'/> fill="  + shapecolor + '/>' + '\n <text x="30" y="75" font-size="20" fill=' + textcolor + '</text>'
case shape = "square":
shape = '<rect width="300" height="200" fill=' + shapecolor + '/>' + '\n <text x="110" y="100" font-size="40" fill=' + textcolor + '</text>'

}

}

module.exports = {renderlogo, createlogo}