# idle 
A really tiny sequencing library with support for delays. **763 bytes gzipped,** including UMD wrapper.

## Usage
```javascript
import { idle, queue } from 'idle'

const hello = idle(
  () => console.log('Hello')
, 200)

const beautiful = idle(
  () => console.log('beautiful')
, 500)

const world = idle(
  () => console.log('world!')
)

const print = queue(hello, beautiful, world)

print()
```

Results in:
```
(200ms delay)
▼
Hello 
▼
(500ms delay)
▼
beautiful
▼
world!
```

## API

### idle(handler[, delay])
Returns a function. When called, executes `handler`. If no delay is given, `setTimeout` is not used, and the function will fire immediately upon calling the returned function.

### queue(handler[, ...handlers])
Returns a function. When called, executes all handlers in the queue, according to their order and `delay` values.

* * *
 MIT License
