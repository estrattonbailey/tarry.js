# tarry.js
Tiny composable sequencing utility. **250 bytes gzipped.**

## Usage
```javascript
import { tarry, queue } from 'tarry.js'
```

### `tarry`
Pass a function to convert it to a *delay-able* function.

```javascript
const myFunc = () => console.log('Hello world')

const myDelayedFunc = tarry(myFunc, 200)

myDelayedFunc() // fires myFunc after 200ms

myDelayedFunc(500) // fires myFunc after 500ms

myDelayedFunc(1000) // fires myFunc after 1000ms
```

### `queue`
Pass a series of `tarry` functions to create a call-able sequence.
```javascript
const a = tarry(() => {}, 200)
const b = tarry(() => {})
const c = tarry(() => {}, 1000)

const someBoolean = false

const sequence = queue(a, b(someBoolean ? 200 : 1000), c(500))

sequence() // calls `a` in 200ms, `b` in 1000ms, and `c` in 500ms
```

# API

### tarry(function[, delay])
Returns a delayed function. If no delay is given, the function will be called
immediately.

The returned function can then accept a delay as its only parameter. This will
override the `delay` passed in the original definition (if any).

### queue(function[, ...functions])
Accepts a series of functions returned from `tarry` calls. Returns a function.
When called, executes all functions in the queue, according to their order and
`delay` values.

# What is this for?
I use it fairly often for animations and step-sequenced flows. Handy, but certainly
not necessary.

## License
MIT License © [Eric Bailey](https://estrattonbailey.com)
