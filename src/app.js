const express = require('express');
const loginRoute = require('./routes/login.router');
// ...

const app = express();

app.use(express.json());

app.use('/login', loginRoute);

module.exports = app;
