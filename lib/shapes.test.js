const shapes = require("./shapes");


// given that the color is blue, the result should be a pass.
let shape1 = new shapes.triangle;
let shape2 = new shapes.circle;
let shape3 = new shapes.square;
shapecolor = "blue";

test("provides SVG for triangle with the given color.",()=> {
    expect(GenerateTriangle(shape1)).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
})

test("provides SVG for circle with the given color.",()=> {
    expect(GenerateCircle(shape2)).toBe('<circle cx="50" cy="50" r="50" fill="blue" />');
})

test("provides SVG for square with the given color.",()=> {
    expect(GenerateSquare(shape3)).toBe('<rect width="300" height="200" fill="blue" />');
})
