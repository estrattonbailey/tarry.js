import test from 'ava'
import { tarry, queue } from '../'

test.cb('tarry (internal) fires delayed function', t => {
  t.plan(1)

  let res = ''

  const d = tarry(() => {
    res = 'Hello world' 
  }, 500)

  d(() => {
    t.is(res, 'Hello world')
    t.end()
  })
})

test.cb('queue fires sequence', t => {
  t.plan(1)

  let res = ''

  const one = tarry(() => {
    res = 'Hello' 
  }, 500)

  const two = tarry(() => {
    res += ' world'
  })

  queue(one, two, tarry(() => {
    t.is(res, 'Hello world')
    t.end()
  }))()
})
