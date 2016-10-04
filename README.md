# tarry 
A super-light, composable sequencing library. 

ES6: **~750bytes gzipped** with UMD

ES5 (CommonJS, ES6 exports): **~335bytes gzipped**

## Usage
```javascript
import { tarry, queue } from 'tarry'

const modal = document.getElementById('modal')

const show = tarry(
  () => modal.style.display = 'block'
)
const hide = tarry(
  () => modal.style.display = 'none'
)
const toggleClass = tarry(
  () => (
    modal.classList.contains('is-active')
      ? modal.classList.remove('is-active')
      : modal.classList.add('is-active')
  )
, 500) // with 500ms delay

const open = queue(show, toggleClass)
const close = queue(toggleClass(0), hide(500))

open() // displays modal, adds visibility class (500ms delay)
close() // removes visibility class (no delay), waits 500ms for CSS transition, hides modal
```

## API

### tarry(handler[, delay])
Returns a function. If no delay is given, `setTimeout` is not used, and the function will fire immediately upon calling the returned function.

Returned function can accept a new `override` delay as its parameter that will override the `delay` passed in the original call. If function is called without a parameter, the `handler` will be fired according to the original `delay`.

```javascript
// waits 1000ms (1s), then adds class
let waitThenAddClass = tarry(
  () => modal.classList.add('is-active')
, 1000)

// overrides delay, now it will wait 5s
waitThenAddClass = waitThenAddClass(5000)

// fires after 5s
queue(waitThenAddClass)()

// will override *again* and call after 200ms
queue(waitThenAddClass(200))()
```

### queue(handler[, ...handlers])
Returns a function. When called, executes all handlers in the queue, according to their order and `delay` values.

* * *
 MIT License
