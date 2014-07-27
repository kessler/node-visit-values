/*
	visit all the children of a javascript object

	the visit function signature is:

	function(value, key, parent) {}
*/
var visit = module.exports = function (current, fn) {

	for (var k in current) {
		var value = current[k]

		if (value === undefined || value === null) continue

		if (typeof value === 'object' || typeof value === 'function') {
			visit(current[k], fn)
			continue
		}

		fn(current[k], k, current)
	}
}