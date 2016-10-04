const run = (cb, args) => {
  cb()
  args.length > 0 && args.shift()(...args)
}

export const tarry = (cb, delay = null) => (...args) => {
  let override = 'number' === typeof args[0] ? args[0] : null 
  return 'number' === typeof override && override > -1 
    ? tarry(cb, override) 
    : 'number' === typeof delay && delay > -1 
      ? setTimeout(() => run(cb, args), delay) 
      : run(cb, args)
}

export const queue = (...args) => () => args.shift()(...args)
