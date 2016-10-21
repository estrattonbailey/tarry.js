function tarry(cb, delay){
  return function run(arg){
    if ('number' === typeof arg ? arg : false) {
      return tarry(cb, arg)
    } else if (delay){
      return setTimeout(cb, delay)
    } else if (!arg){
      return cb()
    }
  }
}

function queue(){
  var args = [].slice.call(arguments)
  
  return function play(){
    for (var i = 0; i < args.length; i++){
      args[i]()
    }
  }
}

module.exports = exports = {
  tarry: tarry,
  queue: queue
}
