

const assert = require('chai').assert;

const compareNumbers = require('../app1').compareNumbers;


describe('App', function () {

    it('returns The amounts are equal', function () {
        let result = compareNumbers(6, 6);
        assert.equal(result, "The amounts are equal");
    });

    it('returns 4 as larger number', function () {

        let result = compareNumbers(4, 3);
        assert.equal(result, 4);
    });
    it('returns 6 as larger number', function () {

        let result = compareNumbers(5, 6);
        assert.equal(result, 6);
    });

    it('returns 34 as larger number', function () {

        let result = compareNumbers(+34, -30);
        assert.equal(result, 34);
    });

    it('returns -5 as larger ', function () {

        let result = compareNumbers(-5, -6);
        assert.equal(result, -5);
    });

    it('returns 5 as larger ', function () {

        let result = compareNumbers(-1, 5);
        assert.equal(result, 5);
    });

    it('returns 5 as larger ', function () {

        let result = compareNumbers(5, -1);
        assert.equal(result, 5);
    });

    it('returns error ,Please enter a number in Value 1', function () {

        let result = compareNumbers(a, 5);
        assert.equal(result,"Please enter a number in Value 1");
    });
    it('returns error message,Please enter a number in Value 2 ', function () {

        let result = compareNumbers(5, a);
        assert.equal(result, "Please enter a number in Value 2");
    });

    it('return error message ,Please enter a number in Value 2 ', function () {

        let result = compareNumbers(3/4, 1);
        assert.equal(result,"Please enter a number in Value 1");
    });

});





