function toArray (args) {
  var arr = []
  var index = 0
  var max = args.length

  while (index < max) {
    arr.push(args[index])
    index++
  }

  return arr
}

function next (args) {
  args.length > 0 && args.shift().apply(this, args)
}

function run (cb, args) {
  cb()
  next(args)
}

function tarry (cb, delay) {
  return function () {
    var args = toArray(arguments)
    var override = args[0]

    if (typeof override === 'number') {
      return tarry(cb, override)
    }

    typeof delay === 'number' ? (
      setTimeout(function () {
        run(cb, args)
      }, delay)
    ) : (
      run(cb, args)
    )
  }
}

function queue () {
  var args = toArray(arguments)
  return tarry(function () {
    next(args.slice(0))
  })
}

module.exports = exports = {
  tarry: tarry,
  queue: queue
}
