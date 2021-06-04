// boundaries: (boundary testing)
// 0 items
// 1 item
// multiple items

const Cart = require('./Cart');
const expect = require('chai').expect;

describe('Cart', () => {

    describe('addItem', () => {

        let cart, myPart;

        beforeEach(() => {
            cart = new Cart();
            myPart = {};
        });

        it("should have only 1 item with a qty of 1 after addItem is called on a fresh cart with a qty of 1", () => {
            cart.addItem(myPart, 1);

            expect(cart.lineItems.length).to.eq(1);
            // the above is equivalent to: (since finding the `length` of things is so commonly tested)
            expect(cart.lineItems).to.have.lengthOf(1);
            expect(cart.lineItems[0].quantity).to.eq(1);
            // the two above expect statements can be collapsed to the below using deep comparison:
            expect(cart.lineItems).to.eql([{part: {}, quantity: 1}]);
        });

        it("should have only 1 item with a qty of 2 after addItem is called on a fresh cart twice", () => {
            cart.addItem(myPart, 1);
            cart.addItem(myPart, 1);

            expect(cart.lineItems).to.have.lengthOf(1);
            expect(cart.lineItems[0].quantity).to.eq(2);
        });

        it("should add quantities together when addItem is called", () => {
            cart.addItem(myPart, 2);
            cart.addItem(myPart, 4);

            expect(cart.lineItems).to.have.lengthOf(1);
            expect(cart.lineItems[0].quantity).to.eq(6);
        });

        it("should add 2 items when addItem is called with different parts", () => {
            let myPart2 = {}
            cart.addItem(myPart, 2);
            cart.addItem(myPart2, 3);

            expect(cart.lineItems).to.have.lengthOf(2);
        });
    });

    describe('getTotalCost', () => {
        let cart;

        beforeEach(() => {
            cart = new Cart();
        });

        it("should be 0 with no items", () => {
            expect(cart.getTotalCost()).to.eq(0);
        });

        it("should be 5 with one item with a qty of 1 and a cost of 5", () => {
            let myPart1 = {cost: 5};
            cart.addItem(myPart1, 1);

            expect(cart.getTotalCost()).to.eq(5);
        });

        it("should produce correct total with multiple items", () => {
            let myPart1 = {cost: 5};
            let myPart2 = {cost: 10};
            cart.addItem(myPart1, 2);
            cart.addItem(myPart2, 3);

            expect(cart.getTotalCost()).to.eq(40);
        });

        describe("getTotalCost variations", () => {
            let partCost5 = {cost: 5};
            let partCost10 = {cost: 10};
            let emptyLineItems = [];
            let singleItemLineItems = [{part: partCost5, quantity: 1}];
            let multipleLineItems = [{part: partCost5, quantity: 1}, {part: partCost10, quantity: 1}];

            let testVariations = [
                {lineItems: emptyLineItems, expected: 0},
                {lineItems: singleItemLineItems, expected: 5},
                {lineItems: multipleLineItems, expected: 15}
            ]

            testVariations.forEach(test => {
                it(`correctly calculates total cost with ${test.lineItems.length} items`, () => {
                    cart.lineItems = test.lineItems;
                    expect(cart.getTotalCost()).to.eq(test.expected);
                });
            });
        });
    });

    // chai provides the `eql` function to perform deep comparison
    describe('empty', () => {
        let cart;

        beforeEach(() => {
            cart = new Cart();
        });

        it("should have an empty array", () => {
            cart.lineItems = [{}, {}];

            cart.empty();

            expect(cart.lineItems).to.eql([]);
        });

        it("should have a brand new (empty) object when called", () => {
            let originalLineItems = cart.lineItems;

            cart.empty();

            // note here that we are checking that `cart.lineItems` and `originalLineItems` refer to different objects
            expect(cart.lineItems).to.not.eq(originalLineItems);
        });
    });
});