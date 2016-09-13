const run = (cb, args) => {
  cb()
  args.length > 0 ? args.shift()(...args) : null
}

export const tarry = (cb, delay = false) => (...args) => (
  delay ? setTimeout(() => run(cb, args), delay) : run(cb, args)
)

export const queue = (...args) => () => args.shift()(...args)
