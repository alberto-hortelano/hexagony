var expect = require('chai').expect;
var { add, substract } = require('../dist/assembly');

describe('add()', function () {
	it('should add two numbers', function () {
		var x = 5;
		var y = 1;
		var result = add(x, y);
		expect(result).to.be.equal(x + y);
	});
});

describe('substract()', function () {
	it('should substract two numbers', function () {
		var x = 5;
		var y = 1;
		var result = substract(x, y);
		expect(result).to.be.equal(x - y);
	});
});
