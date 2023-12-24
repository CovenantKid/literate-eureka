const fs = require("fs")

// switch case to decide which shape to generate based on input from input.js
function Decideshape(parameters){
let shape = parameters.shape
switch(shape){
case shape = 3:
 shapecolor = parameters.shapecolor
 shape = new circle(shapecolor);
 shape = GenerateCircle(shape)
 console.log(shape)
return shape
case shape = 2:
 shapecolor = parameters.shapecolor
 shape = new square(shapecolor);
 shape = GenerateSquare(shape)
 console.log(shape)
 return shape
case shape = 1:
 shapecolor = parameters.shapecolor
 shape = new triangle(shapecolor);
 shape = GenerateTriangle(shape)
 console.log(shape)
 return shape
}}





class circle{
    constructor(shapecolor) {
     this.shapecolor = shapecolor;
    }}
GenerateCircle = function(){
 return shape =('<circle cx="50" cy="50" r="50" fill="' + this.shapecolor + '"' + " />") 
}



class square{
    constructor(shapecolor) {
     this.shapecolor = shapecolor;
    }}
GenerateSquare = function(){
return shape = ('<rect width="300" height="200" fill="' + this.shapecolor + '"' + " />")
}



class triangle{
    constructor(shapecolor) {
     this.shapecolor = shapecolor;
    }}
GenerateTriangle = function(){
return shape = ('<polygon points="150, 18 244, 182 56, 182" fill="' + this.shapecolor + '"' + " />")
}



module.exports = {Decideshape, circle, square, triangle}