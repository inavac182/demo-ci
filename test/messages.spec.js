/*jshint esversion: 6, node: true */
/*global require, module, describe, it, beforeEach, afterEach, before, after */
'use strict';

const should = require('should'),
	  path = require('path'),
	  env = process.env.NODE_ENV || 'dev',
	  Messages = require('../classes/messages.class.js');

describe('Messages tests', () => {
  	let users;

  	beforeEach(() => {
    	
    });

  	afterEach(()=>{
      
  	});

  	describe('/messages', () => {
		  it('Should say Hello correctly with the name passed', () => {
		  	let messages = new Messages('Felipe');
      		should.equal(messages.sayHello(), 'Hello, Felipe');
    	});

    	it('Should say Goodbye correctly with the name passed', () => {
    		let messages = new Messages('Felipe');
      		should.equal(messages.sayGoodbye(), 'Bye, Felipe');
    	});
	});

});