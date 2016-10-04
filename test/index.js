import test from 'ava'
import sequence, { tarry, queue } from '../dist/tarry.js'

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
    console.log(res)
  })

  queue(one, two, tarry(() => {
    t.is(res, 'Hello world')
    t.end()
  }))()
})

test.cb('default returns sequencer', t => {
  t.plan(2)

  let res = ''

  const seq = sequence().then(
    () => { res = 'Hello' }, 500
  ).then(
    () => { res += ' world' }, 500
  )

  t.deepEqual(seq, Object())

  seq.then(() => {
    t.is(res, 'Hello world')
    t.end()
  }).done()
})
