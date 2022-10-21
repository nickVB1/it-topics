require('dotenv').config();
const express = require('express');

const { default: mongoose } = require('mongoose');
const serverless = require('serverless-http');

const router = require('./routes');

const Campus = require('./models/campus');



const app = express();

app.use(express.json());
app.use('/.netlify/functions/api', router);





mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })

module.exports.handler = serverless(app);