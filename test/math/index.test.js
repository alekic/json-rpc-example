'use strict';

const { expect } = require('chai');
const {
    ArithmeticError,
    divide,
    multiply,
    sum,
    subtract
} = require('../../src/math');

describe('math', function () {
    describe('divide', function () {
        it('should return correct quotient', function () {
            expect(divide(42, 3)).to.equal(14);
        });

        it('should throw when dividing by zero', function () {
            expect(() => divide(3, 0))
                .to.throw(ArithmeticError)
                .with.nested.property('data.details', 'Cannot divide by zero');
        });
    });

    describe('multiply', function () {
        it('should return correct product', function () {
            expect(multiply([2, 2, 2])).to.equal(8);
        });

        it('should return NaN when no factors provided', function () {
            expect(multiply()).to.be.NaN;
            expect(multiply(null)).to.be.NaN;
            expect(multiply([])).to.be.NaN;
        });
    });

    describe('sum', function () {
        it('should return correct sum', function () {
            expect(sum([1, 2])).to.equal(3);
        });

        it('should return NaN when no summands provided', function () {
            expect(sum()).to.be.NaN;
            expect(sum(null)).to.be.NaN;
            expect(sum([])).to.be.NaN;
        });
    });

    describe('subtract', function () {
        it('should return correct difference', function () {
            expect(subtract(1, 2)).to.equal(-1);
        });
    });
});
