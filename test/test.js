// with mocha, we will typically have a single nested structure as shown below
// typically the outside `describe` refers to a class being tested
// describe("parts", () => {
    
//     // while the inner `describe` refers to specific methods within the class
//     describe("add method", () => {

//         // the `it` function is a specfic test and describes what should happen
//         it("should add a part to the parts list", () => {

//         });

//         it("should not add duplicate parts", () => {

//         });

//     });

//     describe("remove method", () => {

//     });

// });


// "test": "mocha --watch" in the package.json file will make mocha re-run if project code changes

// "test": "mocha './app/**/*.spec.js'" will tell mocha to look in the app directory (starting from project directory)
// and run test files that follow `*.spec.js`. Note that `**` refers to looking ANYWHERE (including subdirectories)
// Also note that the search string parameter is within single quotes since the mocha script is specified in double quotes
// in the package.json file

const expect = require('chai').expect;
// const should = require('chai').should();
// const assert = require('chai').assert;

describe("some tests", () => {

    it("is true", () => {
        let result = true;
        expect(result).to.be.true;
    });

    it("should pass", () => {
        //
    });

});