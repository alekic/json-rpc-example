'use strict';

const express = require('express');
const JsonRpcError = require('../../rpc/error');
const { JsonRpcErrorResponse } = require('../../rpc/response');
const { isEmpty } = require('../../util');
const server = require('./server');

const router = express.Router();

router.post('/', (req, res, next) => {
    server.handle(req.body, (err, response) => {
        if (err) {
            return next(err);
        }

        if (isEmpty(response)) {
            return res.status(204).end();
        }

        res.send(response);
    });
});

module.exports = {
    router,

    // eslint-disable-next-line no-unused-vars
    errorHandler: (err, req, res, next) => {
        if (err.type === 'entity.parse.failed') {
            return res.status(err.status).send(new JsonRpcErrorResponse(
                null,
                JsonRpcError.ParseError().toJson()
            ));
        }

        res.status(500).send(new JsonRpcErrorResponse(
            null,
            JsonRpcError.InternalError().toJson()
        ));
    }
};
