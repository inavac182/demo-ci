/*jshint esversion: 6, node: true */
/*global require, module */
'use strict';

const express = require('express'),
	    router = express.Router();

router.use('/messages', require('./controllers/messages.controller.js'));

 module.exports = router;


