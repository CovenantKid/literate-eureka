
// two constants to be used in the creation of the SVG file
const SVGstart = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">'
const SVGend = "\n </svg>"


// function to assemble the shape, and text into a single string for writing SVG file, then writing it
function assembleString(parameters){
const SVGtext = textline(parameters);
console.log(parameters)
const SVG = SVGstart + parameters.SvgShape + SVGtext + SVGend
console.log(SVG)

}

// decide the text that will be used in the file.
function textline(parameters){
const text = parameters.text
const textcolor = parameters.textcolor
console.log(parameters.shape)
// checking shape again to assign the proper text position.
// checks for triangle 
if (parameters.shape === 1){
let SVGtext = '\n<text x="128" y="125" font-size="30" fill="' + textcolor + '"' + ">" + text + '</text>'
return SVGtext
// checks for square
} else if (parameters.shape === 2){
let SVGtext = '\n<text x="30" y="60" font-size="30" fill="' + textcolor + '"' + ">" + text + '</text>'
return SVGtext
// if nothing else, its circle.
} else{
let SVGtext = '\n<text x="125" y="50" font-size="30" fill="' + textcolor + '"' + ">" + text + '</text>'
return SVGtext
}}



module.exports = {assembleString}