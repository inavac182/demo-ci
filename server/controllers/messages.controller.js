/*jshint esversion: 6, node: true */
/*global require, module */
'use strict';

const Messages = require('../../classes/messages.class.js'),
	  express = require('express');

let usersRouter = express.Router();

usersRouter.route('/hello/:name')
	.get(function(req, res) {
        let message = new Messages(req.params.name);
        res.status(200).json({ message: message.sayHello() });
    });

usersRouter.route('/bye/:name')
    .get(function(req, res) {
        let message = new Messages(req.params.name);
        res.status(200).json({ message: message.sayGoodbye() });
    });

module.exports = usersRouter;