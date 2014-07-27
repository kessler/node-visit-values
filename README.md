# visit values

### install
npm install --save visit-values

### usage
```javascript
var visit = require('visit-values')
var object = { a: { b: 'c' }}

// prints 'c'
visit(object, function(value, key, parent) {
	console.log(value)
})
```