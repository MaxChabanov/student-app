//Install express server
const express = require("express");
const bodyParser = require('body-parser');
const authRoute = require('./routes/auth');

const app = express();

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('cors')())

app.use('/api/auth', authRoute)

module.exports = app;
