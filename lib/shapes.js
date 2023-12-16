const fs = require("fs")
const input = require("./input")

// handles final writing of file.
async function renderlogo(){
contents = await createlogo()
fs.promises.writeFile("Demo.svg", contents)
}


// creates the logo based on input from input.js.
function createlogo(){
let contents = "<svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'>"
return contents
}

try {
    renderlogo()
    console.log("The file was generated succesfully into the lib folder.")
} catch (error) {
    console.error(error)
    console.log("The file could not be generated due to an error, please see above for details.")
} 


renderlogo()
module.exports = {renderlogo}