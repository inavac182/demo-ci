/* jshint esversion: 6, node: true */

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