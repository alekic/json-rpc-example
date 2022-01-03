'use strict';

const math = require('../../math');
const { JsonRpcServer } = require('@alekic/json-rpc');

function hello(name) {
    return new Promise(resolve => {
        setTimeout(
            () => resolve(`Hello, ${name || 'World'}!`),
            1000
        );
    });
}

const server = new JsonRpcServer();

server.addMethod('hello', hello, [
    { name: 'name', type: 'string', required: false }
]);

server.addMethod('math.divide', math.divide, [
    { name: 'dividend', type: 'number' },
    { name: 'divisor', type: 'number' }
]);

server.addMethod('math.multiply', math.multiply, [
    { name: 'factors', type: 'array' }
]);

server.addMethod('math.subtract', math.subtract, [
    { name: 'minuend', type: 'number' },
    { name: 'subtrahend', type: 'number' }
]);

server.addMethod('math.sum', math.sum, [
    { name: 'summands', type: 'array' }
]);

module.exports = server;
