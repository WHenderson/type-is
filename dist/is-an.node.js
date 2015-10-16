(function (){
var isAn, literal, setTypeNames, toString,
  hasProp = {}.hasOwnProperty;

toString = function(x) {
  return {}.toString.call(x);
};

literal = function(x) {
  return typeof x !== 'object';
};

isAn = function(x, type) {
  var func, i, len, name, options, ref, subTypeName;
  if (type != null) {
    if (isAn.Object(type)) {
      options = type;
      type = x;
    }
    func = isAn[type];
    if (func == null) {
      func = isAn;
      ref = type.split('.');
      for (i = 0, len = ref.length; i < len; i++) {
        subTypeName = ref[i];
        func = func[subTypeName];
        if (func == null) {
          return void 0;
        }
      }
    }
    if (options != null ? options.returnChecker : void 0) {
      return func;
    } else {
      return func(x);
    }
  } else {
    name = toString(x).slice('[object '.length, -1);
    if ((isAn[name] != null) && isAn.Function(isAn[name]) && isAn[name](x)) {
      return name;
    }
    for (type in isAn) {
      if (!hasProp.call(isAn, type)) continue;
      func = isAn[type];
      if (isAn.Function(isAn[name]) && func(x)) {
        return type;
      }
    }
  }
};

isAn.Undefined = function(x) {
  return toString(x) === '[object Undefined]';
};

isAn.Null = function(x) {
  return toString(x) === '[object Null]';
};

isAn.Boolean = function(x) {
  return toString(x) === '[object Boolean]';
};

isAn.Boolean.Literal = function(x) {
  return isAn.Boolean(x) && literal(x);
};

isAn.Boolean.Object = function(x) {
  return isAn.Boolean(x) && !literal(x);
};

isAn.Number = function(x) {
  return toString(x) === '[object Number]';
};

isAn.Number.Literal = function(x) {
  return isAn.Number(x) && literal(x);
};

isAn.Number.Object = function(x) {
  return isAn.Number(x) && !literal(x);
};

isAn.Number.NaN = function(x) {
  return isAn.Number(x) && isNaN(x);
};

isAn.Number.Finite = function(x) {
  return isAn.Number(x) && isFinite(x);
};

isAn.Number.Infinite = function(x) {
  return isAn.Number(x) && (Number(x) === Infinity || Number(x) === -Infinity);
};

isAn.Number.Integer = function(x) {
  return isAn.Number.Finite(x) && Math.floor(x) === Number(x);
};

isAn.Number.Literal.NaN = function(x) {
  return isAn.Number.NaN(x) && literal(x);
};

isAn.Number.Literal.Finite = function(x) {
  return isAn.Number.Finite(x) && literal(x);
};

isAn.Number.Literal.Infinite = function(x) {
  return x === Infinity || x === -Infinity;
};

isAn.Number.Literal.Integer = function(x) {
  return isAn.Number.Finite(x) && Math.floor(x) === x;
};

isAn.Number.Object.NaN = function(x) {
  return isAn.Number.NaN(x) && !literal(x);
};

isAn.Number.Object.Finite = function(x) {
  return isAn.Number.Finite(x) && !literal(x);
};

isAn.Number.Object.Infinite = function(x) {
  return isAn.Number.Object(x) && (Number(x) === Infinity || Number(x) === -Infinity);
};

isAn.Number.Object.Integer = function(x) {
  return isAn.Number.Object.Finite(x) && Math.floor(x) === Number(x);
};

isAn.String = function(x) {
  return toString(x) === '[object String]';
};

isAn.String.Literal = function(x) {
  return isAn.String(x) && literal(x);
};

isAn.String.Object = function(x) {
  return isAn.String(x) && !literal(x);
};

isAn.Array = Array.isArray != null ? Array.isArray : function(x) {
  return toString(x) === '[object Array]';
};

isAn.Object = function(x) {
  return toString(x) === '[object Object]';
};

isAn.Object.Literal = function(x) {
  return toString(x) === '[object Object]' && x.constructor === {}.constructor;
};

isAn.Function = function(x) {
  return toString(x) === '[object Function]';
};

isAn.Arguments = function(x) {
  return toString(x) === '[object Arguments]';
};

isAn.Date = function(x) {
  return toString(x) === '[object Date]';
};

isAn.RegExp = function(x) {
  return toString(x) === '[object RegExp]';
};

isAn.Error = function(x) {
  return toString(x) === '[object Error]';
};

isAn.Math = function(x) {
  return toString(x) === '[object Math]';
};

isAn.Int8Array = function(x) {
  return toString(x) === '[object Int8Array]';
};

isAn.Uint8ClampedArray = function(x) {
  return toString(x) === '[object Uint8ClampedArray]';
};

isAn.Uint8Array = function(x) {
  return toString(x) === '[object Uint8Array]';
};

isAn.Int16Array = function(x) {
  return toString(x) === '[object Int16Array]';
};

isAn.Uint16Array = function(x) {
  return toString(x) === '[object Uint16Array]';
};

isAn.Int32Array = function(x) {
  return toString(x) === '[object Int32Array]';
};

isAn.Uint32Array = function(x) {
  return toString(x) === '[object Uint32Array]';
};

isAn.Float32Array = function(x) {
  return toString(x) === '[object Float32Array]';
};

isAn.Float64Array = function(x) {
  return toString(x) === '[object Float64Array]';
};

setTypeNames = function(func, name) {
  var results, subFunc, subName, typeName;
  results = [];
  for (typeName in func) {
    if (!hasProp.call(func, typeName)) continue;
    subFunc = func[typeName];
    if (isAn.Function(subFunc)) {
      subName = name + typeName;
      subFunc.typeName = subName;
      results.push(setTypeNames(subFunc, subName + '.'));
    } else {
      results.push(void 0);
    }
  }
  return results;
};

setTypeNames(isAn, '');

module.exports = isAn;
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlzLWFuLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0NBQUEsSUFBQSxxQ0FBQTtFQUFBOztBQUFBLFFBQUEsR0FBQSxTQUFBLENBQUE7U0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBO0FBQUE7O0FBRUEsT0FBQSxHQUFBLFNBQUEsQ0FBQTtTQUFBLE9BQUEsQ0FBQSxLQUFBO0FBQUE7O0FBRUEsSUFBQSxHQUFBLFNBQUEsQ0FBQSxFQUFBLElBQUE7QUFDQSxNQUFBO0VBQUEsSUFBQSxZQUFBO0lBQ0EsSUFBQSxJQUFBLENBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQTtNQUNBLE9BQUEsR0FBQTtNQUNBLElBQUEsR0FBQSxFQUZBOztJQUtBLElBQUEsR0FBQSxJQUFBLENBQUEsSUFBQTtJQUVBLElBQUEsWUFBQTtNQUNBLElBQUEsR0FBQTtBQUNBO0FBQUEsV0FBQSxxQ0FBQTs7UUFDQSxJQUFBLEdBQUEsSUFBQSxDQUFBLFdBQUE7UUFDQSxJQUFBLFlBQUE7QUFDQSxpQkFBQSxPQURBOztBQUZBLE9BRkE7O0lBT0Esc0JBQUEsT0FBQSxDQUFBLHNCQUFBO0FBRUEsYUFBQSxLQUZBO0tBQUEsTUFBQTtBQUtBLGFBQUEsSUFBQSxDQUFBLENBQUEsRUFMQTtLQWZBO0dBQUEsTUFBQTtJQXVCQSxJQUFBLEdBQUEsUUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUEsQ0FBQSxVQUFBLENBQUEsTUFBQSxFQUFBLENBQUEsQ0FBQTtJQUNBLElBQUEsb0JBQUEsSUFBQSxJQUFBLENBQUEsUUFBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxJQUFBLElBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQSxhQUFBLEtBREE7O0FBR0EsU0FBQSxZQUFBOzs7TUFDQSxJQUFBLElBQUEsQ0FBQSxRQUFBLENBQUEsSUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLElBQUEsSUFBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLGVBQUEsS0FEQTs7QUFEQSxLQTNCQTs7QUFEQTs7QUFtQ0EsSUFBQSxDQUFBLFNBQUEsR0FBQSxTQUFBLENBQUE7U0FBQSxRQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUE7QUFBQTs7QUFFQSxJQUFBLENBQUEsSUFBQSxHQUFBLFNBQUEsQ0FBQTtTQUFBLFFBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQTtBQUFBOztBQUVBLElBQUEsQ0FBQSxPQUFBLEdBQUEsU0FBQSxDQUFBO1NBQUEsUUFBQSxDQUFBLENBQUEsQ0FBQSxLQUFBO0FBQUE7O0FBRUEsSUFBQSxDQUFBLE9BQUEsQ0FBQSxPQUFBLEdBQUEsU0FBQSxDQUFBO1NBQUEsSUFBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxPQUFBLENBQUEsQ0FBQTtBQUFBOztBQUVBLElBQUEsQ0FBQSxPQUFBLENBQUEsTUFBQSxHQUFBLFNBQUEsQ0FBQTtTQUFBLElBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQTtBQUFBOztBQUVBLElBQUEsQ0FBQSxNQUFBLEdBQUEsU0FBQSxDQUFBO1NBQUEsUUFBQSxDQUFBLENBQUEsQ0FBQSxLQUFBO0FBQUE7O0FBRUEsSUFBQSxDQUFBLE1BQUEsQ0FBQSxPQUFBLEdBQUEsU0FBQSxDQUFBO1NBQUEsSUFBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxPQUFBLENBQUEsQ0FBQTtBQUFBOztBQUVBLElBQUEsQ0FBQSxNQUFBLENBQUEsTUFBQSxHQUFBLFNBQUEsQ0FBQTtTQUFBLElBQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQTtBQUFBOztBQUVBLElBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxHQUFBLFNBQUEsQ0FBQTtTQUFBLElBQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsS0FBQSxDQUFBLENBQUE7QUFBQTs7QUFFQSxJQUFBLENBQUEsTUFBQSxDQUFBLE1BQUEsR0FBQSxTQUFBLENBQUE7U0FBQSxJQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLFFBQUEsQ0FBQSxDQUFBO0FBQUE7O0FBRUEsSUFBQSxDQUFBLE1BQUEsQ0FBQSxRQUFBLEdBQUEsU0FBQSxDQUFBO1NBQUEsSUFBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxRQUFBLElBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxLQUFBLENBQUEsUUFBQTtBQUFBOztBQUVBLElBQUEsQ0FBQSxNQUFBLENBQUEsT0FBQSxHQUFBLFNBQUEsQ0FBQTtTQUFBLElBQUEsQ0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLElBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUEsTUFBQSxDQUFBLENBQUE7QUFBQTs7QUFFQSxJQUFBLENBQUEsTUFBQSxDQUFBLE9BQUEsQ0FBQSxHQUFBLEdBQUEsU0FBQSxDQUFBO1NBQUEsSUFBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsT0FBQSxDQUFBLENBQUE7QUFBQTs7QUFFQSxJQUFBLENBQUEsTUFBQSxDQUFBLE9BQUEsQ0FBQSxNQUFBLEdBQUEsU0FBQSxDQUFBO1NBQUEsSUFBQSxDQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsT0FBQSxDQUFBLENBQUE7QUFBQTs7QUFFQSxJQUFBLENBQUEsTUFBQSxDQUFBLE9BQUEsQ0FBQSxRQUFBLEdBQUEsU0FBQSxDQUFBO1NBQUEsQ0FBQSxLQUFBLFFBQUEsSUFBQSxDQUFBLEtBQUEsQ0FBQTtBQUFBOztBQUVBLElBQUEsQ0FBQSxNQUFBLENBQUEsT0FBQSxDQUFBLE9BQUEsR0FBQSxTQUFBLENBQUE7U0FBQSxJQUFBLENBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxJQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsQ0FBQSxLQUFBO0FBQUE7O0FBRUEsSUFBQSxDQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxHQUFBLFNBQUEsQ0FBQTtTQUFBLElBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsT0FBQSxDQUFBLENBQUE7QUFBQTs7QUFFQSxJQUFBLENBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxNQUFBLEdBQUEsU0FBQSxDQUFBO1NBQUEsSUFBQSxDQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQTtBQUFBOztBQUVBLElBQUEsQ0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLFFBQUEsR0FBQSxTQUFBLENBQUE7U0FBQSxJQUFBLENBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxRQUFBLElBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxLQUFBLENBQUEsUUFBQTtBQUFBOztBQUVBLElBQUEsQ0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLE9BQUEsR0FBQSxTQUFBLENBQUE7U0FBQSxJQUFBLENBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsSUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxNQUFBLENBQUEsQ0FBQTtBQUFBOztBQUVBLElBQUEsQ0FBQSxNQUFBLEdBQUEsU0FBQSxDQUFBO1NBQUEsUUFBQSxDQUFBLENBQUEsQ0FBQSxLQUFBO0FBQUE7O0FBRUEsSUFBQSxDQUFBLE1BQUEsQ0FBQSxPQUFBLEdBQUEsU0FBQSxDQUFBO1NBQUEsSUFBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxPQUFBLENBQUEsQ0FBQTtBQUFBOztBQUVBLElBQUEsQ0FBQSxNQUFBLENBQUEsTUFBQSxHQUFBLFNBQUEsQ0FBQTtTQUFBLElBQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQTtBQUFBOztBQUVBLElBQUEsQ0FBQSxLQUFBLEdBQ0EscUJBQUEsR0FDQSxLQUFBLENBQUEsT0FEQSxHQUdBLFNBQUEsQ0FBQTtTQUFBLFFBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQTtBQUFBOztBQUVBLElBQUEsQ0FBQSxNQUFBLEdBQUEsU0FBQSxDQUFBO1NBQUEsUUFBQSxDQUFBLENBQUEsQ0FBQSxLQUFBO0FBQUE7O0FBRUEsSUFBQSxDQUFBLE1BQUEsQ0FBQSxPQUFBLEdBQUEsU0FBQSxDQUFBO1NBQUEsUUFBQSxDQUFBLENBQUEsQ0FBQSxLQUFBLGlCQUFBLElBQUEsQ0FBQSxDQUFBLFdBQUEsS0FBQSxFQUFBLENBQUE7QUFBQTs7QUFFQSxJQUFBLENBQUEsUUFBQSxHQUFBLFNBQUEsQ0FBQTtTQUFBLFFBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQTtBQUFBOztBQUVBLElBQUEsQ0FBQSxTQUFBLEdBQUEsU0FBQSxDQUFBO1NBQUEsUUFBQSxDQUFBLENBQUEsQ0FBQSxLQUFBO0FBQUE7O0FBRUEsSUFBQSxDQUFBLElBQUEsR0FBQSxTQUFBLENBQUE7U0FBQSxRQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUE7QUFBQTs7QUFFQSxJQUFBLENBQUEsTUFBQSxHQUFBLFNBQUEsQ0FBQTtTQUFBLFFBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQTtBQUFBOztBQUVBLElBQUEsQ0FBQSxLQUFBLEdBQUEsU0FBQSxDQUFBO1NBQUEsUUFBQSxDQUFBLENBQUEsQ0FBQSxLQUFBO0FBQUE7O0FBRUEsSUFBQSxDQUFBLElBQUEsR0FBQSxTQUFBLENBQUE7U0FBQSxRQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUE7QUFBQTs7QUFFQSxJQUFBLENBQUEsU0FBQSxHQUFBLFNBQUEsQ0FBQTtTQUFBLFFBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQTtBQUFBOztBQUVBLElBQUEsQ0FBQSxpQkFBQSxHQUFBLFNBQUEsQ0FBQTtTQUFBLFFBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQTtBQUFBOztBQUVBLElBQUEsQ0FBQSxVQUFBLEdBQUEsU0FBQSxDQUFBO1NBQUEsUUFBQSxDQUFBLENBQUEsQ0FBQSxLQUFBO0FBQUE7O0FBRUEsSUFBQSxDQUFBLFVBQUEsR0FBQSxTQUFBLENBQUE7U0FBQSxRQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUE7QUFBQTs7QUFFQSxJQUFBLENBQUEsV0FBQSxHQUFBLFNBQUEsQ0FBQTtTQUFBLFFBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQTtBQUFBOztBQUVBLElBQUEsQ0FBQSxVQUFBLEdBQUEsU0FBQSxDQUFBO1NBQUEsUUFBQSxDQUFBLENBQUEsQ0FBQSxLQUFBO0FBQUE7O0FBRUEsSUFBQSxDQUFBLFdBQUEsR0FBQSxTQUFBLENBQUE7U0FBQSxRQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUE7QUFBQTs7QUFFQSxJQUFBLENBQUEsWUFBQSxHQUFBLFNBQUEsQ0FBQTtTQUFBLFFBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQTtBQUFBOztBQUVBLElBQUEsQ0FBQSxZQUFBLEdBQUEsU0FBQSxDQUFBO1NBQUEsUUFBQSxDQUFBLENBQUEsQ0FBQSxLQUFBO0FBQUE7O0FBS0EsWUFBQSxHQUFBLFNBQUEsSUFBQSxFQUFBLElBQUE7QUFDQSxNQUFBO0FBQUE7T0FBQSxnQkFBQTs7O0lBQ0EsSUFBQSxJQUFBLENBQUEsUUFBQSxDQUFBLE9BQUEsQ0FBQTtNQUNBLE9BQUEsR0FBQSxJQUFBLEdBQUE7TUFDQSxPQUFBLENBQUEsUUFBQSxHQUFBO21CQUNBLFlBQUEsQ0FBQSxPQUFBLEVBQUEsT0FBQSxHQUFBLEdBQUEsR0FIQTtLQUFBLE1BQUE7MkJBQUE7O0FBREE7O0FBREE7O0FBTUEsWUFBQSxDQUFBLElBQUEsRUFBQSxFQUFBIiwiZmlsZSI6ImlzLWFuLm5vZGUuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJ0b1N0cmluZyA9ICh4KSAtPiAoe30pLnRvU3RyaW5nLmNhbGwoeClcclxuXHJcbmxpdGVyYWwgPSAoeCkgLT4gdHlwZW9mIHggIT0gJ29iamVjdCdcclxuXHJcbmlzQW4gPSAoeCwgdHlwZSkgLT5cclxuICBpZiB0eXBlP1xyXG4gICAgaWYgaXNBbi5PYmplY3QodHlwZSlcclxuICAgICAgb3B0aW9ucyA9IHR5cGVcclxuICAgICAgdHlwZSA9IHhcclxuXHJcbiAgICAjIGRldGVjdCB0eXBlXHJcbiAgICBmdW5jID0gaXNBblt0eXBlXVxyXG5cclxuICAgIGlmIG5vdCBmdW5jP1xyXG4gICAgICBmdW5jID0gaXNBblxyXG4gICAgICBmb3Igc3ViVHlwZU5hbWUgaW4gdHlwZS5zcGxpdCgnLicpXHJcbiAgICAgICAgZnVuYyA9IGZ1bmNbc3ViVHlwZU5hbWVdXHJcbiAgICAgICAgaWYgbm90IGZ1bmM/XHJcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkXHJcblxyXG4gICAgaWYgb3B0aW9ucz8ucmV0dXJuQ2hlY2tlclxyXG4gICAgICAjIHJldHVybiB0aGUgY2hlY2tlciBmdW5jdGlvblxyXG4gICAgICByZXR1cm4gZnVuY1xyXG4gICAgZWxzZVxyXG4gICAgICAjIHJldHVybiB0aGUgZGV0ZWN0ZWQgcmVzdWx0XHJcbiAgICAgIHJldHVybiBmdW5jKHgpXHJcbiAgZWxzZVxyXG4gICAgIyByZXBvcnQgdHlwZVxyXG4gICAgbmFtZSA9IHRvU3RyaW5nKHgpLnNsaWNlKCdbb2JqZWN0ICcubGVuZ3RoLCAtMSlcclxuICAgIGlmIGlzQW5bbmFtZV0/IGFuZCBpc0FuLkZ1bmN0aW9uKGlzQW5bbmFtZV0pIGFuZCBpc0FuW25hbWVdKHgpXHJcbiAgICAgIHJldHVybiBuYW1lXHJcblxyXG4gICAgZm9yIG93biB0eXBlLCBmdW5jIG9mIGlzQW5cclxuICAgICAgaWYgaXNBbi5GdW5jdGlvbihpc0FuW25hbWVdKSBhbmQgZnVuYyh4KVxyXG4gICAgICAgIHJldHVybiB0eXBlXHJcblxyXG4gICAgIyBjYW5ub3QgZGV0ZXJtaW5lIHR5cGVcclxuICAgIHJldHVyblxyXG5cclxuaXNBbi5VbmRlZmluZWQgPSAoeCkgLT4gdG9TdHJpbmcoeCkgPT0gJ1tvYmplY3QgVW5kZWZpbmVkXSdcclxuXHJcbmlzQW4uTnVsbCA9ICh4KSAtPiB0b1N0cmluZyh4KSA9PSAnW29iamVjdCBOdWxsXSdcclxuXHJcbmlzQW4uQm9vbGVhbiA9ICh4KSAtPiB0b1N0cmluZyh4KSA9PSAnW29iamVjdCBCb29sZWFuXSdcclxuXHJcbmlzQW4uQm9vbGVhbi5MaXRlcmFsID0gKHgpIC0+IGlzQW4uQm9vbGVhbih4KSBhbmQgbGl0ZXJhbCh4KVxyXG5cclxuaXNBbi5Cb29sZWFuLk9iamVjdCA9ICh4KSAtPiBpc0FuLkJvb2xlYW4oeCkgYW5kIG5vdCBsaXRlcmFsKHgpXHJcblxyXG5pc0FuLk51bWJlciA9ICh4KSAtPiB0b1N0cmluZyh4KSA9PSAnW29iamVjdCBOdW1iZXJdJ1xyXG5cclxuaXNBbi5OdW1iZXIuTGl0ZXJhbCA9ICh4KSAtPiBpc0FuLk51bWJlcih4KSBhbmQgbGl0ZXJhbCh4KVxyXG5cclxuaXNBbi5OdW1iZXIuT2JqZWN0ID0gKHgpIC0+IGlzQW4uTnVtYmVyKHgpIGFuZCBub3QgbGl0ZXJhbCh4KVxyXG5cclxuaXNBbi5OdW1iZXIuTmFOID0gKHgpIC0+IGlzQW4uTnVtYmVyKHgpIGFuZCBpc05hTih4KVxyXG5cclxuaXNBbi5OdW1iZXIuRmluaXRlID0gKHgpIC0+IGlzQW4uTnVtYmVyKHgpIGFuZCBpc0Zpbml0ZSh4KVxyXG5cclxuaXNBbi5OdW1iZXIuSW5maW5pdGUgPSAoeCkgLT4gaXNBbi5OdW1iZXIoeCkgYW5kIChOdW1iZXIoeCkgPT0gSW5maW5pdHkgb3IgTnVtYmVyKHgpID09IC1JbmZpbml0eSlcclxuXHJcbmlzQW4uTnVtYmVyLkludGVnZXIgPSAoeCkgLT4gaXNBbi5OdW1iZXIuRmluaXRlKHgpIGFuZCBNYXRoLmZsb29yKHgpID09IE51bWJlcih4KVxyXG5cclxuaXNBbi5OdW1iZXIuTGl0ZXJhbC5OYU4gPSAoeCkgLT4gaXNBbi5OdW1iZXIuTmFOKHgpIGFuZCBsaXRlcmFsKHgpXHJcblxyXG5pc0FuLk51bWJlci5MaXRlcmFsLkZpbml0ZSA9ICh4KSAtPiBpc0FuLk51bWJlci5GaW5pdGUoeCkgYW5kIGxpdGVyYWwoeClcclxuXHJcbmlzQW4uTnVtYmVyLkxpdGVyYWwuSW5maW5pdGUgPSAoeCkgLT4geCA9PSBJbmZpbml0eSBvciB4ID09IC1JbmZpbml0eVxyXG5cclxuaXNBbi5OdW1iZXIuTGl0ZXJhbC5JbnRlZ2VyID0gKHgpIC0+IGlzQW4uTnVtYmVyLkZpbml0ZSh4KSBhbmQgTWF0aC5mbG9vcih4KSA9PSB4XHJcblxyXG5pc0FuLk51bWJlci5PYmplY3QuTmFOID0gKHgpIC0+IGlzQW4uTnVtYmVyLk5hTih4KSBhbmQgbm90IGxpdGVyYWwoeClcclxuXHJcbmlzQW4uTnVtYmVyLk9iamVjdC5GaW5pdGUgPSAoeCkgLT4gaXNBbi5OdW1iZXIuRmluaXRlKHgpIGFuZCBub3QgbGl0ZXJhbCh4KVxyXG5cclxuaXNBbi5OdW1iZXIuT2JqZWN0LkluZmluaXRlID0gKHgpIC0+IGlzQW4uTnVtYmVyLk9iamVjdCh4KSBhbmQgKE51bWJlcih4KSA9PSBJbmZpbml0eSBvciBOdW1iZXIoeCkgPT0gLUluZmluaXR5KVxyXG5cclxuaXNBbi5OdW1iZXIuT2JqZWN0LkludGVnZXIgPSAoeCkgLT4gaXNBbi5OdW1iZXIuT2JqZWN0LkZpbml0ZSh4KSBhbmQgTWF0aC5mbG9vcih4KSA9PSBOdW1iZXIoeClcclxuXHJcbmlzQW4uU3RyaW5nID0gKHgpIC0+IHRvU3RyaW5nKHgpID09ICdbb2JqZWN0IFN0cmluZ10nXHJcblxyXG5pc0FuLlN0cmluZy5MaXRlcmFsID0gKHgpIC0+IGlzQW4uU3RyaW5nKHgpIGFuZCBsaXRlcmFsKHgpXHJcblxyXG5pc0FuLlN0cmluZy5PYmplY3QgPSAoeCkgLT4gaXNBbi5TdHJpbmcoeCkgYW5kIG5vdCBsaXRlcmFsKHgpXHJcblxyXG5pc0FuLkFycmF5ID1cclxuICBpZiBBcnJheS5pc0FycmF5P1xyXG4gICAgQXJyYXkuaXNBcnJheVxyXG4gIGVsc2VcclxuICAgICh4KSAtPiB0b1N0cmluZyh4KSA9PSAnW29iamVjdCBBcnJheV0nXHJcblxyXG5pc0FuLk9iamVjdCA9ICh4KSAtPiB0b1N0cmluZyh4KSA9PSAnW29iamVjdCBPYmplY3RdJ1xyXG5cclxuaXNBbi5PYmplY3QuTGl0ZXJhbCA9ICh4KSAtPiB0b1N0cmluZyh4KSA9PSAnW29iamVjdCBPYmplY3RdJyBhbmQgeC5jb25zdHJ1Y3RvciA9PSAoe30pLmNvbnN0cnVjdG9yXHJcblxyXG5pc0FuLkZ1bmN0aW9uID0gKHgpIC0+IHRvU3RyaW5nKHgpID09ICdbb2JqZWN0IEZ1bmN0aW9uXSdcclxuXHJcbmlzQW4uQXJndW1lbnRzID0gKHgpIC0+IHRvU3RyaW5nKHgpID09ICdbb2JqZWN0IEFyZ3VtZW50c10nXHJcblxyXG5pc0FuLkRhdGUgPSAoeCkgLT4gdG9TdHJpbmcoeCkgPT0gJ1tvYmplY3QgRGF0ZV0nXHJcblxyXG5pc0FuLlJlZ0V4cCA9ICh4KSAtPiB0b1N0cmluZyh4KSA9PSAnW29iamVjdCBSZWdFeHBdJ1xyXG5cclxuaXNBbi5FcnJvciA9ICh4KSAtPiB0b1N0cmluZyh4KSA9PSAnW29iamVjdCBFcnJvcl0nXHJcblxyXG5pc0FuLk1hdGggPSAoeCkgLT4gdG9TdHJpbmcoeCkgPT0gJ1tvYmplY3QgTWF0aF0nXHJcblxyXG5pc0FuLkludDhBcnJheSA9ICh4KSAtPiB0b1N0cmluZyh4KSA9PSAnW29iamVjdCBJbnQ4QXJyYXldJ1xyXG5cclxuaXNBbi5VaW50OENsYW1wZWRBcnJheSA9ICh4KSAtPiB0b1N0cmluZyh4KSA9PSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nXHJcblxyXG5pc0FuLlVpbnQ4QXJyYXkgPSAoeCkgLT4gdG9TdHJpbmcoeCkgPT0gJ1tvYmplY3QgVWludDhBcnJheV0nXHJcblxyXG5pc0FuLkludDE2QXJyYXkgPSAoeCkgLT4gdG9TdHJpbmcoeCkgPT0gJ1tvYmplY3QgSW50MTZBcnJheV0nXHJcblxyXG5pc0FuLlVpbnQxNkFycmF5ID0gKHgpIC0+IHRvU3RyaW5nKHgpID09ICdbb2JqZWN0IFVpbnQxNkFycmF5XSdcclxuXHJcbmlzQW4uSW50MzJBcnJheSA9ICh4KSAtPiB0b1N0cmluZyh4KSA9PSAnW29iamVjdCBJbnQzMkFycmF5XSdcclxuXHJcbmlzQW4uVWludDMyQXJyYXkgPSAoeCkgLT4gdG9TdHJpbmcoeCkgPT0gJ1tvYmplY3QgVWludDMyQXJyYXldJ1xyXG5cclxuaXNBbi5GbG9hdDMyQXJyYXkgPSAoeCkgLT4gdG9TdHJpbmcoeCkgPT0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XSdcclxuXHJcbmlzQW4uRmxvYXQ2NEFycmF5ID0gKHgpIC0+IHRvU3RyaW5nKHgpID09ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nXHJcblxyXG4jIF8uc3ltYm9sID0gKHgpIC0+IHRvU3RyaW5nKHgpID09ICdbb2JqZWN0IFN5bWJvbF0nXHJcblxyXG4jIEdpdmUgZWFjaCB0eXBlIGNoZWNrZXIgYSB0eXBlTmFtZSBtYXRjaGluZyBpdHMgZGlzdGluZ3Vpc2hlZCBmdW5jdGlvbiBuYW1lXHJcbnNldFR5cGVOYW1lcyA9IChmdW5jLCBuYW1lKSAtPlxyXG4gIGZvciBvd24gdHlwZU5hbWUsIHN1YkZ1bmMgb2YgZnVuY1xyXG4gICAgaWYgaXNBbi5GdW5jdGlvbihzdWJGdW5jKVxyXG4gICAgICBzdWJOYW1lID0gbmFtZSArIHR5cGVOYW1lXHJcbiAgICAgIHN1YkZ1bmMudHlwZU5hbWUgPSBzdWJOYW1lXHJcbiAgICAgIHNldFR5cGVOYW1lcyhzdWJGdW5jLCBzdWJOYW1lICsgJy4nKVxyXG5zZXRUeXBlTmFtZXMoaXNBbiwgJycpXHJcbiJdfQ==
