function toArray (args) {
  var arr = []
  var i = 0

  while (i < args.length) {
    arr.push(args[i])
    i++
  }

  return arr
}

function next (args) {
  args.length && args.shift().apply(this, args)
}

function run (cb, args) {
  cb()
  next(args)
}

export function tarry (cb, delay) {
  return function () {
    if (typeof arguments[0] === 'number') {
      return tarry(cb, arguments[0])
    }

    var args = toArray(arguments)

    typeof delay === 'number' ? (
      setTimeout(function () {
        run(cb, args)
      }, delay)
    ) : (
      run(cb, args)
    )
  }
}

export function queue () {
  return tarry(function () {
    next(toArray(arguments).slice(0))
  })
}
