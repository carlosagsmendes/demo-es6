import '../lib/main';
import 'jquery';

describe('this is my first test', function() {
	it('should work', function() {
		  assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
	  expect('foo').to.not.equal('bar');
	});
	it('should fail', function() {
	  expect('foo').to.not.equal('foo2');
	});
})