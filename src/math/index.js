'use strict';

const JsonRpcError = require('../rpc/error');
const { isEmpty } = require('../util');

class ArithmeticError extends JsonRpcError {

    constructor(data) {
        super(-100, 'Arithmetic error', data);
    }
}

module.exports = {
    ArithmeticError,

    divide: function (dividend, divisor) {
        if (divisor === 0) {
            throw new ArithmeticError({
                details: 'Cannot divide by zero.'
            });
        }

        return dividend / divisor;
    },

    multiply: function (factors) {
        if (isEmpty(factors)) {
            return NaN;
        }

        return factors.reduce((a, b) => a * b, 1);
    },

    sum: function (summands) {
        if (isEmpty(summands)) {
            return NaN;
        }

        return summands.reduce((a, b) => a + b, 0);
    },

    subtract: function (minuend, subtrahend) {
        return minuend - subtrahend;
    }
};
