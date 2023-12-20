const fs = require("fs")
const input = require("./input")

// handles final writing of file.
async function renderlogo(contents){
fs.promises.writeFile("Demo.svg", contents)
console.log("file was written with the name demo.svg")
}


// creates the logo based on input from input.js.
function createlogo(parameters){
// assigns the start of the svg file.
let contents = "<svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'>" 
// uses "parameters" from input to contruct the rest of the file.
let shape = parameters.shape
console.log(shape)
switch (shape){
case shape = 1:
shape = "\n<circle cx='50' cy='50' r='40' fill=" + "'"+ parameters.shapecolor + "'" + '/>' + '\n<text x="30" y="60" font-size="20" fill='  + "'" + parameters.textcolor + "'" + '>' + parameters.text + '</text> \n </svg>'
contents = contents + shape 
renderlogo(contents)
break;
case shape = 2:
shape = "\n<polygon points='50 15, 100 100, 0 100' fill="  + "'"+ parameters.shapecolor + "'" + '/>' + '\n<text x="30" y="75" font-size="20" fill='  + "'" + parameters.textcolor + "'" + '>' + parameters.text + '</text> \n </svg>'
contents = contents + shape 
renderlogo(contents)
break;
case shape = 3:
shape = '\n<rect width="300" height="200" fill=' + "'"+ parameters.shapecolor + "'" + '/>' + '\n<text x="110" y="100" font-size="40" fill='  + "'" + parameters.textcolor + "'" + '>' + parameters.text + '</text> \n </svg>'
contents = contents + shape 
renderlogo(contents)
break;
}
}

module.exports = {renderlogo, createlogo}