const express = require('express');
const loginRoute = require('./routes/login.router');
const userRoute = require('./routes/user.router');
// ...

const app = express();

app.use(express.json());

app.use('/login', loginRoute);
app.use('/user', userRoute);

module.exports = app;
