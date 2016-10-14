/* jshint esversion: 6, node: true */
'use strict';

class Messages{
	constructor (name) {
		this.name = name;
	}

	sayHello () {
		return 'Hello ' + this.name;
	}

	sayGoodbye() {
		return 'Bye, ' + this.name;
	}
}

module.exports = Messages;