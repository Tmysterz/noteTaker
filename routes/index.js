const express = require('express');

const htmlRoutes = require('./HTMLroutes');
const apiRoutes = require('./apiRoutes')

const app = express();

app.use('/api',apiRoutes);
app.use(htmlRoutes);


module.exports = app;