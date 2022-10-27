const express = require('express');
const loginRoute = require('./routes/login.router');
const userRoute = require('./routes/user.router');
const categoryRoute = require('./routes/category.router');
const postRoute = require('./routes/post.router');
// ...

const app = express();

app.use(express.json());

app.use('/login', loginRoute);
app.use('/user', userRoute);
app.use('/categories', categoryRoute);
app.use('/post', postRoute);

module.exports = app;
