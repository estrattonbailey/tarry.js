import { tarry, queue } from '../../../index.es5.js'

const hello = tarry(
  () => console.log('Hello')
)
const world = tarry(
  () => console.log('world')
)

queue(hello(0), world(2000), hello(200))()
