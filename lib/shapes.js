const write = require("./writetofile")
// switch case to decide which shape to generate based on input from input.js, then send the new object with the SVG shape to writetoFile
function Decideshape(parameters){
let shape = parameters.shape
switch(shape){

case shape = 3:
    shapecolor = parameters.shapecolor
    shape = new circle(shapecolor);
    shape = GenerateCircle(shape)
    parameters.SvgShape = shape;
    delete parameters.shapecolor;
    write.assembleString(parameters)
    break;

case shape = 2:
    shapecolor = parameters.shapecolor
    shape = new square(shapecolor);
    shape = GenerateSquare(shape)
    parameters.SvgShape = shape;
    delete parameters.shapecolor;
    write.assembleString(parameters)
    break;

case shape = 1:
    shapecolor = parameters.shapecolor;
    shape = new triangle(shapecolor);
    shape = GenerateTriangle(shape);
    parameters.SvgShape = shape;
    delete parameters.shapecolor;
    write.assembleString(parameters)
    break;
}}





class circle{
    constructor(shapecolor) {
     this.shapecolor = shapecolor;
    }}
GenerateCircle = function(){
 return shape =('\n<circle cx="50" cy="50" r="50" fill="' + this.shapecolor + '"' + " />") 
}



class square{
    constructor(shapecolor) {
     this.shapecolor = shapecolor;
    }}
GenerateSquare = function(){
return shape = ('\n<rect width="300" height="100" fill="' + this.shapecolor + '"' + " />")
}



class triangle{
    constructor(shapecolor) {
     this.shapecolor = shapecolor;
    }}
GenerateTriangle = function(){
return shape = ('\n<polygon points="150, 18 244, 182 56, 182" fill="' + this.shapecolor + '"' + " />")
}



module.exports = {Decideshape, circle, square, triangle}