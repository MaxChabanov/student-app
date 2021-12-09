//Install express server
const express = require("express");
const bodyParser = require('body-parser');
const authRoute = require('./routes/auth');
const authModule = require('./modules/auth');

const app = express();

authModule.main().catch(console.error);

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('cors')())

app.use('/api/auth', authRoute)

module.exports = app;
