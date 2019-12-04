//bring in dependencies
const express = require('express');
const helmet = require('helmet');


//Bring in routers/endpoints
const userRouter = require('./users/userRouter');
const postRouter = require('./posts/postRouter');

//start server
const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {}

function validateUserId(req, res, next) {}

function validateUser(req, res, next) {}

function validatePost(req, res, next) {}



module.exports = server;
