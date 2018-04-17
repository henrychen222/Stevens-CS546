//require both geometry.js and utilities.js
const index = require("./geometry");
const index2 = require("./utilities");


//utilities.js testing example
const first = { a: 2, b: 3 };
const second = { a: 2, b: 4 };
const third = { a: 2, b: 3 };
const testArr = ["a", "a", "b", "a", "b", "c"];
const test_charMap = "Hello, the pie is in the oven";

//test exported method 5 times
for (var i = 1; i <= 5; i++) {
    console.log(index2.deepEquality(first, second));
    console.log(index2.deepEquality(first, third));
    console.log(index2.uniqueElements(testArr));
    console.log(index2.countOfEachCharacterInString(test_charMap));
}


//geometry.js testing example
const length = 3,
    width = 4,
    height = 5,
    radius = 15;

//test exported method 5 times
for (var i = 1; i <= 5; i++) {
    console.log("RectangularPrism volumn is: " + index.volumeOfRectangularPrism(length, width, height));
    console.log("RectangularPrism surface area is: " + index.surfaceAreaOfRectangularPrism(length, width, height));
    console.log("Sphere volume is: " + index.volumeOfSphere(radius));
    console.log("Sphere surface area is: " + index.surfaceAreaOfSphere(radius) + "\n");
}
