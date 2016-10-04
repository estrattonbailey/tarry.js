(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _ = require('../../../');

var hello = (0, _.tarry)(function () {
  return console.log('Hello');
});
var world = (0, _.tarry)(function () {
  return console.log('world');
});

(0, _.queue)(hello(0), world(2000))();

},{"../../../":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var run = function run(cb, args) {
  cb();
  args.length > 0 && args.shift().apply(undefined, _toConsumableArray(args));
};

var tarry = exports.tarry = function tarry(cb) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var override = 'number' === typeof args[0] ? args[0] : null;
    return 'number' === typeof override && override > -1 ? tarry(cb, override) : 'number' === typeof delay && delay > -1 ? setTimeout(function () {
      return run(cb, args);
    }, delay) : run(cb, args);
  };
};

var queue = exports.queue = function queue() {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return function () {
    return args.shift().apply(undefined, args);
  };
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyIsIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFFQSxJQUFNLFFBQVEsYUFDWjtBQUFBLFNBQU0sUUFBUSxHQUFSLENBQVksT0FBWixDQUFOO0FBQUEsQ0FEWSxDQUFkO0FBR0EsSUFBTSxRQUFRLGFBQ1o7QUFBQSxTQUFNLFFBQVEsR0FBUixDQUFZLE9BQVosQ0FBTjtBQUFBLENBRFksQ0FBZDs7QUFJQSxhQUFNLE1BQU0sQ0FBTixDQUFOLEVBQWdCLE1BQU0sSUFBTixDQUFoQjs7Ozs7Ozs7Ozs7QUNUQSxJQUFNLE1BQU0sU0FBTixHQUFNLENBQUMsRUFBRCxFQUFLLElBQUwsRUFBYztBQUN4QjtBQUNBLE9BQUssTUFBTCxHQUFjLENBQWQsSUFBbUIsS0FBSyxLQUFMLHVDQUFnQixJQUFoQixFQUFuQjtBQUNELENBSEQ7O0FBS08sSUFBTSx3QkFBUSxTQUFSLEtBQVEsQ0FBQyxFQUFEO0FBQUEsTUFBSyxLQUFMLHVFQUFhLElBQWI7QUFBQSxTQUFzQixZQUFhO0FBQUEsc0NBQVQsSUFBUztBQUFULFVBQVM7QUFBQTs7QUFDdEQsUUFBSSxXQUFXLGFBQWEsT0FBTyxLQUFLLENBQUwsQ0FBcEIsR0FBOEIsS0FBSyxDQUFMLENBQTlCLEdBQXdDLElBQXZEO0FBQ0EsV0FBTyxhQUFhLE9BQU8sUUFBcEIsSUFBZ0MsV0FBVyxDQUFDLENBQTVDLEdBQ0gsTUFBTSxFQUFOLEVBQVUsUUFBVixDQURHLEdBRUgsYUFBYSxPQUFPLEtBQXBCLElBQTZCLFFBQVEsQ0FBQyxDQUF0QyxHQUNFLFdBQVc7QUFBQSxhQUFNLElBQUksRUFBSixFQUFRLElBQVIsQ0FBTjtBQUFBLEtBQVgsRUFBZ0MsS0FBaEMsQ0FERixHQUVFLElBQUksRUFBSixFQUFRLElBQVIsQ0FKTjtBQUtELEdBUG9CO0FBQUEsQ0FBZDs7QUFTQSxJQUFNLHdCQUFRLFNBQVIsS0FBUTtBQUFBLHFDQUFJLElBQUo7QUFBSSxRQUFKO0FBQUE7O0FBQUEsU0FBYTtBQUFBLFdBQU0sS0FBSyxLQUFMLG9CQUFnQixJQUFoQixDQUFOO0FBQUEsR0FBYjtBQUFBLENBQWQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHsgdGFycnksIHF1ZXVlIH0gZnJvbSAnLi4vLi4vLi4vJ1xuXG5jb25zdCBoZWxsbyA9IHRhcnJ5KFxuICAoKSA9PiBjb25zb2xlLmxvZygnSGVsbG8nKVxuKVxuY29uc3Qgd29ybGQgPSB0YXJyeShcbiAgKCkgPT4gY29uc29sZS5sb2coJ3dvcmxkJylcbilcblxucXVldWUoaGVsbG8oMCksIHdvcmxkKDIwMDApKSgpXG4iLCJjb25zdCBydW4gPSAoY2IsIGFyZ3MpID0+IHtcbiAgY2IoKVxuICBhcmdzLmxlbmd0aCA+IDAgJiYgYXJncy5zaGlmdCgpKC4uLmFyZ3MpXG59XG5cbmV4cG9ydCBjb25zdCB0YXJyeSA9IChjYiwgZGVsYXkgPSBudWxsKSA9PiAoLi4uYXJncykgPT4ge1xuICBsZXQgb3ZlcnJpZGUgPSAnbnVtYmVyJyA9PT0gdHlwZW9mIGFyZ3NbMF0gPyBhcmdzWzBdIDogbnVsbCBcbiAgcmV0dXJuICdudW1iZXInID09PSB0eXBlb2Ygb3ZlcnJpZGUgJiYgb3ZlcnJpZGUgPiAtMSBcbiAgICA/IHRhcnJ5KGNiLCBvdmVycmlkZSkgXG4gICAgOiAnbnVtYmVyJyA9PT0gdHlwZW9mIGRlbGF5ICYmIGRlbGF5ID4gLTEgXG4gICAgICA/IHNldFRpbWVvdXQoKCkgPT4gcnVuKGNiLCBhcmdzKSwgZGVsYXkpIFxuICAgICAgOiBydW4oY2IsIGFyZ3MpXG59XG5cbmV4cG9ydCBjb25zdCBxdWV1ZSA9ICguLi5hcmdzKSA9PiAoKSA9PiBhcmdzLnNoaWZ0KCkoLi4uYXJncylcbiJdfQ==
