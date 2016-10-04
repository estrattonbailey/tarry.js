import { tarry, queue } from '../../../'

const hello = tarry(
  () => console.log('Hello')
)
const world = tarry(
  () => console.log('world')
)

queue(hello(0), world(2000))()
