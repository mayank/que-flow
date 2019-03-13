# que-flow
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmayank%2Fque-flow.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmayank%2Fque-flow?ref=badge_shield)

Advance promise chain including naming, injecting between

### Warning: this project is highly unstable and under development

### Install
```bash
npm install que-flow
```


### Examples

When you generally use the `q` library from node.
```javascript
var Q = require ('q');

Q(promiseFunction1)
.then(promiseFunction2)
.then(promiseFunction3)
.then(promiseFunction4)
...
```

using `que-flow` you can name your chain, each promise
```javascript
var flow = require('que-flow');

var chain = flow('flowchain')
.then('promiseFunction1', promiseFunction1)
.then('promiseFunction2', promiseFunction2)
.then('promiseFunction3', promiseFunction3)
...
```

Insert inbetween chains
```javascript
chain.append('appendFunc', 'promiseFunction1', appendFunc);

chain.prepend('prependFunc', 'promiseFunction1', prependFunc);
```

Dynamically executing the whole chain
```javascript
chain.start();

// executes functions in following order
/*
 * prependFunc
 * promiseFunction1
 * appendFunc
 * promiseFunction2
 * promiseFunction3
 *
*/
```


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmayank%2Fque-flow.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmayank%2Fque-flow?ref=badge_large)