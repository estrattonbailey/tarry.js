(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _indexEs = require('../../../index.es5.js');

var hello = (0, _indexEs.tarry)(function () {
  return console.log('Hello');
});
var world = (0, _indexEs.tarry)(function () {
  return console.log('world');
});

hello = hello(5000);

(0, _indexEs.queue)(hello, world(2000))();

},{"../../../index.es5.js":2}],2:[function(require,module,exports){
'use strict';

function run(cb, args) {
  cb();
  args.length > 0 && args.shift()(args);
}

function walkArray(arr) {
  var res;
  function walk(arr) {
    res = arr;
    arr.forEach(function (c) {
      return Array.isArray(c) ? walk(c) : res;
    });
  }
  walk(arr);
  return res;
}

function tarry(cb, delay) {
  return function () {
    var args = walkArray([].slice.call(arguments));
    var override = 'number' === typeof args[0] ? args[0] : false;
    return 'number' === typeof override && override > -1 ? tarry(cb, override) : 'number' === typeof delay && delay > -1 ? setTimeout(function () {
      run(cb, args);
    }, delay) : run(cb, args);
  };
}

function queue() {
  var args = [].slice.call(arguments);
  return function () {
    args.shift()(args);
  };
}

module.exports = exports = {
  tarry: tarry,
  queue: queue
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyIsIi4uL2luZGV4LmVzNS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7O0FBRUEsSUFBSSxRQUFRLG9CQUNWO0FBQUEsU0FBTSxRQUFRLEdBQVIsQ0FBWSxPQUFaLENBQU47QUFBQSxDQURVLENBQVo7QUFHQSxJQUFNLFFBQVEsb0JBQ1o7QUFBQSxTQUFNLFFBQVEsR0FBUixDQUFZLE9BQVosQ0FBTjtBQUFBLENBRFksQ0FBZDs7QUFJQSxRQUFRLE1BQU0sSUFBTixDQUFSOztBQUVBLG9CQUFNLEtBQU4sRUFBYSxNQUFNLElBQU4sQ0FBYjs7Ozs7QUNYQSxTQUFTLEdBQVQsQ0FBYSxFQUFiLEVBQWlCLElBQWpCLEVBQXNCO0FBQ3BCO0FBQ0EsT0FBSyxNQUFMLEdBQWMsQ0FBZCxJQUFtQixLQUFLLEtBQUwsR0FBYSxJQUFiLENBQW5CO0FBQ0Q7O0FBRUQsU0FBUyxTQUFULENBQW1CLEdBQW5CLEVBQXVCO0FBQ3JCLE1BQUksR0FBSjtBQUNBLFdBQVMsSUFBVCxDQUFjLEdBQWQsRUFBa0I7QUFDaEIsVUFBTSxHQUFOO0FBQ0EsUUFBSSxPQUFKLENBQVksVUFBUyxDQUFULEVBQVc7QUFBQyxhQUFPLE1BQU0sT0FBTixDQUFjLENBQWQsSUFBbUIsS0FBSyxDQUFMLENBQW5CLEdBQTZCLEdBQXBDO0FBQXdDLEtBQWhFO0FBQ0Q7QUFDRCxPQUFLLEdBQUw7QUFDQSxTQUFPLEdBQVA7QUFDRDs7QUFFRCxTQUFTLEtBQVQsQ0FBZSxFQUFmLEVBQW1CLEtBQW5CLEVBQXlCO0FBQ3ZCLFNBQU8sWUFBVTtBQUNmLFFBQUksT0FBTyxVQUFVLEdBQUcsS0FBSCxDQUFTLElBQVQsQ0FBYyxTQUFkLENBQVYsQ0FBWDtBQUNBLFFBQUksV0FBVyxhQUFhLE9BQU8sS0FBSyxDQUFMLENBQXBCLEdBQThCLEtBQUssQ0FBTCxDQUE5QixHQUF3QyxLQUF2RDtBQUNBLFdBQU8sYUFBYSxPQUFPLFFBQXBCLElBQWdDLFdBQVcsQ0FBQyxDQUE1QyxHQUNILE1BQU0sRUFBTixFQUFVLFFBQVYsQ0FERyxHQUVILGFBQWEsT0FBTyxLQUFwQixJQUE2QixRQUFRLENBQUMsQ0FBdEMsR0FDRSxXQUFXLFlBQVU7QUFBRSxVQUFJLEVBQUosRUFBUSxJQUFSO0FBQWdCLEtBQXZDLEVBQXlDLEtBQXpDLENBREYsR0FFRSxJQUFJLEVBQUosRUFBUSxJQUFSLENBSk47QUFLRCxHQVJEO0FBU0Q7O0FBRUQsU0FBUyxLQUFULEdBQWdCO0FBQ2QsTUFBSSxPQUFPLEdBQUcsS0FBSCxDQUFTLElBQVQsQ0FBYyxTQUFkLENBQVg7QUFDQSxTQUFPLFlBQVc7QUFDaEIsU0FBSyxLQUFMLEdBQWEsSUFBYjtBQUNELEdBRkQ7QUFHRDs7QUFFRCxPQUFPLE9BQVAsR0FBaUIsVUFBVTtBQUN6QixTQUFPLEtBRGtCO0FBRXpCLFNBQU87QUFGa0IsQ0FBM0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHsgdGFycnksIHF1ZXVlIH0gZnJvbSAnLi4vLi4vLi4vaW5kZXguZXM1LmpzJ1xuXG5sZXQgaGVsbG8gPSB0YXJyeShcbiAgKCkgPT4gY29uc29sZS5sb2coJ0hlbGxvJylcbilcbmNvbnN0IHdvcmxkID0gdGFycnkoXG4gICgpID0+IGNvbnNvbGUubG9nKCd3b3JsZCcpXG4pXG5cbmhlbGxvID0gaGVsbG8oNTAwMClcblxucXVldWUoaGVsbG8sIHdvcmxkKDIwMDApKSgpXG4iLCJmdW5jdGlvbiBydW4oY2IsIGFyZ3Mpe1xuICBjYigpXG4gIGFyZ3MubGVuZ3RoID4gMCAmJiBhcmdzLnNoaWZ0KCkoYXJncylcbn1cblxuZnVuY3Rpb24gd2Fsa0FycmF5KGFycil7XG4gIHZhciByZXNcbiAgZnVuY3Rpb24gd2FsayhhcnIpe1xuICAgIHJlcyA9IGFyclxuICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uKGMpe3JldHVybiBBcnJheS5pc0FycmF5KGMpID8gd2FsayhjKSA6IHJlc30pXG4gIH1cbiAgd2FsayhhcnIpXG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gdGFycnkoY2IsIGRlbGF5KXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGFyZ3MgPSB3YWxrQXJyYXkoW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgIHZhciBvdmVycmlkZSA9ICdudW1iZXInID09PSB0eXBlb2YgYXJnc1swXSA/IGFyZ3NbMF0gOiBmYWxzZVxuICAgIHJldHVybiAnbnVtYmVyJyA9PT0gdHlwZW9mIG92ZXJyaWRlICYmIG92ZXJyaWRlID4gLTEgXG4gICAgICA/IHRhcnJ5KGNiLCBvdmVycmlkZSkgXG4gICAgICA6ICdudW1iZXInID09PSB0eXBlb2YgZGVsYXkgJiYgZGVsYXkgPiAtMSBcbiAgICAgICAgPyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IHJ1bihjYiwgYXJncyk7IH0sIGRlbGF5KSBcbiAgICAgICAgOiBydW4oY2IsIGFyZ3MpXG4gIH1cbn1cblxuZnVuY3Rpb24gcXVldWUoKXtcbiAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGFyZ3Muc2hpZnQoKShhcmdzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IHtcbiAgdGFycnk6IHRhcnJ5LFxuICBxdWV1ZTogcXVldWVcbn1cbiJdfQ==
