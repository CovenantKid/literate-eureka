const shapes = require("./shapes")
const shape = new triangle;
shape.setColor("blue");

test("provides SVG for triangle with the given color.",()=> {
    expect(GenerateTriangle()).tobe('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
})
// expected output given the color blue should be <polygon points="150, 18 244, 182 56, 182" fill="blue" />