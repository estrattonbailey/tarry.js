(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _indexEs = require('../../../index.es5.js');

var hello = (0, _indexEs.tarry)(function () {
  return console.log('Hello');
});
var world = (0, _indexEs.tarry)(function () {
  return console.log('world');
});

(0, _indexEs.queue)(hello(0), world(2000), hello(200))();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyIsIi4uL2luZGV4LmVzNS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7O0FBRUEsSUFBTSxRQUFRLG9CQUNaO0FBQUEsU0FBTSxRQUFRLEdBQVIsQ0FBWSxPQUFaLENBQU47QUFBQSxDQURZLENBQWQ7QUFHQSxJQUFNLFFBQVEsb0JBQ1o7QUFBQSxTQUFNLFFBQVEsR0FBUixDQUFZLE9BQVosQ0FBTjtBQUFBLENBRFksQ0FBZDs7QUFJQSxvQkFBTSxNQUFNLENBQU4sQ0FBTixFQUFnQixNQUFNLElBQU4sQ0FBaEIsRUFBNkIsTUFBTSxHQUFOLENBQTdCOzs7OztBQ1RBLFNBQVMsR0FBVCxDQUFhLEVBQWIsRUFBaUIsSUFBakIsRUFBc0I7QUFDcEI7QUFDQSxPQUFLLE1BQUwsR0FBYyxDQUFkLElBQW1CLEtBQUssS0FBTCxHQUFhLElBQWIsQ0FBbkI7QUFDRDs7QUFFRCxTQUFTLFNBQVQsQ0FBbUIsR0FBbkIsRUFBdUI7QUFDckIsTUFBSSxHQUFKO0FBQ0EsV0FBUyxJQUFULENBQWMsR0FBZCxFQUFrQjtBQUNoQixVQUFNLEdBQU47QUFDQSxRQUFJLE9BQUosQ0FBWSxVQUFTLENBQVQsRUFBVztBQUFDLGFBQU8sTUFBTSxPQUFOLENBQWMsQ0FBZCxJQUFtQixLQUFLLENBQUwsQ0FBbkIsR0FBNkIsR0FBcEM7QUFBd0MsS0FBaEU7QUFDRDtBQUNELE9BQUssR0FBTDtBQUNBLFNBQU8sR0FBUDtBQUNEOztBQUVELFNBQVMsS0FBVCxDQUFlLEVBQWYsRUFBbUIsS0FBbkIsRUFBeUI7QUFDdkIsU0FBTyxZQUFVO0FBQ2YsUUFBSSxPQUFPLFVBQVUsR0FBRyxLQUFILENBQVMsSUFBVCxDQUFjLFNBQWQsQ0FBVixDQUFYO0FBQ0EsUUFBSSxXQUFXLGFBQWEsT0FBTyxLQUFLLENBQUwsQ0FBcEIsR0FBOEIsS0FBSyxDQUFMLENBQTlCLEdBQXdDLEtBQXZEO0FBQ0EsV0FBTyxhQUFhLE9BQU8sUUFBcEIsSUFBZ0MsV0FBVyxDQUFDLENBQTVDLEdBQ0gsTUFBTSxFQUFOLEVBQVUsUUFBVixDQURHLEdBRUgsYUFBYSxPQUFPLEtBQXBCLElBQTZCLFFBQVEsQ0FBQyxDQUF0QyxHQUNFLFdBQVcsWUFBVTtBQUFFLFVBQUksRUFBSixFQUFRLElBQVI7QUFBZ0IsS0FBdkMsRUFBeUMsS0FBekMsQ0FERixHQUVFLElBQUksRUFBSixFQUFRLElBQVIsQ0FKTjtBQUtELEdBUkQ7QUFTRDs7QUFFRCxTQUFTLEtBQVQsR0FBZ0I7QUFDZCxNQUFJLE9BQU8sR0FBRyxLQUFILENBQVMsSUFBVCxDQUFjLFNBQWQsQ0FBWDtBQUNBLFNBQU8sWUFBVztBQUNoQixTQUFLLEtBQUwsR0FBYSxJQUFiO0FBQ0QsR0FGRDtBQUdEOztBQUVELE9BQU8sT0FBUCxHQUFpQixVQUFVO0FBQ3pCLFNBQU8sS0FEa0I7QUFFekIsU0FBTztBQUZrQixDQUEzQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgeyB0YXJyeSwgcXVldWUgfSBmcm9tICcuLi8uLi8uLi9pbmRleC5lczUuanMnXG5cbmNvbnN0IGhlbGxvID0gdGFycnkoXG4gICgpID0+IGNvbnNvbGUubG9nKCdIZWxsbycpXG4pXG5jb25zdCB3b3JsZCA9IHRhcnJ5KFxuICAoKSA9PiBjb25zb2xlLmxvZygnd29ybGQnKVxuKVxuXG5xdWV1ZShoZWxsbygwKSwgd29ybGQoMjAwMCksIGhlbGxvKDIwMCkpKClcbiIsImZ1bmN0aW9uIHJ1bihjYiwgYXJncyl7XG4gIGNiKClcbiAgYXJncy5sZW5ndGggPiAwICYmIGFyZ3Muc2hpZnQoKShhcmdzKVxufVxuXG5mdW5jdGlvbiB3YWxrQXJyYXkoYXJyKXtcbiAgdmFyIHJlc1xuICBmdW5jdGlvbiB3YWxrKGFycil7XG4gICAgcmVzID0gYXJyXG4gICAgYXJyLmZvckVhY2goZnVuY3Rpb24oYyl7cmV0dXJuIEFycmF5LmlzQXJyYXkoYykgPyB3YWxrKGMpIDogcmVzfSlcbiAgfVxuICB3YWxrKGFycilcbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiB0YXJyeShjYiwgZGVsYXkpe1xuICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICB2YXIgYXJncyA9IHdhbGtBcnJheShbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgdmFyIG92ZXJyaWRlID0gJ251bWJlcicgPT09IHR5cGVvZiBhcmdzWzBdID8gYXJnc1swXSA6IGZhbHNlXG4gICAgcmV0dXJuICdudW1iZXInID09PSB0eXBlb2Ygb3ZlcnJpZGUgJiYgb3ZlcnJpZGUgPiAtMSBcbiAgICAgID8gdGFycnkoY2IsIG92ZXJyaWRlKSBcbiAgICAgIDogJ251bWJlcicgPT09IHR5cGVvZiBkZWxheSAmJiBkZWxheSA+IC0xIFxuICAgICAgICA/IHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgcnVuKGNiLCBhcmdzKTsgfSwgZGVsYXkpIFxuICAgICAgICA6IHJ1bihjYiwgYXJncylcbiAgfVxufVxuXG5mdW5jdGlvbiBxdWV1ZSgpe1xuICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgYXJncy5zaGlmdCgpKGFyZ3MpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0ge1xuICB0YXJyeTogdGFycnksXG4gIHF1ZXVlOiBxdWV1ZVxufVxuIl19
