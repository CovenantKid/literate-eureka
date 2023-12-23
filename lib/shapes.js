const fs = require("fs")



class shape {
    constructor(svg){
    this.svg = '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"> \n'

    
 }
 present() {
    return this.svg
}}


class circle extends shape {
    constructor(shapecolor,text,textcolor) {

    }
  }
  class rectangle extends shape {
    constructor(shapecolor,text,textcolor) {
        
    }
  }
  class triangle extends shape {
    constructor(shapecolor,text,textcolor) {
        
    }
  }
module.exports = {circle, rectangle, triangle, decideShape}