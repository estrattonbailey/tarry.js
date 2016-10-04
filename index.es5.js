function run(cb, args){
  cb()
  args.length > 0 && args.shift()(args)
}

function walkArray(arr){
  var res
  function walk(arr){
    res = arr
    arr.forEach(function(c){return Array.isArray(c) ? walk(c) : res})
  }
  walk(arr)
  return res
}

function tarry(cb, delay){
  return function(){
    var args = walkArray([].slice.call(arguments))
    var override = 'number' === typeof args[0] ? args[0] : false
    return 'number' === typeof override && override > -1 
      ? tarry(cb, override) 
      : 'number' === typeof delay && delay > -1 
        ? setTimeout(function(){ run(cb, args); }, delay) 
        : run(cb, args)
  }
}

function queue(){
  var args = [].slice.call(arguments)
  return function() {
    args.shift()(args)
  }
}

module.exports = exports = {
  tarry: tarry,
  queue: queue
}
