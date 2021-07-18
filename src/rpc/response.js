'use strict';

class JsonRpcResponse {

    constructor(jsonrpc, id) {
        this.jsonrpc = jsonrpc;
        this.id = id;
    }
}

class JsonRpcErrorResponse extends JsonRpcResponse {

    constructor(jsonrpc, id, error) {
        super(jsonrpc, id);
        this.error = error;
    }
}

class JsonRpcSuccessResponse extends JsonRpcResponse {

    constructor(jsonrpc, id, result) {
        super(jsonrpc, id);
        this.result = result;
    }
}

module.exports = {
    JsonRpcErrorResponse,
    JsonRpcSuccessResponse
};
