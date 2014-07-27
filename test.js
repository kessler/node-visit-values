var assert = require('assert')
var visitValues = require('./index.js')

describe('visit', function () {
	it('visits', function() {
		var tree = {
			a: {
				b: {
					c: 'd'
				},
				f: [1, 2]
			},
			c: {
				x: 'l',
				f: function () {}
			}
		}

		var results = []

		visitValues(tree, function(v, k, p) {
			//push a stringified form of the arguments for easy lookup later
			results.push(v + ' ' + k + ' ' + JSON.stringify(p))			
		})

		assert.strictEqual(results.length, 4)
		
		assert(~results.indexOf('d c {"c":"d"}'))
		assert(~results.indexOf('1 0 [1,2]'))
		assert(~results.indexOf('2 1 [1,2]'))
		assert(~results.indexOf('l x {"x":"l"}'))
	})	
})