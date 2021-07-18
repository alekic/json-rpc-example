'use strict';

const express = require('express');
const rpc = require('./routes/rpc');

const PORT = process.env.PORT || 3000;

const app = express();
app.set('port', PORT);
app.use(express.json());

app.use('/rpc', rpc.router, rpc.errorHandler);

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});

module.exports = app;
