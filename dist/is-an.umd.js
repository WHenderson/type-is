;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.is = factory();
  }
}(this, function() {
var _, literal, toString,
  hasProp = {}.hasOwnProperty;

toString = function(x) {
  return {}.toString.call(x);
};

literal = function(x) {
  return typeof x !== 'object' && !_.Null(x);
};

_ = function(x, type) {
  var func, name;
  if (type != null) {
    return _[type](x);
  }
  name = toString(x).slice('[object '.length, -1);
  if ((_[name] != null) && _[name](x)) {
    return name;
  }
  for (type in _) {
    if (!hasProp.call(_, type)) continue;
    func = _[type];
    if (func(x)) {
      return type;
    }
  }
};

_.Undefined = function(x) {
  return toString(x) === '[object Undefined]';
};

_.Null = function(x) {
  return toString(x) === '[object Null]';
};

_.Boolean = function(x) {
  return toString(x) === '[object Boolean]';
};

_.Boolean.Literal = function(x) {
  return _.Boolean(x) && literal(x);
};

_.Number = function(x) {
  return toString(x) === '[object Number]';
};

_.Number.Literal = function(x) {
  return _.Number(x) && literal(x);
};

_.Number.NaN = function(x) {
  return _.Number(x) && isNaN(x);
};

_.Number.Finite = function(x) {
  return _.Number(x) && isFinite(x);
};

_.Number.Infinite = function(x) {
  return _.Number(x) && (Number(x) === Infinity || Number(x) === -Infinity);
};

_.Number.Literal.NaN = function(x) {
  return _.Number.NaN(x) && literal(x);
};

_.Number.Literal.Finite = function(x) {
  return _.Number.Finite(x) && literal(x);
};

_.Number.Literal.Infinite = function(x) {
  return x === Infinity || x === -Infinity;
};

_.Number.Integer = function(x) {
  return _.Number.Finite(x) && Math.floor(x) === x;
};

_.String = function(x) {
  return toString(x) === '[object String]';
};

_.String.Literal = function(x) {
  return _.String(x) && literal(x);
};

_.Array = Array.isArray != null ? Array.isArray : function(x) {
  return toString(x) === '[object Array]';
};

_.Object = function(x) {
  return typeof x === 'object';
};

_.Object.literal = function(x) {
  return toString(x) === '[object Object]' && x.constructor === {}.constructor;
};

_.Function = function(x) {
  return toString(x) === '[object Function]';
};

_.Arguments = function(x) {
  return toString(x) === '[object Arguments]';
};

_.Date = function(x) {
  return toString(x) === '[object Date]';
};

_.RegExp = function(x) {
  return _.Object(x) && x instanceof RegExp;
};

_.Error = function(x) {
  return toString(x) === '[object Error]';
};

_.Math = function(x) {
  return toString(x) === '[object Math]';
};

_.Int8Array = function(x) {
  return toString(x) === '[object Int8Array]';
};

_.Uint8ClampedArray = function(x) {
  return toString(x) === '[object Uint8ClampedArray]';
};

_.Uint8Array = function(x) {
  return toString(x) === '[object Uint8Array]';
};

_.Int16Array = function(x) {
  return toString(x) === '[object Int16Array]';
};

_.Uint16Array = function(x) {
  return toString(x) === '[object Uint16Array]';
};

_.Int32Array = function(x) {
  return toString(x) === '[object Int32Array]';
};

_.Uint32Array = function(x) {
  return toString(x) === '[object Uint32Array]';
};

_.Float32Array = function(x) {
  return toString(x) === '[object Float32Array]';
};

_.Float64Array = function(x) {
  return toString(x) === '[object Float64Array]';
};

return _;
}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlzLWFuLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7U0FBQSxJQUFBLG9CQUFBO0VBQUE7O0FBQUEsUUFBQSxHQUFBLFNBQUEsQ0FBQTtTQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsSUFBQSxDQUFBLENBQUE7QUFBQTs7QUFFQSxPQUFBLEdBQUEsU0FBQSxDQUFBO1NBQUEsT0FBQSxDQUFBLEtBQUEsUUFBQSxJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBO0FBQUE7O0FBRUEsQ0FBQSxHQUFBLFNBQUEsQ0FBQSxFQUFBLElBQUE7QUFDQSxNQUFBO0VBQUEsSUFBQSxZQUFBO0FBQ0EsV0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsQ0FBQSxFQURBOztFQUdBLElBQUEsR0FBQSxRQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxDQUFBLFVBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxDQUFBO0VBQ0EsSUFBQSxpQkFBQSxJQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQSxXQUFBLEtBREE7O0FBR0EsT0FBQSxTQUFBOzs7SUFDQSxJQUFBLElBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQSxhQUFBLEtBREE7O0FBREE7QUFSQTs7QUFjQSxDQUFBLENBQUEsU0FBQSxHQUFBLFNBQUEsQ0FBQTtTQUFBLFFBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQTtBQUFBOztBQUVBLENBQUEsQ0FBQSxJQUFBLEdBQUEsU0FBQSxDQUFBO1NBQUEsUUFBQSxDQUFBLENBQUEsQ0FBQSxLQUFBO0FBQUE7O0FBRUEsQ0FBQSxDQUFBLE9BQUEsR0FBQSxTQUFBLENBQUE7U0FBQSxRQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUE7QUFBQTs7QUFFQSxDQUFBLENBQUEsT0FBQSxDQUFBLE9BQUEsR0FBQSxTQUFBLENBQUE7U0FBQSxDQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLE9BQUEsQ0FBQSxDQUFBO0FBQUE7O0FBRUEsQ0FBQSxDQUFBLE1BQUEsR0FBQSxTQUFBLENBQUE7U0FBQSxRQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUE7QUFBQTs7QUFFQSxDQUFBLENBQUEsTUFBQSxDQUFBLE9BQUEsR0FBQSxTQUFBLENBQUE7U0FBQSxDQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLE9BQUEsQ0FBQSxDQUFBO0FBQUE7O0FBRUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLEdBQUEsU0FBQSxDQUFBO1NBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxLQUFBLENBQUEsQ0FBQTtBQUFBOztBQUVBLENBQUEsQ0FBQSxNQUFBLENBQUEsTUFBQSxHQUFBLFNBQUEsQ0FBQTtTQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsUUFBQSxDQUFBLENBQUE7QUFBQTs7QUFFQSxDQUFBLENBQUEsTUFBQSxDQUFBLFFBQUEsR0FBQSxTQUFBLENBQUE7U0FBQSxDQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxLQUFBLFFBQUEsSUFBQSxNQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUEsQ0FBQSxRQUFBO0FBQUE7O0FBRUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxPQUFBLENBQUEsR0FBQSxHQUFBLFNBQUEsQ0FBQTtTQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLE9BQUEsQ0FBQSxDQUFBO0FBQUE7O0FBRUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxPQUFBLENBQUEsTUFBQSxHQUFBLFNBQUEsQ0FBQTtTQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLE9BQUEsQ0FBQSxDQUFBO0FBQUE7O0FBRUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxPQUFBLENBQUEsUUFBQSxHQUFBLFNBQUEsQ0FBQTtTQUFBLENBQUEsS0FBQSxRQUFBLElBQUEsQ0FBQSxLQUFBLENBQUE7QUFBQTs7QUFFQSxDQUFBLENBQUEsTUFBQSxDQUFBLE9BQUEsR0FBQSxTQUFBLENBQUE7U0FBQSxDQUFBLENBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxJQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsQ0FBQSxLQUFBO0FBQUE7O0FBRUEsQ0FBQSxDQUFBLE1BQUEsR0FBQSxTQUFBLENBQUE7U0FBQSxRQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUE7QUFBQTs7QUFFQSxDQUFBLENBQUEsTUFBQSxDQUFBLE9BQUEsR0FBQSxTQUFBLENBQUE7U0FBQSxDQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLE9BQUEsQ0FBQSxDQUFBO0FBQUE7O0FBRUEsQ0FBQSxDQUFBLEtBQUEsR0FDQSxxQkFBQSxHQUNBLEtBQUEsQ0FBQSxPQURBLEdBR0EsU0FBQSxDQUFBO1NBQUEsUUFBQSxDQUFBLENBQUEsQ0FBQSxLQUFBO0FBQUE7O0FBRUEsQ0FBQSxDQUFBLE1BQUEsR0FBQSxTQUFBLENBQUE7U0FBQSxPQUFBLENBQUEsS0FBQTtBQUFBOztBQUVBLENBQUEsQ0FBQSxNQUFBLENBQUEsT0FBQSxHQUFBLFNBQUEsQ0FBQTtTQUFBLFFBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxpQkFBQSxJQUFBLENBQUEsQ0FBQSxXQUFBLEtBQUEsRUFBQSxDQUFBO0FBQUE7O0FBRUEsQ0FBQSxDQUFBLFFBQUEsR0FBQSxTQUFBLENBQUE7U0FBQSxRQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUE7QUFBQTs7QUFFQSxDQUFBLENBQUEsU0FBQSxHQUFBLFNBQUEsQ0FBQTtTQUFBLFFBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQTtBQUFBOztBQUVBLENBQUEsQ0FBQSxJQUFBLEdBQUEsU0FBQSxDQUFBO1NBQUEsUUFBQSxDQUFBLENBQUEsQ0FBQSxLQUFBO0FBQUE7O0FBRUEsQ0FBQSxDQUFBLE1BQUEsR0FBQSxTQUFBLENBQUE7U0FBQSxDQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsWUFBQTtBQUFBOztBQUVBLENBQUEsQ0FBQSxLQUFBLEdBQUEsU0FBQSxDQUFBO1NBQUEsUUFBQSxDQUFBLENBQUEsQ0FBQSxLQUFBO0FBQUE7O0FBRUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxTQUFBLENBQUE7U0FBQSxRQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUE7QUFBQTs7QUFFQSxDQUFBLENBQUEsU0FBQSxHQUFBLFNBQUEsQ0FBQTtTQUFBLFFBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQTtBQUFBOztBQUVBLENBQUEsQ0FBQSxpQkFBQSxHQUFBLFNBQUEsQ0FBQTtTQUFBLFFBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQTtBQUFBOztBQUVBLENBQUEsQ0FBQSxVQUFBLEdBQUEsU0FBQSxDQUFBO1NBQUEsUUFBQSxDQUFBLENBQUEsQ0FBQSxLQUFBO0FBQUE7O0FBRUEsQ0FBQSxDQUFBLFVBQUEsR0FBQSxTQUFBLENBQUE7U0FBQSxRQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUE7QUFBQTs7QUFFQSxDQUFBLENBQUEsV0FBQSxHQUFBLFNBQUEsQ0FBQTtTQUFBLFFBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQTtBQUFBOztBQUVBLENBQUEsQ0FBQSxVQUFBLEdBQUEsU0FBQSxDQUFBO1NBQUEsUUFBQSxDQUFBLENBQUEsQ0FBQSxLQUFBO0FBQUE7O0FBRUEsQ0FBQSxDQUFBLFdBQUEsR0FBQSxTQUFBLENBQUE7U0FBQSxRQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUE7QUFBQTs7QUFFQSxDQUFBLENBQUEsWUFBQSxHQUFBLFNBQUEsQ0FBQTtTQUFBLFFBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQTtBQUFBOztBQUVBLENBQUEsQ0FBQSxZQUFBLEdBQUEsU0FBQSxDQUFBO1NBQUEsUUFBQSxDQUFBLENBQUEsQ0FBQSxLQUFBO0FBQUEiLCJmaWxlIjoiaXMtYW4udW1kLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsidG9TdHJpbmcgPSAoeCkgLT4gKHt9KS50b1N0cmluZy5jYWxsKHgpXHJcblxyXG5saXRlcmFsID0gKHgpIC0+IHR5cGVvZiB4ICE9ICdvYmplY3QnIGFuZCBub3QgXy5OdWxsKHgpXHJcblxyXG5fID0gKHgsIHR5cGUpIC0+XHJcbiAgaWYgdHlwZT9cclxuICAgIHJldHVybiBfW3R5cGVdKHgpXHJcblxyXG4gIG5hbWUgPSB0b1N0cmluZyh4KS5zbGljZSgnW29iamVjdCAnLmxlbmd0aCwgLTEpXHJcbiAgaWYgX1tuYW1lXT8gYW5kIF9bbmFtZV0oeClcclxuICAgIHJldHVybiBuYW1lXHJcblxyXG4gIGZvciBvd24gdHlwZSwgZnVuYyBvZiBfXHJcbiAgICBpZiBmdW5jKHgpXHJcbiAgICAgIHJldHVybiB0eXBlXHJcblxyXG4gIHJldHVyblxyXG5cclxuXy5VbmRlZmluZWQgPSAoeCkgLT4gdG9TdHJpbmcoeCkgPT0gJ1tvYmplY3QgVW5kZWZpbmVkXSdcclxuXHJcbl8uTnVsbCA9ICh4KSAtPiB0b1N0cmluZyh4KSA9PSAnW29iamVjdCBOdWxsXSdcclxuXHJcbl8uQm9vbGVhbiA9ICh4KSAtPiB0b1N0cmluZyh4KSA9PSAnW29iamVjdCBCb29sZWFuXSdcclxuXHJcbl8uQm9vbGVhbi5MaXRlcmFsID0gKHgpIC0+IF8uQm9vbGVhbih4KSBhbmQgbGl0ZXJhbCh4KVxyXG5cclxuXy5OdW1iZXIgPSAoeCkgLT4gdG9TdHJpbmcoeCkgPT0gJ1tvYmplY3QgTnVtYmVyXSdcclxuXHJcbl8uTnVtYmVyLkxpdGVyYWwgPSAoeCkgLT4gXy5OdW1iZXIoeCkgYW5kIGxpdGVyYWwoeClcclxuXHJcbl8uTnVtYmVyLk5hTiA9ICh4KSAtPiBfLk51bWJlcih4KSBhbmQgaXNOYU4oeClcclxuXHJcbl8uTnVtYmVyLkZpbml0ZSA9ICh4KSAtPiBfLk51bWJlcih4KSBhbmQgaXNGaW5pdGUoeClcclxuXHJcbl8uTnVtYmVyLkluZmluaXRlID0gKHgpIC0+IF8uTnVtYmVyKHgpIGFuZCAoTnVtYmVyKHgpID09IEluZmluaXR5IG9yIE51bWJlcih4KSA9PSAtSW5maW5pdHkpXHJcblxyXG5fLk51bWJlci5MaXRlcmFsLk5hTiA9ICh4KSAtPiBfLk51bWJlci5OYU4oeCkgYW5kIGxpdGVyYWwoeClcclxuXHJcbl8uTnVtYmVyLkxpdGVyYWwuRmluaXRlID0gKHgpIC0+IF8uTnVtYmVyLkZpbml0ZSh4KSBhbmQgbGl0ZXJhbCh4KVxyXG5cclxuXy5OdW1iZXIuTGl0ZXJhbC5JbmZpbml0ZSA9ICh4KSAtPiB4ID09IEluZmluaXR5IG9yIHggPT0gLUluZmluaXR5XHJcblxyXG5fLk51bWJlci5JbnRlZ2VyID0gKHgpIC0+IF8uTnVtYmVyLkZpbml0ZSh4KSBhbmQgTWF0aC5mbG9vcih4KSA9PSB4XHJcblxyXG5fLlN0cmluZyA9ICh4KSAtPiB0b1N0cmluZyh4KSA9PSAnW29iamVjdCBTdHJpbmddJ1xyXG5cclxuXy5TdHJpbmcuTGl0ZXJhbCA9ICh4KSAtPiBfLlN0cmluZyh4KSBhbmQgbGl0ZXJhbCh4KVxyXG5cclxuXy5BcnJheSA9XHJcbiAgaWYgQXJyYXkuaXNBcnJheT9cclxuICAgIEFycmF5LmlzQXJyYXlcclxuICBlbHNlXHJcbiAgICAoeCkgLT4gdG9TdHJpbmcoeCkgPT0gJ1tvYmplY3QgQXJyYXldJ1xyXG5cclxuXy5PYmplY3QgPSAoeCkgLT4gdHlwZW9mIHggPT0gJ29iamVjdCdcclxuXHJcbl8uT2JqZWN0LmxpdGVyYWwgPSAoeCkgLT4gdG9TdHJpbmcoeCkgPT0gJ1tvYmplY3QgT2JqZWN0XScgYW5kIHguY29uc3RydWN0b3IgPT0gKHt9KS5jb25zdHJ1Y3RvclxyXG5cclxuXy5GdW5jdGlvbiA9ICh4KSAtPiB0b1N0cmluZyh4KSA9PSAnW29iamVjdCBGdW5jdGlvbl0nXHJcblxyXG5fLkFyZ3VtZW50cyA9ICh4KSAtPiB0b1N0cmluZyh4KSA9PSAnW29iamVjdCBBcmd1bWVudHNdJ1xyXG5cclxuXy5EYXRlID0gKHgpIC0+IHRvU3RyaW5nKHgpID09ICdbb2JqZWN0IERhdGVdJ1xyXG5cclxuXy5SZWdFeHAgPSAoeCkgLT4gXy5PYmplY3QoeCkgYW5kIHggaW5zdGFuY2VvZiBSZWdFeHBcclxuXHJcbl8uRXJyb3IgPSAoeCkgLT4gdG9TdHJpbmcoeCkgPT0gJ1tvYmplY3QgRXJyb3JdJ1xyXG5cclxuXy5NYXRoID0gKHgpIC0+IHRvU3RyaW5nKHgpID09ICdbb2JqZWN0IE1hdGhdJ1xyXG5cclxuXy5JbnQ4QXJyYXkgPSAoeCkgLT4gdG9TdHJpbmcoeCkgPT0gJ1tvYmplY3QgSW50OEFycmF5XSdcclxuXHJcbl8uVWludDhDbGFtcGVkQXJyYXkgPSAoeCkgLT4gdG9TdHJpbmcoeCkgPT0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJ1xyXG5cclxuXy5VaW50OEFycmF5ID0gKHgpIC0+IHRvU3RyaW5nKHgpID09ICdbb2JqZWN0IFVpbnQ4QXJyYXldJ1xyXG5cclxuXy5JbnQxNkFycmF5ID0gKHgpIC0+IHRvU3RyaW5nKHgpID09ICdbb2JqZWN0IEludDE2QXJyYXldJ1xyXG5cclxuXy5VaW50MTZBcnJheSA9ICh4KSAtPiB0b1N0cmluZyh4KSA9PSAnW29iamVjdCBVaW50MTZBcnJheV0nXHJcblxyXG5fLkludDMyQXJyYXkgPSAoeCkgLT4gdG9TdHJpbmcoeCkgPT0gJ1tvYmplY3QgSW50MzJBcnJheV0nXHJcblxyXG5fLlVpbnQzMkFycmF5ID0gKHgpIC0+IHRvU3RyaW5nKHgpID09ICdbb2JqZWN0IFVpbnQzMkFycmF5XSdcclxuXHJcbl8uRmxvYXQzMkFycmF5ID0gKHgpIC0+IHRvU3RyaW5nKHgpID09ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nXHJcblxyXG5fLkZsb2F0NjRBcnJheSA9ICh4KSAtPiB0b1N0cmluZyh4KSA9PSAnW29iamVjdCBGbG9hdDY0QXJyYXldJ1xyXG5cclxuIyBfLnN5bWJvbCA9ICh4KSAtPiB0b1N0cmluZyh4KSA9PSAnW29iamVjdCBTeW1ib2xdJ1xyXG4iXX0=
