var expect = require('chai').expect;
var addTwoNumbers = require('../addTwoNumbers');

// describe: creates a test environment
describe('addTwoNumbers()', function () {
    // it: defines test cases which need to pass
    it('should add two numbers', function () {
        
        // 1. ARRANGE
        var x = 5;
        var y = 1;
        var sum1 = x + y;

        // 2. ACT 
        var sum2 = addTwoNumbers(x, y);

        // 3. ASSERT 
        expect(sum2).to.be.equal(sum1);
    });
});