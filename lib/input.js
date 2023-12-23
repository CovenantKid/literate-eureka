const inquirer = require("inquirer");
const shapes = require("./shapes")
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength', MaxLengthInputPrompt)


 function getinput(){
    inquirer.prompt([
    {
        type: "list",
        name: "shape",
        message: "What shape would you like your logo to be?",
        choices: [
            {name: "triangle", value:2},
            {name: "square",  value:3},
            {name: "circle",  value:1},
        ]
    },
    {
        type: "maxlength",
        name: "text",
        message: "What text would you like in the logo? Limited to 3 characters.",
        maxLength: 3
    },
    {
        type: "input",
        name: "shapecolor",
        message: "What color would you like your logo's shape to be? Please enter a hexadecimal color OR keyword.",
    },
    {
        type: "input",
        name: "textcolor",
        message: "What color would you like your text to be? Please enter a hexadecimal color OR keyword.",
    },

]).then((answers) => {
    shapes.decideShape(answers)
  })

}

module.exports = {getinput}