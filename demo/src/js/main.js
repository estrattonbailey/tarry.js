import { tarry, queue } from '../../../index.es5.js'

let hello = tarry(
  () => console.log('Hello')
)
const world = tarry(
  () => console.log('world')
)

hello = hello(5000)

queue(hello, world(2000))()
