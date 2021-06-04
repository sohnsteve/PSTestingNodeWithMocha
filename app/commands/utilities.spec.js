const expect = require('chai').expect;
// const should = require('chai').should();
// const assert = require('chai').assert;

const utilities = require('./utilities');

describe("utilities", () => {

    describe('getArgument', () => {

        // beforeEach hook
        // this will run, as the name suggests, before each test in the scope it is called
        beforeEach(() => {
            console.log("before each");
        });

        // afterEach hook
        // like beforeEach-- typical for teardown
        afterEach(() => {
            console.log("after each");
        });

        before(() => {
            console.log("before");
        });

        after(() => {
            console.log("after");
        });

        it("should return the second word when asked for the first parameter", () => {
            let firstArg = utilities.getArgument("command argument", 1);
            expect(firstArg).to.eq("argument");
        });
    
        it("should return the third word when asked for the second parameter", () => {
            let secondArg = utilities.getArgument("command argument1 argument2", 2);
            expect(secondArg).to.eq("argument2");
        });

        it("should return undefined when asked for a parameter that doesn't exist", () => {
            let thirdArg = utilities.getArgument("command argument1 argument2", 3);
            expect(thirdArg).to.be.undefined;
        });

    });

});