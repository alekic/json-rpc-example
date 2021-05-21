'use strict';

const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();
app.set('port', PORT);
app.use(express.json());

app.get('/', (req, res, next) => {
    res.send({
        message: 'Hello, World!'
    });
});

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});

module.exports = app;
