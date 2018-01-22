
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],[
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(0);
var ctx = __webpack_require__(8);
var hide = __webpack_require__(9);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(41)('wks');
var uid = __webpack_require__(26);
var Symbol = __webpack_require__(3).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(7);
var IE8_DOM_DEFINE = __webpack_require__(61);
var toPrimitive = __webpack_require__(38);
var dP = Object.defineProperty;

exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(10)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(24);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var createDesc = __webpack_require__(19);
module.exports = __webpack_require__(6) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(39);
var defined = __webpack_require__(36);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(36);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(85);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {
  module.exports = require('./cjs/react.production.min.js');
} else {
  module.exports = __webpack_require__(127);
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(90)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(37)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(63);
var enumBugKeys = __webpack_require__(42);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(4).f;
var has = __webpack_require__(11);
var TAG = __webpack_require__(2)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(8);
var call = __webpack_require__(73);
var isArrayIter = __webpack_require__(74);
var anObject = __webpack_require__(7);
var toLength = __webpack_require__(30);
var getIterFn = __webpack_require__(54);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(7);
var dPs = __webpack_require__(92);
var enumBugKeys = __webpack_require__(42);
var IE_PROTO = __webpack_require__(40)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(50)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(72).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(96);
var global = __webpack_require__(3);
var hide = __webpack_require__(9);
var Iterators = __webpack_require__(13);
var TO_STRING_TAG = __webpack_require__(2)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 28 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(35);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(23);
var TAG = __webpack_require__(2)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(31);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(29);
var $export = __webpack_require__(1);
var redefine = __webpack_require__(62);
var hide = __webpack_require__(9);
var has = __webpack_require__(11);
var Iterators = __webpack_require__(13);
var $iterCreate = __webpack_require__(91);
var setToStringTag = __webpack_require__(21);
var getPrototypeOf = __webpack_require__(64);
var ITERATOR = __webpack_require__(2)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(5);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(23);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(41)('keys');
var uid = __webpack_require__(26);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 43 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(109), __esModule: true };

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(55);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(2);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(26)('meta');
var isObject = __webpack_require__(5);
var has = __webpack_require__(11);
var setDesc = __webpack_require__(4).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(10)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(0);
var LIBRARY = __webpack_require__(29);
var wksExt = __webpack_require__(46);
var defineProperty = __webpack_require__(4).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(120);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(124);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(55);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
var document = __webpack_require__(3).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 51 */
/***/ (function(module, exports) {



/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(9);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(32);
var ITERATOR = __webpack_require__(2)('iterator');
var Iterators = __webpack_require__(13);
module.exports = __webpack_require__(0).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(111);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(113);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  var invariant = __webpack_require__(33);
  var warning = __webpack_require__(34);
  var ReactPropTypesSecret = __webpack_require__(69);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(10)(function () {
  return Object.defineProperty(__webpack_require__(50)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(11);
var toIObject = __webpack_require__(12);
var arrayIndexOf = __webpack_require__(93)(false);
var IE_PROTO = __webpack_require__(40)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(11);
var toObject = __webpack_require__(14);
var IE_PROTO = __webpack_require__(40)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(23);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(63);
var hiddenKeys = __webpack_require__(42).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(28);
var createDesc = __webpack_require__(19);
var toIObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(38);
var has = __webpack_require__(11);
var IE8_DOM_DEFINE = __webpack_require__(61);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 70 */,
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(3).document;
module.exports = document && document.documentElement;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(7);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(13);
var ITERATOR = __webpack_require__(2)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(1);
var core = __webpack_require__(0);
var fails = __webpack_require__(10);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(3);
var core = __webpack_require__(0);
var dP = __webpack_require__(4);
var DESCRIPTORS = __webpack_require__(6);
var SPECIES = __webpack_require__(2)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(162), __esModule: true };

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(99);
exports.encode = exports.stringify = __webpack_require__(100);


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(103), __esModule: true };

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (true) {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;

/***/ }),
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(35);
var defined = __webpack_require__(36);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(25);
var descriptor = __webpack_require__(19);
var setToStringTag = __webpack_require__(21);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(9)(IteratorPrototype, __webpack_require__(2)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var anObject = __webpack_require__(7);
var getKeys = __webpack_require__(20);

module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(12);
var toLength = __webpack_require__(30);
var toAbsoluteIndex = __webpack_require__(94);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(35);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 95 */,
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(97);
var step = __webpack_require__(65);
var Iterators = __webpack_require__(13);
var toIObject = __webpack_require__(12);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(37)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 98 */,
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),
/* 101 */,
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(164);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(83);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(104);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(1);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(6), 'Object', { defineProperty: __webpack_require__(4).f });


/***/ }),
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(110);
module.exports = __webpack_require__(0).Object.getPrototypeOf;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(14);
var $getPrototypeOf = __webpack_require__(64);

__webpack_require__(75)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(112), __esModule: true };

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(18);
__webpack_require__(27);
module.exports = __webpack_require__(46).f('iterator');


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(114), __esModule: true };

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(115);
__webpack_require__(51);
__webpack_require__(118);
__webpack_require__(119);
module.exports = __webpack_require__(0).Symbol;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(3);
var has = __webpack_require__(11);
var DESCRIPTORS = __webpack_require__(6);
var $export = __webpack_require__(1);
var redefine = __webpack_require__(62);
var META = __webpack_require__(47).KEY;
var $fails = __webpack_require__(10);
var shared = __webpack_require__(41);
var setToStringTag = __webpack_require__(21);
var uid = __webpack_require__(26);
var wks = __webpack_require__(2);
var wksExt = __webpack_require__(46);
var wksDefine = __webpack_require__(48);
var enumKeys = __webpack_require__(116);
var isArray = __webpack_require__(66);
var anObject = __webpack_require__(7);
var isObject = __webpack_require__(5);
var toIObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(38);
var createDesc = __webpack_require__(19);
var _create = __webpack_require__(25);
var gOPNExt = __webpack_require__(117);
var $GOPD = __webpack_require__(68);
var $DP = __webpack_require__(4);
var $keys = __webpack_require__(20);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(67).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(28).f = $propertyIsEnumerable;
  __webpack_require__(43).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(29)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(9)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(20);
var gOPS = __webpack_require__(43);
var pIE = __webpack_require__(28);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(12);
var gOPN = __webpack_require__(67).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48)('asyncIterator');


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48)('observable');


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(121), __esModule: true };

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(122);
module.exports = __webpack_require__(0).Object.setPrototypeOf;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(1);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(123).set });


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(5);
var anObject = __webpack_require__(7);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(8)(Function.call, __webpack_require__(68).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(125), __esModule: true };

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(126);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(1);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(25) });


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.2.0
 * react.development.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(56);
var emptyObject = __webpack_require__(86);
var invariant = __webpack_require__(33);
var warning = __webpack_require__(34);
var emptyFunction = __webpack_require__(31);
var checkPropTypes = __webpack_require__(57);

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.2.0';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol['for'];

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol['for']('react.element') : 0xeac7;
var REACT_CALL_TYPE = hasSymbol ? Symbol['for']('react.call') : 0xeac8;
var REACT_RETURN_TYPE = hasSymbol ? Symbol['for']('react.return') : 0xeac9;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol['for']('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol['for']('react.fragment') : 0xeacb;

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable === 'undefined') {
    return null;
  }
  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}

/**
 * WARNING: DO NOT manually require this module.
 * This is a replacement for `invariant(...)` used by the error code system
 * and will _only_ be required by the corresponding babel pass.
 * It always throws.
 */

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var constructor = publicInstance.constructor;
    var componentName = constructor && (constructor.displayName || constructor.name) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }
    warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

/**
 * Base class helpers for the updating state of a component.
 */
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
Component.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

/**
 * Base class helpers for the updating state of a component.
 */
function PureComponent(props, context, updater) {
  // Duplicated from Component.
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;
var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
_assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

function AsyncComponent(props, context, updater) {
  // Duplicated from Component.
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

var asyncComponentPrototype = AsyncComponent.prototype = new ComponentDummy();
asyncComponentPrototype.constructor = AsyncComponent;
// Avoid an extra prototype jump for these methods.
_assign(asyncComponentPrototype, Component.prototype);
asyncComponentPrototype.unstable_isAsyncReactComponent = true;
asyncComponentPrototype.render = function () {
  return this.props.children;
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown;
var specialPropRefWarningShown;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allow us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */
function createElement(type, config, children) {
  var propName;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }
        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}

/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */


function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
}

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */
function cloneElement(element, config, children) {
  var propName;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}

/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var ReactDebugCurrentFrame = {};

{
  // Component that is being worked on
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      return impl();
    }
    return null;
  };
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;
      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_CALL_TYPE:
          case REACT_RETURN_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }
    }
  }

  if (invokeCallback) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          warning(didWarnAboutMaps, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', ReactDebugCurrentFrame.getStackAddendum());
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }
      var childrenString = '' + children;
      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.foreach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.map
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.count
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children, context) {
  return traverseAllChildren(children, emptyFunction.thatReturnsNull, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.toarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
  return result;
}

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.only
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
  return children;
}

var describeComponentFrame = function (name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
};

function getComponentName(fiber) {
  var type = fiber.type;

  if (typeof type === 'string') {
    return type;
  }
  if (typeof type === 'function') {
    return type.displayName || type.name;
  }
  return null;
}

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

{
  var currentlyValidatingElement = null;

  var propTypesMisspellWarningShown = false;

  var getDisplayName = function (element) {
    if (element == null) {
      return '#empty';
    } else if (typeof element === 'string' || typeof element === 'number') {
      return '#text';
    } else if (typeof element.type === 'string') {
      return element.type;
    } else if (element.type === REACT_FRAGMENT_TYPE) {
      return 'React.Fragment';
    } else {
      return element.type.displayName || element.type.name || 'Unknown';
    }
  };

  var getStackAddendum = function () {
    var stack = '';
    if (currentlyValidatingElement) {
      var name = getDisplayName(currentlyValidatingElement);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner));
    }
    stack += ReactDebugCurrentFrame.getStackAddendum() || '';
    return stack;
  };

  var VALID_FRAGMENT_PROPS = new Map([['children', true], ['key', true]]);
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + getComponentName(element._owner) + '.';
  }

  currentlyValidatingElement = element;
  {
    warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, getStackAddendum());
  }
  currentlyValidatingElement = null;
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;
        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var componentClass = element.type;
  if (typeof componentClass !== 'function') {
    return;
  }
  var name = componentClass.displayName || componentClass.name;
  var propTypes = componentClass.propTypes;
  if (propTypes) {
    currentlyValidatingElement = element;
    checkPropTypes(propTypes, element.props, 'prop', name, getStackAddendum);
    currentlyValidatingElement = null;
  } else if (componentClass.PropTypes !== undefined && !propTypesMisspellWarningShown) {
    propTypesMisspellWarningShown = true;
    warning(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
  }
  if (typeof componentClass.getDefaultProps === 'function') {
    warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
  }
}

/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */
function validateFragmentProps(fragment) {
  currentlyValidatingElement = fragment;

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.keys(fragment.props)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      if (!VALID_FRAGMENT_PROPS.has(key)) {
        warning(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.%s', key, getStackAddendum());
        break;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator['return']) {
        _iterator['return']();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (fragment.ref !== null) {
    warning(false, 'Invalid attribute `ref` supplied to `React.Fragment`.%s', getStackAddendum());
  }

  currentlyValidatingElement = null;
}

function createElementWithValidation(type, props, children) {
  var validType = typeof type === 'string' || typeof type === 'function' || typeof type === 'symbol' || typeof type === 'number';
  // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.
  if (!validType) {
    var info = '';
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(props);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    info += getStackAddendum() || '';

    warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info);
  }

  var element = createElement.apply(this, arguments);

  // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.
  if (element == null) {
    return element;
  }

  // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)
  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (typeof type === 'symbol' && type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}

function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  // Legacy hook TODO: Warn if this is accessed
  validatedFactory.type = type;

  {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}

function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);
  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }
  validatePropTypes(newElement);
  return newElement;
}

var React = {
  Children: {
    map: mapChildren,
    forEach: forEachChildren,
    count: countChildren,
    toArray: toArray,
    only: onlyChild
  },

  Component: Component,
  PureComponent: PureComponent,
  unstable_AsyncComponent: AsyncComponent,

  Fragment: REACT_FRAGMENT_TYPE,

  createElement: createElementWithValidation,
  cloneElement: cloneElementWithValidation,
  createFactory: createFactoryWithValidation,
  isValidElement: isValidElement,

  version: ReactVersion,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentOwner: ReactCurrentOwner,
    // Used by renderers to avoid bundling object-assign twice in UMD bundles:
    assign: _assign
  }
};

{
  _assign(React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}



var React$2 = Object.freeze({
	default: React
});

var React$3 = ( React$2 && React ) || React$2;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var react = React$3['default'] ? React$3['default'] : React$3;

module.exports = react;
  })();
}


/***/ }),
/* 128 */,
/* 129 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(4).f;
var create = __webpack_require__(25);
var redefineAll = __webpack_require__(53);
var ctx = __webpack_require__(8);
var anInstance = __webpack_require__(52);
var forOf = __webpack_require__(22);
var $iterDefine = __webpack_require__(37);
var step = __webpack_require__(65);
var setSpecies = __webpack_require__(79);
var DESCRIPTORS = __webpack_require__(6);
var fastKey = __webpack_require__(47).fastKey;
var validate = __webpack_require__(71);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(3);
var $export = __webpack_require__(1);
var meta = __webpack_require__(47);
var fails = __webpack_require__(10);
var hide = __webpack_require__(9);
var redefineAll = __webpack_require__(53);
var forOf = __webpack_require__(22);
var anInstance = __webpack_require__(52);
var isObject = __webpack_require__(5);
var setToStringTag = __webpack_require__(21);
var dP = __webpack_require__(4).f;
var each = __webpack_require__(136)(0);
var DESCRIPTORS = __webpack_require__(6);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(8);
var IObject = __webpack_require__(39);
var toObject = __webpack_require__(14);
var toLength = __webpack_require__(30);
var asc = __webpack_require__(137);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(138);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
var isArray = __webpack_require__(66);
var SPECIES = __webpack_require__(2)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(32);
var from = __webpack_require__(140);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(22);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(1);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(1);
var aFunction = __webpack_require__(24);
var ctx = __webpack_require__(8);
var forOf = __webpack_require__(22);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(160), __esModule: true };

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(161);
module.exports = __webpack_require__(0).Object.keys;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(14);
var $keys = __webpack_require__(20);

__webpack_require__(75)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27);
__webpack_require__(18);
module.exports = __webpack_require__(163);


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(7);
var get = __webpack_require__(54);
module.exports = __webpack_require__(0).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(165), __esModule: true };

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27);
__webpack_require__(18);
module.exports = __webpack_require__(166);


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(32);
var ITERATOR = __webpack_require__(2)('iterator');
var Iterators = __webpack_require__(13);
module.exports = __webpack_require__(0).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = __webpack_require__(382);

var _map2 = _interopRequireDefault(_map);

var _slicedToArray2 = __webpack_require__(102);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.flush = flush;

var _react = __webpack_require__(17);

var _stylesheetRegistry = __webpack_require__(388);

var _stylesheetRegistry2 = _interopRequireDefault(_stylesheetRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheetRegistry = new _stylesheetRegistry2.default();

var JSXStyle = function (_Component) {
  (0, _inherits3.default)(JSXStyle, _Component);

  function JSXStyle() {
    (0, _classCallCheck3.default)(this, JSXStyle);
    return (0, _possibleConstructorReturn3.default)(this, (JSXStyle.__proto__ || (0, _getPrototypeOf2.default)(JSXStyle)).apply(this, arguments));
  }

  (0, _createClass3.default)(JSXStyle, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      styleSheetRegistry.add(this.props);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.css !== nextProps.css;
    }

    // To avoid FOUC, we process new changes
    // on `componentWillUpdate` rather than `componentDidUpdate`.

  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      styleSheetRegistry.update(this.props, nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }], [{
    key: 'dynamic',
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var _tagInfo = (0, _slicedToArray3.default)(tagInfo, 2),
            baseId = _tagInfo[0],
            props = _tagInfo[1];

        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);
  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;
function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return new _map2.default(cssRules);
}

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(383), __esModule: true };

/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(51);
__webpack_require__(18);
__webpack_require__(27);
__webpack_require__(384);
__webpack_require__(385);
__webpack_require__(386);
__webpack_require__(387);
module.exports = __webpack_require__(0).Map;


/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(134);
var validate = __webpack_require__(71);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(135)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(1);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(139)('Map') });


/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(141)('Map');


/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(142)('Map');


/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(159);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _stringHash = __webpack_require__(389);

var _stringHash2 = _interopRequireDefault(_stringHash);

var _stylesheet = __webpack_require__(390);

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyleSheetRegistry = function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === undefined ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet2.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });
    this._sheet.inject();
    this._isBrowser = isBrowser;

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};

    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  (0, _createClass3.default)(StyleSheetRegistry, [{
    key: 'add',
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.css);
        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = (0, _keys2.default)(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _getIdAndRules = this.getIdAndRules(props),
          styleId = _getIdAndRules.styleId,
          rules = _getIdAndRules.rules;

      // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      })
      // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });

      if (indices.length > 0) {
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
      }
    }
  }, {
    key: 'remove',
    value: function remove(props) {
      var _this2 = this;

      var _getIdAndRules2 = this.getIdAndRules(props),
          styleId = _getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, 'styleId: `' + styleId + '` not found');
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];
        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });
          delete this._indices[styleId];
        }
        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: 'update',
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._sheet.flush();
      this._sheet.inject();
      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};

      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? (0, _keys2.default)(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];
      var cssRules = this._sheet.cssRules();

      return fromServer.concat((0, _keys2.default)(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join('\n')];
      }));
    }

    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: 'createComputeId',
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return 'jsx-' + baseId;
        }
        var propsToString = String(props);
        var key = baseId + propsToString;
        // return `jsx-${hashString(`${baseId}-${propsToString}`)}`
        if (!cache[key]) {
          cache[key] = 'jsx-' + (0, _stringHash2.default)(baseId + '-' + propsToString);
        }
        return cache[key];
      };
    }

    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: 'createComputeSelector',
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;

      var cache = {};
      return function (id, css) {
        var idcss = id + css;
        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }
        return cache[idcss];
      };
    }
  }, {
    key: 'getIdAndRules',
    value: function getIdAndRules(props) {
      var _this4 = this;

      if (props.dynamic) {
        var styleId = this.computeId(props.styleId, props.dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(props.css) ? props.css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, props.css)]
        };
      }

      return {
        styleId: this.computeId(props.styleId),
        rules: Array.isArray(props.css) ? props.css : [props.css]
      };
    }

    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: 'selectFromServer',
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));

      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);
  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheetRegistry: ' + message + '.');
  }
}

/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/

var isProd = process.env && "development" === 'production';
var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet = function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === undefined ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = '#' + name + '-deleted-rule____{}';

    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;

    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
  }

  (0, _createClass3.default)(StyleSheet, [{
    key: 'setOptimizeForSpeed',
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');

      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: 'isOptimizeForSpeed',
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: 'inject',
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;
      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();
        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.'); // eslint-disable-line no-console
          }
          this.flush();
          this._injected = true;
        }
        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = { cssText: rule };
          } else {
            _this._serverSheet.cssRules.push({ cssText: rule });
          }
          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: 'getSheetForTag',
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      }

      // this weirdness brought to you by firefox
      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: 'getSheet',
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: 'insertRule',
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }
        this._serverSheet.insertRule(rule, index);
        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();
        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        }
        // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];
        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: 'replaceRule',
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;
        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          // In order to preserve the indices we insert a deleteRulePlaceholder
          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, 'old rule at index `' + index + '` not found');
        tag.textContent = rule;
      }
      return index;
    }
  }, {
    key: 'deleteRule',
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);
        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, 'rule at index `' + index + '` not found');
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;
      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });
        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }
      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }
        return rules;
      }, []);
    }
  }, {
    key: 'makeStyleTag',
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }
      var tag = document.createElement('style');
      tag.type = 'text/css';
      tag.setAttribute('data-' + name, '');
      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }
      var head = document.head || document.getElementsByTagName('head')[0];
      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }
      return tag;
    }
  }, {
    key: 'length',
    get: function get() {
      return this._rulesCount;
    }
  }]);
  return StyleSheet;
}();

exports.default = StyleSheet;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheet: ' + message + '.');
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(129)))

/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(392);


/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(393);

var _Header2 = _interopRequireDefault(_Header);

var _SectionOne = __webpack_require__(395);

var _SectionOne2 = _interopRequireDefault(_SectionOne);

var _main_css = __webpack_require__(396);

var _main_css2 = _interopRequireDefault(_main_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Pavilion\\Documents\\Proyectos\\WebAppRioDanta\\pages\\index.js?entry';

exports.default = function () {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement(_main_css2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement(_SectionOne2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement('section', { id: 'second', className: 'main', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement('header', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement('div', { className: 'container', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, 'Promociones y Tours'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, 'Si deseas hacer las mejores actividades que brinda la Fortuna de San Carlos, ingresa para ver videos de las diferentes actividades, si deseas recibir los mejores precios solo debes escribirnos en breve te brindaremos la informacion que deseas.'))), _react2.default.createElement('div', { className: 'content dark style2', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement('div', { className: 'container', __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement('div', { className: 'row', __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement('header', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, 'Tours')), _react2.default.createElement('div', { className: 'table-wrapper', __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement('table', { className: 'default', __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, _react2.default.createElement('thead', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, _react2.default.createElement('tr', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, _react2.default.createElement('th', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, 'ID'), _react2.default.createElement('th', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, 'Tour'), _react2.default.createElement('th', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, 'Description'), _react2.default.createElement('th', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, 'Price'))), _react2.default.createElement('tbody', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, _react2.default.createElement('tr', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, _react2.default.createElement('td', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, _react2.default.createElement('video', { src: 'assets/gif/fly_board.mp4', height: 100, width: 100, autoPlay: true, controls: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  })), _react2.default.createElement('td', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, 'Fly Board'), _react2.default.createElement('td', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, 'Entrada a Baldi + Almuerzo + Cena tipo Buffet'), _react2.default.createElement('td', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, '$90')), _react2.default.createElement('tr', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, _react2.default.createElement('td', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, _react2.default.createElement('video', { src: 'assets/gif/canopy_Sky.mp4', height: 100, width: 100, autoPlay: true, controls: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  })), _react2.default.createElement('td', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, 'Tabacon + Alimentacion'), _react2.default.createElement('td', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, 'Entrada a Tabacon + Almuerzo + Cena tipo Buffet'), _react2.default.createElement('td', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, '$55')), _react2.default.createElement('tr', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, _react2.default.createElement('td', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, _react2.default.createElement('span', { className: 'icon fa', __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, _react2.default.createElement('img', { src: 'static/images/kalambu.jpg', height: 100, width: 100, __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }))), _react2.default.createElement('td', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, 'Baldi + Alimentacion'), _react2.default.createElement('td', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, 'Entrada a Baldi + Almuerzo + Cena tipo Buffet'), _react2.default.createElement('td', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, '$55')), _react2.default.createElement('tr', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, _react2.default.createElement('td', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, _react2.default.createElement('span', { className: 'icon fa', __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, _react2.default.createElement('img', { src: 'static/images/ecotermales.jpg', height: 100, width: 100, __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }))), _react2.default.createElement('td', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, 'Baldi + Alimentacion'), _react2.default.createElement('td', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, 'Entrada a Baldi + Almuerzo + Cena tipo Buffet'), _react2.default.createElement('td', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, '$55')), _react2.default.createElement('tr', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, _react2.default.createElement('td', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, _react2.default.createElement('span', { className: 'icon fa', __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, _react2.default.createElement('img', { src: 'static/images/atv.jpg', height: 100, width: 100, __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }))), _react2.default.createElement('td', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, 'Baldi + Alimentacion'), _react2.default.createElement('td', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, 'Entrada a Baldi + Almuerzo + Cena tipo Buffet'), _react2.default.createElement('td', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, '$55')), _react2.default.createElement('tr', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, _react2.default.createElement('td', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, _react2.default.createElement('span', { className: 'icon fa', __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, _react2.default.createElement('img', { src: 'static/images/rafting.jpg', height: 100, width: 100, __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }))), _react2.default.createElement('td', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }, 'Baldi + Alimentacion'), _react2.default.createElement('td', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, 'Entrada a Baldi + Almuerzo + Cena tipo Buffet'), _react2.default.createElement('td', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }, '$55')), _react2.default.createElement('tr', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, _react2.default.createElement('td', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, _react2.default.createElement('span', { className: 'icon fa', __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, _react2.default.createElement('img', { src: 'static/images/canopy.jpg', height: 100, width: 100, __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }))), _react2.default.createElement('td', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  }, 'Baldi + Alimentacion'), _react2.default.createElement('td', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }, 'Entrada a Baldi + Almuerzo + Cena tipo Buffet'), _react2.default.createElement('td', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }, '$55'))), _react2.default.createElement('tfoot', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }, _react2.default.createElement('tr', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }, _react2.default.createElement('td', { colSpan: 3, __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }), _react2.default.createElement('td', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, '100.00'))))), _react2.default.createElement('section', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  }, _react2.default.createElement('footer', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, _react2.default.createElement('a', { href: '#third', className: 'button scrolly', __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  }, 'Reservaciones')), _react2.default.createElement('div', { className: 'u12 u12-narrow', __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    }
  }, _react2.default.createElement('div', { className: 'row', __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    }
  }, _react2.default.createElement('video', { src: 'assets/gif/fly_board.mp4', height: 150, width: 150, autoPlay: true, controls: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    }
  }), _react2.default.createElement('div', { className: 'u6', __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    }
  }, _react2.default.createElement('a', { href: '#', className: 'image', __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    }
  }, _react2.default.createElement('img', { src: 'static/images/atv.jpg', className: 'tour', height: 150, width: 150, __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    }
  }))), _react2.default.createElement('div', { className: 'u6', __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    }
  }, _react2.default.createElement('a', { href: '#', className: 'image', __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    }
  }, _react2.default.createElement('img', { src: 'static/images/baldi.jpg', className: 'tour', height: 150, width: 150, __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    }
  }))), _react2.default.createElement('div', { className: 'u6', __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    }
  }, _react2.default.createElement('a', { href: '#', className: 'image', __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    }
  }, _react2.default.createElement('img', { src: 'static/images/estandar.jpg', className: 'tour', height: 200, width: 200, __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    }
  }))), _react2.default.createElement('div', { className: 'u6', __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    }
  }, _react2.default.createElement('a', { href: '#', className: 'image', __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    }
  }, _react2.default.createElement('img', { src: 'static/images/celeste.jpg', className: 'tour', height: 200, width: 200, __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    }
  }))), _react2.default.createElement('div', { className: 'u6', __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  }, _react2.default.createElement('a', { href: '#', className: 'image', __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  }, _react2.default.createElement('img', { src: 'static/images/ecotermales.jpg', className: 'tour', height: 200, width: 200, __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  }))), _react2.default.createElement('div', { className: 'u6', __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    }
  }, _react2.default.createElement('a', { href: '#', className: 'image fit', __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    }
  }, _react2.default.createElement('img', { src: 'static/images/tucan.jpg', className: 'tour', height: 200, width: 200, __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    }
  }))), _react2.default.createElement('div', { className: 'u6', __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    }
  }, _react2.default.createElement('a', { href: '#', className: 'image fit', __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    }
  }, _react2.default.createElement('img', { src: 'static/images/ranacristal.jpg', className: 'tour', height: 200, width: 200, __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    }
  }))), _react2.default.createElement('div', { className: 'u6', __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    }
  }, _react2.default.createElement('a', { href: '#', className: 'image fit', __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    }
  }, _react2.default.createElement('img', { src: 'static/images/rafting.jpg', className: 'tour', height: 200, width: 200, __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    }
  }))), _react2.default.createElement('div', { className: 'u6', __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    }
  }, _react2.default.createElement('a', { href: '#', className: 'image fit', __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    }
  }, _react2.default.createElement('img', { src: 'static/images/tabacon.jpg', className: 'tour', height: 200, width: 200, __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    }
  }))), _react2.default.createElement('div', { className: 'u6', __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    }
  }, _react2.default.createElement('a', { href: '#', className: 'image fit', __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    }
  }, _react2.default.createElement('img', { src: 'static/images/atv.jpg', className: 'tour', height: 200, width: 200, __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    }
  }))), _react2.default.createElement('div', { className: 'u6', __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    }
  }, _react2.default.createElement('a', { href: '#', className: 'image fit', __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    }
  }, _react2.default.createElement('img', { src: 'static/images/tucan.jpg', className: 'tour', height: 200, width: 200, __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    }
  }))), _react2.default.createElement('div', { className: 'u6', __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    }
  }, _react2.default.createElement('a', { href: '#', className: 'image fit', __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    }
  }, _react2.default.createElement('img', { src: 'static/images/canopy.jpg', className: 'tour', height: 200, width: 200, __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    }
  })))))))))), _react2.default.createElement('section', { id: 'third', className: 'main', __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    }
  }, _react2.default.createElement('header', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    }
  }, _react2.default.createElement('div', { className: 'container', __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    }
  }, 'Aprovecha De Nuestros Descuentos Si Reservas Hospedaje + Tours'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    }
  }, 'Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet consequat', _react2.default.createElement('br', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    }
  }), 'feugiat. Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet.'))), _react2.default.createElement('div', { className: 'content dark style3', __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    }
  }, _react2.default.createElement('div', { className: 'container', __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    }
  }, _react2.default.createElement('span', { className: 'image featured', __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    }
  }, _react2.default.createElement('img', { src: 'static/images/pic07.jpg', alt: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    }
  })), _react2.default.createElement('div', { className: 'row', __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    }
  }, _react2.default.createElement('div', { className: 'u4 u12-narrow', __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    }
  }, _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    }
  }, 'Diam vivamus turpis lorem sodales lectus ornare'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    }
  }, 'Gravida dis placerat lectus ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia eget ornare varius gravida. Gravida dis placerat lectus ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia accumsan vivamus augue cubilia vivamus nisi eu eget ornare varius gravida euismod.  Gravida dis lorem ipsum dolor placerat magna tempus feugiat.'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    }
  }, 'Lectus ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia accumsan vivamus augue cubilia vivamus nisi eu eget ornare varius gravida dolore euismod lorem ipsum dolor sit amet consequat. vivamus nisi eu eget ornare varius gravida dolore euismod lorem ipsum dolor sit amet consequat. vivamus nisi eu eget ornare et magna.')), _react2.default.createElement('div', { className: 'u4 u12-narrow', __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    }
  }, 'Gravida dis placerat lectus ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia eget ornare varius gravida. Gravida dis placerat lectus ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia accumsan vivamus augue cubilia vivamus nisi eu eget ornare varius gravida euismod.  Gravida dis lorem ipsum dolor placerat magna tempus feugiat.'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    }
  }, 'Lectus ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia accumsan vivamus augue cubilia vivamus nisi eu eget ornare varius gravida dolore euismod lorem ipsum dolor sit amet consequat eget ornare varius gravida euismod. Gravida dis lorem ipsum dolor placerat magna tempus feugiat magna tempus lorem.'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    }
  }, 'Lectus ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia accumsan vivamus augue cubilia.')), _react2.default.createElement('div', { className: 'u4 u12-narrow', __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    }
  }, 'Placerat lectus ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia eget ornare varius gravida. Gravida dis placerat lectus ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia accumsan vivamus augue cubilia vivamus nisi eu eget ornare varius gravida euismod.  Gravida dis lorem ipsum dolor placerat magna tempus feugiat. Lectus ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia dolore.'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    }
  }, 'Accumsan vivamus augue cubilia vivamus nisi eu eget ornare varius gravida dolore euismod lorem ipsum dolor sit amet conseismod lorem ipsum dolor sit amet consequat lorem ipsum consequat feugiat sed tempus euismod feugiat veroeros.'), _react2.default.createElement('footer', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    }
  }, _react2.default.createElement('a', { href: '#fourth', className: 'button scrolly', __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    }
  }, 'Ipsum ornare lorem dolor'))))))), _react2.default.createElement('section', { id: 'fourth', className: 'main', __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    }
  }, _react2.default.createElement('header', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    }
  }, _react2.default.createElement('div', { className: 'container', __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    }
  }, 'Sed feugiat ipsum consequat'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    }
  }, 'Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet consequat', _react2.default.createElement('br', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    }
  }), 'feugiat. Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet.'))), _react2.default.createElement('div', { className: 'content style4 featured', __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    }
  }, _react2.default.createElement('div', { className: 'container percent-75', __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    }
  }, _react2.default.createElement('form', { method: 'post', action: '#', __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    }
  }, _react2.default.createElement('div', { className: 'row percent-50', __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    }
  }, _react2.default.createElement('div', { className: 'u6 u12-mobile', __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    }
  }, _react2.default.createElement('input', { type: 'text', placeholder: 'Name', __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    }
  })), _react2.default.createElement('div', { className: 'u6 u12-mobile', __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    }
  }, _react2.default.createElement('input', { type: 'text', placeholder: 'Email', __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    }
  }))), _react2.default.createElement('div', { className: 'row percent-50', __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    }
  }, _react2.default.createElement('div', { className: 'u12', __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    }
  }, _react2.default.createElement('textarea', { name: 'message', placeholder: 'Message', defaultValue: "", __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    }
  }))), _react2.default.createElement('div', { className: 'row', __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    }
  }, _react2.default.createElement('div', { className: 'u12', __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    }
  }, _react2.default.createElement('ul', { className: 'actions', __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    }
  }, _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    }
  }, _react2.default.createElement('input', { type: 'submit', className: 'button', defaultValue: 'Send Message', __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    }
  })), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    }
  }, _react2.default.createElement('input', { type: 'reset', className: 'button alt', defaultValue: 'Clear Form', __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    }
  }))))))))), _react2.default.createElement('section', { id: 'footer', __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    }
  }, _react2.default.createElement('ul', { className: 'icons', __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    }
  }, _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    }
  }, _react2.default.createElement('a', { href: '#', className: 'icon fa-twitter', __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    }
  }, _react2.default.createElement('span', { className: 'label', __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    }
  }, 'Twitter'))), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    }
  }, _react2.default.createElement('a', { href: '#', className: 'icon fa-facebook', __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    }
  }, _react2.default.createElement('span', { className: 'label', __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    }
  }, 'Facebook'))), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    }
  }, _react2.default.createElement('a', { href: '#', className: 'icon fa-instagram', __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    }
  }, _react2.default.createElement('span', { className: 'label', __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    }
  }, 'Instagram'))), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    }
  }, _react2.default.createElement('a', { href: '#', className: 'icon fa-dribbble', __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    }
  }, _react2.default.createElement('span', { className: 'label', __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    }
  }, 'Dribbble'))), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    }
  }, _react2.default.createElement('a', { href: '#', className: 'icon fa-github', __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    }
  }, _react2.default.createElement('span', { className: 'label', __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    }
  }, 'GitHub')))), _react2.default.createElement('div', { className: 'copyright', __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    }
  }, _react2.default.createElement('ul', { className: 'menu', __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    }
  }, _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    }
  }, '\xA9 Untitled. All rights reserved.'), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    }
  }, 'Design: ', _react2.default.createElement('a', { href: 'http://html5up.net', __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    }
  }, 'HTML5 UP'))))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJTZWN0aW9uT25lIiwiTWFpbkNzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBYSxBQUVwQjs7Ozs7Ozs7a0JBQWUsWUFBQTt5QkFDUCxjQUFBOztnQkFBQTtrQkFBQSxBQUNKO0FBREk7QUFBQSxHQUFBLDBDQUNFLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCO2dCQUE5QjtrQkFESSxBQUNKLEFBRUk7QUFGSjtzQkFFSSxBQUFDOztnQkFBRDtrQkFIQSxBQUdBLEFBQ0E7QUFEQTtBQUFBLHNCQUNBLEFBQUM7O2dCQUFEO2tCQUpBLEFBSUEsQUFDQTtBQURBO0FBQUEsc0JBQ0EsQUFBQzs7Z0JBQUQ7a0JBTEEsQUFLQSxBQUVBO0FBRkE7QUFBQSxzQkFFQSxjQUFBLGFBQVMsSUFBVCxBQUFZLFVBQVMsV0FBckIsQUFBK0I7Z0JBQS9CO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FERixBQUNFLEFBQ0Esd0NBQUEsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBSk4sQUFDRSxBQUNFLEFBRUUsQUFHSiwwUUFBQSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBVUU7QUFWRjtxQkFVRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FYSixBQVVFLEFBQ0UsQUFFRiwyQkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLFdBQU8sV0FBUCxBQUFpQjtnQkFBakI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFDQSx1QkFBQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FGRixBQUVFLEFBQ0EseUJBQUEsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBSEYsQUFHRSxBQUNBLGdDQUFBLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQU5OLEFBQ0UsQUFDRSxBQUlFLEFBR0osNEJBQUEsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBSTtBQUFKO0FBQUEsOENBQVcsS0FBUCxBQUFXLDRCQUEyQixRQUF0QyxBQUE4QyxLQUFLLE9BQW5ELEFBQTBELEtBQUssVUFBL0QsTUFBd0UsVUFBeEU7Z0JBQUE7a0JBRE4sQUFDRSxBQUFJLEFBQ0o7QUFESTt1QkFDSixjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FGRixBQUVFLEFBQ0EsOEJBQUEsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBSEYsQUFHRSxBQUNBLGtFQUFBLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUxKLEFBQ0UsQUFJRSxBQUVGLHlCQUFBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQUk7QUFBSjtBQUFBLDhDQUFXLEtBQVAsQUFBVyw2QkFBNEIsUUFBdkMsQUFBK0MsS0FBSyxPQUFwRCxBQUEyRCxLQUFLLFVBQWhFLE1BQXlFLFVBQXpFO2dCQUFBO2tCQUROLEFBQ0UsQUFBSSxBQUNKO0FBREk7dUJBQ0osY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBRkYsQUFFRSxBQUNBLDJDQUFBLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUhGLEFBR0UsQUFDQSxvRUFBQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FYSixBQU9FLEFBSUUsQUFFRix5QkFBQSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUFJO0FBQUo7QUFBQSxxQkFBSSxjQUFBLFVBQU0sV0FBTixBQUFnQjtnQkFBaEI7a0JBQUEsQUFBMEI7QUFBMUI7NENBQStCLEtBQUwsQUFBUyw2QkFBNEIsUUFBckMsQUFBNkMsS0FBSyxPQUFsRCxBQUF5RDtnQkFBekQ7a0JBRGhDLEFBQ0UsQUFBSSxBQUEwQixBQUM5QjtBQUQ4Qjt3QkFDOUIsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBRkYsQUFFRSxBQUNBLHlDQUFBLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUhGLEFBR0UsQUFDQSxrRUFBQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FqQkosQUFhRSxBQUlFLEFBRUYseUJBQUEsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBSTtBQUFKO0FBQUEscUJBQUksY0FBQSxVQUFNLFdBQU4sQUFBZ0I7Z0JBQWhCO2tCQUFBLEFBQTBCO0FBQTFCOzRDQUErQixLQUFMLEFBQVMsaUNBQWdDLFFBQXpDLEFBQWlELEtBQUssT0FBdEQsQUFBNkQ7Z0JBQTdEO2tCQURoQyxBQUNFLEFBQUksQUFBMEIsQUFDOUI7QUFEOEI7d0JBQzlCLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUZGLEFBRUUsQUFDQSx5Q0FBQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FIRixBQUdFLEFBQ0Esa0VBQUEsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBdkJKLEFBbUJFLEFBSUUsQUFFRix5QkFBQSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUFJO0FBQUo7QUFBQSxxQkFBSSxjQUFBLFVBQU0sV0FBTixBQUFnQjtnQkFBaEI7a0JBQUEsQUFBMEI7QUFBMUI7NENBQStCLEtBQUwsQUFBUyx5QkFBd0IsUUFBakMsQUFBeUMsS0FBSyxPQUE5QyxBQUFxRDtnQkFBckQ7a0JBRGhDLEFBQ0UsQUFBSSxBQUEwQixBQUM5QjtBQUQ4Qjt3QkFDOUIsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBRkYsQUFFRSxBQUNBLHlDQUFBLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUhGLEFBR0UsQUFDQSxrRUFBQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0E3QkosQUF5QkUsQUFJRSxBQUVGLHlCQUFBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQUk7QUFBSjtBQUFBLHFCQUFJLGNBQUEsVUFBTSxXQUFOLEFBQWdCO2dCQUFoQjtrQkFBQSxBQUEwQjtBQUExQjs0Q0FBK0IsS0FBTCxBQUFTLDZCQUE0QixRQUFyQyxBQUE2QyxLQUFLLE9BQWxELEFBQXlEO2dCQUF6RDtrQkFEaEMsQUFDRSxBQUFJLEFBQTBCLEFBQzlCO0FBRDhCO3dCQUM5QixjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FGRixBQUVFLEFBQ0EseUNBQUEsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBSEYsQUFHRSxBQUNBLGtFQUFBLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQW5DSixBQStCRSxBQUlFLEFBRUYseUJBQUEsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBSTtBQUFKO0FBQUEscUJBQUksY0FBQSxVQUFNLFdBQU4sQUFBZ0I7Z0JBQWhCO2tCQUFBLEFBQTBCO0FBQTFCOzRDQUErQixLQUFMLEFBQVMsNEJBQTJCLFFBQXBDLEFBQTRDLEtBQUssT0FBakQsQUFBd0Q7Z0JBQXhEO2tCQURoQyxBQUNFLEFBQUksQUFBMEIsQUFDOUI7QUFEOEI7d0JBQzlCLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUZGLEFBRUUsQUFDQSx5Q0FBQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FIRixBQUdFLEFBQ0Esa0VBQUEsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBbEROLEFBU0UsQUFxQ0UsQUFJRSxBQUdKLDBCQUFBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLDJDQUNNLFNBQUosQUFBYTtnQkFBYjtrQkFERixBQUNFLEFBQ0E7QUFEQTtzQkFDQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0F0RVYsQUFhRSxBQUNFLEFBcURFLEFBQ0UsQUFFRSxBQUtSLCtCQUFBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUEsT0FBRyxNQUFILEFBQVEsVUFBUyxXQUFqQixBQUEyQjtnQkFBM0I7a0JBQUE7QUFBQTtLQUZKLEFBQ0UsQUFDRSxBQUVGLG1DQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGOzhDQUNTLEtBQVAsQUFBVyw0QkFBMkIsUUFBdEMsQUFBOEMsS0FBSyxPQUFuRCxBQUEwRCxLQUFLLFVBQS9ELE1BQXdFLFVBQXhFO2dCQUFBO2tCQURGLEFBQ0UsQUFDQTtBQURBO3NCQUNBLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFBb0I7QUFBcEI7cUJBQW9CLGNBQUEsT0FBRyxNQUFILEFBQVEsS0FBSSxXQUFaLEFBQXNCO2dCQUF0QjtrQkFBQSxBQUE4QjtBQUE5Qjs0Q0FBbUMsS0FBTCxBQUFTLHlCQUF3QixXQUFqQyxBQUEyQyxRQUFPLFFBQWxELEFBQTBELEtBQUssT0FBL0QsQUFBc0U7Z0JBQXRFO2tCQUZwRCxBQUVFLEFBQW9CLEFBQThCLEFBQ2xEO0FBRGtEO3dCQUNsRCxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQW9CO0FBQXBCO3FCQUFvQixjQUFBLE9BQUcsTUFBSCxBQUFRLEtBQUksV0FBWixBQUFzQjtnQkFBdEI7a0JBQUEsQUFBOEI7QUFBOUI7NENBQW1DLEtBQUwsQUFBUywyQkFBMEIsV0FBbkMsQUFBNkMsUUFBTyxRQUFwRCxBQUE0RCxLQUFLLE9BQWpFLEFBQXdFO2dCQUF4RTtrQkFIcEQsQUFHRSxBQUFvQixBQUE4QixBQUNsRDtBQURrRDt3QkFDbEQsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUFvQjtBQUFwQjtxQkFBb0IsY0FBQSxPQUFHLE1BQUgsQUFBUSxLQUFJLFdBQVosQUFBc0I7Z0JBQXRCO2tCQUFBLEFBQThCO0FBQTlCOzRDQUFtQyxLQUFMLEFBQVMsOEJBQTZCLFdBQXRDLEFBQWdELFFBQU8sUUFBdkQsQUFBK0QsS0FBSyxPQUFwRSxBQUEyRTtnQkFBM0U7a0JBSnBELEFBSUUsQUFBb0IsQUFBOEIsQUFDbEQ7QUFEa0Q7d0JBQ2xELGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFBb0I7QUFBcEI7cUJBQW9CLGNBQUEsT0FBRyxNQUFILEFBQVEsS0FBSSxXQUFaLEFBQXNCO2dCQUF0QjtrQkFBQSxBQUE4QjtBQUE5Qjs0Q0FBbUMsS0FBTCxBQUFTLDZCQUE0QixXQUFyQyxBQUErQyxRQUFPLFFBQXRELEFBQThELEtBQUssT0FBbkUsQUFBMEU7Z0JBQTFFO2tCQUxwRCxBQUtFLEFBQW9CLEFBQThCLEFBQ2xEO0FBRGtEO3dCQUNsRCxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQW9CO0FBQXBCO3FCQUFvQixjQUFBLE9BQUcsTUFBSCxBQUFRLEtBQUksV0FBWixBQUFzQjtnQkFBdEI7a0JBQUEsQUFBOEI7QUFBOUI7NENBQW1DLEtBQUwsQUFBUyxpQ0FBZ0MsV0FBekMsQUFBbUQsUUFBTyxRQUExRCxBQUFrRSxLQUFLLE9BQXZFLEFBQThFO2dCQUE5RTtrQkFOcEQsQUFNRSxBQUFvQixBQUE4QixBQUNsRDtBQURrRDt3QkFDbEQsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUFvQjtBQUFwQjtxQkFBb0IsY0FBQSxPQUFHLE1BQUgsQUFBUSxLQUFJLFdBQVosQUFBc0I7Z0JBQXRCO2tCQUFBLEFBQWtDO0FBQWxDOzRDQUF1QyxLQUFMLEFBQVMsMkJBQTBCLFdBQW5DLEFBQTZDLFFBQU8sUUFBcEQsQUFBNEQsS0FBSyxPQUFqRSxBQUF3RTtnQkFBeEU7a0JBUHhELEFBT0UsQUFBb0IsQUFBa0MsQUFDdEQ7QUFEc0Q7d0JBQ3RELGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFBb0I7QUFBcEI7cUJBQW9CLGNBQUEsT0FBRyxNQUFILEFBQVEsS0FBSSxXQUFaLEFBQXNCO2dCQUF0QjtrQkFBQSxBQUFrQztBQUFsQzs0Q0FBdUMsS0FBTCxBQUFTLGlDQUFnQyxXQUF6QyxBQUFtRCxRQUFPLFFBQTFELEFBQWtFLEtBQUssT0FBdkUsQUFBOEU7Z0JBQTlFO2tCQVJ4RCxBQVFFLEFBQW9CLEFBQWtDLEFBQ3REO0FBRHNEO3dCQUN0RCxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQW9CO0FBQXBCO3FCQUFvQixjQUFBLE9BQUcsTUFBSCxBQUFRLEtBQUksV0FBWixBQUFzQjtnQkFBdEI7a0JBQUEsQUFBa0M7QUFBbEM7NENBQXVDLEtBQUwsQUFBUyw2QkFBNEIsV0FBckMsQUFBK0MsUUFBTyxRQUF0RCxBQUE4RCxLQUFLLE9BQW5FLEFBQTBFO2dCQUExRTtrQkFUeEQsQUFTRSxBQUFvQixBQUFrQyxBQUN0RDtBQURzRDt3QkFDdEQsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUFvQjtBQUFwQjtxQkFBb0IsY0FBQSxPQUFHLE1BQUgsQUFBUSxLQUFJLFdBQVosQUFBc0I7Z0JBQXRCO2tCQUFBLEFBQWtDO0FBQWxDOzRDQUF1QyxLQUFMLEFBQVMsNkJBQTRCLFdBQXJDLEFBQStDLFFBQU8sUUFBdEQsQUFBOEQsS0FBSyxPQUFuRSxBQUEwRTtnQkFBMUU7a0JBVnhELEFBVUUsQUFBb0IsQUFBa0MsQUFDdEQ7QUFEc0Q7d0JBQ3RELGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFBb0I7QUFBcEI7cUJBQW9CLGNBQUEsT0FBRyxNQUFILEFBQVEsS0FBSSxXQUFaLEFBQXNCO2dCQUF0QjtrQkFBQSxBQUFrQztBQUFsQzs0Q0FBdUMsS0FBTCxBQUFTLHlCQUF3QixXQUFqQyxBQUEyQyxRQUFPLFFBQWxELEFBQTBELEtBQUssT0FBL0QsQUFBc0U7Z0JBQXRFO2tCQVh4RCxBQVdFLEFBQW9CLEFBQWtDLEFBQ3REO0FBRHNEO3dCQUN0RCxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQW9CO0FBQXBCO3FCQUFvQixjQUFBLE9BQUcsTUFBSCxBQUFRLEtBQUksV0FBWixBQUFzQjtnQkFBdEI7a0JBQUEsQUFBa0M7QUFBbEM7NENBQXVDLEtBQUwsQUFBUywyQkFBMEIsV0FBbkMsQUFBNkMsUUFBTyxRQUFwRCxBQUE0RCxLQUFLLE9BQWpFLEFBQXdFO2dCQUF4RTtrQkFaeEQsQUFZRSxBQUFvQixBQUFrQyxBQUN0RDtBQURzRDt3QkFDdEQsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUFvQjtBQUFwQjtxQkFBb0IsY0FBQSxPQUFHLE1BQUgsQUFBUSxLQUFJLFdBQVosQUFBc0I7Z0JBQXRCO2tCQUFBLEFBQWtDO0FBQWxDOzRDQUF1QyxLQUFMLEFBQVMsNEJBQTJCLFdBQXBDLEFBQThDLFFBQU8sUUFBckQsQUFBNkQsS0FBSyxPQUFsRSxBQUF5RTtnQkFBekU7a0JBN0dwRSxBQU9BLEFBT0UsQUFDRSxBQUNFLEFBMkVFLEFBSUUsQUFDRSxBQWFFLEFBQW9CLEFBQWtDLEFBUXBFO0FBUm9FOytCQVFwRSxjQUFBLGFBQVMsSUFBVCxBQUFZLFNBQVEsV0FBcEIsQUFBOEI7Z0JBQTlCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FERixBQUNFLEFBQ0EsbUZBQUEsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBQTRIOztnQkFBQTtrQkFBNUgsQUFBNEg7QUFBQTtBQUFBLE1BSmxJLEFBQ0UsQUFDRSxBQUVFLEFBSUosZ0pBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7Z0JBQWhCO2tCQUFBLEFBQWlDO0FBQWpDOzRDQUFzQyxLQUFMLEFBQVMsMkJBQTBCLEtBQW5DO2dCQUFBO2tCQURuQyxBQUNFLEFBQWlDLEFBQ2pDO0FBRGlDO3VCQUNqQyxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FERixBQUNFLEFBQ0Esb0VBQUEsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBRkYsQUFFRSxBQUtBLDZYQUFBLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQVJKLEFBQ0UsQUFPRSxBQU1GLG1XQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFLQSw2WEFBQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FORixBQU1FLEFBSUEsK1VBQUEsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBeEJKLEFBY0UsQUFVRSxBQUdGLDhIQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFNQSxrY0FBQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FQRixBQU9FLEFBR0EsMlBBQUEsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQSxPQUFHLE1BQUgsQUFBUSxXQUFVLFdBQWxCLEFBQTRCO2dCQUE1QjtrQkFBQTtBQUFBO0tBdEtaLEFBcUhBLEFBUUUsQUFDRSxBQUVFLEFBMkJFLEFBVUUsQUFDRSxBQVNaLG1EQUFBLGNBQUEsYUFBUyxJQUFULEFBQVksVUFBUyxXQUFyQixBQUErQjtnQkFBL0I7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFDQSxnREFBQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FBNEg7O2dCQUFBO2tCQUE1SCxBQUE0SDtBQUFBO0FBQUEsTUFKbEksQUFDRSxBQUNFLEFBRUUsQUFJSixnSkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLFVBQU0sUUFBTixBQUFhLFFBQU8sUUFBcEIsQUFBMkI7Z0JBQTNCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQStCO0FBQS9COzhDQUFzQyxNQUFQLEFBQVksUUFBTyxhQUFuQixBQUErQjtnQkFBL0I7a0JBRGpDLEFBQ0UsQUFBK0IsQUFDL0I7QUFEK0I7dUJBQy9CLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFBK0I7QUFBL0I7OENBQXNDLE1BQVAsQUFBWSxRQUFPLGFBQW5CLEFBQStCO2dCQUEvQjtrQkFIbkMsQUFDRSxBQUVFLEFBQStCLEFBRWpDO0FBRmlDO3dCQUVqQyxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQXFCO0FBQXJCO2lEQUErQixNQUFWLEFBQWUsV0FBVSxhQUF6QixBQUFxQyxXQUFVLGNBQS9DLEFBQTZEO2dCQUE3RDtrQkFOekIsQUFLRSxBQUNFLEFBQXFCLEFBRXZCO0FBRnVCO3dCQUV2QixjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLFFBQUksV0FBSixBQUFjO2dCQUFkO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUFJO0FBQUo7QUFBQSw4Q0FBVyxNQUFQLEFBQVksVUFBUyxXQUFyQixBQUErQixVQUFTLGNBQXhDLEFBQXFEO2dCQUFyRDtrQkFETixBQUNFLEFBQUksQUFDSjtBQURJO3VCQUNKLGNBQUE7O2dCQUFBO2tCQUFBLEFBQUk7QUFBSjtBQUFBLDhDQUFXLE1BQVAsQUFBWSxTQUFRLFdBQXBCLEFBQThCLGNBQWEsY0FBM0MsQUFBd0Q7Z0JBQXhEO2tCQXJNbEIsQUErS0EsQUFRRSxBQUNFLEFBQ0UsQUFRRSxBQUNFLEFBQ0UsQUFFRSxBQUFJLEFBU2xCO0FBVGtCOzhCQVNsQixjQUFBLGFBQVMsSUFBVCxBQUFZO2dCQUFaO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLFFBQUksV0FBSixBQUFjO2dCQUFkO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUFJO0FBQUo7QUFBQSxxQkFBSSxjQUFBLE9BQUcsTUFBSCxBQUFRLEtBQUksV0FBWixBQUFzQjtnQkFBdEI7a0JBQUEsQUFBd0M7QUFBeEM7cUJBQXdDLGNBQUEsVUFBTSxXQUFOLEFBQWdCO2dCQUFoQjtrQkFBQTtBQUFBO0tBRDlDLEFBQ0UsQUFBSSxBQUF3QyxBQUM1Qyw4QkFBQSxjQUFBOztnQkFBQTtrQkFBQSxBQUFJO0FBQUo7QUFBQSxxQkFBSSxjQUFBLE9BQUcsTUFBSCxBQUFRLEtBQUksV0FBWixBQUFzQjtnQkFBdEI7a0JBQUEsQUFBeUM7QUFBekM7cUJBQXlDLGNBQUEsVUFBTSxXQUFOLEFBQWdCO2dCQUFoQjtrQkFBQTtBQUFBO0tBRi9DLEFBRUUsQUFBSSxBQUF5QyxBQUM3QywrQkFBQSxjQUFBOztnQkFBQTtrQkFBQSxBQUFJO0FBQUo7QUFBQSxxQkFBSSxjQUFBLE9BQUcsTUFBSCxBQUFRLEtBQUksV0FBWixBQUFzQjtnQkFBdEI7a0JBQUEsQUFBMEM7QUFBMUM7cUJBQTBDLGNBQUEsVUFBTSxXQUFOLEFBQWdCO2dCQUFoQjtrQkFBQTtBQUFBO0tBSGhELEFBR0UsQUFBSSxBQUEwQyxBQUM5QyxnQ0FBQSxjQUFBOztnQkFBQTtrQkFBQSxBQUFJO0FBQUo7QUFBQSxxQkFBSSxjQUFBLE9BQUcsTUFBSCxBQUFRLEtBQUksV0FBWixBQUFzQjtnQkFBdEI7a0JBQUEsQUFBeUM7QUFBekM7cUJBQXlDLGNBQUEsVUFBTSxXQUFOLEFBQWdCO2dCQUFoQjtrQkFBQTtBQUFBO0tBSi9DLEFBSUUsQUFBSSxBQUF5QyxBQUM3QywrQkFBQSxjQUFBOztnQkFBQTtrQkFBQSxBQUFJO0FBQUo7QUFBQSxxQkFBSSxjQUFBLE9BQUcsTUFBSCxBQUFRLEtBQUksV0FBWixBQUFzQjtnQkFBdEI7a0JBQUEsQUFBdUM7QUFBdkM7cUJBQXVDLGNBQUEsVUFBTSxXQUFOLEFBQWdCO2dCQUFoQjtrQkFBQTtBQUFBO0tBTi9DLEFBQ0UsQUFLRSxBQUFJLEFBQXVDLEFBRTdDLDhCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWM7Z0JBQWQ7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFBeUMsd0RBQUEsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBQVksNEJBQUEsY0FBQSxPQUFHLE1BQUgsQUFBUTtnQkFBUjtrQkFBQTtBQUFBO0tBek5wRCxBQUNQLEFBOE1BLEFBUUUsQUFDRSxBQUMyQyxBQUFZO0FBek5uRSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9QYXZpbGlvbi9Eb2N1bWVudHMvUHJveWVjdG9zL1dlYkFwcFJpb0RhbnRhIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Pavilion\\Documents\\Proyectos\\WebAppRioDanta\\pages\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Pavilion\\Documents\\Proyectos\\WebAppRioDanta\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _header_css = __webpack_require__(394);

var _header_css2 = _interopRequireDefault(_header_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\Pavilion\\Documents\\Proyectos\\WebAppRioDanta\\components\\Header.js";

exports.default = function () {
    return _react2.default.createElement("div", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 4
        }
    }, _react2.default.createElement(_header_css2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }), _react2.default.createElement("section", { id: "header", className: "dark", __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement("header", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, _react2.default.createElement("h1", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, "Welcome to Rio Danta "), _react2.default.createElement("p", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, "Hospedaje y Tours En El Mismo Lugar A Un Precio Accesible")), _react2.default.createElement("footer", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, _react2.default.createElement("a", { href: "#first", className: "button scrolly", __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXJDc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQWUsQUFDdEI7Ozs7Ozs7O2tCQUFlLFlBQUksQUFDZjsyQkFDSSxjQUFBOztzQkFBQTt3QkFBQSxBQUNBO0FBREE7QUFBQSxLQUFBLGtCQUNBLEFBQUM7O3NCQUFEO3dCQURBLEFBQ0EsQUFDQTtBQURBO0FBQUEsd0JBQ0EsY0FBQSxhQUFTLElBQVQsQUFBWSxVQUFTLFdBQXJCLEFBQStCO3NCQUEvQjt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BREosQUFDSSxBQUNBLDBDQUFBLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQUhSLEFBQ0ksQUFFSSxBQUVKLCtFQUFBLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLDRDQUNPLE1BQUgsQUFBUSxVQUFTLFdBQWpCLEFBQTJCO3NCQUEzQjt3QkFUWixBQUNJLEFBRUEsQUFLSSxBQUNJLEFBTWY7QUFOZTs7QUFWaEIiLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL1BhdmlsaW9uL0RvY3VtZW50cy9Qcm95ZWN0b3MvV2ViQXBwUmlvRGFudGEifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Pavilion\\Documents\\Proyectos\\WebAppRioDanta\\components\\Header.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Pavilion\\Documents\\Proyectos\\WebAppRioDanta\\components\\Header.js"); } } })();

/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\Pavilion\\Documents\\Proyectos\\WebAppRioDanta\\components\\styles-jsx\\header_css.js";

exports.default = function () {
    return _react2.default.createElement("style", { jsx: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 2
        }
    }, "\n     header {\n    margin-bottom: 1em;\n        }\n\n        header h1, header h2, header h3, header h4, header h5, header h6 {\n            margin: 0;\n        }\n\n        header p {\n            display: block;\n            margin: 0;\n            padding: 0.25em 0 0.5em 0;\n        }\n        /* Header */\n\n            #header {\n                position: relative;\n                margin: 0;\n                background-image: linear-gradient(to top, rgba(63, 46, 65, 0.8),  rgba(65, 55, 46, 0.8)), url(\"static/images/bg.jpg\");\n                background-size:  cover;\n                background-position:  center center;\n                background-repeat:  no-repeat;\n                padding: 14em 0 14em 0;\n                text-align: center;\n                color: rgb(255, 255, 255);\n            }\n\n                #header header h1 {\n                    font-size: 2.25em;\n                    line-height: 1.25em;\n                    margin-bottom: 0;\n                }\n\n                #header header p {\n                    margin-top: 1.25em;\n                    font-weight: 100;\n                    padding: 0;\n                    font-size: 1.25em;\n                    line-height: 1.5em;\n                    text-align: center;\n                }\n\n                #header footer {\n                    padding-top: 1.5em;\n                }\n\n    ");
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHN0eWxlcy1qc3hcXGhlYWRlcl9jc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7O2tCQUFlLFlBQUE7MkJBQ1gsY0FBQSxXQUFPLEtBQVA7c0JBQUE7d0JBQUE7QUFBQTtLQUFBLEVBRFcsQUFDWDtBQURKIiwiZmlsZSI6ImhlYWRlcl9jc3MuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvUGF2aWxpb24vRG9jdW1lbnRzL1Byb3llY3Rvcy9XZWJBcHBSaW9EYW50YSJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Pavilion\\Documents\\Proyectos\\WebAppRioDanta\\components\\styles-jsx\\header_css.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Pavilion\\Documents\\Proyectos\\WebAppRioDanta\\components\\styles-jsx\\header_css.js"); } } })();

/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\Pavilion\\Documents\\Proyectos\\WebAppRioDanta\\components\\SectionOne.js";

exports.default = function () {
  return _react2.default.createElement("section", { id: "first", className: "main", __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, _react2.default.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, _react2.default.createElement("div", { className: "container", __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "Habitaciones & Ofertas Especiales"), _react2.default.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Podr\xE1s Obtener Increibles Descuentos Si Reservas Hospedaje + Tour Desde Nuestra Pagina Web."), _react2.default.createElement("img", { className: "left", width: "200", heigth: "50", src: "http://www.hostelriodanta.com/wp-content/uploads/2016/10/logo_riodanta-2.jpg", __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }))), _react2.default.createElement("div", { className: "content dark style1 featured", __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement("div", { className: "container", __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement("div", { className: "row", __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement("div", { className: "u4 u12-narrow", __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement("span", { className: "feature-icon", __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement("span", { className: "icon ", __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement("img", { src: "static/images/acc1.png", height: 100, width: 100, style: { margingTop: '15%' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }))), _react2.default.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "Habitaciones Superiores")), _react2.default.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "Servicios: Desayuno incluido, Aire acondicionado, TV por cable, Internet inalambrico, Agua caliente, Parqueo con camaras de seguridad."))), _react2.default.createElement("div", { className: "u4 u12-narrow", __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement("span", { className: "feature-icon", __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement("span", { className: "icon ", __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement("img", { src: "static/images/fan1.png", height: 65, width: 85, style: { margingTop: '15%' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }))), _react2.default.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "Habitaciones Estandar")), _react2.default.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "Servicios: Desayuno incluido, TV por cable, Internet inalambrico, Agua caliente, Parqueo con camaras de seguridad, Ventilador de pie."))), _react2.default.createElement("div", { className: "u4 u12-narrow", __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, _react2.default.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, _react2.default.createElement("span", { className: "feature-icon", __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement("span", { className: "icon ", __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement("img", { src: "static/images/bed1.png", height: 70, width: 60, style: { margingTop: '25%' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }))), _react2.default.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, "Habitaciones Compartidas")), _react2.default.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, "Servicios: Desayuno incluido, TV por cable, Internet inalambrico, Agua caliente, Parqueo con camaras de seguridad, Ventilador de pie.")))), _react2.default.createElement("div", { className: "row", __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, _react2.default.createElement("div", { className: "u12", __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, _react2.default.createElement("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, _react2.default.createElement("a", { href: "#second", className: "button scrolly", __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, "Nuestros Tours & Descuentos")))))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFNlY3Rpb25PbmUuanMiXSwibmFtZXMiOlsibWFyZ2luZ1RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7O2tCQUFlLFlBQUE7eUJBQ1QsY0FBQSxhQUFTLElBQVQsQUFBWSxTQUFRLFdBQXBCLEFBQThCO2dCQUE5QjtrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FERixBQUNFLEFBQ0Esc0RBQUEsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBRkYsQUFFRSxBQUNRLDBJQUFLLFdBQUwsQUFBZSxRQUFPLE9BQXRCLEFBQTRCLE9BQU0sUUFBbEMsQUFBeUMsTUFBSyxLQUE5QyxBQUFrRDtnQkFBbEQ7a0JBTGQsQUFDRSxBQUNFLEFBR1UsQUFLWjtBQUxZO3dCQUtaLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUEsVUFBTSxXQUFOLEFBQWdCO2dCQUFoQjtrQkFBQSxBQUErQjtBQUEvQjtxQkFBK0IsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7Z0JBQWhCO2tCQUFBLEFBQXdCO0FBQXhCOzRDQUE2QixLQUFMLEFBQVMsMEJBQXlCLFFBQWxDLEFBQTBDLEtBQUssT0FBL0MsQUFBc0QsS0FBSyxPQUFPLEVBQUMsWUFBbkUsQUFBa0UsQUFBYztnQkFBaEY7a0JBRHpELEFBQ0UsQUFBK0IsQUFBd0IsQUFDdkQ7QUFEdUQ7d0JBQ3ZELGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUhKLEFBRUUsQUFDRSxBQUVGLDZDQUFBLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQVBOLEFBQ0UsQUFDRSxBQUtFLEFBR0osNkpBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7Z0JBQWhCO2tCQUFBLEFBQStCO0FBQS9CO3FCQUErQixjQUFBLFVBQU0sV0FBTixBQUFnQjtnQkFBaEI7a0JBQUEsQUFBd0I7QUFBeEI7NENBQTZCLEtBQUwsQUFBUywwQkFBeUIsUUFBbEMsQUFBMEMsSUFBSSxPQUE5QyxBQUFxRCxJQUFJLE9BQU8sRUFBQyxZQUFqRSxBQUFnRSxBQUFhO2dCQUE3RTtrQkFEekQsQUFDRSxBQUErQixBQUF3QixBQUN2RDtBQUR1RDt3QkFDdkQsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBSEosQUFFRSxBQUNFLEFBRUYsMkNBQUEsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBaEJOLEFBVUUsQUFDRSxBQUtFLEFBR0osNEpBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7Z0JBQWhCO2tCQUFBLEFBQStCO0FBQS9CO3FCQUErQixjQUFBLFVBQU0sV0FBTixBQUFnQjtnQkFBaEI7a0JBQUEsQUFBd0I7QUFBeEI7NENBQTZCLEtBQUwsQUFBUywwQkFBeUIsUUFBbEMsQUFBMEMsSUFBSSxPQUE5QyxBQUFxRCxJQUFJLE9BQU8sRUFBQyxZQUFqRSxBQUFnRSxBQUFhO2dCQUE3RTtrQkFEekQsQUFDRSxBQUErQixBQUF3QixBQUN2RDtBQUR1RDt3QkFDdkQsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBSEosQUFFRSxBQUNFLEFBRUYsOENBQUEsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBMUJSLEFBQ0UsQUFtQkUsQUFDRSxBQUtFLEFBSU4sNkpBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQSxPQUFHLE1BQUgsQUFBUSxXQUFVLFdBQWxCLEFBQTRCO2dCQUE1QjtrQkFBQTtBQUFBO0tBN0NILEFBQ1QsQUFVRSxBQUNFLEFBOEJFLEFBQ0UsQUFDRSxBQUNFO0FBN0NsQiIsImZpbGUiOiJTZWN0aW9uT25lLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL1BhdmlsaW9uL0RvY3VtZW50cy9Qcm95ZWN0b3MvV2ViQXBwUmlvRGFudGEifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Pavilion\\Documents\\Proyectos\\WebAppRioDanta\\components\\SectionOne.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Pavilion\\Documents\\Proyectos\\WebAppRioDanta\\components\\SectionOne.js"); } } })();

/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style = __webpack_require__(397);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\Pavilion\\Documents\\Proyectos\\WebAppRioDanta\\components\\styles-jsx\\main_css.js";

exports.default = function () {
	return _react2.default.createElement(_style2.default, {
		styleId: "1409065378",
		css: "@import url(\"font-awesome.min.css\");@import url(\"https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,400,400italic\");html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}body{-webkit-text-size-adjust:none;}*,*:before,*:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;}.container{margin-left:auto;margin-right:auto;}.container.percent-125{width:100%;max-width:1700px;min-width:1360px;}.container.percent-75{width:1020px;}.container.percent-50{width:680px;}.container.percent-25{width:340px;}.container{width:1360px;}@media screen and (max-width:1680px){.container.percent-125{width:100%;max-width:1500px;min-width:1200px;}.container.percent-75{width:900px;}.container.percent-50{width:600px;}.container.percent-25{width:300px;}.container{width:1200px;}}@media screen and (max-width:1280px){.container.percent-125{width:100%;max-width:1200px;min-width:960px;}.container.percent-75{width:720px;}.container.percent-50{width:480px;}.container.percent-25{width:240px;}.container{width:960px;}}@media screen and (max-width:1000px){.container.percent-125{width:100%;max-width:125%;min-width:100%;}.container.percent-75{width:75%;}.container.percent-50{width:50%;}.container.percent-25{width:25%;}.container{width:100% !important;}}@media screen and (max-width:736px){.container.percent-125{width:100%;max-width:125%;min-width:100%;}.container.percent-75{width:75%;}.container.percent-50{width:50%;}.container.percent-25{width:25%;}.container{width:100% !important;}}.row{border-bottom:solid 1px transparent;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;}.row>*{float:left;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;}.row:after,.row:before{content:'';display:block;clear:both;height:0;}.row.uniform>*>:first-child{margin-top:0;}.row.uniform>*>:last-child{margin-bottom:0;}.row.percent-0>*{padding:0px 0 0 0px;}.row.percent-0{margin:0px 0 -1px 0px;}.row.uniform.percent-0>*{padding:0px 0 0 0px;}.row.uniform.percent-0{margin:0px 0 -1px 0px;}.row>*{padding:50px 0 0 50px;}.row{margin:-50px 0 -1px -50px;}.row.uniform>*{padding:50px 0 0 50px;}.row.uniform{margin:-50px 0 -1px -50px;}.row.percent-200>*{padding:100px 0 0 100px;}.row.percent-200{margin:-100px 0 -1px -100px;}.row.uniform.percent-200>*{padding:100px 0 0 100px;}.row.uniform.percent-200{margin:-100px 0 -1px -100px;}.row.percent-150>*{padding:75px 0 0 75px;}.row .percent-150{margin:-75px 0 -1px -75px;}.row.uniform.percent-150>*{padding:75px 0 0 75px;}.row.uniform.percent-150{margin:-75px 0 -1px -75px;}.row.percent-50>*{padding:25px 0 0 25px;}.row.percent-50{margin:-25px 0 -1px -25px;}.row.uniform.percent-50>*{padding:25px 0 0 25px;}.row.uniform.percent-50{margin:-25px 0 -1px -25px;}.row.percent-25>*{padding:12.5px 0 0 12.5px;}.row.percent-25{margin:-12.5px 0 -1px -12.5px;}.row.uniform.percent-25>*{padding:12.5px 0 0 12.5px;}.row.uniform.percent-25{margin:-12.5px 0 -1px -12.5px;}.u12,.u12x{width:100%;clear:none;margin-left:0;}.u11,.u11x{width:91.6666666667%;clear:none;margin-left:0;}.u10,.u10x{width:83.3333333333%;clear:none;margin-left:0;}.u9,.u9x{width:75%;clear:none;margin-left:0;}.u8,.u8x{width:66.6666666667%;clear:none;margin-left:0;}.u7,.u7x{width:58.3333333333%;clear:none;margin-left:0;}.u6,.u6x{width:50%;clear:none;margin-left:0;}.u5,.u5x{width:41.6666666667%;clear:none;margin-left:0;}.u4,.u4x{width:33.3333333333%;clear:none;margin-left:0;}.u3,.u3x{width:25%;clear:none;margin-left:0;}.u2,.u2x{width:16.6666666667%;clear:none;margin-left:0;}.u1,.u1x{width:8.3333333333%;clear:none;margin-left:0;}.u12x+*,.u11x+*,.u10x+*,.u9x+*,.u8x+*,.u7x+*,.u6x+*,.u5x+*,.u4x+*,.u3x+*,.u2x+*,.u1x+*{clear:left;}.-u11u{margin-left:91.66667%;}.-u10u{margin-left:83.33333%;}.-u9u{margin-left:75%;}.-u8u{margin-left:66.66667%;}.-u7u{margin-left:58.33333%;}.-u6u{margin-left:50%;}.-u5u{margin-left:41.66667%;}.-u4u{margin-left:33.33333%;}.-u3u{margin-left:25%;}.-u2u{margin-left:16.66667%;}.-u1u{margin-left:8.33333%;}@media screen and (max-width:1680px){.row>*{padding:40px 0 0 40px;}.row{margin:-40px 0 -1px -40px;}.row.uniform>*{padding:40px 0 0 40px;}.row.uniform{margin:-40px 0 -1px -40px;}.row.percent-200>*{padding:80px 0 0 80px;}.row.percent-200{margin:-80px 0 -1px -80px;}.row.uniform.percent-200>*{padding:80px 0 0 80px;}.row.uniform.percent-200{margin:-80px 0 -1px -80px;}.row.percent-150>*{padding:60px 0 0 60px;}.row.percent-150{margin:-60px 0 -1px -60px;}.row.uniform.percent-150>*{padding:60px 0 0 60px;}.row.uniform.percent-150{margin:-60px 0 -1px -60px;}.row.percent-50>*{padding:20px 0 0 20px;}.row.percent-50{margin:-20px 0 -1px -20px;}.row.uniform.percent-50>*{padding:20px 0 0 20px;}.row.uniform.percent-50{margin:-20px 0 -1px -20px;}.row.percent-25>*{padding:10px 0 0 10px;}.row.percent-25{margin:-10px 0 -1px -10px;}.row.uniform.percent-25>*{padding:10px 0 0 10px;}.row.uniform.percent-25{margin:-10px 0 -1px -10px;}.u12-wide,.u12x-wide{width:100%;clear:none;margin-left:0;}.u11-wide,.u11x-wide{width:91.6666666667%;clear:none;margin-left:0;}.u10-wide,.u10x-wide{width:83.3333333333%;clear:none;margin-left:0;}.u9-wide,.u9x-wide{width:75%;clear:none;margin-left:0;}.u8-wide,.u8x-wide{width:66.6666666667%;clear:none;margin-left:0;}.u7-wide,.u7x-wide{width:58.3333333333%;clear:none;margin-left:0;}.u6-wide,.u6x-wide{width:50%;clear:none;margin-left:0;}.u5-wide,.u5x-wide{width:41.6666666667%;clear:none;margin-left:0;}.u4-wide,.u4x-wide{width:33.3333333333%;clear:none;margin-left:0;}.u3-wide,.u3x-wide{width:25%;clear:none;margin-left:0;}.u2-wide,.u2x-wide{width:16.6666666667%;clear:none;margin-left:0;}.u1-wide,.u1x-wide{width:8.3333333333%;clear:none;margin-left:0;}.u12x-wide+*,.u11x-wide+*,.u10x-wide+*,.u9x-wide+*,.u8x-wide+*,.u7x-wide+*,.u6x-wide+*,.u5x-wide+*,.u4x-wide+*,.u3x-wide+*,.u2x-wide+*,.u1x-wide+*{clear:left;}.-u11-wide{margin-left:91.66667%;}.-u10-wide{margin-left:83.33333%;}.-u9-wide{margin-left:75%;}.-u8-wide{margin-left:66.66667%;}.-u7-wide{margin-left:58.33333%;}.-u6-wide{margin-left:50%;}.-u5-wide{margin-left:41.66667%;}.-u4-wide{margin-left:33.33333%;}.-u3-wide{margin-left:25%;}.-u2-wide{margin-left:16.66667%;}.-u1-wide{margin-left:8.33333%;}}@media screen and (max-width:1280px){.row>*{padding:30px 0 0 30px;}.row{margin:-30px 0 -1px -30px;}.row.uniform>*{padding:30px 0 0 30px;}.row.uniform{margin:-30px 0 -1px -30px;}.row.percent-200>*{padding:60px 0 0 60px;}.row.percent-200{margin:-60px 0 -1px -60px;}.row.uniform.percent-200>*{padding:60px 0 0 60px;}.row.uniform.percent-200{margin:-60px 0 -1px -60px;}.row.percent-150>*{padding:45px 0 0 45px;}.row.percent-150{margin:-45px 0 -1px -45px;}.row.uniform.percent-150>*{padding:45px 0 0 45px;}.row.uniform.percent-150{margin:-45px 0 -1px -45px;}.row.percent-50>*{padding:15px 0 0 15px;}.row.percent-50{margin:-15px 0 -1px -15px;}.row.uniform.percent-50>*{padding:15px 0 0 15px;}.row.uniform.percent-50{margin:-15px 0 -1px -15px;}.row.percent-25>*{padding:7.5px 0 0 7.5px;}.row.percent-25{margin:-7.5px 0 -1px -7.5px;}.row.uniform.percent-25>*{padding:7.5px 0 0 7.5px;}.row.uniform.percent-25{margin:-7.5px 0 -1px -7.5px;}.u12-normal,.u12x-normal{width:100%;clear:none;margin-left:0;}.u11-normal,.u11x-normal{width:91.6666666667%;clear:none;margin-left:0;}.u10-normal,.u10x-normal{width:83.3333333333%;clear:none;margin-left:0;}.u9-normal,.u9x-normal{width:75%;clear:none;margin-left:0;}.u8-normal,.u8x-normal{width:66.6666666667%;clear:none;margin-left:0;}.u7-normal,.u7x-normal{width:58.3333333333%;clear:none;margin-left:0;}.u6-normal,.u6x-normal{width:50%;clear:none;margin-left:0;}.u5-normal,.u5x-normal{width:41.6666666667%;clear:none;margin-left:0;}.u4-normal,.u4x-normal{width:33.3333333333%;clear:none;margin-left:0;}.u3-normal,.u3x-normal{width:25%;clear:none;margin-left:0;}.u2-normal,.u2x-normal{width:16.6666666667%;clear:none;margin-left:0;}.u1-normal,.u1x-normal{width:8.3333333333%;clear:none;margin-left:0;}.u12x-normal+*,.u11x-normal+*,.u10x-normal+*,.u9x-normal+*,.u8x-normal+*,.u7x-normal+*,.u6x-normal+*,.u5x-normal+*,.u4x-normal+*,.u3x-normal+*,.u2x-normal+*,.u1x-normal+*{clear:left;}.-u11-normal{margin-left:91.66667%;}.-u10-normal{margin-left:83.33333%;}.-u9-normal{margin-left:75%;}.-u8-normal{margin-left:66.66667%;}.-u7-normal{margin-left:58.33333%;}.-u6-normal{margin-left:50%;}.-u5-normal{margin-left:41.66667%;}.-u4-normal{margin-left:33.33333%;}.-u3-normal{margin-left:25%;}.-u2-normal{margin-left:16.66667%;}.-u1-normal{margin-left:8.33333%;}}@media screen and (max-width:1000px){.row>*{padding:25px 0 0 25px;}.row{margin:-25px 0 -1px -25px;}.row.uniform>*{padding:25px 0 0 25px;}.row.uniform{margin:-25px 0 -1px -25px;}.row.percent-200>*{padding:50px 0 0 50px;}.row.percent-200{margin:-50px 0 -1px -50px;}.row.uniform.percent-200>*{padding:50px 0 0 50px;}.row.uniform.percent-200{margin:-50px 0 -1px -50px;}.row.percent-150>*{padding:37.5px 0 0 37.5px;}.row.percent-150{margin:-37.5px 0 -1px -37.5px;}.row.uniform.percent-150>*{padding:37.5px 0 0 37.5px;}.row.uniform.percent-150{margin:-37.5px 0 -1px -37.5px;}.row.percent-50>*{padding:12.5px 0 0 12.5px;}.row.percent-50{margin:-12.5px 0 -1px -12.5px;}.row.uniform.percent-50>*{padding:12.5px 0 0 12.5px;}.row.uniform.percent-50{margin:-12.5px 0 -1px -12.5px;}.row.percent-25>*{padding:6.25px 0 0 6.25px;}.row.percent-25{margin:-6.25px 0 -1px -6.25px;}.row.uniform.percent-25>*{padding:6.25px 0 0 6.25px;}.row.uniform.percent-25{margin:-6.25px 0 -1px -6.25px;}.u12-narrow,.u12x-narrow{width:100%;clear:none;margin-left:0;}.u11-narrow,.u11x-narrow{width:91.6666666667%;clear:none;margin-left:0;}.u10-narrow,.u10x-narrow{width:83.3333333333%;clear:none;margin-left:0;}.u9-narrow,.u9x-narrow{width:75%;clear:none;margin-left:0;}.u8-narrow,.u8x-narrow{width:66.6666666667%;clear:none;margin-left:0;}.u7-narrow,.u7x-narrow{width:58.3333333333%;clear:none;margin-left:0;}.u6-narrow,.u6x-narrow{width:50%;clear:none;margin-left:0;}.u5-narrow,.u5x-narrow{width:41.6666666667%;clear:none;margin-left:0;}.u4-narrow,.u4x-narrow{width:33.3333333333%;clear:none;margin-left:0;}.u3-narrow,.u3x-narrow{width:25%;clear:none;margin-left:0;}.u2-narrow,.u2x-narrow{width:16.6666666667%;clear:none;margin-left:0;}.u1-narrow,.u1x-narrow{width:8.3333333333%;clear:none;margin-left:0;}.u12x-narrow+*,.u11x-narrow+*,.u10x-narrow+*,.u9x-narrow+*,.u8x-narrow+*,.u7x-narrow+*,.u6x-narrow+*,.u5x-narrow+*,.u4x-narrow+*,.u3x-narrow+*,.u2x-narrow+*,.u1x-narrow+*{clear:left;}.-u11-narrow{margin-left:91.66667%;}.-u10-narrow{margin-left:83.33333%;}.-u9-narrow{margin-left:75%;}.-u8-narrow{margin-left:66.66667%;}.-u7-narrow{margin-left:58.33333%;}.-u6-narrow{margin-left:50%;}.-u5-narrow{margin-left:41.66667%;}.-u4-narrow{margin-left:33.33333%;}.-u3-narrow{margin-left:25%;}.-u2-narrow{margin-left:16.66667%;}.-u1-narrow{margin-left:8.33333%;}}@media screen and (max-width:736px){.row>*{padding:20px 0 0 20px;}.row{margin:-20px 0 -1px -20px;}.row.uniform>*{padding:20px 0 0 20px;}.row.uniform{margin:-20px 0 -1px -20px;}.row.percent-200>*{padding:40px 0 0 40px;}.row.percent-200{margin:-40px 0 -1px -40px;}.row.uniform.percent-200>*{padding:40px 0 0 40px;}.row.uniform.percent-200{margin:-40px 0 -1px -40px;}.row.percent-150>*{padding:30px 0 0 30px;}.row.percent-150{margin:-30px 0 -1px -30px;}.row.uniform.percent-150>*{padding:30px 0 0 30px;}.row.uniform.percent-150{margin:-30px 0 -1px -30px;}.row.percent-50>*{padding:10px 0 0 10px;}.row.percent-50{margin:-10px 0 -1px -10px;}.row.uniform.percent-50>*{padding:10px 0 0 10px;}.row.uniform.percent-50{margin:-10px 0 -1px -10px;}.row.percent-25>*{padding:5px 0 0 5px;}.row.percent-25{margin:-5px 0 -1px -5px;}.row.uniform.percent-25>*{padding:5px 0 0 5px;}.row.uniform.percent-25{margin:-5px 0 -1px -5px;}.u12-mobile,.u12x-mobile{width:100%;clear:none;margin-left:0;}.u11-mobile,.u11x-mobile{width:91.6666666667%;clear:none;margin-left:0;}.u10-mobile,.u10x-mobile{width:83.3333333333%;clear:none;margin-left:0;}.u9-mobile,.u9x-mobile{width:75%;clear:none;margin-left:0;}.u8-mobile,.u8x-mobile{width:66.6666666667%;clear:none;margin-left:0;}.u7-mobile,.u7x-mobile{width:58.3333333333%;clear:none;margin-left:0;}.u6-mobile,.u6x-mobile{width:50%;clear:none;margin-left:0;}.u5-mobile,.u5x-mobile{width:41.6666666667%;clear:none;margin-left:0;}.u4-mobile,.u4x-mobile{width:33.3333333333%;clear:none;margin-left:0;}.u3-mobile,.u3x-mobile{width:25%;clear:none;margin-left:0;}.u2-mobile,.u2x-mobile{width:16.6666666667%;clear:none;margin-left:0;}.u1-mobile,.u1x-mobile{width:8.3333333333%;clear:none;margin-left:0;}.u12x-mobile+*,.u11x-mobile+*,.u10x-mobile+*,.u9x-mobile+*,.u8x-mobile+*,.u7x-mobile+*,.u6x-mobile+*,.u5x-mobile+*,.u4x-mobile+*,.u3x-mobile+*,.u2x-mobile+*,.u1x-mobile+*{clear:left;}.u11-mobile{margin-left:91.66667%;}.-u10-mobile{margin-left:83.33333%;}.-u9-mobile{margin-left:75%;}.-u8-mobile{margin-left:66.66667%;}.-u7-mobile{margin-left:58.33333%;}.-u6-mobile{margin-left:50%;}.-u5-mobile{margin-left:41.66667%;}.-u4-mobile{margin-left:33.33333%;}.-u3-mobile{margin-left:25%;}.-u2-mobile{margin-left:16.66667%;}6u .-u1-mobile{margin-left:8.33333%;}}@-ms-viewport{{width:device-width;}}body{background:#F8F8F8;font-family:'Roboto',sans-serif;font-weight:300;font-size:17pt;line-height:1.75em;color:#888;-webkit-text-stroke:0.1px;}body.is-loading *{-moz-transition:none !important;-webkit-transition:none !important;-ms-transition:none !important;-webkit-transition:none !important;transition:none !important;-moz-animation:none !important;-webkit-animation:none !important;-ms-animation:none !important;-webkit-animation:none !important;animation:none !important;}.dark{color:#aaa;color:rgba(255,255,255,0.65);}input,textarea,select{font-family:'Roboto',sans-serif;font-weight:300;font-size:17pt;line-height:1.75em;color:#888;-webkit-text-stroke:0.1px;}h1,h2,h3,h4,h5,h6{color:#666;margin:0 0 1em 0;font-weight:100;line-height:1.5em;}h1 a,h2 a,h3 a,h4 a,h5 a,h6 a{color:inherit;text-decoration:none;}.dark h1,.dark h2,.dark h3,.dark h4,.dark h5,.dark h6{color:#fff;}strong,b{font-weight:400;color:inherit;}.dark strong,.dark b{color:#fff;color:rgba(255,255,255,0.85);}em,i{font-style:italic;}a{-moz-transition:border-bottom-color 0.25s ease-in-out;-webkit-transition:border-bottom-color 0.25s ease-in-out;-ms-transition:border-bottom-color 0.25s ease-in-out;-webkit-transition:border-bottom-color 0.25s ease-in-out;transition:border-bottom-color 0.25s ease-in-out;color:inherit;text-decoration:none;border-bottom:dotted 1px rgba(0,0,0,0.25);}a:hover{border-bottom-color:transparent;}.dark a{color:#fff;border-bottom-color:rgba(255,255,255,0.5);}.dark a:hover{border-bottom-color:rgba(255,255,255,0);}sub{position:relative;top:0.5em;font-size:0.8em;}sup{position:relative;top:-0.5em;font-size:0.8em;}hr{border:0;border-top:solid 1px #e6e6e6;margin:2em 0 2em 0;}.dark hr{border-top-color:rgba(255,255,255,0.5);}blockquote{border-left:solid 0.25em #e6e6e6;padding:1em 0 1em 2em;font-style:italic;}.dark blockquote{border-left-color:rgba(255,255,255,0.5);}p,ul,ol,dl,table{margin-bottom:1em;}p{text-align:justify;}header{margin-bottom:1em;}header h1,header h2,header h3,header h4,header h5,header h6{margin:0;}header p{display:block;margin:0;padding:0.25em 0 0.5em 0;}footer{padding-top:1.5em;}br.clear{clear:both;}.featured{text-align:center;}.featured p{text-align:center;}section,article{margin-bottom:3em;}section>:last-child,article>:last-child,section:last-child,article:last-child{margin-bottom:0;}.row>section,.row>article{margin-bottom:0;}.image{position:relative;display:inline-block;border:0;}.image:after{content:'';position:absolute;left:0;top:0;width:100%;height:100%;background:url(\"static/images/overlay.png\");}.image img{display:block;width:100%;border-radius:0.5em;}.image.featured{display:block;width:100%;margin:0 0 2em 0;}.image.fit{display:block;width:100%;}.image.left{float:left;margin:0 2em 2em 0;}.image.centered{display:block;margin:0 0 2em 0;}.image.centered img{margin:0 auto;width:auto;}ul.default{list-style:disc;padding-left:1em;}ul.default li{padding-left:0.5em;}ul.icons{cursor:default;}ul.icons li{display:inline-block;padding-left:0.75em;}ul.icons a{-moz-transition:background-color 0.25s ease-in-out;-webkit-transition:background-color 0.25s ease-in-out;-ms-transition:background-color 0.25s ease-in-out;-webkit-transition:background-color 0.25s ease-in-out;transition:background-color 0.25s ease-in-out;display:inline-block;width:2.75em;height:2.75em;line-height:2.8em;text-align:center;border:0;box-shadow:inset 0 0 0 1px #e6e6e6;border-radius:100%;color:#aaa;}ul.icons a:hover{background:rgba(0,0,0,0.025);}ul.menu{cursor:default;}ul.menu li{display:inline-block;line-height:1em;border-left:solid 1px #e6e6e6;padding:0 0 0 0.5em;margin:0 0 0 0.5em;}ul.menu li:first-child{border-left:0;padding-left:0;margin-left:0;}ul.actions{cursor:default;}ul.actions li{display:inline-block;margin:0 0 0 0.5em;}ul.actions li:first-child{margin-left:0;}ol.default{list-style:decimal;padding-left:1.25em;}ol.default li{padding-left:0.25em;}form .actions{margin-bottom:0;}form label{display:block;}form input[type=\"text\"],form input[type=\"email\"],form input[type=\"password\"],form select,form .select,form textarea{-moz-transition:all 0.25s ease-in-out;-webkit-transition:all 0.25s ease-in-out;-ms-transition:all 0.25s ease-in-out;-webkit-transition:all 0.25s ease-in-out;transition:all 0.25s ease-in-out;-moz-appearance:none;-webkit-appearance:none;-ms-appearance:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;display:block;box-shadow:inset 0 0 0 1px #e6e6e6;background:#f8f8f8;width:100%;padding:0.85em 1em 0.85em 1em;border-radius:0.25em;border:0;}form input[type=\"text\"]:focus,form input[type=\"email\"]:focus,form input[type=\"password\"]:focus,form select:focus,form .select:focus,form textarea:focus{outline:0;box-shadow:inset 0 0 0 1px #afd9e0;background:#fcfcfc;}form input[type=\"text\"],form input[type=\"email\"],form input[type=\"password\"],form select{line-height:1.25em;}form textarea{min-height:13em;}form select{position:relative;}form select option:not(:checked){color:#000;}form .select{position:relative;padding:0;overflow-x:hidden;outline:0;}form .select select{width:calc(100% + 2em);background:none !important;box-shadow:none !important;border:0 !important;cursor:pointer;}form .select select::-moz-focus-inner{border:0;outline:0;}form .select:before{content:'';position:absolute;top:15%;right:1em;width:1.25em;height:75%;background:url(\"static/images/arrow.svg\") center center no-repeat;background-size:contain;z-index:0;}form .select select::-ms-expand{display:none;}form::-moz-focus-inner{border:0;}form .formerize-placeholder{color:#555 !important;}form::-webkit-input-placeholder{color:#aaa !important;}form:-moz-placeholder{color:#555 !important;}form::-moz-placeholder{color:#555 !important;}form:-ms-input-placeholder{color:#555 !important;}.dark form input[type=\"text\"],.dark form input[type=\"email\"],.dark form input[type=\"password\"],.dark form select,.dark form .select,.dark form textarea{background:none;box-shadow:inset 0 0 0 1px rgba(255,255,255,0.5);color:#fff;}.dark form input[type=\"text\"]:focus,.dark form input[type=\"email\"]:focus,.dark form input[type=\"password\"]:focus,.dark form select:focus,.dark form .select:focus,.dark form textarea:focus{background:rgba(255,255,255,0.1);box-shadow:inset 0 0 0 1px #fff;}.dark form .select:before{background:url(\"static/images/dark-arrow.svg\") center center no-repeat;background-size:contain;}.dark form .formerize-placeholder{color:#aaa !important;color:rgba(255,255,255,0.85) !important;}.dark form::-webkit-input-placeholder{color:rgba(255,255,255,0.85) !important;}.dark form:-moz-placeholder{color:rgba(255,255,255,0.85) !important;}.dark form::-moz-placeholder{color:rgba(255,255,255,0.85) !important;}.dark form:-ms-input-placeholder{color:rgba(255,255,255,0.85) !important;}table{width:100%;}table.default{width:100%;border-collapse:collapse;}table.default tbody tr{border:solid 1px #e6e6e6;}table.default tbody tr:nth-child(2n+2){background:#f8f8f8;}table.default td{padding:0.5em 1em 0.5em 1em;}table.default th{text-align:left;padding:0.5em 1em 1em 1em;}table.default tfoot td{padding-top:1em;}.dark table.default tbody tr{border-color:rgba(255,255,255,0.5);}.dark table.default tbody tr:nth-child(2n+2){background:rgba(255,255,255,0.1);}input[type=\"button\"],input[type=\"submit\"],input[type=\"reset\"],button,.button{-moz-transition:all 0.25s ease-in-out;-webkit-transition:all 0.25s ease-in-out;-ms-transition:all 0.25s ease-in-out;-webkit-transition:all 0.25s ease-in-out;transition:all 0.25s ease-in-out;-webkit-appearance:none;position:relative;display:inline-block;background:#3d3d3d;padding:0.85em 3em 0.85em 3em;border-radius:0.25em;cursor:pointer;border:0;color:#fff;text-align:center;text-decoration:none;}input[type=\"button\"]:hover,input[type=\"submit\"]:hover,input[type=\"reset\"]:hover,button:hover,.button:hover{background:#4f4f4f;}input[type=\"button\"].alt,input[type=\"submit\"].alt,input[type=\"reset\"].alt,button.alt,.button.alt{color:inherit;box-shadow:inset 0 0 0 1px #e6e6e6;background:none;}input[type=\"button\"].alt:hover,input[type=\"submit\"].alt:hover,input[type=\"reset\"].alt:hover,button.alt:hover,.button.alt:hover{background:rgba(0,0,0,0.025);}.dark input[type=\"button\"],.dark input[type=\"submit\"],.dark input[type=\"reset\"],.dark button,.dark .button{background:rgba(255,255,255,0.15);box-shadow:inset 0 0 0 1px #fff;color:#fff;}.dark input[type=\"button\"]:hover,.dark input[type=\"submit\"]:hover,.dark input[type=\"reset\"]:hover,.dark button:hover,.dark .button:hover{background:rgba(255,255,255,0.25);}.dark input[type=\"button\"].alt,.dark input[type=\"submit\"].alt,.dark input[type=\"reset\"].alt,.dark button.alt,.dark .button.alt{background:none;box-shadow:inset 0 0 0 1px rgba(255,255,255,0.5);}.dark input[type=\"button\"].alt:hover,.dark input[type=\"submit\"].alt:hover,.dark input[type=\"reset\"].alt:hover,.dark button.alt:hover,.dark .button.alt:hover{background:rgba(255,255,255,0.15);box-shadow:inset 0 0 0 1px #fff;}.feature-icon{display:inline-block;position:relative;padding-bottom:5em;margin-bottom:2.75em;cursor:default;}.feature-icon .icon{display:inline-block;width:2em;height:2em;font-size:4.5em;border-radius:100%;box-shadow:inset 0 0 0 1px #666;color:#666;line-height:2.1em;}.feature-icon:before{content:'';background:#666;position:absolute;bottom:0;left:50%;margin-left:-0.325em;width:0.65em;height:0.65em;display:block;border-radius:100%;}.feature-icon:after{content:'';position:absolute;left:50%;bottom:0.65em;width:1px;height:4.35em;background:#666;margin-left:-0.5px;}.dark .feature-icon .icon{background:rgba(255,255,255,0.15);box-shadow:inset 0 0 0 1px rgba(255,255,255,0.5);color:#fff;}.dark .feature-icon:before,.dark .feature-icon:after{background:rgba(255,255,255,0.5);}.icon{text-decoration:none;}.icon:before{display:inline-block;font-family:FontAwesome;font-size:1.25em;text-decoration:none;font-style:normal;font-weight:normal;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}.icon>.label{display:none;}.main{position:relative;margin:0;}.main>header{background:#fff;text-align:center;padding:5em 0 5em 0;margin:0;}.main>header h2{font-size:2.25em;font-weight:100;margin-bottom:0;}.main>header p{margin:2em 0 0 0;padding:0;text-align:center;}.main>.content{padding:6em 0 6em 0;}.main>.content h3{font-size:1.5em;}.main>.content.dark{background:#433;}.main>.content.style1{background:url(\"static/images/bgtr.svg\") top right no-repeat,url(\"static/images/bgbl.svg\") bottom left no-repeat,url(\"static/images/bgbl.svg\") bottom left no-repeat,url(\"static/images/overlay.png\"),linear-gradient(45deg,#b39c68,#a56365,#412e4c);}.main>.content.style2{background:url(\"static/images/bgtr.svg\") top right no-repeat,url(\"static/images/bgbl.svg\") bottom left no-repeat,url(\"static/images/overlay.png\"),linear-gradient(45deg,#384955,#655361,#85505f);}.main>.content.style3{background:url(\"static/images/bgtr.svg\") top right no-repeat,url(\"static/images/bgbl.svg\") bottom left no-repeat,url(\"static/images/overlay.png\"),linear-gradient(45deg,#5f796b,#3a4e59,#2f394e);}.main>.content.style4{padding-top:0;background:#fff;}#footer{position:relative;margin:0;text-align:center;padding:4em 0 8em 0;box-shadow:inset 0 1px 0 0 #e6e6e6;}#footer .copyright{margin-top:3em;font-size:0.8em;color:#aaa;}#footer .copyright a{color:inherit;}#footer ul.icons a{box-shadow:inset 0 0 0 1px #d6d6d6;}@media screen and (max-width:1680px){body,input,textarea,select{font-size:15pt;line-height:1.75em;}}@media screen and (max-width:1280px){body,input,textarea,select{font-size:13pt;line-height:1.65em;}.feature-icon{margin-bottom:2em;}#header{padding:12em 0 12em 0;}.main>header{padding:4em 0 4em 0;}.main>.content{padding:4em 0 4em 0;}}@media screen and (max-width:1000px){header,footer,h2,h3,h4,h5,h6,header>p{text-align:center;}section,article{margin:0 0 2.5em 0 !important;}.row>section,.row>article{margin:0 0 2.5em 0 !important;}.table-wrapper{width:100%;overflow-x:scroll;padding-left:1px;-webkit-overflow-scrolling:touch;}ul.actions{text-align:center;}#header{margin:0 !important;padding:8em 2em 8em 2em;}#header header p{margin-top:1em;}#header footer{padding-top:1.25em;}.main{margin:0 !important;}.main>header{padding:3.5em 2em 3.5em 2em;}.main>header h2{font-size:1.85em;}.main>header br{display:none;}.main>header p{margin:1.5em 0 0 0;}.main>.content{padding:3.5em 20px 3.5em 20px;}.main>.content>.container>:last-child{margin-bottom:0 !important;}#footer{margin:0 !important;padding:3em 0 3em 0;}#footer .copyright{margin-top:2em;}}@media screen and (max-width:736px){body,input,textarea,select{font-size:11pt;}section,article{margin:0 0 1.5em 0 !important;}.row>section,.row>article{margin:0 0 1.5em 0 !important;}.button{padding-left:0;padding-right:0;width:100%;max-width:300px;}ul.icons li{padding-left:0.35em;}ul.actions li{display:block;margin:1em 0 1em 0;}ul.menu li{border:0;padding:0;display:block;margin:1em 0 1em 0;}#header{padding:6em 20px 6em 20px;}#header>header{padding:0 1em 0 1em;}.main>header{padding:3em 20px 3em 20px;}.main>header h2{font-size:1.5em;}.main>.content{padding:3em 20px 3em 20px;}.main>.content h3{font-size:1.25em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHN0eWxlcy1qc3hcXG1haW5fY3NzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUN1QixBQUVvQyxBQUNvRSxBQVc1RixBQVNLLEFBSUEsQUFJRSxBQUlKLEFBSUQsQUFLYyxBQUtLLEFBTUgsQUFRVixBQUtOLEFBTUUsQUFJRCxBQUlBLEFBSUMsQUFNRCxBQU1DLEFBSUEsQUFJQSxBQUlDLEFBUUYsQUFNQyxBQUlBLEFBSUEsQUFJQSxBQVFELEFBTUQsQUFJQSxBQUlBLEFBSVksQUFRWCxBQU1ELEFBSUEsQUFJQSxBQUlZLEFBUWEsQUFPekIsQUFPQSxBQU9FLEFBSUcsQUFJSSxBQUlFLEFBSUYsQUFJRSxBQUlBLEFBSUksQUFJSixBQUlJLEFBSUYsQUFJSSxBQUlKLEFBSUksQUFJTixBQUlJLEFBSUosQUFJSSxBQUlKLEFBSUksQUFJSixBQUlJLEFBSUEsQUFJSSxBQUlKLEFBSUksQUFJbkIsQUFNVSxBQU1BLEFBTVgsQUFNVyxBQU1BLEFBTVgsQUFNVyxBQU1BLEFBTVgsQUFNVyxBQU1ELEFBaUJULEFBSVcsQUFJQSxBQUlOLEFBSU0sQUFJQSxBQUlOLEFBSU0sQUFJQSxBQUlOLEFBSU0sQUFJRCxBQU1FLEFBSUksQUFJSixBQUlJLEFBSUosQUFJSSxBQUlKLEFBSUksQUFJSixBQUlJLEFBSUosQUFJSSxBQUlKLEFBSUksQUFJSixBQUlJLEFBSUosQUFJSSxBQUlKLEFBSUksQUFJZixBQU1VLEFBTUEsQUFNWCxBQU1XLEFBTUEsQUFNWCxBQU1XLEFBTUEsQUFNWCxBQU1XLEFBTUQsQUFpQlQsQUFJVyxBQUlBLEFBSU4sQUFJTSxBQUlBLEFBSU4sQUFJTSxBQUlBLEFBSU4sQUFJTSxBQUlELEFBUUMsQUFJSSxBQUlKLEFBSUksQUFJSixBQUlJLEFBSUosQUFJSSxBQUlKLEFBSUksQUFJSixBQUlJLEFBSUosQUFJSSxBQUlKLEFBSUksQUFJRixBQUlJLEFBSUosQUFJSSxBQUlqQixBQU1VLEFBTUEsQUFNWCxBQU1XLEFBTUEsQUFNWCxBQU1XLEFBTUEsQUFNWCxBQU1XLEFBTUQsQUFpQlQsQUFJVyxBQUlBLEFBSU4sQUFJTSxBQUlBLEFBSU4sQUFJTSxBQUlBLEFBSU4sQUFJTSxBQUlELEFBUUMsQUFJSSxBQUlKLEFBSUksQUFJSixBQUlJLEFBSUosQUFJSSxBQUlBLEFBSUksQUFJSixBQUlJLEFBSUosQUFJSSxBQUlKLEFBSUksQUFJSixBQUlJLEFBSUosQUFJSSxBQUluQixBQU1VLEFBTUEsQUFNWCxBQU1XLEFBTUEsQUFNWCxBQU1XLEFBTUEsQUFNWCxBQU1XLEFBTUQsQUFpQlQsQUFJVyxBQUlBLEFBSU4sQUFJTSxBQUlBLEFBSU4sQUFJTSxBQUlBLEFBSU4sQUFJTSxBQUlELEFBUUMsQUFJSSxBQUlKLEFBSUksQUFJSixBQUlJLEFBSUosQUFJSSxBQUlKLEFBSUksQUFJSixBQUlJLEFBSUosQUFJSSxBQUlKLEFBSUksQUFJTixBQUlJLEFBSUosQUFJSSxBQUliLEFBTVUsQUFNQSxBQU1YLEFBTVcsQUFNQSxBQU1YLEFBTVcsQUFNQSxBQU1YLEFBTVcsQUFNRCxBQWlCVCxBQUlXLEFBSUEsQUFJTixBQUlNLEFBSUEsQUFJTixBQUlNLEFBSUEsQUFJTixBQUlNLEFBSUQsQUFRSCxBQUlBLEFBVWMsQUFXdEIsQUFLc0IsQUFTdEIsQUFPRyxBQUtILEFBSUssQUFLTCxBQUtPLEFBSW9DLEFBVXJCLEFBSXRCLEFBS2lDLEFBSTFCLEFBTUEsQUFNVCxBQU1pQyxBQUlULEFBTVUsQUFJekIsQUFJQyxBQUlELEFBSVIsQUFJSyxBQU1HLEFBSVAsQUFJTyxBQUlDLEFBT0QsQUFPRixBQUtBLEFBTUUsQUFNTixBQVVHLEFBTUEsQUFNQSxBQUtILEFBS0csQUFLQyxBQU9BLEFBS0ksQUFJTCxBQUlPLEFBSzhCLEFBZ0JsQixBQUluQixBQUlPLEFBUU4sQUFNRCxBQUlPLEFBS04sQUFJRyxBQUtFLEFBTUwsQUFJRixBQVN3QixBQXVCM0IsQUFTUSxBQUlILEFBSUUsQUFJTixBQUlNLEFBT00sQUFRYixBQUtDLEFBWUUsQUFJTCxBQUlhLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFTTixBQVdxQixBQUtrQyxBQUtqRCxBQUtxQixBQUlBLEFBSUEsQUFJQSxBQU1oQyxBQUlDLEFBS2UsQUFJTCxBQUlRLEFBSVosQUFLQSxBQUlvQixBQUlELEFBVUMsQUFzQmxCLEFBUUwsQUFVbUIsQUFRRyxBQVVDLEFBUXJCLEFBU3NCLEFBT2xCLEFBUUMsQUFXVixBQWFBLEFBV3lCLEFBTUQsQUFNZixBQUlDLEFBWVIsQUFPSSxBQUtELEFBT0UsQUFNQSxBQU1FLEFBSUgsQUFJQSxBQUk0TyxBQUlyRCxBQUlBLEFBSXpMLEFBT0UsQUFRRixBQU1BLEFBSW9CLEFBVW5CLEFBYUEsQUFPRyxBQU1JLEFBTUYsQUFJQSxBQVlGLEFBTVksQUFJQSxBQU1uQixBQVNPLEFBTUUsQUFLSixBQUlJLEFBTUEsQUFJUyxBQUlWLEFBSUosQUFJTSxBQUlVLEFBSUYsQUFNVCxBQUtKLEFBWUQsQUFNZSxBQUlBLEFBTWYsQUFTSyxBQUlOLEFBS0wsQUFTaUIsQUFJTCxBQU1LLEFBSVQsQUFJUyxBQUlSLFNBbnVFVixBQTQzQ21CLEFBZ0M3QixBQTZQWSxBQXFCYixBQXVoQmEsQ0E3akVaLEFBSUEsQUFJQSxBQWtCQSxBQUlBLEFBSUEsQUEySlcsQUFrQkEsQUFrQkEsQUFpTEMsQUFrQkEsQUFrQkEsQUFtTEEsQUFrQkEsQUFrQkEsQUFtTEEsQUFrQkEsQUFrQkEsQUFtTEEsQUFrQkEsQUFrQkEsQUE4YXdCLENBeGxEdkIsQUE2QkksQUF3QkMsQUEwQkEsQUEwQkYsQUEwQkEsQUFpQ1csQUFPYixBQStHSCxBQW1GWixBQWtJYSxBQW1GWixBQW9JWSxBQW1GWixBQW9JWSxBQW1GWixBQW9JWSxBQW1GWixBQTZFZ0MsQUFjZixBQVlsQixBQVNpQyxBQXVCYSxBQW1FOUMsQUF1Q29CLEFBMkJDLEFBMEpwQixBQXdCbUIsQUF5RnBCLEFBSTJCLEFBNklULEFBYUUsQUFpTUMsQ0Fqa0VyQixBQTJDQSxBQUlBLEFBZ0JDLEFBSUEsQUFJQSxBQWtCQSxBQUlBLEFBSUEsQUFJQSxDQTlERCxBQVlBLEFBd0JDLEFBMkdELEFBKzlDQyxBQWtSQSxBQW9NRyxDQXZuRUosQUFJQSxBQXF6Q3NCLEFBOEZYLEFBMkRFLEFBTUEsQUFNQSxBQVVNLEFBS0wsQUF5REksQUFlaEIsQUFtQkYsQUFnUHFDLEFBa0xsQixBQXFCakIsQUF3TG9CLENBMXJCdEIsQUE2QkEsQUFrQkEsQUE2Y2tCLEFBb0JJLEFBYUEsQUF1RW5CLEFBNkNBLEFBWUQsQUFnQmlCLENBbHFFbkIsQUE4TEEsQUFtTUEsQUFZQSxBQVlBLEFBNkxDLEFBWUEsQUFZQSxBQStMQSxBQVlBLEFBWUEsQUErTEEsQUFZQSxBQVlBLEFBK0xBLEFBWUEsQUFZQSxBQXVFYyxBQXFIZixBQUtBLEFBd0RrQixBQWdGbEIsQUFpREEsQUE2RXFELEFBaUV4QixBQUszQixBQW9Gb0QsQUFtR2xDLEFBdUJsQixBQUlBLEFBeVBDLENBM3FFZ0IsQUE4NURBLEFBTU4sQUF1S1QsQUF3R0QsQ0EvNEJILEFBMkJXLEFBTUMsQUEwQlosQUFRQSxBQWNBLEFBUUEsQUFJQyxBQU9ELEFBa0JzQixBQXVMdEIsQUFRVyxBQXlURCxBQXVEQSxBQWdEUixBQTRCQSxBQXlCQSxDQTlsRVEsQUFteENWLEFBSWtDLEFBNEhsQyxBQThHQyxBQWdFb0IsQUF3RHJCLEFBZ0NFLEFBMEdDLEFBcURGLEFBcVRFLEFBc0JDLEFBa0VhLENBbi9EakIsQUFRQSxBQTBKWSxBQXFOQyxBQXVOQSxBQXVOQSxBQXFJWixBQVFBLEFBMEVZLEFBd1haLEFBb1pBLEFBMkZDLEFBSUEsQUEyQ3lCLEFBZXpCLEFBOEJxQixBQTBDckIsQUFzQkMsQ0F6NURTLEFBTUEsQUFPRyxBQUtILEFBTUEsQUFPRyxBQUtILEFBTUEsQUFPRyxBQUtILEFBbUVaLEFBNEZhLEFBTUEsQUFPRyxBQUtILEFBTUEsQUFPRyxBQUtILEFBTUEsQUFPRyxBQUtILEFBbUVaLEFBOEZZLEFBTUEsQUFPRyxBQUtILEFBTUEsQUFPRyxBQUtILEFBTUEsQUFPRyxBQUtILEFBbUVaLEFBOEZZLEFBTUEsQUFPRyxBQUtILEFBTUEsQUFPRyxBQUtILEFBTUEsQUFPRyxBQUtILEFBbUVaLEFBOEZZLEFBTUEsQUFPRyxBQUtILEFBTUEsQUFPRyxBQUtILEFBTUEsQUFPRyxBQUtILEFBbUVaLEFBOFBxQixBQTZCSixBQWtCRyxBQTRURixBQVFQLEFBK0NaLEFBSTBCLENBNXhEekIsQUEwQkEsQUF5Q0QsQUFRQSxBQUlBLEFBUUEsQUF3QkEsQUFRQSxBQVFBLEFBUUEsQUF5QmUsQUFzRmYsQUFJQSxBQVFBLEFBSUEsQUFRQSxBQUlBLEFBUUEsQUFVQyxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVNlLEFBc0ZmLEFBSUEsQUFRQSxBQUlBLEFBUUEsQUFJQSxBQVFBLEFBWUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQXlCZSxBQXNGZixBQUlBLEFBUUEsQUFJQSxBQVFBLEFBSUEsQUFRQSxBQVlBLEFBUUEsQUFRQSxBQVFBLEFBeURlLEFBc0ZmLEFBSUEsQUFRQSxBQUlBLEFBUUEsQUFJQSxBQVFBLEFBWUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQXlCZSxBQXNGZixBQUlBLEFBUUEsQUFJQSxBQVFBLEFBSUEsQUFRQSxBQTBhRCxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBOEI0QyxBQWdWMUMsQ0Evb0J5QixBQWdQRSxDQXZuRDdCLEFBeU5BLEFBUUEsQUFvZEMsQUFRQSxBQTBhQSxBQVFBLENBM21DaUIsQUF1S04sQUF1eENVLEFBTUgsQUFNbEIsQUFlQyxBQXlRQSxDQTduRGUsQUEwQkEsQUEwRWpCLEFBUUEsQUF3QkEsQUFRQSxBQVFBLEFBUUEsQUFJQSxBQVFBLEFBaUpDLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBK0lBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUErSkEsQUFRQSxBQVFBLEFBUUEsQUFJQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFtSkEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQXFsQ0MsQUFVQSxBQVFBLENBdnJFNkIsQUFnMkRYLEFBMkRwQixBQWtCcUIsQUFxQ0YsQUFpSmYsQ0Exb0VZLEFBcURFLEFBd0JDLEFBMEJELEFBOElsQixBQVFBLEFBb2RDLEFBUUEsQUFpbUJnQixBQXFEQSxBQTBSRSxBQTZIakIsQUFnWEMsQ0Fqd0JjLEFBMkZSLEFBNkVQLEFBaUJlLEFBK0dQLEFBNEtSLEFBMkVTLEFBaU1TLENBcGpFcEIsQUFvUUEsQUFRQSxBQTJsQkMsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBMFpELEFBaUtDLEFBdWdCQyxBQXdGQSxBQUlBLEFBd0RDLEFBaUNELEFBSUEsQ0F2ekRhLEFBcU5DLEFBdU5BLEFBdU5BLEFBdU5BLEFBa1NmLEFBNFlZLEFBcUlBLEFBaUxDLENBMTNEQyxBQU1BLEFBWUEsQUFNQSxBQVlBLEFBTUEsQUFZQSxBQStKQyxBQU1BLEFBWUEsQUFNQSxBQVlBLEFBTUEsQUFZQSxBQWlLQSxBQU1BLEFBWUEsQUFNQSxBQVlBLEFBTUEsQUFZQSxBQWlLQSxBQU1BLEFBWUEsQUFNQSxBQVlBLEFBTUEsQUFZQSxBQWlLQSxBQU1BLEFBWUEsQUFNQSxBQVlBLEFBTUEsQUFZQSxBQXdGcUIsQUFnQnBCLEFBaURoQixDQW1Dc0IsQUF3SHZCLEFBd05rQyxBQW1FakMsQUE2SUQsQUEwQ21CLEFBaVBqQixBQU1vQixDQXBYVyxBQVVoQyxBQWlCa0MsQUFrRGtCLEFBeUMvQixBQThFcEIsQUFhQSxDQWwvREYsQUFxUkEsQUFrQkEsQUFrQkEsQUFpTEMsQUFrQkEsQUFrQkEsQUFtTEEsQUFrQkEsQUFrQkEsQUFtTEEsQUFrQkEsQUFrQkEsQUFtTEEsQUFrQkEsQUFrQkEsQUE4SEQsQUFrZEEsQUF1UEMsQ0F0MUQyQixBQWdCbEIsQUErR1YsQUFxTkMsQUF1TkEsQUF1TkEsQUF1TkEsQUFvVU8sQUF5U1AsQ0FwTitCLEFBd0hwQixDQWwrQ21CLEFBK3JDWCxBQTZOc0IsQUF5TUEsQUFvSDFCLENBcmhCaEIsQUEwRVUsQUF1SFYsQUFtVG9CLENBeGtCcEIsQUFtQ0EsQUEyQkMsQUFnQ0QsQUE4S0MsQUEyS0QsQUFJQSxBQUlBLEFBSUEsQUFrYUUsQ0EvZ0VELEFBMEJBLEFBNjJDQSxDQTUrQ0QsQUFxN0NhLEFBZVosQUEwU0MsQUFrSGdCLEFBcUlqQixBQWlMa0IsQ0FsckVMLEFBOGlEWixDQXY4Q0QsQUFtdENrQixBQXFEbkIsQUFvdkJFLENBOWlFRixBQXdCQyxBQXVIRCxBQWdMQSxBQXFOQyxBQXVOQSxBQXVOQSxBQXVOQSxBQXVLRCxBQXFHQyxBQXFKb0IsQUF3UlYsQUF1Q1EsQUFzQ2pCLEFBcUNtQixDQWpzRHJCLEFBTUEsQUFZQSxBQU1BLEFBWUEsQUFNQSxBQVlBLEFBK0pDLEFBTUEsQUFZQSxBQU1BLEFBWUEsQUFNQSxBQVlBLEFBaUtBLEFBTUEsQUFZQSxBQU1BLEFBWUEsQUFNQSxBQVlBLEFBaUtBLEFBTUEsQUFZQSxBQU1BLEFBWUEsQUFNQSxBQVlBLEFBaUtBLEFBTUEsQUFZQSxBQU1BLEFBWUEsQUFNQSxBQVlBLEFBaWNVLEFBNGN5QixDQXZickIsQ0E5V0MsQUErR2YsQUEyQ0QsQ0FxWGtCLEFBK0loQixDQS9UMkIsQ0F6WFosQUFzUHVDLENBeVk1QyxBQWdUVixDQWgyQkYsQUE2R2MsQ0E1SDRDLEFBa2pCL0MsQUErREEsQ0Fua0JRLENBbjRDTSxBQXlvRHpCLENBbm1EdUIsQUFvMUN2QixDQXlmc0IsQUFTRCxBQXNUbkIsRUFwaEJXLEVBcFdiLEFBbWFBLEFBd0xnQixBQXlCTyxDQTN2RFEsQUE2bkNYLEFBd2xCRyxBQStEdEIsQ0F4VkEsQ0E3SjZDLEFBc1BsQyxBQVdYLEFBNEdBLEFBbUNBLEFBdUptQyxDQXpLeEIsQUEyQlYsQ0FybEJjLEFBU2lCLEFBc1FYLENBMTJDQyxHQW8rQzZDLEFBd0QzQyxFQW5WekIsR0FxVUEsQUE2TWtCLENBdlFJLEFBa010QixBQTRDa0MsRUF0MURsQyxBQWdqRHNDLEFBeU1BLEFBb0Z0QixBQWlPZCxDQXBsRUYsRUFzeENvQixBQTBCUixDQTRtQkEsQUFrQlEsQ0F0Q0wsR0FuV00sR0ExMkNyQixFQTJ0RHFCLENBbnVERSxBQThuQ0ksQ0Fta0IzQixBQXlDQSxDQXRNQSxFQXhFaUIsQUEwUEQsQ0ExbUJhLEVBMHRCN0IsQ0FsdUJZLEFBd3BCUyxJQXBhK0IsQ0EyQm5ELEdBcEZBLEFBMmFZLEVBeGlCeUMsQUFxakJ0QyxBQWFmLENBL25CMEIsQUF3WDFCLEdBNTlDRCxDQW02Q2tDLEFBeU1BLEdBOWVsQyxDQTRrQm9CLEFBa0RKLEtBckNLLFNBc0NnQixHQWxSWCxDQXRZMUIsQUFzbUJDLE1BYUEsV0FoWStDLEtBNU9mLENBZ1lyQixHQTFVc0MsS0E0bEJkLEVBalJuQyxtQkF6RXFCLEFBeU1HLENBaGdCVyxFQXFzQmxDLEFBSUEsVUF2REQsUUExVndCLEdBeU1OLFdBaGdCYSxPQWlnQlYsR0F6TUQsVUF3WW5CLFFBOUxrQixFQWpnQlEsQUEwT0wsQUE4RU4sZUFwUUYsRUE4Y2dCLElBdlJoQixRQXRMTyxLQXVMTixhQXVSTSxDQXRSRixFQXZMMEIsVUFyRDdDLENBd1RjLEtBM0VLLEVBc1JKLE9BMU1vQixRQTJNMUIsQ0F0UkMsUUF4TFgsQUErY1ksQ0F0UnlCLFVBdVJsQixPQTVNQyxXQTZNRSxPQXZSRCxDQTJFVCxXQUNtQixFQTRNL0IsS0F2UmEsV0FDWixZQTJFcUIscUJBQ1osU0FDViIsImZpbGUiOiJjb21wb25lbnRzXFxzdHlsZXMtanN4XFxtYWluX2Nzcy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9QYXZpbGlvbi9Eb2N1bWVudHMvUHJveWVjdG9zL1dlYkFwcFJpb0RhbnRhIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuQGltcG9ydCB1cmwoXCJmb250LWF3ZXNvbWUubWluLmNzc1wiKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjEwMCwxMDBpdGFsaWMsMzAwLDMwMGl0YWxpYyw0MDAsNDAwaXRhbGljXCIpO1xyXG5cclxuLypcclxuXHRUZXNzZWxsYXRlIGJ5IEhUTUw1IFVQXHJcblx0aHRtbDV1cC5uZXQgfCBAYWpsa25cclxuXHRGcmVlIGZvciBwZXJzb25hbCBhbmQgY29tbWVyY2lhbCB1c2UgdW5kZXIgdGhlIENDQSAzLjAgbGljZW5zZSAoaHRtbDV1cC5uZXQvbGljZW5zZSlcclxuKi9cclxuXHJcbi8qIFJlc2V0ICovXHJcblxyXG5cdGh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLCBhLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsIGRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCwgc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhciwgYiwgdSwgaSwgY2VudGVyLCBkbCwgZHQsIGRkLCBvbCwgdWwsIGxpLCBmaWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCwgdGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsIGFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBmaWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LCB0aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHRcdGJvcmRlcjogMDtcclxuXHRcdGZvbnQtc2l6ZTogMTAwJTtcclxuXHRcdGZvbnQ6IGluaGVyaXQ7XHJcblx0XHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcblx0fVxyXG5cclxuXHRhcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0fVxyXG5cclxuXHRib2R5IHtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxO1xyXG5cdH1cclxuXHJcblx0b2wsIHVsIHtcclxuXHRcdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0fVxyXG5cclxuXHRibG9ja3F1b3RlLCBxIHtcclxuXHRcdHF1b3Rlczogbm9uZTtcclxuXHR9XHJcblxyXG5cdGJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLCBxOmJlZm9yZSwgcTphZnRlciB7XHJcblx0XHRjb250ZW50OiAnJztcclxuXHRcdGNvbnRlbnQ6IG5vbmU7XHJcblx0fVxyXG5cclxuXHR0YWJsZSB7XHJcblx0XHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG5cdFx0Ym9yZGVyLXNwYWNpbmc6IDA7XHJcblx0fVxyXG5cclxuXHRib2R5IHtcclxuXHRcdC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcclxuXHR9XHJcblxyXG4vKiBCb3ggTW9kZWwgKi9cclxuXHJcblx0KiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xyXG5cdFx0LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHR9XHJcblxyXG4vKiBDb250YWluZXJzICovXHJcblxyXG5cdC5jb250YWluZXIge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0XHRtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0fVxyXG5cclxuXHQuY29udGFpbmVyLnBlcmNlbnQtMTI1IHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0bWF4LXdpZHRoOiAxNzAwcHg7XHJcblx0XHRtaW4td2lkdGg6IDEzNjBweDtcclxuXHR9XHJcblxyXG5cdC5jb250YWluZXIucGVyY2VudC03NSB7XHJcblx0XHR3aWR0aDogMTAyMHB4O1xyXG5cdH1cclxuXHJcblx0LmNvbnRhaW5lci5wZXJjZW50LTUwIHtcclxuXHRcdHdpZHRoOiA2ODBweDtcclxuXHR9XHJcblxyXG5cdC5jb250YWluZXIucGVyY2VudC0yNSB7XHJcblx0XHR3aWR0aDogMzQwcHg7XHJcblx0fVxyXG5cclxuXHQuY29udGFpbmVyIHtcclxuXHRcdHdpZHRoOiAxMzYwcHg7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjgwcHgpIHtcclxuXHJcblx0XHQuY29udGFpbmVyLnBlcmNlbnQtMTI1IHtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdG1heC13aWR0aDogMTUwMHB4O1xyXG5cdFx0XHRtaW4td2lkdGg6IDEyMDBweDtcclxuXHRcdH1cclxuXHJcblx0XHQuY29udGFpbmVyLnBlcmNlbnQtNzUge1xyXG5cdFx0XHR3aWR0aDogOTAwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LmNvbnRhaW5lci5wZXJjZW50LTUwIHtcclxuXHRcdFx0d2lkdGg6IDYwMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5jb250YWluZXIucGVyY2VudC0yNSB7XHJcblx0XHRcdHdpZHRoOiAzMDBweDtcclxuXHRcdH1cclxuXHJcblx0XHQuY29udGFpbmVyIHtcclxuXHRcdFx0d2lkdGg6IDEyMDBweDtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuXHJcblx0XHQuY29udGFpbmVyLnBlcmNlbnQtMTI1IHtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdG1heC13aWR0aDogMTIwMHB4O1xyXG5cdFx0XHRtaW4td2lkdGg6IDk2MHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5jb250YWluZXIucGVyY2VudC03NSB7XHJcblx0XHRcdHdpZHRoOiA3MjBweDtcclxuXHRcdH1cclxuXHJcblx0XHQuY29udGFpbmVyLnBlcmNlbnQtNTAge1xyXG5cdFx0XHR3aWR0aDogNDgwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LmNvbnRhaW5lci5wZXJjZW50LTI1IHtcclxuXHRcdFx0d2lkdGg6IDI0MHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5jb250YWluZXIge1xyXG5cdFx0XHR3aWR0aDogOTYwcHg7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcblxyXG5cdFx0LmNvbnRhaW5lci5wZXJjZW50LTEyNSB7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRtYXgtd2lkdGg6IDEyNSU7XHJcblx0XHRcdG1pbi13aWR0aDogMTAwJTtcclxuXHRcdH1cclxuXHJcblx0XHQuY29udGFpbmVyLnBlcmNlbnQtNzUge1xyXG5cdFx0XHR3aWR0aDogNzUlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5jb250YWluZXIucGVyY2VudC01MCB7XHJcblx0XHRcdHdpZHRoOiA1MCU7XHJcblx0XHR9XHJcblxyXG5cdFx0LmNvbnRhaW5lci5wZXJjZW50LTI1IHtcclxuXHRcdFx0d2lkdGg6IDI1JTtcclxuXHRcdH1cclxuXHJcblx0XHQuY29udGFpbmVyIHtcclxuXHRcdFx0d2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzZweCkge1xyXG5cclxuXHRcdC5jb250YWluZXIucGVyY2VudC0xMjUge1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0bWF4LXdpZHRoOiAxMjUlO1xyXG5cdFx0XHRtaW4td2lkdGg6IDEwMCU7XHJcblx0XHR9XHJcblxyXG5cdFx0LmNvbnRhaW5lci5wZXJjZW50LTc1IHtcclxuXHRcdFx0d2lkdGg6IDc1JTtcclxuXHRcdH1cclxuXHJcblx0XHQuY29udGFpbmVyLnBlcmNlbnQtNTAge1xyXG5cdFx0XHR3aWR0aDogNTAlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5jb250YWluZXIucGVyY2VudC0yNSB7XHJcblx0XHRcdHdpZHRoOiAyNSU7XHJcblx0XHR9XHJcblxyXG5cdFx0LmNvbnRhaW5lciB7XHJcblx0XHRcdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcbi8qIEdyaWQgKi9cclxuXHJcblx0LnJvdyB7XHJcblx0XHRib3JkZXItYm90dG9tOiBzb2xpZCAxcHggdHJhbnNwYXJlbnQ7XHJcblx0XHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdH1cclxuXHJcblx0LnJvdyA+ICoge1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdH1cclxuXHJcblx0LnJvdzphZnRlciwgLnJvdzpiZWZvcmUge1xyXG5cdFx0Y29udGVudDogJyc7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdGNsZWFyOiBib3RoO1xyXG5cdFx0aGVpZ2h0OiAwO1xyXG5cdH1cclxuXHJcblx0LnJvdy51bmlmb3JtID4gKiA+IDpmaXJzdC1jaGlsZCB7XHJcblx0XHRtYXJnaW4tdG9wOiAwO1xyXG5cdH1cclxuXHJcblx0LnJvdy51bmlmb3JtID4gKiA+IDpsYXN0LWNoaWxkIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDA7XHJcblx0fVxyXG5cclxuXHQucm93LnBlcmNlbnQtMCA+ICoge1xyXG5cdFx0cGFkZGluZzogMHB4IDAgMCAwcHg7XHJcblx0fVxyXG5cclxuXHQucm93LnBlcmNlbnQtMCB7XHJcblx0XHRtYXJnaW46IDBweCAwIC0xcHggMHB4O1xyXG5cdH1cclxuXHJcblx0LnJvdy51bmlmb3JtLnBlcmNlbnQtMCA+ICoge1xyXG5cdFx0cGFkZGluZzogMHB4IDAgMCAwcHg7XHJcblx0fVxyXG5cclxuXHQucm93LnVuaWZvcm0ucGVyY2VudC0wIHtcclxuXHRcdG1hcmdpbjogMHB4IDAgLTFweCAwcHg7XHJcblx0fVxyXG5cclxuXHQucm93ID4gKiB7XHJcblx0XHRwYWRkaW5nOiA1MHB4IDAgMCA1MHB4O1xyXG5cdH1cclxuXHJcblx0LnJvdyB7XHJcblx0XHRtYXJnaW46IC01MHB4IDAgLTFweCAtNTBweDtcclxuXHR9XHJcblxyXG5cdC5yb3cudW5pZm9ybSA+ICoge1xyXG5cdFx0cGFkZGluZzogNTBweCAwIDAgNTBweDtcclxuXHR9XHJcblxyXG5cdC5yb3cudW5pZm9ybSB7XHJcblx0XHRtYXJnaW46IC01MHB4IDAgLTFweCAtNTBweDtcclxuXHR9XHJcblxyXG5cdC5yb3cucGVyY2VudC0yMDAgPiAqIHtcclxuXHRcdHBhZGRpbmc6IDEwMHB4IDAgMCAxMDBweDtcclxuXHR9XHJcblxyXG5cdC5yb3cucGVyY2VudC0yMDAge1xyXG5cdFx0bWFyZ2luOiAtMTAwcHggMCAtMXB4IC0xMDBweDtcclxuXHR9XHJcblxyXG5cdC5yb3cudW5pZm9ybS5wZXJjZW50LTIwMCA+ICoge1xyXG5cdFx0cGFkZGluZzogMTAwcHggMCAwIDEwMHB4O1xyXG5cdH1cclxuXHJcblx0LnJvdy51bmlmb3JtLnBlcmNlbnQtMjAwIHtcclxuXHRcdG1hcmdpbjogLTEwMHB4IDAgLTFweCAtMTAwcHg7XHJcblx0fVxyXG5cclxuXHQucm93LnBlcmNlbnQtMTUwID4gKiB7XHJcblx0XHRwYWRkaW5nOiA3NXB4IDAgMCA3NXB4O1xyXG5cdH1cclxuXHJcblx0LnJvdyAucGVyY2VudC0xNTAge1xyXG5cdFx0bWFyZ2luOiAtNzVweCAwIC0xcHggLTc1cHg7XHJcblx0fVxyXG5cclxuXHQucm93LnVuaWZvcm0ucGVyY2VudC0xNTAgPiAqIHtcclxuXHRcdHBhZGRpbmc6IDc1cHggMCAwIDc1cHg7XHJcblx0fVxyXG5cclxuXHQucm93LnVuaWZvcm0ucGVyY2VudC0xNTAge1xyXG5cdFx0bWFyZ2luOiAtNzVweCAwIC0xcHggLTc1cHg7XHJcblx0fVxyXG5cclxuXHQucm93LnBlcmNlbnQtNTAgPiAqIHtcclxuXHRcdHBhZGRpbmc6IDI1cHggMCAwIDI1cHg7XHJcblx0fVxyXG5cclxuXHQucm93LnBlcmNlbnQtNTAge1xyXG5cdFx0bWFyZ2luOiAtMjVweCAwIC0xcHggLTI1cHg7XHJcblx0fVxyXG5cclxuXHQucm93LnVuaWZvcm0ucGVyY2VudC01MCA+ICoge1xyXG5cdFx0cGFkZGluZzogMjVweCAwIDAgMjVweDtcclxuXHR9XHJcblxyXG5cdC5yb3cudW5pZm9ybS5wZXJjZW50LTUwIHtcclxuXHRcdG1hcmdpbjogLTI1cHggMCAtMXB4IC0yNXB4O1xyXG5cdH1cclxuXHJcblx0LnJvdy5wZXJjZW50LTI1ID4gKiB7XHJcblx0XHRwYWRkaW5nOiAxMi41cHggMCAwIDEyLjVweDtcclxuXHR9XHJcblxyXG5cdC5yb3cucGVyY2VudC0yNSB7XHJcblx0XHRtYXJnaW46IC0xMi41cHggMCAtMXB4IC0xMi41cHg7XHJcblx0fVxyXG5cclxuXHQucm93LnVuaWZvcm0ucGVyY2VudC0yNSA+ICoge1xyXG5cdFx0cGFkZGluZzogMTIuNXB4IDAgMCAxMi41cHg7XHJcblx0fVxyXG5cclxuXHQucm93LnVuaWZvcm0ucGVyY2VudC0yNSB7XHJcblx0XHRtYXJnaW46IC0xMi41cHggMCAtMXB4IC0xMi41cHg7XHJcblx0fVxyXG5cclxuXHQudTEyLCAudTEyeCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGNsZWFyOiBub25lO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0fVxyXG5cclxuXHQudTExLCAudTExeCB7XHJcblx0XHR3aWR0aDogOTEuNjY2NjY2NjY2NyU7XHJcblx0XHRjbGVhcjogbm9uZTtcclxuXHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdH1cclxuXHJcblx0LnUxMCwgLnUxMHgge1xyXG5cdFx0d2lkdGg6IDgzLjMzMzMzMzMzMzMlO1xyXG5cdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHR9XHJcblxyXG5cdC51OSwgLnU5eCB7XHJcblx0XHR3aWR0aDogNzUlO1xyXG5cdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHR9XHJcblxyXG5cdC51OCwgLnU4eCB7XHJcblx0XHR3aWR0aDogNjYuNjY2NjY2NjY2NyU7XHJcblx0XHRjbGVhcjogbm9uZTtcclxuXHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdH1cclxuXHJcblx0LnU3LCAudTd4IHtcclxuXHRcdHdpZHRoOiA1OC4zMzMzMzMzMzMzJTtcclxuXHRcdGNsZWFyOiBub25lO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0fVxyXG5cclxuXHQudTYsIC51Nngge1xyXG5cdFx0d2lkdGg6IDUwJTtcclxuXHRcdGNsZWFyOiBub25lO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0fVxyXG5cclxuXHQudTUsIC51NXgge1xyXG5cdFx0d2lkdGg6IDQxLjY2NjY2NjY2NjclO1xyXG5cdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHR9XHJcblxyXG5cdC51NCwgLnU0eCB7XHJcblx0XHR3aWR0aDogMzMuMzMzMzMzMzMzMyU7XHJcblx0XHRjbGVhcjogbm9uZTtcclxuXHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdH1cclxuXHJcblx0LnUzLCAudTN4IHtcclxuXHRcdHdpZHRoOiAyNSU7XHJcblx0XHRjbGVhcjogbm9uZTtcclxuXHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdH1cclxuXHJcblx0LnUyLCAudTJ4IHtcclxuXHRcdHdpZHRoOiAxNi42NjY2NjY2NjY3JTtcclxuXHRcdGNsZWFyOiBub25lO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0fVxyXG5cclxuXHQudTEsIC51MXgge1xyXG5cdFx0d2lkdGg6IDguMzMzMzMzMzMzMyU7XHJcblx0XHRjbGVhcjogbm9uZTtcclxuXHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdH1cclxuXHJcblx0LnUxMnggKyAqLFxyXG5cdC51MTF4ICsgKixcclxuXHQudTEweCArICosXHJcblx0LnU5eCArICosXHJcblx0LnU4eCArICosXHJcblx0LnU3eCArICosXHJcblx0LnU2eCArICosXHJcblx0LnU1eCArICosXHJcblx0LnU0eCArICosXHJcblx0LnUzeCArICosXHJcblx0LnUyeCArICosXHJcblx0LnUxeCArICoge1xyXG5cdFx0Y2xlYXI6IGxlZnQ7XHJcblx0fVxyXG5cclxuXHQuLXUxMXUge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDkxLjY2NjY3JTtcclxuXHR9XHJcblxyXG5cdC4tdTEwdSB7XHJcblx0XHRtYXJnaW4tbGVmdDogODMuMzMzMzMlO1xyXG5cdH1cclxuXHJcblx0Li11OXUge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDc1JTtcclxuXHR9XHJcblxyXG5cdC4tdTh1IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiA2Ni42NjY2NyU7XHJcblx0fVxyXG5cclxuXHQuLXU3dSB7XHJcblx0XHRtYXJnaW4tbGVmdDogNTguMzMzMzMlO1xyXG5cdH1cclxuXHJcblx0Li11NnUge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDUwJTtcclxuXHR9XHJcblxyXG5cdC4tdTV1IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiA0MS42NjY2NyU7XHJcblx0fVxyXG5cclxuXHQuLXU0dSB7XHJcblx0XHRtYXJnaW4tbGVmdDogMzMuMzMzMzMlO1xyXG5cdH1cclxuXHJcblx0Li11M3Uge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDI1JTtcclxuXHR9XHJcblxyXG5cdC4tdTJ1IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxNi42NjY2NyU7XHJcblx0fVxyXG5cclxuXHQuLXUxdSB7XHJcblx0XHRtYXJnaW4tbGVmdDogOC4zMzMzMyU7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjgwcHgpIHtcclxuXHJcblx0XHQucm93ID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDQwcHggMCAwIDQwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdyB7XHJcblx0XHRcdG1hcmdpbjogLTQwcHggMCAtMXB4IC00MHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybSA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiA0MHB4IDAgMCA0MHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybSB7XHJcblx0XHRcdG1hcmdpbjogLTQwcHggMCAtMXB4IC00MHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cucGVyY2VudC0yMDAgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogODBweCAwIDAgODBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtMjAwIHtcclxuXHRcdFx0bWFyZ2luOiAtODBweCAwIC0xcHggLTgwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtLnBlcmNlbnQtMjAwID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDgwcHggMCAwIDgwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtLnBlcmNlbnQtMjAwIHtcclxuXHRcdFx0bWFyZ2luOiAtODBweCAwIC0xcHggLTgwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy5wZXJjZW50LTE1MCA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiA2MHB4IDAgMCA2MHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cucGVyY2VudC0xNTAge1xyXG5cdFx0XHRtYXJnaW46IC02MHB4IDAgLTFweCAtNjBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ucGVyY2VudC0xNTAgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogNjBweCAwIDAgNjBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ucGVyY2VudC0xNTAge1xyXG5cdFx0XHRtYXJnaW46IC02MHB4IDAgLTFweCAtNjBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtNTAgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogMjBweCAwIDAgMjBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtNTAge1xyXG5cdFx0XHRtYXJnaW46IC0yMHB4IDAgLTFweCAtMjBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ucGVyY2VudC01MCA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiAyMHB4IDAgMCAyMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybS5wZXJjZW50LTUwIHtcclxuXHRcdFx0bWFyZ2luOiAtMjBweCAwIC0xcHggLTIwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy5wZXJjZW50LTI1ID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDEwcHggMCAwIDEwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy5wZXJjZW50LTI1IHtcclxuXHRcdFx0bWFyZ2luOiAtMTBweCAwIC0xcHggLTEwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtLnBlcmNlbnQtMjUgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogMTBweCAwIDAgMTBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ucGVyY2VudC0yNSB7XHJcblx0XHRcdG1hcmdpbjogLTEwcHggMCAtMXB4IC0xMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC51MTItd2lkZSwgLnUxMngtd2lkZSB7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUxMS13aWRlLCAudTExeC13aWRlIHtcclxuXHRcdFx0d2lkdGg6IDkxLjY2NjY2NjY2NjclO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUxMC13aWRlLCAudTEweC13aWRlIHtcclxuXHRcdFx0d2lkdGg6IDgzLjMzMzMzMzMzMzMlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnU5LXdpZGUsIC51OXgtd2lkZSB7XHJcblx0XHRcdHdpZHRoOiA3NSU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTgtd2lkZSwgLnU4eC13aWRlIHtcclxuXHRcdFx0d2lkdGg6IDY2LjY2NjY2NjY2NjclO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnU3LXdpZGUsIC51N3gtd2lkZSB7XHJcblx0XHRcdHdpZHRoOiA1OC4zMzMzMzMzMzMzJTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51Ni13aWRlLCAudTZ4LXdpZGUge1xyXG5cdFx0XHR3aWR0aDogNTAlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnU1LXdpZGUsIC51NXgtd2lkZSB7XHJcblx0XHRcdHdpZHRoOiA0MS42NjY2NjY2NjY3JTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51NC13aWRlLCAudTR4LXdpZGV7XHJcblx0XHRcdHdpZHRoOiAzMy4zMzMzMzMzMzMzJTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51My13aWRlLCAudTN4LXdpZGUge1xyXG5cdFx0XHR3aWR0aDogMjUlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUyLXdpZGUsIC51Mngtd2lkZSB7XHJcblx0XHRcdHdpZHRoOiAxNi42NjY2NjY2NjY3JTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51MS13aWRlLCAudTF4LXdpZGUge1xyXG5cdFx0XHR3aWR0aDogOC4zMzMzMzMzMzMzJTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51MTJ4LXdpZGUgKyAqLFxyXG5cdFx0LnUxMXgtd2lkZSArICosXHJcblx0XHQudTEweC13aWRlICsgKixcclxuXHRcdC51OXgtd2lkZSArICosXHJcblx0XHQudTh4LXdpZGUgKyAqLFxyXG5cdFx0LnU3eC13aWRlICsgKixcclxuXHRcdC51Nngtd2lkZSArICosXHJcblx0XHQudTV4LXdpZGUgKyAqLFxyXG5cdFx0LnU0eC13aWRlKyAqLFxyXG5cdFx0LnUzeC13aWRlICsgKixcclxuXHRcdC51Mngtd2lkZSArICosXHJcblx0XHQudTF4LXdpZGUgKyAqIHtcclxuXHRcdFx0Y2xlYXI6IGxlZnQ7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11MTEtd2lkZSB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA5MS42NjY2NyU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11MTAtd2lkZSB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA4My4zMzMzMyU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11OS13aWRlIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDc1JTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXU4LXdpZGUge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogNjYuNjY2NjclO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTctd2lkZSB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA1OC4zMzMzMyU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11Ni13aWRlIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDUwJTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXU1LXdpZGUge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogNDEuNjY2NjclO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTQtd2lkZSB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11My13aWRlIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDI1JTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXUyLXdpZGUge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMTYuNjY2NjclO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTEtd2lkZSB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA4LjMzMzMzJTtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuXHJcblx0XHQucm93ID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDMwcHggMCAwIDMwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdyB7XHJcblx0XHRcdG1hcmdpbjogLTMwcHggMCAtMXB4IC0zMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybSA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiAzMHB4IDAgMCAzMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybSB7XHJcblx0XHRcdG1hcmdpbjogLTMwcHggMCAtMXB4IC0zMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cucGVyY2VudC0yMDAgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogNjBweCAwIDAgNjBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtMjAwIHtcclxuXHRcdFx0bWFyZ2luOiAtNjBweCAwIC0xcHggLTYwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtLnBlcmNlbnQtMjAwID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDYwcHggMCAwIDYwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtLnBlcmNlbnQtMjAwIHtcclxuXHRcdFx0bWFyZ2luOiAtNjBweCAwIC0xcHggLTYwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy5wZXJjZW50LTE1MCA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiA0NXB4IDAgMCA0NXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cucGVyY2VudC0xNTAge1xyXG5cdFx0XHRtYXJnaW46IC00NXB4IDAgLTFweCAtNDVweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ucGVyY2VudC0xNTAgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogNDVweCAwIDAgNDVweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ucGVyY2VudC0xNTAge1xyXG5cdFx0XHRtYXJnaW46IC00NXB4IDAgLTFweCAtNDVweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtNTAgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogMTVweCAwIDAgMTVweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtNTAge1xyXG5cdFx0XHRtYXJnaW46IC0xNXB4IDAgLTFweCAtMTVweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ucGVyY2VudC01MCA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiAxNXB4IDAgMCAxNXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybS5wZXJjZW50LTUwIHtcclxuXHRcdFx0bWFyZ2luOiAtMTVweCAwIC0xcHggLTE1cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy5wZXJjZW50LTI1ID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDcuNXB4IDAgMCA3LjVweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtMjUge1xyXG5cdFx0XHRtYXJnaW46IC03LjVweCAwIC0xcHggLTcuNXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybS5wZXJjZW50LTI1ID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDcuNXB4IDAgMCA3LjVweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ucGVyY2VudC0yNSB7XHJcblx0XHRcdG1hcmdpbjogLTcuNXB4IDAgLTFweCAtNy41cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUxMi1ub3JtYWwsIC51MTJ4LW5vcm1hbCB7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUxMS1ub3JtYWwsIC51MTF4LW5vcm1hbCB7XHJcblx0XHRcdHdpZHRoOiA5MS42NjY2NjY2NjY3JTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51MTAtbm9ybWFsLCAudTEweC1ub3JtYWwge1xyXG5cdFx0XHR3aWR0aDogODMuMzMzMzMzMzMzMyU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTktbm9ybWFsLCAudTl4LW5vcm1hbCB7XHJcblx0XHRcdHdpZHRoOiA3NSU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTgtbm9ybWFsLCAudTh4LW5vcm1hbCB7XHJcblx0XHRcdHdpZHRoOiA2Ni42NjY2NjY2NjY3JTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51Ny1ub3JtYWwsIC51N3gtbm9ybWFsIHtcclxuXHRcdFx0d2lkdGg6IDU4LjMzMzMzMzMzMzMlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnU2LW5vcm1hbCwgLnU2eC1ub3JtYWwge1xyXG5cdFx0XHR3aWR0aDogNTAlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnU1LW5vcm1hbCwgLnU1eC1ub3JtYWwge1xyXG5cdFx0XHR3aWR0aDogNDEuNjY2NjY2NjY2NyU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTQtbm9ybWFsLCAudTR4LW5vcm1hbCB7XHJcblx0XHRcdHdpZHRoOiAzMy4zMzMzMzMzMzMzJTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51My1ub3JtYWwsIC51M3gtbm9ybWFsIHtcclxuXHRcdFx0d2lkdGg6IDI1JTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51Mi1ub3JtYWwsIC51Mngtbm9ybWFsIHtcclxuXHRcdFx0d2lkdGg6IDE2LjY2NjY2NjY2NjclO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUxLW5vcm1hbCwgLnUxeC1ub3JtYWwge1xyXG5cdFx0XHR3aWR0aDogOC4zMzMzMzMzMzMzJTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51MTJ4LW5vcm1hbCArICosXHJcblx0XHQudTExeC1ub3JtYWwgKyAqLFxyXG5cdFx0LnUxMHgtbm9ybWFsICsgKixcclxuXHRcdC51OXgtbm9ybWFsICsgKixcclxuXHRcdC51OHgtbm9ybWFsICsgKixcclxuXHRcdC51N3gtbm9ybWFsICsgKixcclxuXHRcdC51Nngtbm9ybWFsICsgKixcclxuXHRcdC51NXgtbm9ybWFsICsgKixcclxuXHRcdC51NHgtbm9ybWFsICsgKixcclxuXHRcdC51M3gtbm9ybWFsICsgKixcclxuXHRcdC51Mngtbm9ybWFsICsgKixcclxuXHRcdC51MXgtbm9ybWFsICsgKiB7XHJcblx0XHRcdGNsZWFyOiBsZWZ0O1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTExLW5vcm1hbCB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA5MS42NjY2NyU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11MTAtbm9ybWFsIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDgzLjMzMzMzJTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXU5LW5vcm1hbCB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA3NSU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11OC1ub3JtYWwge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogNjYuNjY2NjclO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTctbm9ybWFsIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDU4LjMzMzMzJTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXU2LW5vcm1hbCB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA1MCU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11NS1ub3JtYWwge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogNDEuNjY2NjclO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTQtbm9ybWFsIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXUzLW5vcm1hbCB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAyNSU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11Mi1ub3JtYWwge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMTYuNjY2NjclO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTEtbm9ybWFsIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDguMzMzMzMlO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG5cclxuXHRcdC5yb3cgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogMjVweCAwIDAgMjVweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93IHtcclxuXHRcdFx0bWFyZ2luOiAtMjVweCAwIC0xcHggLTI1cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDI1cHggMCAwIDI1cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtIHtcclxuXHRcdFx0bWFyZ2luOiAtMjVweCAwIC0xcHggLTI1cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy5wZXJjZW50LTIwMCA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiA1MHB4IDAgMCA1MHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cucGVyY2VudC0yMDAge1xyXG5cdFx0XHRtYXJnaW46IC01MHB4IDAgLTFweCAtNTBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ucGVyY2VudC0yMDAgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogNTBweCAwIDAgNTBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ucGVyY2VudC0yMDAge1xyXG5cdFx0XHRtYXJnaW46IC01MHB4IDAgLTFweCAtNTBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtMTUwID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDM3LjVweCAwIDAgMzcuNXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cucGVyY2VudC0xNTAge1xyXG5cdFx0XHRtYXJnaW46IC0zNy41cHggMCAtMXB4IC0zNy41cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtLnBlcmNlbnQtMTUwID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDM3LjVweCAwIDAgMzcuNXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybS5wZXJjZW50LTE1MCB7XHJcblx0XHRcdG1hcmdpbjogLTM3LjVweCAwIC0xcHggLTM3LjVweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtNTAgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogMTIuNXB4IDAgMCAxMi41cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy5wZXJjZW50LTUwIHtcclxuXHRcdFx0bWFyZ2luOiAtMTIuNXB4IDAgLTFweCAtMTIuNXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybS5wZXJjZW50LTUwID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDEyLjVweCAwIDAgMTIuNXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybS5wZXJjZW50LTUwIHtcclxuXHRcdFx0bWFyZ2luOiAtMTIuNXB4IDAgLTFweCAtMTIuNXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cucGVyY2VudC0yNSA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiA2LjI1cHggMCAwIDYuMjVweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtMjUge1xyXG5cdFx0XHRtYXJnaW46IC02LjI1cHggMCAtMXB4IC02LjI1cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtLnBlcmNlbnQtMjUgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogNi4yNXB4IDAgMCA2LjI1cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtLnBlcmNlbnQtMjUge1xyXG5cdFx0XHRtYXJnaW46IC02LjI1cHggMCAtMXB4IC02LjI1cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUxMi1uYXJyb3csIC51MTJ4LW5hcnJvdyB7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUxMS1uYXJyb3csIC51MTF4LW5hcnJvdyB7XHJcblx0XHRcdHdpZHRoOiA5MS42NjY2NjY2NjY3JTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51MTAtbmFycm93LCAudTEweC1uYXJyb3cge1xyXG5cdFx0XHR3aWR0aDogODMuMzMzMzMzMzMzMyU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTktbmFycm93LCAudTl4LW5hcnJvdyB7XHJcblx0XHRcdHdpZHRoOiA3NSU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTgtbmFycm93LCAudTh4LW5hcnJvdyB7XHJcblx0XHRcdHdpZHRoOiA2Ni42NjY2NjY2NjY3JTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51Ny1uYXJyb3csIC51N3gtbmFycm93IHtcclxuXHRcdFx0d2lkdGg6IDU4LjMzMzMzMzMzMzMlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnU2LW5hcnJvdywgLnU2eC1uYXJyb3cge1xyXG5cdFx0XHR3aWR0aDogNTAlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnU1LW5hcnJvdywgLnU1eC1uYXJyb3cge1xyXG5cdFx0XHR3aWR0aDogNDEuNjY2NjY2NjY2NyU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTQtbmFycm93LCAudTR4LW5hcnJvdyB7XHJcblx0XHRcdHdpZHRoOiAzMy4zMzMzMzMzMzMzJTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51My1uYXJyb3csIC51M3gtbmFycm93IHtcclxuXHRcdFx0d2lkdGg6IDI1JTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51Mi1uYXJyb3csIC51MngtbmFycm93IHtcclxuXHRcdFx0d2lkdGg6IDE2LjY2NjY2NjY2NjclO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUxLW5hcnJvdywgLnUxeC1uYXJyb3cge1xyXG5cdFx0XHR3aWR0aDogOC4zMzMzMzMzMzMzJTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51MTJ4LW5hcnJvdyArICosXHJcblx0XHQudTExeC1uYXJyb3cgKyAqLFxyXG5cdFx0LnUxMHgtbmFycm93ICsgKixcclxuXHRcdC51OXgtbmFycm93ICsgKixcclxuXHRcdC51OHgtbmFycm93ICsgKixcclxuXHRcdC51N3gtbmFycm93ICsgKixcclxuXHRcdC51NngtbmFycm93ICsgKixcclxuXHRcdC51NXgtbmFycm93ICsgKixcclxuXHRcdC51NHgtbmFycm93ICsgKixcclxuXHRcdC51M3gtbmFycm93ICsgKixcclxuXHRcdC51MngtbmFycm93ICsgKixcclxuXHRcdC51MXgtbmFycm93ICsgKiB7XHJcblx0XHRcdGNsZWFyOiBsZWZ0O1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTExLW5hcnJvdyB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA5MS42NjY2NyU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11MTAtbmFycm93IHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDgzLjMzMzMzJTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXU5LW5hcnJvdyB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA3NSU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11OC1uYXJyb3cge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogNjYuNjY2NjclO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTctbmFycm93IHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDU4LjMzMzMzJTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXU2LW5hcnJvdyB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA1MCU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11NS1uYXJyb3cge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogNDEuNjY2NjclO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTQtbmFycm93IHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXUzLW5hcnJvdyB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAyNSU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11Mi1uYXJyb3cge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMTYuNjY2NjclO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTEtbmFycm93IHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDguMzMzMzMlO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSB7XHJcblxyXG5cdFx0LnJvdyA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiAyMHB4IDAgMCAyMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cge1xyXG5cdFx0XHRtYXJnaW46IC0yMHB4IDAgLTFweCAtMjBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0gPiAqIHtcclxuXHRcdFx0cGFkZGluZzogMjBweCAwIDAgMjBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ge1xyXG5cdFx0XHRtYXJnaW46IC0yMHB4IDAgLTFweCAtMjBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtMjAwID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDQwcHggMCAwIDQwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy5wZXJjZW50LTIwMCB7XHJcblx0XHRcdG1hcmdpbjogLTQwcHggMCAtMXB4IC00MHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybS5wZXJjZW50LTIwMCA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiA0MHB4IDAgMCA0MHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybS5wZXJjZW50LTIwMCB7XHJcblx0XHRcdG1hcmdpbjogLTQwcHggMCAtMXB4IC00MHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cucGVyY2VudC0xNTAgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogMzBweCAwIDAgMzBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtMTUwIHtcclxuXHRcdFx0bWFyZ2luOiAtMzBweCAwIC0xcHggLTMwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtLnBlcmNlbnQtMTUwID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDMwcHggMCAwIDMwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtLnBlcmNlbnQtMTUwIHtcclxuXHRcdFx0bWFyZ2luOiAtMzBweCAwIC0xcHggLTMwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy5wZXJjZW50LTUwID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDEwcHggMCAwIDEwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy5wZXJjZW50LTUwIHtcclxuXHRcdFx0bWFyZ2luOiAtMTBweCAwIC0xcHggLTEwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtLnBlcmNlbnQtNTAgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogMTBweCAwIDAgMTBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ucGVyY2VudC01MCB7XHJcblx0XHRcdG1hcmdpbjogLTEwcHggMCAtMXB4IC0xMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cucGVyY2VudC0yNSA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiA1cHggMCAwIDVweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtMjUge1xyXG5cdFx0XHRtYXJnaW46IC01cHggMCAtMXB4IC01cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtLnBlcmNlbnQtMjUgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogNXB4IDAgMCA1cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtLnBlcmNlbnQtMjUge1xyXG5cdFx0XHRtYXJnaW46IC01cHggMCAtMXB4IC01cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUxMi1tb2JpbGUsIC51MTJ4LW1vYmlsZSB7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUxMS1tb2JpbGUsIC51MTF4LW1vYmlsZSB7XHJcblx0XHRcdHdpZHRoOiA5MS42NjY2NjY2NjY3JTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51MTAtbW9iaWxlLCAudTEweC1tb2JpbGUge1xyXG5cdFx0XHR3aWR0aDogODMuMzMzMzMzMzMzMyU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTktbW9iaWxlLCAudTl4LW1vYmlsZSB7XHJcblx0XHRcdHdpZHRoOiA3NSU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTgtbW9iaWxlLCAudTh4LW1vYmlsZSB7XHJcblx0XHRcdHdpZHRoOiA2Ni42NjY2NjY2NjY3JTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51Ny1tb2JpbGUsIC51N3gtbW9iaWxlIHtcclxuXHRcdFx0d2lkdGg6IDU4LjMzMzMzMzMzMzMlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnU2LW1vYmlsZSwgLnU2eC1tb2JpbGUge1xyXG5cdFx0XHR3aWR0aDogNTAlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnU1LW1vYmlsZSwgLnU1eC1tb2JpbGUge1xyXG5cdFx0XHR3aWR0aDogNDEuNjY2NjY2NjY2NyU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTQtbW9iaWxlLCAudTR4LW1vYmlsZSB7XHJcblx0XHRcdHdpZHRoOiAzMy4zMzMzMzMzMzMzJTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51My1tb2JpbGUsIC51M3gtbW9iaWxlIHtcclxuXHRcdFx0d2lkdGg6IDI1JTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51Mi1tb2JpbGUsIC51MngtbW9iaWxlIHtcclxuXHRcdFx0d2lkdGg6IDE2LjY2NjY2NjY2NjclO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUxLW1vYmlsZSwgLnUxeC1tb2JpbGUge1xyXG5cdFx0XHR3aWR0aDogOC4zMzMzMzMzMzMzJTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51MTJ4LW1vYmlsZSArICosXHJcblx0XHQudTExeC1tb2JpbGUgKyAqLFxyXG5cdFx0LnUxMHgtbW9iaWxlICsgKixcclxuXHRcdC51OXgtbW9iaWxlICsgKixcclxuXHRcdC51OHgtbW9iaWxlICsgKixcclxuXHRcdC51N3gtbW9iaWxlICsgKixcclxuXHRcdC51NngtbW9iaWxlICsgKixcclxuXHRcdC51NXgtbW9iaWxlICsgKixcclxuXHRcdC51NHgtbW9iaWxlICsgKixcclxuXHRcdC51M3gtbW9iaWxlICsgKixcclxuXHRcdC51MngtbW9iaWxlICsgKixcclxuXHRcdC51MXgtbW9iaWxlICsgKiB7XHJcblx0XHRcdGNsZWFyOiBsZWZ0O1xyXG5cdFx0fVxyXG5cclxuXHRcdC51MTEtbW9iaWxlIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDkxLjY2NjY3JTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXUxMC1tb2JpbGUge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogODMuMzMzMzMlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTktbW9iaWxlIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDc1JTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXU4LW1vYmlsZSB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA2Ni42NjY2NyU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11Ny1tb2JpbGUge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogNTguMzMzMzMlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTYtbW9iaWxlIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDUwJTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXU1LW1vYmlsZSB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA0MS42NjY2NyU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11NC1tb2JpbGUge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMzMuMzMzMzMlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTMtbW9iaWxlIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDI1JTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXUyLW1vYmlsZSB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAxNi42NjY2NyU7XHJcblx0XHR9XHJcbjZ1XHJcblx0XHQuLXUxLW1vYmlsZSB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA4LjMzMzMzJTtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuLyogQmFzaWMgKi9cclxuXHJcblx0QC1tcy12aWV3cG9ydCB7XHJcblx0XHR3aWR0aDogZGV2aWNlLXdpZHRoO1xyXG5cdH1cclxuXHJcblx0Ym9keSB7XHJcblx0XHRiYWNrZ3JvdW5kOiAjRjhGOEY4O1xyXG5cdFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDMwMDtcclxuXHRcdGZvbnQtc2l6ZTogMTdwdDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxLjc1ZW07XHJcblx0XHRjb2xvcjogIzg4ODtcclxuXHRcdC13ZWJraXQtdGV4dC1zdHJva2U6IDAuMXB4O1xyXG5cdH1cclxuXHJcblx0XHRib2R5LmlzLWxvYWRpbmcgKiB7XHJcblx0XHRcdC1tb3otdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0XHQtd2Via2l0LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuXHRcdFx0LW1zLXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuXHRcdFx0dHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0XHQtbW96LWFuaW1hdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0XHQtd2Via2l0LWFuaW1hdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0XHQtbXMtYW5pbWF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcblx0XHRcdGFuaW1hdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0fVxyXG5cclxuXHQuZGFyayB7XHJcblx0XHRjb2xvcjogI2FhYTtcclxuXHRcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjUpO1xyXG5cdH1cclxuXHJcblx0aW5wdXQsIHRleHRhcmVhLCBzZWxlY3Qge1xyXG5cdFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDMwMDtcclxuXHRcdGZvbnQtc2l6ZTogMTdwdDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxLjc1ZW07XHJcblx0XHRjb2xvcjogIzg4ODtcclxuXHRcdC13ZWJraXQtdGV4dC1zdHJva2U6IDAuMXB4O1xyXG5cdH1cclxuXHJcblx0aDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcblx0XHRjb2xvcjogIzY2NjtcclxuXHRcdG1hcmdpbjogMCAwIDFlbSAwO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDEwMDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuXHR9XHJcblxyXG5cdGgxIGEsIGgyIGEsIGgzIGEsIGg0IGEsIGg1IGEsIGg2IGEge1xyXG5cdFx0Y29sb3I6IGluaGVyaXQ7XHJcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0fVxyXG5cclxuXHQuZGFyayBoMSwgLmRhcmsgaDIsIC5kYXJrIGgzLCAuZGFyayBoNCwgLmRhcmsgaDUsIC5kYXJrIGg2IHtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdH1cclxuXHJcblx0c3Ryb25nLCBiIHtcclxuXHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0XHRjb2xvcjogaW5oZXJpdDtcclxuXHR9XHJcblxyXG5cdC5kYXJrIHN0cm9uZywgLmRhcmsgYiB7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xyXG5cdH1cclxuXHJcblx0ZW0sIGkge1xyXG5cdFx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG5cdH1cclxuXHJcblx0YSB7XHJcblx0XHQtbW96LXRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblx0XHQtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblx0XHQtbXMtdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHRcdHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblx0XHRjb2xvcjogaW5oZXJpdDtcclxuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdGJvcmRlci1ib3R0b206IGRvdHRlZCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuXHR9XHJcblxyXG5cdFx0YTpob3ZlciB7XHJcblx0XHRcdGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdFx0fVxyXG5cclxuXHQuZGFyayBhIHtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG5cdH1cclxuXHJcblx0XHQuZGFyayBhOmhvdmVyIHtcclxuXHRcdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuXHRcdH1cclxuXHJcblx0c3ViIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHRvcDogMC41ZW07XHJcblx0XHRmb250LXNpemU6IDAuOGVtO1xyXG5cdH1cclxuXHJcblx0c3VwIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHRvcDogLTAuNWVtO1xyXG5cdFx0Zm9udC1zaXplOiAwLjhlbTtcclxuXHR9XHJcblxyXG5cdGhyIHtcclxuXHRcdGJvcmRlcjogMDtcclxuXHRcdGJvcmRlci10b3A6IHNvbGlkIDFweCAjZTZlNmU2O1xyXG5cdFx0bWFyZ2luOiAyZW0gMCAyZW0gMDtcclxuXHR9XHJcblxyXG5cdC5kYXJrIGhyIHtcclxuXHRcdGJvcmRlci10b3AtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuXHR9XHJcblxyXG5cdGJsb2NrcXVvdGUge1xyXG5cdFx0Ym9yZGVyLWxlZnQ6IHNvbGlkIDAuMjVlbSAjZTZlNmU2O1xyXG5cdFx0cGFkZGluZzogMWVtIDAgMWVtIDJlbTtcclxuXHRcdGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHR9XHJcblxyXG5cdC5kYXJrIGJsb2NrcXVvdGUge1xyXG5cdFx0Ym9yZGVyLWxlZnQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuXHR9XHJcblxyXG5cdHAsIHVsLCBvbCwgZGwsIHRhYmxlIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDFlbTtcclxuXHR9XHJcblxyXG5cdHAge1xyXG5cdFx0dGV4dC1hbGlnbjoganVzdGlmeTtcclxuXHR9XHJcblxyXG5cdGhlYWRlciB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxZW07XHJcblx0fVxyXG5cclxuXHRcdGhlYWRlciBoMSwgaGVhZGVyIGgyLCBoZWFkZXIgaDMsIGhlYWRlciBoNCwgaGVhZGVyIGg1LCBoZWFkZXIgaDYge1xyXG5cdFx0XHRtYXJnaW46IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0aGVhZGVyIHAge1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRwYWRkaW5nOiAwLjI1ZW0gMCAwLjVlbSAwO1xyXG5cdFx0fVxyXG5cclxuXHRmb290ZXIge1xyXG5cdFx0cGFkZGluZy10b3A6IDEuNWVtO1xyXG5cdH1cclxuXHJcblx0YnIuY2xlYXIge1xyXG5cdFx0Y2xlYXI6IGJvdGg7XHJcblx0fVxyXG5cclxuXHQuZmVhdHVyZWQge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0XHQuZmVhdHVyZWQgcCB7XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdH1cclxuXHJcbi8qIFNlY3Rpb25zL0FydGljbGUgKi9cclxuXHJcblx0c2VjdGlvbixcclxuXHRhcnRpY2xlIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDNlbTtcclxuXHR9XHJcblxyXG5cdHNlY3Rpb24gPiA6bGFzdC1jaGlsZCxcclxuXHRhcnRpY2xlID4gOmxhc3QtY2hpbGQsXHJcblx0c2VjdGlvbjpsYXN0LWNoaWxkLFxyXG5cdGFydGljbGU6bGFzdC1jaGlsZCB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdH1cclxuXHJcblx0LnJvdyA+IHNlY3Rpb24sXHJcblx0LnJvdyA+IGFydGljbGUge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHR9XHJcblxyXG4vKiBJbWFnZSAqL1xyXG5cclxuXHQuaW1hZ2Uge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0Ym9yZGVyOiAwO1xyXG5cdH1cclxuXHJcblx0XHQuaW1hZ2U6YWZ0ZXIge1xyXG5cdFx0XHRjb250ZW50OiAnJztcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHR0b3A6IDA7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdGJhY2tncm91bmQ6IHVybChcInN0YXRpYy9pbWFnZXMvb3ZlcmxheS5wbmdcIik7XHJcblx0XHR9XHJcblxyXG5cdFx0LmltYWdlIGltZyB7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMC41ZW07XHJcblx0XHR9XHJcblxyXG5cdFx0LmltYWdlLmZlYXR1cmVkIHtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRtYXJnaW46IDAgMCAyZW0gMDtcclxuXHRcdH1cclxuXHJcblx0XHQuaW1hZ2UuZml0IHtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5pbWFnZS5sZWZ0IHtcclxuXHRcdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHRcdG1hcmdpbjogMCAyZW0gMmVtIDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LmltYWdlLmNlbnRlcmVkIHtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdG1hcmdpbjogMCAwIDJlbSAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdFx0LmltYWdlLmNlbnRlcmVkIGltZyB7XHJcblx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRcdFx0d2lkdGg6IGF1dG87XHJcblx0XHRcdH1cclxuXHJcbi8qIExpc3QgKi9cclxuXHJcblx0dWwuZGVmYXVsdCB7XHJcblx0XHRsaXN0LXN0eWxlOiBkaXNjO1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAxZW07XHJcblx0fVxyXG5cclxuXHRcdHVsLmRlZmF1bHQgbGkge1xyXG5cdFx0XHRwYWRkaW5nLWxlZnQ6IDAuNWVtO1xyXG5cdFx0fVxyXG5cclxuXHR1bC5pY29ucyB7XHJcblx0XHRjdXJzb3I6IGRlZmF1bHQ7XHJcblx0fVxyXG5cclxuXHRcdHVsLmljb25zIGxpIHtcclxuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRwYWRkaW5nLWxlZnQ6IDAuNzVlbTtcclxuXHRcdH1cclxuXHJcblx0XHR1bC5pY29ucyBhIHtcclxuXHRcdFx0LW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cdFx0XHQtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblx0XHRcdC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cdFx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdHdpZHRoOiAyLjc1ZW07XHJcblx0XHRcdGhlaWdodDogMi43NWVtO1xyXG5cdFx0XHRsaW5lLWhlaWdodDogMi44ZW07XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0Ym9yZGVyOiAwO1xyXG5cdFx0XHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2U2ZTZlNjtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTAwJTtcclxuXHRcdFx0Y29sb3I6ICNhYWE7XHJcblx0XHR9XHJcblxyXG5cdFx0XHR1bC5pY29ucyBhOmhvdmVyIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDI1KTtcclxuXHRcdFx0fVxyXG5cclxuXHR1bC5tZW51IHtcclxuXHRcdGN1cnNvcjogZGVmYXVsdDtcclxuXHR9XHJcblxyXG5cdFx0dWwubWVudSBsaSB7XHJcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDFlbTtcclxuXHRcdFx0Ym9yZGVyLWxlZnQ6IHNvbGlkIDFweCAjZTZlNmU2O1xyXG5cdFx0XHRwYWRkaW5nOiAwIDAgMCAwLjVlbTtcclxuXHRcdFx0bWFyZ2luOiAwIDAgMCAwLjVlbTtcclxuXHRcdH1cclxuXHJcblx0XHRcdHVsLm1lbnUgbGk6Zmlyc3QtY2hpbGQge1xyXG5cdFx0XHRcdGJvcmRlci1sZWZ0OiAwO1xyXG5cdFx0XHRcdHBhZGRpbmctbGVmdDogMDtcclxuXHRcdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdFx0fVxyXG5cclxuXHR1bC5hY3Rpb25zIHtcclxuXHRcdGN1cnNvcjogZGVmYXVsdDtcclxuXHR9XHJcblxyXG5cdFx0dWwuYWN0aW9ucyBsaSB7XHJcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0bWFyZ2luOiAwIDAgMCAwLjVlbTtcclxuXHRcdH1cclxuXHJcblx0XHRcdHVsLmFjdGlvbnMgbGk6Zmlyc3QtY2hpbGQge1xyXG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdG9sLmRlZmF1bHQge1xyXG5cdFx0bGlzdC1zdHlsZTogZGVjaW1hbDtcclxuXHRcdHBhZGRpbmctbGVmdDogMS4yNWVtO1xyXG5cdH1cclxuXHJcblx0XHRvbC5kZWZhdWx0IGxpIHtcclxuXHRcdFx0cGFkZGluZy1sZWZ0OiAwLjI1ZW07XHJcblx0XHR9XHJcblxyXG4vKiBGb3JtICovXHJcblxyXG5cdGZvcm0gLmFjdGlvbnMge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHR9XHJcblxyXG5cdGZvcm0gbGFiZWwge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0fVxyXG5cclxuXHRmb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG5cdGZvcm0gaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG5cdGZvcm0gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxyXG5cdGZvcm0gc2VsZWN0LFxyXG5cdGZvcm0gLnNlbGVjdCxcclxuXHRmb3JtIHRleHRhcmVhIHtcclxuXHRcdC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cdFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblx0XHQtbXMtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cdFx0dHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cdFx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG5cdFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cdFx0LW1zLWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0XHRhcHBlYXJhbmNlOiBub25lO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2U2ZTZlNjtcclxuXHRcdGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHBhZGRpbmc6IDAuODVlbSAxZW0gMC44NWVtIDFlbTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcclxuXHRcdGJvcmRlcjogMDtcclxuXHR9XHJcblxyXG5cdFx0Zm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyxcclxuXHRcdGZvcm0gaW5wdXRbdHlwZT1cImVtYWlsXCJdOmZvY3VzLFxyXG5cdFx0Zm9ybSBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Zm9jdXMsXHJcblx0XHRmb3JtIHNlbGVjdDpmb2N1cyxcclxuXHRcdGZvcm0gLnNlbGVjdDpmb2N1cyxcclxuXHRcdGZvcm0gdGV4dGFyZWE6Zm9jdXMge1xyXG5cdFx0XHRvdXRsaW5lOiAwO1xyXG5cdFx0XHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2FmZDllMDtcclxuXHRcdFx0YmFja2dyb3VuZDogI2ZjZmNmYztcclxuXHRcdH1cclxuXHJcblx0Zm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuXHRmb3JtIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuXHRmb3JtIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcclxuXHRmb3JtIHNlbGVjdCB7XHJcblx0XHRsaW5lLWhlaWdodDogMS4yNWVtO1xyXG5cdH1cclxuXHJcblx0Zm9ybSB0ZXh0YXJlYSB7XHJcblx0XHRtaW4taGVpZ2h0OiAxM2VtO1xyXG5cdH1cclxuXHJcblx0Zm9ybSBzZWxlY3Qge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHJcblx0XHRmb3JtIHNlbGVjdCBvcHRpb246bm90KDpjaGVja2VkKSB7XHJcblx0XHRcdGNvbG9yOiAjMDAwO1xyXG5cdFx0fVxyXG5cclxuXHRmb3JtIC5zZWxlY3Qge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHRcdG92ZXJmbG93LXg6IGhpZGRlbjtcclxuXHRcdG91dGxpbmU6IDA7XHJcblx0fVxyXG5cclxuXHRcdGZvcm0gLnNlbGVjdCBzZWxlY3Qge1xyXG5cdFx0XHR3aWR0aDogY2FsYygxMDAlICsgMmVtKTtcclxuXHRcdFx0YmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0XHRib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcblx0XHRcdGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHR9XHJcblxyXG5cdFx0XHRmb3JtIC5zZWxlY3Qgc2VsZWN0OjotbW96LWZvY3VzLWlubmVyIHtcclxuXHRcdFx0XHRib3JkZXI6IDA7XHJcblx0XHRcdFx0b3V0bGluZTogMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdGZvcm0gLnNlbGVjdDpiZWZvcmUge1xyXG5cdFx0XHRjb250ZW50OiAnJztcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHR0b3A6IDE1JTtcclxuXHRcdFx0cmlnaHQ6IDFlbTtcclxuXHRcdFx0d2lkdGg6IDEuMjVlbTtcclxuXHRcdFx0aGVpZ2h0OiA3NSU7XHJcblx0XHRcdGJhY2tncm91bmQ6IHVybChcInN0YXRpYy9pbWFnZXMvYXJyb3cuc3ZnXCIpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xyXG5cdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcblx0XHRcdHotaW5kZXg6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9ybSAuc2VsZWN0IHNlbGVjdDo6LW1zLWV4cGFuZCB7XHJcblx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHR9XHJcblxyXG5cdGZvcm0gOjotbW96LWZvY3VzLWlubmVyIHtcclxuXHRcdGJvcmRlcjogMDtcclxuXHR9XHJcblxyXG5cdGZvcm0gLmZvcm1lcml6ZS1wbGFjZWhvbGRlciB7XHJcblx0XHRjb2xvcjogIzU1NSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0Zm9ybSA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG5cdFx0Y29sb3I6ICNhYWEgIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdGZvcm0gOi1tb3otcGxhY2Vob2xkZXIge1xyXG5cdFx0Y29sb3I6ICM1NTUgIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdGZvcm0gOjotbW96LXBsYWNlaG9sZGVyIHtcclxuXHRcdGNvbG9yOiAjNTU1ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHRmb3JtIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG5cdFx0Y29sb3I6ICM1NTUgIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC5kYXJrIGZvcm0gaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcblx0LmRhcmsgZm9ybSBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcblx0LmRhcmsgZm9ybSBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXHJcblx0LmRhcmsgZm9ybSBzZWxlY3QsXHJcblx0LmRhcmsgZm9ybSAuc2VsZWN0LFxyXG5cdC5kYXJrIGZvcm0gdGV4dGFyZWEge1xyXG5cdFx0YmFja2dyb3VuZDogbm9uZTtcclxuXHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHR9XHJcblxyXG5cdFx0LmRhcmsgZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyxcclxuXHRcdC5kYXJrIGZvcm0gaW5wdXRbdHlwZT1cImVtYWlsXCJdOmZvY3VzLFxyXG5cdFx0LmRhcmsgZm9ybSBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Zm9jdXMsXHJcblx0XHQuZGFyayBmb3JtIHNlbGVjdDpmb2N1cyxcclxuXHRcdC5kYXJrIGZvcm0gLnNlbGVjdDpmb2N1cyxcclxuXHRcdC5kYXJrIGZvcm0gdGV4dGFyZWE6Zm9jdXMge1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcblx0XHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZmZmO1xyXG5cdFx0fVxyXG5cclxuXHQuZGFyayBmb3JtIC5zZWxlY3Q6YmVmb3JlIHtcclxuXHRcdGJhY2tncm91bmQ6IHVybChcInN0YXRpYy9pbWFnZXMvZGFyay1hcnJvdy5zdmdcIikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XHJcblx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcblx0fVxyXG5cclxuXHQuZGFyayBmb3JtIC5mb3JtZXJpemUtcGxhY2Vob2xkZXIge1xyXG5cdFx0Y29sb3I6ICNhYWEgIWltcG9ydGFudDtcclxuXHRcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQuZGFyayBmb3JtIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcblx0XHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0LmRhcmsgZm9ybSA6LW1vei1wbGFjZWhvbGRlciB7XHJcblx0XHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0LmRhcmsgZm9ybSA6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG5cdFx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSkgIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC5kYXJrIGZvcm0gOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcblx0XHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcbi8qIFRhYmxlICovXHJcblxyXG5cdHRhYmxlIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHJcblx0XHR0YWJsZS5kZWZhdWx0IHtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0XHR0YWJsZS5kZWZhdWx0IHRib2R5IHRyIHtcclxuXHRcdFx0XHRib3JkZXI6IHNvbGlkIDFweCAjZTZlNmU2O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRhYmxlLmRlZmF1bHQgdGJvZHkgdHI6bnRoLWNoaWxkKDJuKzIpIHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0dGFibGUuZGVmYXVsdCB0ZCB7XHJcblx0XHRcdFx0cGFkZGluZzogMC41ZW0gMWVtIDAuNWVtIDFlbTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGFibGUuZGVmYXVsdCB0aCB7XHJcblx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRcdFx0XHRwYWRkaW5nOiAwLjVlbSAxZW0gMWVtIDFlbTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGFibGUuZGVmYXVsdCB0Zm9vdCB0ZCB7XHJcblx0XHRcdFx0cGFkZGluZy10b3A6IDFlbTtcclxuXHRcdFx0fVxyXG5cclxuXHQuZGFyayB0YWJsZS5kZWZhdWx0IHRib2R5IHRyIHtcclxuXHRcdGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG5cdH1cclxuXHJcblx0XHQuZGFyayB0YWJsZS5kZWZhdWx0IHRib2R5IHRyOm50aC1jaGlsZCgybisyKSB7XHJcblx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuXHRcdH1cclxuXHJcbi8qIEJ1dHRvbiAqL1xyXG5cclxuXHRpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLFxyXG5cdGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXHJcblx0aW5wdXRbdHlwZT1cInJlc2V0XCJdLFxyXG5cdGJ1dHRvbixcclxuXHQuYnV0dG9uIHtcclxuXHRcdC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cdFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblx0XHQtbXMtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cdFx0dHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cdFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0YmFja2dyb3VuZDogIzNkM2QzZDtcclxuXHRcdHBhZGRpbmc6IDAuODVlbSAzZW0gMC44NWVtIDNlbTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcclxuXHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdGJvcmRlcjogMDtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdH1cclxuXHJcblx0XHRpbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmhvdmVyLFxyXG5cdFx0aW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlcixcclxuXHRcdGlucHV0W3R5cGU9XCJyZXNldFwiXTpob3ZlcixcclxuXHRcdGJ1dHRvbjpob3ZlcixcclxuXHRcdC5idXR0b246aG92ZXIge1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjNGY0ZjRmO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlucHV0W3R5cGU9XCJidXR0b25cIl0uYWx0LFxyXG5cdFx0aW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5hbHQsXHJcblx0XHRpbnB1dFt0eXBlPVwicmVzZXRcIl0uYWx0LFxyXG5cdFx0YnV0dG9uLmFsdCxcclxuXHRcdC5idXR0b24uYWx0IHtcclxuXHRcdFx0Y29sb3I6IGluaGVyaXQ7XHJcblx0XHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZTZlNmU2O1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiBub25lO1xyXG5cdFx0fVxyXG5cclxuXHRcdFx0aW5wdXRbdHlwZT1cImJ1dHRvblwiXS5hbHQ6aG92ZXIsXHJcblx0XHRcdGlucHV0W3R5cGU9XCJzdWJtaXRcIl0uYWx0OmhvdmVyLFxyXG5cdFx0XHRpbnB1dFt0eXBlPVwicmVzZXRcIl0uYWx0OmhvdmVyLFxyXG5cdFx0XHRidXR0b24uYWx0OmhvdmVyLFxyXG5cdFx0XHQuYnV0dG9uLmFsdDpob3ZlciB7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAyNSk7XHJcblx0XHRcdH1cclxuXHJcblx0LmRhcmsgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSxcclxuXHQuZGFyayBpbnB1dFt0eXBlPVwic3VibWl0XCJdLFxyXG5cdC5kYXJrIGlucHV0W3R5cGU9XCJyZXNldFwiXSxcclxuXHQuZGFyayBidXR0b24sXHJcblx0LmRhcmsgLmJ1dHRvbiB7XHJcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xyXG5cdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNmZmY7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHR9XHJcblxyXG5cdFx0LmRhcmsgaW5wdXRbdHlwZT1cImJ1dHRvblwiXTpob3ZlcixcclxuXHRcdC5kYXJrIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIsXHJcblx0XHQuZGFyayBpbnB1dFt0eXBlPVwicmVzZXRcIl06aG92ZXIsXHJcblx0XHQuZGFyayBidXR0b246aG92ZXIsXHJcblx0XHQuZGFyayAuYnV0dG9uOmhvdmVyIHtcclxuXHRcdFx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcclxuXHRcdH1cclxuXHJcblx0XHQuZGFyayBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLmFsdCxcclxuXHRcdC5kYXJrIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0uYWx0LFxyXG5cdFx0LmRhcmsgaW5wdXRbdHlwZT1cInJlc2V0XCJdLmFsdCxcclxuXHRcdC5kYXJrIGJ1dHRvbi5hbHQsXHJcblx0XHQuZGFyayAuYnV0dG9uLmFsdCB7XHJcblx0XHRcdGJhY2tncm91bmQ6IG5vbmU7XHJcblx0XHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcblx0XHR9XHJcblxyXG5cdFx0XHQuZGFyayBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLmFsdDpob3ZlcixcclxuXHRcdFx0LmRhcmsgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5hbHQ6aG92ZXIsXHJcblx0XHRcdC5kYXJrIGlucHV0W3R5cGU9XCJyZXNldFwiXS5hbHQ6aG92ZXIsXHJcblx0XHRcdC5kYXJrIGJ1dHRvbi5hbHQ6aG92ZXIsXHJcblx0XHRcdC5kYXJrIC5idXR0b24uYWx0OmhvdmVyIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xyXG5cdFx0XHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZmZmO1xyXG5cdFx0XHR9XHJcblxyXG4vKiBGZWF0dXJlIEljb24gKi9cclxuXHJcblx0LmZlYXR1cmUtaWNvbiB7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogNWVtO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMi43NWVtO1xyXG5cdFx0Y3Vyc29yOiBkZWZhdWx0O1xyXG5cdH1cclxuXHJcblx0XHQuZmVhdHVyZS1pY29uIC5pY29uIHtcclxuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHR3aWR0aDogMmVtO1xyXG5cdFx0XHRoZWlnaHQ6IDJlbTtcclxuXHRcdFx0Zm9udC1zaXplOiA0LjVlbTtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTAwJTtcclxuXHRcdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICM2NjY7XHJcblx0XHRcdGNvbG9yOiAjNjY2O1xyXG5cdFx0XHRsaW5lLWhlaWdodDogMi4xZW07XHJcblx0XHR9XHJcblxyXG5cdFx0LmZlYXR1cmUtaWNvbjpiZWZvcmUge1xyXG5cdFx0XHRjb250ZW50OiAnJztcclxuXHRcdFx0YmFja2dyb3VuZDogIzY2NjtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRib3R0b206IDA7XHJcblx0XHRcdGxlZnQ6IDUwJTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IC0wLjMyNWVtO1xyXG5cdFx0XHR3aWR0aDogMC42NWVtO1xyXG5cdFx0XHRoZWlnaHQ6IDAuNjVlbTtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcblx0XHR9XHJcblxyXG5cdFx0LmZlYXR1cmUtaWNvbjphZnRlciB7XHJcblx0XHRcdGNvbnRlbnQ6ICcnO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGxlZnQ6IDUwJTtcclxuXHRcdFx0Ym90dG9tOiAwLjY1ZW07XHJcblx0XHRcdHdpZHRoOiAxcHg7XHJcblx0XHRcdGhlaWdodDogNC4zNWVtO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjNjY2O1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogLTAuNXB4O1xyXG5cdFx0fVxyXG5cclxuXHQuZGFyayAuZmVhdHVyZS1pY29uIC5pY29uIHtcclxuXHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XHJcblx0XHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0fVxyXG5cclxuXHQuZGFyayAuZmVhdHVyZS1pY29uOmJlZm9yZSwgLmRhcmsgLmZlYXR1cmUtaWNvbjphZnRlciB7XHJcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcblx0fVxyXG5cclxuLyogSWNvbnMgKi9cclxuXHJcblx0Lmljb24ge1xyXG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdH1cclxuXHJcblx0XHQuaWNvbjpiZWZvcmUge1xyXG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuXHRcdFx0Zm9udC1zaXplOiAxLjI1ZW07XHJcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdFx0Zm9udC1zdHlsZTogbm9ybWFsO1xyXG5cdFx0XHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdFx0XHRsaW5lLWhlaWdodDogMTtcclxuXHRcdFx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcblx0XHRcdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcblx0XHR9XHJcblxyXG5cdFx0Lmljb24gPiAubGFiZWwge1xyXG5cdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0fVxyXG5cclxuXHJcbi8qIE1haW4gU2VjdGlvbnMgKi9cclxuXHJcblx0Lm1haW4ge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdH1cclxuXHJcblx0XHQubWFpbiA+IGhlYWRlciB7XHJcblx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0cGFkZGluZzogNWVtIDAgNWVtIDA7XHJcblx0XHRcdG1hcmdpbjogMDtcclxuXHRcdH1cclxuXHJcblx0XHRcdC5tYWluID4gaGVhZGVyIGgyIHtcclxuXHRcdFx0XHRmb250LXNpemU6IDIuMjVlbTtcclxuXHRcdFx0XHRmb250LXdlaWdodDogMTAwO1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5tYWluID4gaGVhZGVyIHAge1xyXG5cdFx0XHRcdG1hcmdpbjogMmVtIDAgMCAwO1xyXG5cdFx0XHRcdHBhZGRpbmc6IDA7XHJcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0Lm1haW4gPiAuY29udGVudCB7XHJcblx0XHRcdHBhZGRpbmc6IDZlbSAwIDZlbSAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdFx0Lm1haW4gPiAuY29udGVudCBoMyB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxLjVlbTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Lm1haW4gPiAuY29udGVudC5kYXJrIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjNDMzO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQubWFpbiA+IC5jb250ZW50LnN0eWxlMSB7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogdXJsKFwic3RhdGljL2ltYWdlcy9iZ3RyLnN2Z1wiKSB0b3AgcmlnaHQgbm8tcmVwZWF0LCB1cmwoXCJzdGF0aWMvaW1hZ2VzL2JnYmwuc3ZnXCIpIGJvdHRvbSBsZWZ0IG5vLXJlcGVhdCwgdXJsKFwic3RhdGljL2ltYWdlcy9iZ2JsLnN2Z1wiKSBib3R0b20gbGVmdCBuby1yZXBlYXQsIHVybChcInN0YXRpYy9pbWFnZXMvb3ZlcmxheS5wbmdcIiksIGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2IzOWM2OCwgI2E1NjM2NSwgIzQxMmU0Yyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5tYWluID4gLmNvbnRlbnQuc3R5bGUyIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoXCJzdGF0aWMvaW1hZ2VzL2JndHIuc3ZnXCIpIHRvcCByaWdodCBuby1yZXBlYXQsIHVybChcInN0YXRpYy9pbWFnZXMvYmdibC5zdmdcIikgYm90dG9tIGxlZnQgbm8tcmVwZWF0LCB1cmwoXCJzdGF0aWMvaW1hZ2VzL292ZXJsYXkucG5nXCIpLCBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMzODQ5NTUsICM2NTUzNjEsICM4NTUwNWYpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQubWFpbiA+IC5jb250ZW50LnN0eWxlMyB7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogdXJsKFwic3RhdGljL2ltYWdlcy9iZ3RyLnN2Z1wiKSB0b3AgcmlnaHQgbm8tcmVwZWF0LCB1cmwoXCJzdGF0aWMvaW1hZ2VzL2JnYmwuc3ZnXCIpIGJvdHRvbSBsZWZ0IG5vLXJlcGVhdCwgdXJsKFwic3RhdGljL2ltYWdlcy9vdmVybGF5LnBuZ1wiKSwgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNWY3OTZiLCAjM2E0ZTU5LCAjMmYzOTRlKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Lm1haW4gPiAuY29udGVudC5zdHlsZTQge1xyXG5cdFx0XHRcdHBhZGRpbmctdG9wOiAwO1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRcdH1cclxuXHJcbi8qIEZvb3RlciAqL1xyXG5cclxuXHQjZm9vdGVyIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDRlbSAwIDhlbSAwO1xyXG5cdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAxcHggMCAwICNlNmU2ZTY7XHJcblx0fVxyXG5cclxuXHRcdCNmb290ZXIgLmNvcHlyaWdodCB7XHJcblx0XHRcdG1hcmdpbi10b3A6IDNlbTtcclxuXHRcdFx0Zm9udC1zaXplOiAwLjhlbTtcclxuXHRcdFx0Y29sb3I6ICNhYWE7XHJcblx0XHR9XHJcblxyXG5cdFx0XHQjZm9vdGVyIC5jb3B5cmlnaHQgYSB7XHJcblx0XHRcdFx0Y29sb3I6IGluaGVyaXQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHQjZm9vdGVyIHVsLmljb25zIGEge1xyXG5cdFx0XHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2Q2ZDZkNjtcclxuXHRcdH1cclxuXHJcbi8qIFdpZGUgKi9cclxuXHJcblx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY4MHB4KSB7XHJcblxyXG5cdFx0LyogQmFzaWMgKi9cclxuXHJcblx0XHRcdGJvZHksIGlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0IHtcclxuXHRcdFx0XHRmb250LXNpemU6IDE1cHQ7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuNzVlbTtcclxuXHRcdFx0fVxyXG5cclxuXHR9XHJcblxyXG4vKiBOb3JtYWwgKi9cclxuXHJcblx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcblxyXG5cdFx0LyogQmFzaWMgKi9cclxuXHJcblx0XHRcdGJvZHksIGlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0IHtcclxuXHRcdFx0XHRmb250LXNpemU6IDEzcHQ7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuNjVlbTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdC8qIEZlYXR1cmUgSWNvbiAqL1xyXG5cclxuXHRcdFx0LmZlYXR1cmUtaWNvbiB7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMmVtO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0LyogSGVhZGVyICovXHJcblxyXG5cdFx0XHQjaGVhZGVyIHtcclxuXHRcdFx0XHRwYWRkaW5nOiAxMmVtIDAgMTJlbSAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0LyogTWFpbiBTZWN0aW9ucyAqL1xyXG5cclxuXHRcdFx0Lm1haW4gPiBoZWFkZXIge1xyXG5cdFx0XHRcdHBhZGRpbmc6IDRlbSAwIDRlbSAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQubWFpbiA+IC5jb250ZW50IHtcclxuXHRcdFx0XHRwYWRkaW5nOiA0ZW0gMCA0ZW0gMDtcclxuXHRcdFx0fVxyXG5cclxuXHR9XHJcblxyXG4vKiBOYXJyb3cgKi9cclxuXHJcblx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcblxyXG5cdFx0LyogQmFzaWMgKi9cclxuXHJcblx0XHRcdGhlYWRlciwgZm9vdGVyLCBoMiwgaDMsIGg0LCBoNSwgaDYsIGhlYWRlciA+IHAge1xyXG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdC8qIFNlY3Rpb25zL0FydGljbGUgKi9cclxuXHJcblx0XHRcdHNlY3Rpb24sIGFydGljbGUge1xyXG5cdFx0XHRcdG1hcmdpbjogMCAwIDIuNWVtIDAgIWltcG9ydGFudDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LnJvdyA+IHNlY3Rpb24sIC5yb3cgPiBhcnRpY2xlIHtcclxuXHRcdFx0XHRtYXJnaW46IDAgMCAyLjVlbSAwICFpbXBvcnRhbnQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHQvKiBUYWJsZSAqL1xyXG5cclxuXHRcdFx0LnRhYmxlLXdyYXBwZXIge1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdG92ZXJmbG93LXg6IHNjcm9sbDtcclxuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDFweDtcclxuXHRcdFx0XHQtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcblx0XHRcdH1cclxuXHJcblx0XHQvKiBMaXN0ICovXHJcblxyXG5cdFx0XHR1bC5hY3Rpb25zIHtcclxuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdH1cclxuXHJcblx0XHQvKiBIZWFkZXIgKi9cclxuXHJcblx0XHRcdCNoZWFkZXIge1xyXG5cdFx0XHRcdG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdHBhZGRpbmc6IDhlbSAyZW0gOGVtIDJlbTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0XHQjaGVhZGVyIGhlYWRlciBwIHtcclxuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDFlbTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdCNoZWFkZXIgZm9vdGVyIHtcclxuXHRcdFx0XHRcdHBhZGRpbmctdG9wOiAxLjI1ZW07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdC8qIE1haW4gU2VjdGlvbnMgKi9cclxuXHJcblx0XHRcdC5tYWluIHtcclxuXHRcdFx0XHRtYXJnaW46IDAgIWltcG9ydGFudDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0XHQubWFpbiA+IGhlYWRlciB7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAzLjVlbSAyZW0gMy41ZW0gMmVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQubWFpbiA+IGhlYWRlciBoMiB7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS44NWVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5tYWluID4gaGVhZGVyIGJyIHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQubWFpbiA+IGhlYWRlciBwIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAxLjVlbSAwIDAgMDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Lm1haW4gPiAuY29udGVudCB7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAzLjVlbSAyMHB4IDMuNWVtIDIwcHg7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5tYWluID4gLmNvbnRlbnQgPiAuY29udGFpbmVyID4gOmxhc3QtY2hpbGQge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0LyogRm9vdGVyICovXHJcblxyXG5cdFx0XHQjZm9vdGVyIHtcclxuXHRcdFx0XHRtYXJnaW46IDAgIWltcG9ydGFudDtcclxuXHRcdFx0XHRwYWRkaW5nOiAzZW0gMCAzZW0gMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0XHQjZm9vdGVyIC5jb3B5cmlnaHQge1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMmVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0fVxyXG5cclxuLyogTW9iaWxlICovXHJcblxyXG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSB7XHJcblxyXG5cdFx0LyogQmFzaWMgKi9cclxuXHJcblx0XHRcdGJvZHksIGlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0IHtcclxuXHRcdFx0XHRmb250LXNpemU6IDExcHQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHQvKiBTZWN0aW9ucy9BcnRpY2xlICovXHJcblxyXG5cdFx0XHRzZWN0aW9uLCBhcnRpY2xlIHtcclxuXHRcdFx0XHRtYXJnaW46IDAgMCAxLjVlbSAwICFpbXBvcnRhbnQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5yb3cgPiBzZWN0aW9uLCAucm93ID4gYXJ0aWNsZSB7XHJcblx0XHRcdFx0bWFyZ2luOiAwIDAgMS41ZW0gMCAhaW1wb3J0YW50O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0LyogQnV0dG9uICovXHJcblxyXG5cdFx0XHQuYnV0dG9uIHtcclxuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDA7XHJcblx0XHRcdFx0cGFkZGluZy1yaWdodDogMDtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRtYXgtd2lkdGg6IDMwMHB4O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0LyogTGlzdCAqL1xyXG5cclxuXHRcdFx0dWwuaWNvbnMgbGkge1xyXG5cdFx0XHRcdHBhZGRpbmctbGVmdDogMC4zNWVtO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR1bC5hY3Rpb25zIGxpIHtcclxuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRtYXJnaW46IDFlbSAwIDFlbSAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR1bC5tZW51IGxpIHtcclxuXHRcdFx0XHRib3JkZXI6IDA7XHJcblx0XHRcdFx0cGFkZGluZzogMDtcclxuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRtYXJnaW46IDFlbSAwIDFlbSAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0LyogSGVhZGVyICovXHJcblxyXG5cdFx0XHQjaGVhZGVyIHtcclxuXHRcdFx0XHRwYWRkaW5nOiA2ZW0gMjBweCA2ZW0gMjBweDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0XHQjaGVhZGVyID4gaGVhZGVyIHtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDAgMWVtIDAgMWVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHQvKiBNYWluIFNlY3Rpb25zICovXHJcblxyXG5cdFx0XHQubWFpbiA+IGhlYWRlciB7XHJcblx0XHRcdFx0cGFkZGluZzogM2VtIDIwcHggM2VtIDIwcHg7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdFx0Lm1haW4gPiBoZWFkZXIgaDIge1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxLjVlbTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQubWFpbiA+IC5jb250ZW50IHtcclxuXHRcdFx0XHRwYWRkaW5nOiAzZW0gMjBweCAzZW0gMjBweDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0XHQubWFpbiA+IC5jb250ZW50IGgzIHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4yNWVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0fVxyXG4gICAgYH08L3N0eWxlPlxyXG4pIl19 */\n/*@ sourceURL=components\\styles-jsx\\main_css.js */"
	});
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHN0eWxlcy1qc3hcXG1haW5fY3NzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7a0JBQWUsWUFBQTs7V0FBQTtPQUFBO0FBQUE7QUFBZiIsImZpbGUiOiJtYWluX2Nzcy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9QYXZpbGlvbi9Eb2N1bWVudHMvUHJveWVjdG9zL1dlYkFwcFJpb0RhbnRhIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Pavilion\\Documents\\Proyectos\\WebAppRioDanta\\components\\styles-jsx\\main_css.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Pavilion\\Documents\\Proyectos\\WebAppRioDanta\\components\\styles-jsx\\main_css.js"); } } })();

/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(381)


/***/ })
],[391]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzPzFjNzkwZjAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanM/MWM3OTBmMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcz8xYzc5MGYwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzPzFjNzkwZjAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanM/MWM3OTBmMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcz83ZDk0Mjk3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanM/N2Q5NDI5NyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcz83ZDk0Mjk3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzPzdkOTQyOTciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzPzdkOTQyOTciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcz83ZDk0Mjk3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzPzdkOTQyOTciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzPzdkOTQyOTciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanM/N2Q5NDI5NyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcz83ZDk0Mjk3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanM/N2Q5NDI5NyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzPzdkOTQyOTciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzPzdkOTQyOTciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanM/N2Q5NDI5NyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanM/N2Q5NDI5NyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzPzdkOTQyOTciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcz83ZDk0Mjk3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzPzdkOTQyOTciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanM/NWY1ZjNkYyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanM/NWY1ZjNkYyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanM/NWY1ZjNkYyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcz81ZjVmM2RjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzPzVmNWYzZGMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzPzVmNWYzZGMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzPzVmNWYzZGMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanM/NWY1ZjNkYyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qcz81ZjVmM2RjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcz81ZjVmM2RjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanM/NWY1ZjNkYyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvd2FybmluZy5qcz81ZjVmM2RjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcz81ZjVmM2RjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcz81ZjVmM2RjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanM/NWY1ZjNkYyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcz81ZjVmM2RjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcz81ZjVmM2RjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcz81ZjVmM2RjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzPzVmNWYzZGMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzP2IxZGM3OGMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcz9iMWRjNzhjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanM/YjFkYzc4YyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanM/YjFkYzc4YyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanM/YjFkYzc4YyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanM/YjFkYzc4YyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanM/YjFkYzc4YyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzP2IxZGM3OGMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzP2IxZGM3OGMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcz9iMWRjNzhjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzP2IxZGM3OGMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcz9iMWRjNzhjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzP2IxZGM3OGMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanM/YjFkYzc4YyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcz9iMWRjNzhjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanM/YjFkYzc4YyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzP2IxZGM3OGMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcz9iMWRjNzhjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcz9iMWRjNzhjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzP2IxZGM3OGMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcz9iMWRjNzhjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanM/YjFkYzc4YyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzP2IxZGM3OGMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzP2IxZGM3OGMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL192YWxpZGF0ZS1jb2xsZWN0aW9uLmpzP2IxZGM3OGMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzP2IxZGM3OGMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanM/YjFkYzc4YyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanM/YjFkYzc4YyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanM/YjFkYzc4YyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzP2IxZGM3OGMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3IuanM/YjFkYzc4YyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmctZXMzL2luZGV4LmpzP2IxZGM3OGMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzP2IxZGM3OGMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5T2JqZWN0LmpzP2IxZGM3OGMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanM/YjFkYzc4YyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzP2UwOGQzYmQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzP2UwOGQzYmQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcz9lMDhkM2JkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanM/ZTA4ZDNiZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzP2UwOGQzYmQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanM/ZTA4ZDNiZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmctZXMzL2RlY29kZS5qcz9lMDhkM2JkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xdWVyeXN0cmluZy1lczMvZW5jb2RlLmpzP2UwOGQzYmQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzP2UwOGQzYmQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzP2UwOGQzYmQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzP2UwOGQzYmQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcz9lMDhkM2JkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanM/ZTA4ZDNiZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qcz9lMDhkM2JkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzP2UwOGQzYmQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanM/ZTA4ZDNiZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcz9lMDhkM2JkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzP2UwOGQzYmQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanM/ZTA4ZDNiZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcz9lMDhkM2JkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzP2UwOGQzYmQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcz9lMDhkM2JkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanM/ZTA4ZDNiZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzP2UwOGQzYmQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qcz9lMDhkM2JkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzP2UwOGQzYmQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzP2UwOGQzYmQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzP2UwOGQzYmQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzP2UwOGQzYmQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcz9lMDhkM2JkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ub2RlLWxpYnMtYnJvd3Nlci9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzP2UwOGQzYmQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2xsZWN0aW9uLXN0cm9uZy5qcz9lMDhkM2JkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi5qcz9lMDhkM2JkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktbWV0aG9kcy5qcz9lMDhkM2JkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jcmVhdGUuanM/ZTA4ZDNiZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3IuanM/ZTA4ZDNiZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvbGxlY3Rpb24tdG8tanNvbi5qcz80ZGNlNmY5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktZnJvbS1pdGVyYWJsZS5qcz80ZGNlNmY5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LWNvbGxlY3Rpb24tb2YuanM/NGRjZTZmOSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1jb2xsZWN0aW9uLWZyb20uanM/NGRjZTZmOSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzPzRkY2U2ZjkiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qcz84NThiMGZmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanM/ODU4YjBmZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qcz84NThiMGZmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci5qcz84NThiMGZmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanM/ODU4YjBmZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlLmpzPzg1OGIwZmYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuaXMtaXRlcmFibGUuanM/ODU4YjBmZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGVkLWpzeC9kaXN0L3N0eWxlLmpzPzg1OGIwZmYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9tYXAuanM/ODU4YjBmZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL21hcC5qcz84NThiMGZmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYubWFwLmpzPzg1OGIwZmYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5tYXAudG8tanNvbi5qcz9iNTU0ZWU4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcubWFwLm9mLmpzP2I1NTRlZTgiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5tYXAuZnJvbS5qcz9iNTU0ZWU4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZWQtanN4L2Rpc3Qvc3R5bGVzaGVldC1yZWdpc3RyeS5qcz9iNTU0ZWU4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHJpbmctaGFzaC9pbmRleC5qcz9iNTU0ZWU4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZWQtanN4L2Rpc3QvbGliL3N0eWxlc2hlZXQuanM/YjU1NGVlOCIsIndlYnBhY2s6Ly8vLi9wYWdlcz9iNTU0ZWU4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzc4NWRkODAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdHlsZXMtanN4L2hlYWRlcl9jc3MuanM/Nzg1ZGQ4MCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlY3Rpb25PbmUuanM/Nzg1ZGQ4MCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlcy1qc3gvbWFpbl9jc3MuanM/Nzg1ZGQ4MCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGVkLWpzeC9zdHlsZS5qcz83ODVkZDgwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjUuMycgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgSVNfV1JBUCA9IHR5cGUgJiAkZXhwb3J0Llc7XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXTtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBrZXksIG93biwgb3V0O1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmIChvd24gJiYga2V5IGluIGV4cG9ydHMpIGNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24gKEMpIHtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBDKSB7XG4gICAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQygpO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZiAoSVNfUFJPVE8pIHtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZiAodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSkgaGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBCUkVBSyA9IHt9O1xudmFyIFJFVFVSTiA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKSB7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKTtcbiAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYgKGlzQXJyYXlJdGVyKGl0ZXJGbikpIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgRE9NSXRlcmFibGVzID0gKCdDU1NSdWxlTGlzdCxDU1NTdHlsZURlY2xhcmF0aW9uLENTU1ZhbHVlTGlzdCxDbGllbnRSZWN0TGlzdCxET01SZWN0TGlzdCxET01TdHJpbmdMaXN0LCcgK1xuICAnRE9NVG9rZW5MaXN0LERhdGFUcmFuc2Zlckl0ZW1MaXN0LEZpbGVMaXN0LEhUTUxBbGxDb2xsZWN0aW9uLEhUTUxDb2xsZWN0aW9uLEhUTUxGb3JtRWxlbWVudCxIVE1MU2VsZWN0RWxlbWVudCwnICtcbiAgJ01lZGlhTGlzdCxNaW1lVHlwZUFycmF5LE5hbWVkTm9kZU1hcCxOb2RlTGlzdCxQYWludFJlcXVlc3RMaXN0LFBsdWdpbixQbHVnaW5BcnJheSxTVkdMZW5ndGhMaXN0LFNWR051bWJlckxpc3QsJyArXG4gICdTVkdQYXRoU2VnTGlzdCxTVkdQb2ludExpc3QsU1ZHU3RyaW5nTGlzdCxTVkdUcmFuc2Zvcm1MaXN0LFNvdXJjZUJ1ZmZlckxpc3QsU3R5bGVTaGVldExpc3QsVGV4dFRyYWNrQ3VlTGlzdCwnICtcbiAgJ1RleHRUcmFja0xpc3QsVG91Y2hMaXN0Jykuc3BsaXQoJywnKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBET01JdGVyYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBET01JdGVyYWJsZXNbaV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZiAocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogXG4gKi9cblxuZnVuY3Rpb24gbWFrZUVtcHR5RnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGFyZztcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW5kIGRpc2NhcmRzIGlucHV0czsgaXQgaGFzIG5vIHNpZGUgZWZmZWN0cy4gVGhpcyBpc1xuICogcHJpbWFyaWx5IHVzZWZ1bCBpZGlvbWF0aWNhbGx5IGZvciBvdmVycmlkYWJsZSBmdW5jdGlvbiBlbmRwb2ludHMgd2hpY2hcbiAqIGFsd2F5cyBuZWVkIHRvIGJlIGNhbGxhYmxlLCBzaW5jZSBKUyBsYWNrcyBhIG51bGwtY2FsbCBpZGlvbSBhbGEgQ29jb2EuXG4gKi9cbnZhciBlbXB0eUZ1bmN0aW9uID0gZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9O1xuXG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zID0gbWFrZUVtcHR5RnVuY3Rpb247XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zRmFsc2UgPSBtYWtlRW1wdHlGdW5jdGlvbihmYWxzZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKHRydWUpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwgPSBtYWtlRW1wdHlGdW5jdGlvbihudWxsKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUaGlzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcztcbn07XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQgPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiBhcmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcHR5RnVuY3Rpb247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpO1xuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCcuL2VtcHR5RnVuY3Rpb24nKTtcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBlbXB0eUZ1bmN0aW9uO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGZvcm1hdCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG5cbiAgd2FybmluZyA9IGZ1bmN0aW9uIHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5pbmRleE9mKCdGYWlsZWQgQ29tcG9zaXRlIHByb3BUeXBlOiAnKSA9PT0gMCkge1xuICAgICAgcmV0dXJuOyAvLyBJZ25vcmUgQ29tcG9zaXRlQ29tcG9uZW50IHByb3B0eXBlIGNoZWNrLlxuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZy5hcHBseSh1bmRlZmluZWQsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvd2FybmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICghQlVHR1kgJiYgJG5hdGl2ZSkgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSkgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAoKHR5cGVvZiBjYWxsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShjYWxsKSkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsInZhciBNRVRBID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHNldERlc2MgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGlkID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbiAoaXQpIHtcbiAgc2V0RGVzYyhpdCwgTUVUQSwgeyB2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gfSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKSBzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogTUVUQSxcbiAgTkVFRDogZmFsc2UsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWs6IGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKTtcblxudmFyIF9zZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY3JlYXRlID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2NyZWF0ZVwiKTtcblxudmFyIF9jcmVhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlKTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArICh0eXBlb2Ygc3VwZXJDbGFzcyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoc3VwZXJDbGFzcykpKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9ICgwLCBfY3JlYXRlMi5kZWZhdWx0KShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0ID8gKDAsIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKSB7XG4gIGlmICghKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwidmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNyYywgc2FmZSkge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSB7XG4gICAgaWYgKHNhZmUgJiYgdGFyZ2V0W2tleV0pIHRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgZWxzZSBoaWRlKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH0gcmV0dXJuIHRhcmdldDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG4gIHZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKHR5cGVTcGVjcy5oYXNPd25Qcm9wZXJ0eSh0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGludmFyaWFudCh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gPT09ICdmdW5jdGlvbicsICclczogJXMgdHlwZSBgJXNgIGlzIGludmFsaWQ7IGl0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tICcgKyAndGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCVzYC4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSk7XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIHdhcm5pbmcoIWVycm9yIHx8IGVycm9yIGluc3RhbmNlb2YgRXJyb3IsICclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvcik7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICB3YXJuaW5nKGZhbHNlLCAnRmFpbGVkICVzIHR5cGU6ICVzJXMnLCBsb2NhdGlvbiwgZXJyb3IubWVzc2FnZSwgc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBUWVBFKSB7XG4gIGlmICghaXNPYmplY3QoaXQpIHx8IGl0Ll90ICE9PSBUWVBFKSB0aHJvdyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3ZhbGlkYXRlLWNvbGxlY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGV4ZWMpIHtcbiAgdmFyIGZuID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldO1xuICB2YXIgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24gKCkgeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qc1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDUiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuZGVjb2RlID0gZXhwb3J0cy5wYXJzZSA9IHJlcXVpcmUoJy4vZGVjb2RlJyk7XG5leHBvcnRzLmVuY29kZSA9IGV4cG9ydHMuc3RyaW5naWZ5ID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3F1ZXJ5c3RyaW5nLWVzMy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgT2JqZWN0LmZyZWV6ZShlbXB0eU9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZW1wdHlPYmplY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvZW1wdHlPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyBJZiBvYmouaGFzT3duUHJvcGVydHkgaGFzIGJlZW4gb3ZlcnJpZGRlbiwgdGhlbiBjYWxsaW5nXG4vLyBvYmouaGFzT3duUHJvcGVydHkocHJvcCkgd2lsbCBicmVhay5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2pveWVudC9ub2RlL2lzc3Vlcy8xNzA3XG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHFzLCBzZXAsIGVxLCBvcHRpb25zKSB7XG4gIHNlcCA9IHNlcCB8fCAnJic7XG4gIGVxID0gZXEgfHwgJz0nO1xuICB2YXIgb2JqID0ge307XG5cbiAgaWYgKHR5cGVvZiBxcyAhPT0gJ3N0cmluZycgfHwgcXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHZhciByZWdleHAgPSAvXFwrL2c7XG4gIHFzID0gcXMuc3BsaXQoc2VwKTtcblxuICB2YXIgbWF4S2V5cyA9IDEwMDA7XG4gIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLm1heEtleXMgPT09ICdudW1iZXInKSB7XG4gICAgbWF4S2V5cyA9IG9wdGlvbnMubWF4S2V5cztcbiAgfVxuXG4gIHZhciBsZW4gPSBxcy5sZW5ndGg7XG4gIC8vIG1heEtleXMgPD0gMCBtZWFucyB0aGF0IHdlIHNob3VsZCBub3QgbGltaXQga2V5cyBjb3VudFxuICBpZiAobWF4S2V5cyA+IDAgJiYgbGVuID4gbWF4S2V5cykge1xuICAgIGxlbiA9IG1heEtleXM7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgdmFyIHggPSBxc1tpXS5yZXBsYWNlKHJlZ2V4cCwgJyUyMCcpLFxuICAgICAgICBpZHggPSB4LmluZGV4T2YoZXEpLFxuICAgICAgICBrc3RyLCB2c3RyLCBrLCB2O1xuXG4gICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICBrc3RyID0geC5zdWJzdHIoMCwgaWR4KTtcbiAgICAgIHZzdHIgPSB4LnN1YnN0cihpZHggKyAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAga3N0ciA9IHg7XG4gICAgICB2c3RyID0gJyc7XG4gICAgfVxuXG4gICAgayA9IGRlY29kZVVSSUNvbXBvbmVudChrc3RyKTtcbiAgICB2ID0gZGVjb2RlVVJJQ29tcG9uZW50KHZzdHIpO1xuXG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eShvYmosIGspKSB7XG4gICAgICBvYmpba10gPSB2O1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShvYmpba10pKSB7XG4gICAgICBvYmpba10ucHVzaCh2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tdID0gW29ialtrXSwgdl07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoeHMpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4cykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmctZXMzL2RlY29kZS5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHN0cmluZ2lmeVByaW1pdGl2ZSA9IGZ1bmN0aW9uKHYpIHtcbiAgc3dpdGNoICh0eXBlb2Ygdikge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICByZXR1cm4gdjtcblxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgcmV0dXJuIHYgPyAndHJ1ZScgOiAnZmFsc2UnO1xuXG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIHJldHVybiBpc0Zpbml0ZSh2KSA/IHYgOiAnJztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqLCBzZXAsIGVxLCBuYW1lKSB7XG4gIHNlcCA9IHNlcCB8fCAnJic7XG4gIGVxID0gZXEgfHwgJz0nO1xuICBpZiAob2JqID09PSBudWxsKSB7XG4gICAgb2JqID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG1hcChvYmplY3RLZXlzKG9iaiksIGZ1bmN0aW9uKGspIHtcbiAgICAgIHZhciBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUoaykpICsgZXE7XG4gICAgICBpZiAoaXNBcnJheShvYmpba10pKSB7XG4gICAgICAgIHJldHVybiBtYXAob2JqW2tdLCBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgcmV0dXJuIGtzICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZSh2KSk7XG4gICAgICAgIH0pLmpvaW4oc2VwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBrcyArIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUob2JqW2tdKSk7XG4gICAgICB9XG4gICAgfSkuam9pbihzZXApO1xuXG4gIH1cblxuICBpZiAoIW5hbWUpIHJldHVybiAnJztcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUobmFtZSkpICsgZXEgK1xuICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShvYmopKTtcbn07XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoeHMpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4cykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG5mdW5jdGlvbiBtYXAgKHhzLCBmKSB7XG4gIGlmICh4cy5tYXApIHJldHVybiB4cy5tYXAoZik7XG4gIHZhciByZXMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgIHJlcy5wdXNoKGYoeHNbaV0sIGkpKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufVxuXG52YXIgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIHJlcyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHJlcy5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9xdWVyeXN0cmluZy1lczMvZW5jb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXNJdGVyYWJsZTIgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9pcy1pdGVyYWJsZVwiKTtcblxudmFyIF9pc0l0ZXJhYmxlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzSXRlcmFibGUyKTtcblxudmFyIF9nZXRJdGVyYXRvcjIgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9nZXQtaXRlcmF0b3JcIik7XG5cbnZhciBfZ2V0SXRlcmF0b3IzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0SXRlcmF0b3IyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkge1xuICAgIHZhciBfYXJyID0gW107XG4gICAgdmFyIF9uID0gdHJ1ZTtcbiAgICB2YXIgX2QgPSBmYWxzZTtcbiAgICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2kgPSAoMCwgX2dldEl0ZXJhdG9yMy5kZWZhdWx0KShhcnIpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kID0gdHJ1ZTtcbiAgICAgIF9lID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX2FycjtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9IGVsc2UgaWYgKCgwLCBfaXNJdGVyYWJsZTMuZGVmYXVsdCkoT2JqZWN0KGFycikpKSB7XG4gICAgICByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbiAgICB9XG4gIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiA1IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKSB7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpLCAnT2JqZWN0JywgeyBkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZiB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIi8vIDE5LjEuMi45IE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgJGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldFByb3RvdHlwZU9mJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpIHtcbiAgICByZXR1cm4gJGdldFByb3RvdHlwZU9mKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fd2tzLWV4dCcpLmYoJ2l0ZXJhdG9yJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDExM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDExNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgTUVUQSA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVk7XG52YXIgJGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIHdrc0RlZmluZSA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKTtcbnZhciBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIF9jcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZ09QTkV4dCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpO1xudmFyICRHT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbnZhciAkRFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QRCA9ICRHT1BELmY7XG52YXIgZFAgPSAkRFAuZjtcbnZhciBnT1BOID0gZ09QTkV4dC5mO1xudmFyICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyICRKU09OID0gZ2xvYmFsLkpTT047XG52YXIgX3N0cmluZ2lmeSA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBISURERU4gPSB3a3MoJ19oaWRkZW4nKTtcbnZhciBUT19QUklNSVRJVkUgPSB3a3MoJ3RvUHJpbWl0aXZlJyk7XG52YXIgaXNFbnVtID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPUFN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdFtQUk9UT1RZUEVdO1xudmFyIFVTRV9OQVRJVkUgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkUCh0aGlzLCAnYScsIHsgdmFsdWU6IDcgfSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbiAoaXQsIGtleSwgRCkge1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYgKHByb3RvRGVzYykgZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZiAocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bykgZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKSB7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8pICRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghRC5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhpdCwgSElEREVOKSkgZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pIGl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwgeyBlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKSB7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbCA9IGtleXMubGVuZ3RoO1xuICB2YXIga2V5O1xuICB3aGlsZSAobCA+IGkpICRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApIHtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpIHtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIGl0ID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmIChEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIEQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgdmFyIG5hbWVzID0gZ09QTih0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gIHZhciBJU19PUCA9IGl0ID09PSBPYmplY3RQcm90bztcbiAgdmFyIG5hbWVzID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKSByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmICghVVNFX05BVElWRSkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCkgdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzID09PSBPYmplY3RQcm90bykgJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYgKERFU0NSSVBUT1JTICYmIHNldHRlcikgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0IH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKSB7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBTeW1ib2w6ICRTeW1ib2wgfSk7XG5cbmZvciAodmFyIGVzNlN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaiA9IDA7IGVzNlN5bWJvbHMubGVuZ3RoID4gajspd2tzKGVzNlN5bWJvbHNbaisrXSk7XG5cbmZvciAodmFyIHdlbGxLbm93blN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBrID0gMDsgd2VsbEtub3duU3ltYm9scy5sZW5ndGggPiBrOykgd2tzRGVmaW5lKHdlbGxLbm93blN5bWJvbHNbaysrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioc3ltKSB7XG4gICAgaWYgKCFpc1N5bWJvbChzeW0pKSB0aHJvdyBUeXBlRXJyb3Ioc3ltICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gICAgZm9yICh2YXIga2V5IGluIFN5bWJvbFJlZ2lzdHJ5KSBpZiAoU3ltYm9sUmVnaXN0cnlba2V5XSA9PT0gc3ltKSByZXR1cm4ga2V5O1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoeyBhOiBTIH0pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkge1xuICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICB2YXIgaSA9IDE7XG4gICAgdmFyIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgICRyZXBsYWNlciA9IHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlcGxhY2VyKSAmJiBpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgaWYgKCFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiAkcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMTE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHJlc3VsdCA9IGdldEtleXMoaXQpO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYgKGdldFN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpO1xuICAgIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAoc3ltYm9scy5sZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDExOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDEyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LnNldFByb3RvdHlwZU9mO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgc2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldCB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoTywgcHJvdG8pIHtcbiAgYW5PYmplY3QoTyk7XG4gIGlmICghaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKSB0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbiAodGVzdCwgYnVnZ3ksIHNldCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZiAoYnVnZ3kpIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanNcbi8vIG1vZHVsZSBpZCA9IDEyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCkge1xuICByZXR1cm4gJE9iamVjdC5jcmVhdGUoUCwgRCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDEyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgY3JlYXRlOiByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJykgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMi4wXG4gKiByZWFjdC5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcbnZhciBlbXB0eU9iamVjdCA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5T2JqZWN0Jyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcycpO1xuXG4vLyBUT0RPOiB0aGlzIGlzIHNwZWNpYWwgYmVjYXVzZSBpdCBnZXRzIGltcG9ydGVkIGR1cmluZyBidWlsZC5cblxudmFyIFJlYWN0VmVyc2lvbiA9ICcxNi4yLjAnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sWydmb3InXTtcblxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbFsnZm9yJ10oJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9DQUxMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2xbJ2ZvciddKCdyZWFjdC5jYWxsJykgOiAweGVhYzg7XG52YXIgUkVBQ1RfUkVUVVJOX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2xbJ2ZvciddKCdyZWFjdC5yZXR1cm4nKSA6IDB4ZWFjOTtcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbFsnZm9yJ10oJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2xbJ2ZvciddKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xuXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5cbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIFdBUk5JTkc6IERPIE5PVCBtYW51YWxseSByZXF1aXJlIHRoaXMgbW9kdWxlLlxuICogVGhpcyBpcyBhIHJlcGxhY2VtZW50IGZvciBgaW52YXJpYW50KC4uLilgIHVzZWQgYnkgdGhlIGVycm9yIGNvZGUgc3lzdGVtXG4gKiBhbmQgd2lsbCBfb25seV8gYmUgcmVxdWlyZWQgYnkgdGhlIGNvcnJlc3BvbmRpbmcgYmFiZWwgcGFzcy5cbiAqIEl0IGFsd2F5cyB0aHJvd3MuXG4gKi9cblxuLyoqXG4gKiBGb3JrZWQgZnJvbSBmYmpzL3dhcm5pbmc6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmJqcy9ibG9iL2U2NmJhMjBhZDViZTQzM2ViNTQ0MjNmMmIwOTdkODI5MzI0ZDlkZTYvcGFja2FnZXMvZmJqcy9zcmMvX19mb3Jrc19fL3dhcm5pbmcuanNcbiAqXG4gKiBPbmx5IGNoYW5nZSBpcyB3ZSB1c2UgY29uc29sZS53YXJuIGluc3RlYWQgb2YgY29uc29sZS5lcnJvcixcbiAqIGFuZCBkbyBub3RoaW5nIHdoZW4gJ2NvbnNvbGUnIGlzIG5vdCBzdXBwb3J0ZWQuXG4gKiBUaGlzIHJlYWxseSBzaW1wbGlmaWVzIHRoZSBjb2RlLlxuICogLS0tXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIGxvd1ByaW9yaXR5V2FybmluZyA9IGZ1bmN0aW9uICgpIHt9O1xuXG57XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xuXG4gIGxvd1ByaW9yaXR5V2FybmluZyA9IGZ1bmN0aW9uIChjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBsb3dQcmlvcml0eVdhcm5pbmckMSA9IGxvd1ByaW9yaXR5V2FybmluZztcblxudmFyIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudCA9IHt9O1xuXG5mdW5jdGlvbiB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgY2FsbGVyTmFtZSkge1xuICB7XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBjb25zdHJ1Y3RvciAmJiAoY29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgY29uc3RydWN0b3IubmFtZSkgfHwgJ1JlYWN0Q2xhc3MnO1xuICAgIHZhciB3YXJuaW5nS2V5ID0gY29tcG9uZW50TmFtZSArICcuJyArIGNhbGxlck5hbWU7XG4gICAgaWYgKGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3YXJuaW5nKGZhbHNlLCAnJXMoLi4uKTogQ2FuIG9ubHkgdXBkYXRlIGEgbW91bnRlZCBvciBtb3VudGluZyBjb21wb25lbnQuICcgKyAnVGhpcyB1c3VhbGx5IG1lYW5zIHlvdSBjYWxsZWQgJXMoKSBvbiBhbiB1bm1vdW50ZWQgY29tcG9uZW50LiAnICsgJ1RoaXMgaXMgYSBuby1vcC5cXG5cXG5QbGVhc2UgY2hlY2sgdGhlIGNvZGUgZm9yIHRoZSAlcyBjb21wb25lbnQuJywgY2FsbGVyTmFtZSwgY2FsbGVyTmFtZSwgY29tcG9uZW50TmFtZSk7XG4gICAgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldID0gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgaXMgdGhlIGFic3RyYWN0IEFQSSBmb3IgYW4gdXBkYXRlIHF1ZXVlLlxuICovXG52YXIgUmVhY3ROb29wVXBkYXRlUXVldWUgPSB7XG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3QgdGhpcyBjb21wb3NpdGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHdlIHdhbnQgdG8gdGVzdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtb3VudGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQGZpbmFsXG4gICAqL1xuICBpc01vdW50ZWQ6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICAgKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAgICpcbiAgICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICAgKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAgICpcbiAgICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICAgKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZUZvcmNlVXBkYXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdmb3JjZVVwZGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyBhbGwgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgb3IgYHNldFN0YXRlYCB0byBtdXRhdGUgc3RhdGUuXG4gICAqIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAgICpcbiAgICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAgICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb21wbGV0ZVN0YXRlIE5leHQgc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVSZXBsYWNlU3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY29tcGxldGVTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3JlcGxhY2VTdGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gVGhpcyBvbmx5IGV4aXN0cyBiZWNhdXNlIF9wZW5kaW5nU3RhdGUgaXNcbiAgICogaW50ZXJuYWwuIFRoaXMgcHJvdmlkZXMgYSBtZXJnaW5nIHN0cmF0ZWd5IHRoYXQgaXMgbm90IGF2YWlsYWJsZSB0byBkZWVwXG4gICAqIHByb3BlcnRpZXMgd2hpY2ggaXMgY29uZnVzaW5nLiBUT0RPOiBFeHBvc2UgcGVuZGluZ1N0YXRlIG9yIGRvbid0IHVzZSBpdFxuICAgKiBkdXJpbmcgdGhlIG1lcmdlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gTmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlU2V0U3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnc2V0U3RhdGUnKTtcbiAgfVxufTtcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqL1xuZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gIC8vIFdlIGluaXRpYWxpemUgdGhlIGRlZmF1bHQgdXBkYXRlciBidXQgdGhlIHJlYWwgb25lIGdldHMgaW5qZWN0ZWQgYnkgdGhlXG4gIC8vIHJlbmRlcmVyLlxuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG5Db21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcblxuLyoqXG4gKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIHRvIG11dGF0ZVxuICogc3RhdGUuIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBjYWxscyB0byBgc2V0U3RhdGVgIHdpbGwgcnVuIHN5bmNocm9ub3VzbHksXG4gKiBhcyB0aGV5IG1heSBldmVudHVhbGx5IGJlIGJhdGNoZWQgdG9nZXRoZXIuICBZb3UgY2FuIHByb3ZpZGUgYW4gb3B0aW9uYWxcbiAqIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCB3aGVuIHRoZSBjYWxsIHRvIHNldFN0YXRlIGlzIGFjdHVhbGx5XG4gKiBjb21wbGV0ZWQuXG4gKlxuICogV2hlbiBhIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHRvIHNldFN0YXRlLCBpdCB3aWxsIGJlIGNhbGxlZCBhdCBzb21lIHBvaW50IGluXG4gKiB0aGUgZnV0dXJlIChub3Qgc3luY2hyb25vdXNseSkuIEl0IHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIHVwIHRvIGRhdGVcbiAqIGNvbXBvbmVudCBhcmd1bWVudHMgKHN0YXRlLCBwcm9wcywgY29udGV4dCkuIFRoZXNlIHZhbHVlcyBjYW4gYmUgZGlmZmVyZW50XG4gKiBmcm9tIHRoaXMuKiBiZWNhdXNlIHlvdXIgZnVuY3Rpb24gbWF5IGJlIGNhbGxlZCBhZnRlciByZWNlaXZlUHJvcHMgYnV0IGJlZm9yZVxuICogc2hvdWxkQ29tcG9uZW50VXBkYXRlLCBhbmQgdGhpcyBuZXcgc3RhdGUsIHByb3BzLCBhbmQgY29udGV4dCB3aWxsIG5vdCB5ZXQgYmVcbiAqIGFzc2lnbmVkIHRvIHRoaXMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgb3IgZnVuY3Rpb24gdG9cbiAqICAgICAgICBwcm9kdWNlIG5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBjdXJyZW50IHN0YXRlLlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBzdGF0ZSBpcyB1cGRhdGVkLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAocGFydGlhbFN0YXRlLCBjYWxsYmFjaykge1xuICAhKHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09ICdmdW5jdGlvbicgfHwgcGFydGlhbFN0YXRlID09IG51bGwpID8gaW52YXJpYW50KGZhbHNlLCAnc2V0U3RhdGUoLi4uKTogdGFrZXMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcyB0byB1cGRhdGUgb3IgYSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMuJykgOiB2b2lkIDA7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XG59O1xuXG4vKipcbiAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICpcbiAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICpcbiAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gKlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciB1cGRhdGUgaXMgY29tcGxldGUuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsIGNhbGxiYWNrLCAnZm9yY2VVcGRhdGUnKTtcbn07XG5cbi8qKlxuICogRGVwcmVjYXRlZCBBUElzLiBUaGVzZSBBUElzIHVzZWQgdG8gZXhpc3Qgb24gY2xhc3NpYyBSZWFjdCBjbGFzc2VzIGJ1dCBzaW5jZVxuICogd2Ugd291bGQgbGlrZSB0byBkZXByZWNhdGUgdGhlbSwgd2UncmUgbm90IGdvaW5nIHRvIG1vdmUgdGhlbSBvdmVyIHRvIHRoaXNcbiAqIG1vZGVybiBiYXNlIGNsYXNzLiBJbnN0ZWFkLCB3ZSBkZWZpbmUgYSBnZXR0ZXIgdGhhdCB3YXJucyBpZiBpdCdzIGFjY2Vzc2VkLlxuICovXG57XG4gIHZhciBkZXByZWNhdGVkQVBJcyA9IHtcbiAgICBpc01vdW50ZWQ6IFsnaXNNb3VudGVkJywgJ0luc3RlYWQsIG1ha2Ugc3VyZSB0byBjbGVhbiB1cCBzdWJzY3JpcHRpb25zIGFuZCBwZW5kaW5nIHJlcXVlc3RzIGluICcgKyAnY29tcG9uZW50V2lsbFVubW91bnQgdG8gcHJldmVudCBtZW1vcnkgbGVha3MuJ10sXG4gICAgcmVwbGFjZVN0YXRlOiBbJ3JlcGxhY2VTdGF0ZScsICdSZWZhY3RvciB5b3VyIGNvZGUgdG8gdXNlIHNldFN0YXRlIGluc3RlYWQgKHNlZSAnICsgJ2h0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMzIzNikuJ11cbiAgfTtcbiAgdmFyIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICBsb3dQcmlvcml0eVdhcm5pbmckMShmYWxzZSwgJyVzKC4uLikgaXMgZGVwcmVjYXRlZCBpbiBwbGFpbiBKYXZhU2NyaXB0IFJlYWN0IGNsYXNzZXMuICVzJywgaW5mb1swXSwgaW5mb1sxXSk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIGZvciAodmFyIGZuTmFtZSBpbiBkZXByZWNhdGVkQVBJcykge1xuICAgIGlmIChkZXByZWNhdGVkQVBJcy5oYXNPd25Qcm9wZXJ0eShmbk5hbWUpKSB7XG4gICAgICBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcoZm5OYW1lLCBkZXByZWNhdGVkQVBJc1tmbk5hbWVdKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqL1xuZnVuY3Rpb24gUHVyZUNvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICAvLyBEdXBsaWNhdGVkIGZyb20gQ29tcG9uZW50LlxuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxuICAvLyByZW5kZXJlci5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuZnVuY3Rpb24gQ29tcG9uZW50RHVtbXkoKSB7fVxuQ29tcG9uZW50RHVtbXkucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbnZhciBwdXJlQ29tcG9uZW50UHJvdG90eXBlID0gUHVyZUNvbXBvbmVudC5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50RHVtbXkoKTtcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuY29uc3RydWN0b3IgPSBQdXJlQ29tcG9uZW50O1xuLy8gQXZvaWQgYW4gZXh0cmEgcHJvdG90eXBlIGp1bXAgZm9yIHRoZXNlIG1ldGhvZHMuXG5fYXNzaWduKHB1cmVDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudCA9IHRydWU7XG5cbmZ1bmN0aW9uIEFzeW5jQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIC8vIER1cGxpY2F0ZWQgZnJvbSBDb21wb25lbnQuXG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gIC8vIFdlIGluaXRpYWxpemUgdGhlIGRlZmF1bHQgdXBkYXRlciBidXQgdGhlIHJlYWwgb25lIGdldHMgaW5qZWN0ZWQgYnkgdGhlXG4gIC8vIHJlbmRlcmVyLlxuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG52YXIgYXN5bmNDb21wb25lbnRQcm90b3R5cGUgPSBBc3luY0NvbXBvbmVudC5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50RHVtbXkoKTtcbmFzeW5jQ29tcG9uZW50UHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQXN5bmNDb21wb25lbnQ7XG4vLyBBdm9pZCBhbiBleHRyYSBwcm90b3R5cGUganVtcCBmb3IgdGhlc2UgbWV0aG9kcy5cbl9hc3NpZ24oYXN5bmNDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xuYXN5bmNDb21wb25lbnRQcm90b3R5cGUudW5zdGFibGVfaXNBc3luY1JlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcbmFzeW5jQ29tcG9uZW50UHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IG93bmVyLlxuICpcbiAqIFRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBjb21wb25lbnQgd2hvIHNob3VsZCBvd24gYW55IGNvbXBvbmVudHMgdGhhdCBhcmVcbiAqIGN1cnJlbnRseSBiZWluZyBjb25zdHJ1Y3RlZC5cbiAqL1xudmFyIFJlYWN0Q3VycmVudE93bmVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG5cbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bjtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bjtcblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcbiAgICAgIHdhcm5pbmcoZmFsc2UsICclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vZmIubWUvcmVhY3Qtc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgfVxuICB9O1xuICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG4gICAgICB3YXJuaW5nKGZhbHNlLCAnJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgIH1cbiAgfTtcbiAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIG5vIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAaW50ZXJuYWxcbiAqL1xudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3cgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9O1xuXG4gICAgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7XG4gICAgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pO1xuICAgIC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IG9mIHRoZSBnaXZlbiB0eXBlLlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjcmVhdGVlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWU7XG5cbiAgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuICB2YXIgcHJvcHMgPSB7fTtcblxuICB2YXIga2V5ID0gbnVsbDtcbiAgdmFyIHJlZiA9IG51bGw7XG4gIHZhciBzZWxmID0gbnVsbDtcbiAgdmFyIHNvdXJjZSA9IG51bGw7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgfVxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgc2VsZiA9IGNvbmZpZy5fX3NlbGYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zZWxmO1xuICAgIHNvdXJjZSA9IGNvbmZpZy5fX3NvdXJjZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NvdXJjZTtcbiAgICAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cbiAgICB7XG4gICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkQXJyYXkpO1xuICAgICAgfVxuICAgIH1cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB7XG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIGlmICh0eXBlb2YgcHJvcHMuJCR0eXBlb2YgPT09ICd1bmRlZmluZWQnIHx8IHByb3BzLiQkdHlwZW9mICE9PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVmKSB7XG4gICAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSBmdW5jdGlvbiB0aGF0IHByb2R1Y2VzIFJlYWN0RWxlbWVudHMgb2YgYSBnaXZlbiB0eXBlLlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjcmVhdGVmYWN0b3J5XG4gKi9cblxuXG5mdW5jdGlvbiBjbG9uZUFuZFJlcGxhY2VLZXkob2xkRWxlbWVudCwgbmV3S2V5KSB7XG4gIHZhciBuZXdFbGVtZW50ID0gUmVhY3RFbGVtZW50KG9sZEVsZW1lbnQudHlwZSwgbmV3S2V5LCBvbGRFbGVtZW50LnJlZiwgb2xkRWxlbWVudC5fc2VsZiwgb2xkRWxlbWVudC5fc291cmNlLCBvbGRFbGVtZW50Ll9vd25lciwgb2xkRWxlbWVudC5wcm9wcyk7XG5cbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbi8qKlxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2Nsb25lZWxlbWVudFxuICovXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnQoZWxlbWVudCwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWU7XG5cbiAgLy8gT3JpZ2luYWwgcHJvcHMgYXJlIGNvcGllZFxuICB2YXIgcHJvcHMgPSBfYXNzaWduKHt9LCBlbGVtZW50LnByb3BzKTtcblxuICAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG4gIHZhciBrZXkgPSBlbGVtZW50LmtleTtcbiAgdmFyIHJlZiA9IGVsZW1lbnQucmVmO1xuICAvLyBTZWxmIGlzIHByZXNlcnZlZCBzaW5jZSB0aGUgb3duZXIgaXMgcHJlc2VydmVkLlxuICB2YXIgc2VsZiA9IGVsZW1lbnQuX3NlbGY7XG4gIC8vIFNvdXJjZSBpcyBwcmVzZXJ2ZWQgc2luY2UgY2xvbmVFbGVtZW50IGlzIHVubGlrZWx5IHRvIGJlIHRhcmdldGVkIGJ5IGFcbiAgLy8gdHJhbnNwaWxlciwgYW5kIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXMgcHJvYmFibHkgYSBiZXR0ZXIgaW5kaWNhdG9yIG9mIHRoZVxuICAvLyB0cnVlIG93bmVyLlxuICB2YXIgc291cmNlID0gZWxlbWVudC5fc291cmNlO1xuXG4gIC8vIE93bmVyIHdpbGwgYmUgcHJlc2VydmVkLCB1bmxlc3MgcmVmIGlzIG92ZXJyaWRkZW5cbiAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIC8vIFNpbGVudGx5IHN0ZWFsIHRoZSByZWYgZnJvbSB0aGUgcGFyZW50LlxuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIG93bmVyID0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudDtcbiAgICB9XG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBvdmVycmlkZSBleGlzdGluZyBwcm9wc1xuICAgIHZhciBkZWZhdWx0UHJvcHM7XG4gICAgaWYgKGVsZW1lbnQudHlwZSAmJiBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICBkZWZhdWx0UHJvcHMgPSBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzO1xuICAgIH1cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBpZiAoY29uZmlnW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudChlbGVtZW50LnR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcyk7XG59XG5cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgdmFsaWQgY29tcG9uZW50LlxuICogQGZpbmFsXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IHt9O1xuXG57XG4gIC8vIENvbXBvbmVudCB0aGF0IGlzIGJlaW5nIHdvcmtlZCBvblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjayA9IG51bGw7XG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpbXBsID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2s7XG4gICAgaWYgKGltcGwpIHtcbiAgICAgIHJldHVybiBpbXBsKCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xufVxuXG52YXIgU0VQQVJBVE9SID0gJy4nO1xudmFyIFNVQlNFUEFSQVRPUiA9ICc6JztcblxuLyoqXG4gKiBFc2NhcGUgYW5kIHdyYXAga2V5IHNvIGl0IGlzIHNhZmUgdG8gdXNlIGFzIGEgcmVhY3RpZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gYmUgZXNjYXBlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGVzY2FwZWQga2V5LlxuICovXG5mdW5jdGlvbiBlc2NhcGUoa2V5KSB7XG4gIHZhciBlc2NhcGVSZWdleCA9IC9bPTpdL2c7XG4gIHZhciBlc2NhcGVyTG9va3VwID0ge1xuICAgICc9JzogJz0wJyxcbiAgICAnOic6ICc9MidcbiAgfTtcbiAgdmFyIGVzY2FwZWRTdHJpbmcgPSAoJycgKyBrZXkpLnJlcGxhY2UoZXNjYXBlUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiBlc2NhcGVyTG9va3VwW21hdGNoXTtcbiAgfSk7XG5cbiAgcmV0dXJuICckJyArIGVzY2FwZWRTdHJpbmc7XG59XG5cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cbnZhciBkaWRXYXJuQWJvdXRNYXBzID0gZmFsc2U7XG5cbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5mdW5jdGlvbiBlc2NhcGVVc2VyUHJvdmlkZWRLZXkodGV4dCkge1xuICByZXR1cm4gKCcnICsgdGV4dCkucmVwbGFjZSh1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCwgJyQmLycpO1xufVxuXG52YXIgUE9PTF9TSVpFID0gMTA7XG52YXIgdHJhdmVyc2VDb250ZXh0UG9vbCA9IFtdO1xuZnVuY3Rpb24gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KG1hcFJlc3VsdCwga2V5UHJlZml4LCBtYXBGdW5jdGlvbiwgbWFwQ29udGV4dCkge1xuICBpZiAodHJhdmVyc2VDb250ZXh0UG9vbC5sZW5ndGgpIHtcbiAgICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gdHJhdmVyc2VDb250ZXh0UG9vbC5wb3AoKTtcbiAgICB0cmF2ZXJzZUNvbnRleHQucmVzdWx0ID0gbWFwUmVzdWx0O1xuICAgIHRyYXZlcnNlQ29udGV4dC5rZXlQcmVmaXggPSBrZXlQcmVmaXg7XG4gICAgdHJhdmVyc2VDb250ZXh0LmZ1bmMgPSBtYXBGdW5jdGlvbjtcbiAgICB0cmF2ZXJzZUNvbnRleHQuY29udGV4dCA9IG1hcENvbnRleHQ7XG4gICAgdHJhdmVyc2VDb250ZXh0LmNvdW50ID0gMDtcbiAgICByZXR1cm4gdHJhdmVyc2VDb250ZXh0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICByZXN1bHQ6IG1hcFJlc3VsdCxcbiAgICAgIGtleVByZWZpeDoga2V5UHJlZml4LFxuICAgICAgZnVuYzogbWFwRnVuY3Rpb24sXG4gICAgICBjb250ZXh0OiBtYXBDb250ZXh0LFxuICAgICAgY291bnQ6IDBcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KSB7XG4gIHRyYXZlcnNlQ29udGV4dC5yZXN1bHQgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQua2V5UHJlZml4ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmZ1bmMgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuY29udGV4dCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5jb3VudCA9IDA7XG4gIGlmICh0cmF2ZXJzZUNvbnRleHRQb29sLmxlbmd0aCA8IFBPT0xfU0laRSkge1xuICAgIHRyYXZlcnNlQ29udGV4dFBvb2wucHVzaCh0cmF2ZXJzZUNvbnRleHQpO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0geyFzdHJpbmd9IG5hbWVTb0ZhciBOYW1lIG9mIHRoZSBrZXkgcGF0aCBzbyBmYXIuXG4gKiBAcGFyYW0geyFmdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gaW52b2tlIHdpdGggZWFjaCBjaGlsZCBmb3VuZC5cbiAqIEBwYXJhbSB7Pyp9IHRyYXZlcnNlQ29udGV4dCBVc2VkIHRvIHBhc3MgaW5mb3JtYXRpb24gdGhyb3VnaG91dCB0aGUgdHJhdmVyc2FsXG4gKiBwcm9jZXNzLlxuICogQHJldHVybiB7IW51bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbiBpbiB0aGlzIHN1YnRyZWUuXG4gKi9cbmZ1bmN0aW9uIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCBuYW1lU29GYXIsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgY2hpbGRyZW47XG5cbiAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgIC8vIEFsbCBvZiB0aGUgYWJvdmUgYXJlIHBlcmNlaXZlZCBhcyBudWxsLlxuICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgfVxuXG4gIHZhciBpbnZva2VDYWxsYmFjayA9IGZhbHNlO1xuXG4gIGlmIChjaGlsZHJlbiA9PT0gbnVsbCkge1xuICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgc3dpdGNoIChjaGlsZHJlbi4kJHR5cGVvZikge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ0FMTF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUkVUVVJOX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChpbnZva2VDYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKHRyYXZlcnNlQ29udGV4dCwgY2hpbGRyZW4sXG4gICAgLy8gSWYgaXQncyB0aGUgb25seSBjaGlsZCwgdHJlYXQgdGhlIG5hbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gYW4gYXJyYXlcbiAgICAvLyBzbyB0aGF0IGl0J3MgY29uc2lzdGVudCBpZiB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIGdyb3dzLlxuICAgIG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgKyBnZXRDb21wb25lbnRLZXkoY2hpbGRyZW4sIDApIDogbmFtZVNvRmFyKTtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHZhciBjaGlsZDtcbiAgdmFyIG5leHROYW1lO1xuICB2YXIgc3VidHJlZUNvdW50ID0gMDsgLy8gQ291bnQgb2YgY2hpbGRyZW4gZm91bmQgaW4gdGhlIGN1cnJlbnQgc3VidHJlZS5cbiAgdmFyIG5leHROYW1lUHJlZml4ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiA6IG5hbWVTb0ZhciArIFNVQlNFUEFSQVRPUjtcblxuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldENvbXBvbmVudEtleShjaGlsZCwgaSk7XG4gICAgICBzdWJ0cmVlQ291bnQgKz0gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGQsIG5leHROYW1lLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKGNoaWxkcmVuKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHtcbiAgICAgICAgLy8gV2FybiBhYm91dCB1c2luZyBNYXBzIGFzIGNoaWxkcmVuXG4gICAgICAgIGlmIChpdGVyYXRvckZuID09PSBjaGlsZHJlbi5lbnRyaWVzKSB7XG4gICAgICAgICAgd2FybmluZyhkaWRXYXJuQWJvdXRNYXBzLCAnVXNpbmcgTWFwcyBhcyBjaGlsZHJlbiBpcyB1bnN1cHBvcnRlZCBhbmQgd2lsbCBsaWtlbHkgeWllbGQgJyArICd1bmV4cGVjdGVkIHJlc3VsdHMuIENvbnZlcnQgaXQgdG8gYSBzZXF1ZW5jZS9pdGVyYWJsZSBvZiBrZXllZCAnICsgJ1JlYWN0RWxlbWVudHMgaW5zdGVhZC4lcycsIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpKTtcbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoY2hpbGRyZW4pO1xuICAgICAgdmFyIHN0ZXA7XG4gICAgICB2YXIgaWkgPSAwO1xuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBjaGlsZCA9IHN0ZXAudmFsdWU7XG4gICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRDb21wb25lbnRLZXkoY2hpbGQsIGlpKyspO1xuICAgICAgICBzdWJ0cmVlQ291bnQgKz0gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGQsIG5leHROYW1lLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgYWRkZW5kdW0gPSAnJztcbiAgICAgIHtcbiAgICAgICAgYWRkZW5kdW0gPSAnIElmIHlvdSBtZWFudCB0byByZW5kZXIgYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCB1c2UgYW4gYXJyYXkgJyArICdpbnN0ZWFkLicgKyBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcbiAgICAgIH1cbiAgICAgIHZhciBjaGlsZHJlblN0cmluZyA9ICcnICsgY2hpbGRyZW47XG4gICAgICBpbnZhcmlhbnQoZmFsc2UsICdPYmplY3RzIGFyZSBub3QgdmFsaWQgYXMgYSBSZWFjdCBjaGlsZCAoZm91bmQ6ICVzKS4lcycsIGNoaWxkcmVuU3RyaW5nID09PSAnW29iamVjdCBPYmplY3RdJyA/ICdvYmplY3Qgd2l0aCBrZXlzIHsnICsgT2JqZWN0LmtleXMoY2hpbGRyZW4pLmpvaW4oJywgJykgKyAnfScgOiBjaGlsZHJlblN0cmluZywgYWRkZW5kdW0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJ0cmVlQ291bnQ7XG59XG5cbi8qKlxuICogVHJhdmVyc2VzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCwgYnV0XG4gKiBtaWdodCBhbHNvIGJlIHNwZWNpZmllZCB0aHJvdWdoIGF0dHJpYnV0ZXM6XG4gKlxuICogLSBgdHJhdmVyc2VBbGxDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuLCAuLi4pYFxuICogLSBgdHJhdmVyc2VBbGxDaGlsZHJlbih0aGlzLnByb3BzLmxlZnRQYW5lbENoaWxkcmVuLCAuLi4pYFxuICpcbiAqIFRoZSBgdHJhdmVyc2VDb250ZXh0YCBpcyBhbiBvcHRpb25hbCBhcmd1bWVudCB0aGF0IGlzIHBhc3NlZCB0aHJvdWdoIHRoZVxuICogZW50aXJlIHRyYXZlcnNhbC4gSXQgY2FuIGJlIHVzZWQgdG8gc3RvcmUgYWNjdW11bGF0aW9ucyBvciBhbnl0aGluZyBlbHNlIHRoYXRcbiAqIHRoZSBjYWxsYmFjayBtaWdodCBmaW5kIHJlbGV2YW50LlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgb2JqZWN0LlxuICogQHBhcmFtIHshZnVuY3Rpb259IGNhbGxiYWNrIFRvIGludm9rZSB1cG9uIHRyYXZlcnNpbmcgZWFjaCBjaGlsZC5cbiAqIEBwYXJhbSB7Pyp9IHRyYXZlcnNlQ29udGV4dCBDb250ZXh0IGZvciB0cmF2ZXJzYWwuXG4gKiBAcmV0dXJuIHshbnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuIGluIHRoaXMgc3VidHJlZS5cbiAqL1xuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCAnJywgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgYSBrZXkgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBhIGNvbXBvbmVudCB3aXRoaW4gYSBzZXQuXG4gKlxuICogQHBhcmFtIHsqfSBjb21wb25lbnQgQSBjb21wb25lbnQgdGhhdCBjb3VsZCBjb250YWluIGEgbWFudWFsIGtleS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCB0aGF0IGlzIHVzZWQgaWYgYSBtYW51YWwga2V5IGlzIG5vdCBwcm92aWRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0Q29tcG9uZW50S2V5KGNvbXBvbmVudCwgaW5kZXgpIHtcbiAgLy8gRG8gc29tZSB0eXBlY2hlY2tpbmcgaGVyZSBzaW5jZSB3ZSBjYWxsIHRoaXMgYmxpbmRseS4gV2Ugd2FudCB0byBlbnN1cmVcbiAgLy8gdGhhdCB3ZSBkb24ndCBibG9jayBwb3RlbnRpYWwgZnV0dXJlIEVTIEFQSXMuXG4gIGlmICh0eXBlb2YgY29tcG9uZW50ID09PSAnb2JqZWN0JyAmJiBjb21wb25lbnQgIT09IG51bGwgJiYgY29tcG9uZW50LmtleSAhPSBudWxsKSB7XG4gICAgLy8gRXhwbGljaXQga2V5XG4gICAgcmV0dXJuIGVzY2FwZShjb21wb25lbnQua2V5KTtcbiAgfVxuICAvLyBJbXBsaWNpdCBrZXkgZGV0ZXJtaW5lZCBieSB0aGUgaW5kZXggaW4gdGhlIHNldFxuICByZXR1cm4gaW5kZXgudG9TdHJpbmcoMzYpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoU2luZ2xlQ2hpbGQoYm9va0tlZXBpbmcsIGNoaWxkLCBuYW1lKSB7XG4gIHZhciBmdW5jID0gYm9va0tlZXBpbmcuZnVuYyxcbiAgICAgIGNvbnRleHQgPSBib29rS2VlcGluZy5jb250ZXh0O1xuXG4gIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgYm9va0tlZXBpbmcuY291bnQrKyk7XG59XG5cbi8qKlxuICogSXRlcmF0ZXMgdGhyb3VnaCBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdC5jaGlsZHJlbi5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5mdW5jdGlvbiBmb3JFYWNoQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KG51bGwsIG51bGwsIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hTaW5nbGVDaGlsZCwgdHJhdmVyc2VDb250ZXh0KTtcbiAgcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0KGJvb2tLZWVwaW5nLCBjaGlsZCwgY2hpbGRLZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGJvb2tLZWVwaW5nLnJlc3VsdCxcbiAgICAgIGtleVByZWZpeCA9IGJvb2tLZWVwaW5nLmtleVByZWZpeCxcbiAgICAgIGZ1bmMgPSBib29rS2VlcGluZy5mdW5jLFxuICAgICAgY29udGV4dCA9IGJvb2tLZWVwaW5nLmNvbnRleHQ7XG5cblxuICB2YXIgbWFwcGVkQ2hpbGQgPSBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGJvb2tLZWVwaW5nLmNvdW50KyspO1xuICBpZiAoQXJyYXkuaXNBcnJheShtYXBwZWRDaGlsZCkpIHtcbiAgICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKG1hcHBlZENoaWxkLCByZXN1bHQsIGNoaWxkS2V5LCBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQpO1xuICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICBpZiAoaXNWYWxpZEVsZW1lbnQobWFwcGVkQ2hpbGQpKSB7XG4gICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCxcbiAgICAgIC8vIEtlZXAgYm90aCB0aGUgKG1hcHBlZCkgYW5kIG9sZCBrZXlzIGlmIHRoZXkgZGlmZmVyLCBqdXN0IGFzXG4gICAgICAvLyB0cmF2ZXJzZUFsbENoaWxkcmVuIHVzZWQgdG8gZG8gZm9yIG9iamVjdHMgYXMgY2hpbGRyZW5cbiAgICAgIGtleVByZWZpeCArIChtYXBwZWRDaGlsZC5rZXkgJiYgKCFjaGlsZCB8fCBjaGlsZC5rZXkgIT09IG1hcHBlZENoaWxkLmtleSkgPyBlc2NhcGVVc2VyUHJvdmlkZWRLZXkobWFwcGVkQ2hpbGQua2V5KSArICcvJyA6ICcnKSArIGNoaWxkS2V5KTtcbiAgICB9XG4gICAgcmVzdWx0LnB1c2gobWFwcGVkQ2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIGFycmF5LCBwcmVmaXgsIGZ1bmMsIGNvbnRleHQpIHtcbiAgdmFyIGVzY2FwZWRQcmVmaXggPSAnJztcbiAgaWYgKHByZWZpeCAhPSBudWxsKSB7XG4gICAgZXNjYXBlZFByZWZpeCA9IGVzY2FwZVVzZXJQcm92aWRlZEtleShwcmVmaXgpICsgJy8nO1xuICB9XG4gIHZhciB0cmF2ZXJzZUNvbnRleHQgPSBnZXRQb29sZWRUcmF2ZXJzZUNvbnRleHQoYXJyYXksIGVzY2FwZWRQcmVmaXgsIGZ1bmMsIGNvbnRleHQpO1xuICB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0LCB0cmF2ZXJzZUNvbnRleHQpO1xuICByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdC5jaGlsZHJlbi5tYXBcbiAqXG4gKiBUaGUgcHJvdmlkZWQgbWFwRnVuY3Rpb24oY2hpbGQsIGtleSwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jIFRoZSBtYXAgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgbWFwRnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCBjb250YWluaW5nIHRoZSBvcmRlcmVkIG1hcCBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIHJlc3VsdCwgbnVsbCwgZnVuYywgY29udGV4dCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ291bnQgdGhlIG51bWJlciBvZiBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzXG4gKiBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3QuY2hpbGRyZW4uY291bnRcbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbi5cbiAqL1xuZnVuY3Rpb24gY291bnRDaGlsZHJlbihjaGlsZHJlbiwgY29udGV4dCkge1xuICByZXR1cm4gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwsIG51bGwpO1xufVxuXG4vKipcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3QuY2hpbGRyZW4udG9hcnJheVxuICovXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgcmVzdWx0LCBudWxsLCBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiBhbmQgdmVyaWZpZXMgdGhhdCB0aGVyZVxuICogaXMgb25seSBvbmUgY2hpbGQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdC5jaGlsZHJlbi5vbmx5XG4gKlxuICogVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgYSBzaW5nbGUgY2hpbGQgZ2V0c1xuICogcGFzc2VkIHdpdGhvdXQgYSB3cmFwcGVyLCBidXQgdGhlIHB1cnBvc2Ugb2YgdGhpcyBoZWxwZXIgZnVuY3Rpb24gaXMgdG9cbiAqIGFic3RyYWN0IGF3YXkgdGhlIHBhcnRpY3VsYXIgc3RydWN0dXJlIG9mIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSB7P29iamVjdH0gY2hpbGRyZW4gQ2hpbGQgY29sbGVjdGlvbiBzdHJ1Y3R1cmUuXG4gKiBAcmV0dXJuIHtSZWFjdEVsZW1lbnR9IFRoZSBmaXJzdCBhbmQgb25seSBgUmVhY3RFbGVtZW50YCBjb250YWluZWQgaW4gdGhlXG4gKiBzdHJ1Y3R1cmUuXG4gKi9cbmZ1bmN0aW9uIG9ubHlDaGlsZChjaGlsZHJlbikge1xuICAhaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pID8gaW52YXJpYW50KGZhbHNlLCAnUmVhY3QuQ2hpbGRyZW4ub25seSBleHBlY3RlZCB0byByZWNlaXZlIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgY2hpbGQuJykgOiB2b2lkIDA7XG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxudmFyIGRlc2NyaWJlQ29tcG9uZW50RnJhbWUgPSBmdW5jdGlvbiAobmFtZSwgc291cmNlLCBvd25lck5hbWUpIHtcbiAgcmV0dXJuICdcXG4gICAgaW4gJyArIChuYW1lIHx8ICdVbmtub3duJykgKyAoc291cmNlID8gJyAoYXQgJyArIHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJykgKyAnOicgKyBzb3VyY2UubGluZU51bWJlciArICcpJyA6IG93bmVyTmFtZSA/ICcgKGNyZWF0ZWQgYnkgJyArIG93bmVyTmFtZSArICcpJyA6ICcnKTtcbn07XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUoZmliZXIpIHtcbiAgdmFyIHR5cGUgPSBmaWJlci50eXBlO1xuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWU7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogUmVhY3RFbGVtZW50VmFsaWRhdG9yIHByb3ZpZGVzIGEgd3JhcHBlciBhcm91bmQgYSBlbGVtZW50IGZhY3RvcnlcbiAqIHdoaWNoIHZhbGlkYXRlcyB0aGUgcHJvcHMgcGFzc2VkIHRvIHRoZSBlbGVtZW50LiBUaGlzIGlzIGludGVuZGVkIHRvIGJlXG4gKiB1c2VkIG9ubHkgaW4gREVWIGFuZCBjb3VsZCBiZSByZXBsYWNlZCBieSBhIHN0YXRpYyB0eXBlIGNoZWNrZXIgZm9yIGxhbmd1YWdlc1xuICogdGhhdCBzdXBwb3J0IGl0LlxuICovXG5cbntcbiAgdmFyIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gbnVsbDtcblxuICB2YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcblxuICB2YXIgZ2V0RGlzcGxheU5hbWUgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiAnI2VtcHR5JztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgZWxlbWVudCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiAnI3RleHQnO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LnR5cGU7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50LnR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICAgIHJldHVybiAnUmVhY3QuRnJhZ21lbnQnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZWxlbWVudC50eXBlLmRpc3BsYXlOYW1lIHx8IGVsZW1lbnQudHlwZS5uYW1lIHx8ICdVbmtub3duJztcbiAgICB9XG4gIH07XG5cbiAgdmFyIGdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7XG4gICAgaWYgKGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldERpc3BsYXlOYW1lKGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KTtcbiAgICAgIHZhciBvd25lciA9IGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50Ll9vd25lcjtcbiAgICAgIHN0YWNrICs9IGRlc2NyaWJlQ29tcG9uZW50RnJhbWUobmFtZSwgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQuX3NvdXJjZSwgb3duZXIgJiYgZ2V0Q29tcG9uZW50TmFtZShvd25lcikpO1xuICAgIH1cbiAgICBzdGFjayArPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKSB8fCAnJztcbiAgICByZXR1cm4gc3RhY2s7XG4gIH07XG5cbiAgdmFyIFZBTElEX0ZSQUdNRU5UX1BST1BTID0gbmV3IE1hcChbWydjaGlsZHJlbicsIHRydWVdLCBbJ2tleScsIHRydWVdXSk7XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCk7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShlbGVtZW50UHJvcHMpIHtcbiAgaWYgKGVsZW1lbnRQcm9wcyAhPT0gbnVsbCAmJiBlbGVtZW50UHJvcHMgIT09IHVuZGVmaW5lZCAmJiBlbGVtZW50UHJvcHMuX19zb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBzb3VyY2UgPSBlbGVtZW50UHJvcHMuX19zb3VyY2U7XG4gICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICBpZiAoIWluZm8pIHtcbiAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcbiAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgaW5mbyA9ICdcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDwnICsgcGFyZW50TmFtZSArICc+Lic7XG4gICAgfVxuICB9XG4gIHJldHVybiBpbmZvO1xufVxuXG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuXG4gIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcbiAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgIHJldHVybjtcbiAgfVxuICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlO1xuXG4gIC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuICB2YXIgY2hpbGRPd25lciA9ICcnO1xuICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgIGNoaWxkT3duZXIgPSAnIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tICcgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyKSArICcuJztcbiAgfVxuXG4gIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gZWxlbWVudDtcbiAge1xuICAgIHdhcm5pbmcoZmFsc2UsICdFYWNoIGNoaWxkIGluIGFuIGFycmF5IG9yIGl0ZXJhdG9yIHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLiVzJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lciwgZ2V0U3RhY2tBZGRlbmR1bSgpKTtcbiAgfVxuICBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCA9IG51bGw7XG59XG5cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAgdmFyIGNvbXBvbmVudENsYXNzID0gZWxlbWVudC50eXBlO1xuICBpZiAodHlwZW9mIGNvbXBvbmVudENsYXNzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuYW1lID0gY29tcG9uZW50Q2xhc3MuZGlzcGxheU5hbWUgfHwgY29tcG9uZW50Q2xhc3MubmFtZTtcbiAgdmFyIHByb3BUeXBlcyA9IGNvbXBvbmVudENsYXNzLnByb3BUeXBlcztcbiAgaWYgKHByb3BUeXBlcykge1xuICAgIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gZWxlbWVudDtcbiAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZ2V0U3RhY2tBZGRlbmR1bSk7XG4gICAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBudWxsO1xuICB9IGVsc2UgaWYgKGNvbXBvbmVudENsYXNzLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTtcbiAgICB3YXJuaW5nKGZhbHNlLCAnQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgbmFtZSB8fCAnVW5rbm93bicpO1xuICB9XG4gIGlmICh0eXBlb2YgY29tcG9uZW50Q2xhc3MuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgd2FybmluZyhjb21wb25lbnRDbGFzcy5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQsICdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gIH1cbn1cblxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBmcmFnbWVudDtcblxuICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcylbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICB2YXIga2V5ID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgIGlmICghVkFMSURfRlJBR01FTlRfUFJPUFMuaGFzKGtleSkpIHtcbiAgICAgICAgd2FybmluZyhmYWxzZSwgJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4lcycsIGtleSwgZ2V0U3RhY2tBZGRlbmR1bSgpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3JbJ3JldHVybiddKSB7XG4gICAgICAgIF9pdGVyYXRvclsncmV0dXJuJ10oKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICB3YXJuaW5nKGZhbHNlLCAnSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4lcycsIGdldFN0YWNrQWRkZW5kdW0oKSk7XG4gIH1cblxuICBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIHZhbGlkVHlwZSA9IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N5bWJvbCcgfHwgdHlwZW9mIHR5cGUgPT09ICdudW1iZXInO1xuICAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuICBpZiAoIXZhbGlkVHlwZSkge1xuICAgIHZhciBpbmZvID0gJyc7XG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShwcm9wcyk7XG4gICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICB9IGVsc2Uge1xuICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICB9XG5cbiAgICBpbmZvICs9IGdldFN0YWNrQWRkZW5kdW0oKSB8fCAnJztcblxuICAgIHdhcm5pbmcoZmFsc2UsICdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGUgPT0gbnVsbCA/IHR5cGUgOiB0eXBlb2YgdHlwZSwgaW5mbyk7XG4gIH1cblxuICB2YXIgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG4gIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG4gIGlmICh2YWxpZFR5cGUpIHtcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCB0eXBlKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzeW1ib2wnICYmIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgLy8gTGVnYWN5IGhvb2sgVE9ETzogV2FybiBpZiB0aGlzIGlzIGFjY2Vzc2VkXG4gIHZhbGlkYXRlZEZhY3RvcnkudHlwZSA9IHR5cGU7XG5cbiAge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWxpZGF0ZWRGYWN0b3J5LCAndHlwZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvd1ByaW9yaXR5V2FybmluZyQxKGZhbHNlLCAnRmFjdG9yeS50eXBlIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB0aGUgY2xhc3MgZGlyZWN0bHkgJyArICdiZWZvcmUgcGFzc2luZyBpdCB0byBjcmVhdGVGYWN0b3J5LicpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3R5cGUnLCB7XG4gICAgICAgICAgdmFsdWU6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbGlkYXRlZEZhY3Rvcnk7XG59XG5cbmZ1bmN0aW9uIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uKGVsZW1lbnQsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgbmV3RWxlbWVudCA9IGNsb25lRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgbmV3RWxlbWVudC50eXBlKTtcbiAgfVxuICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbnZhciBSZWFjdCA9IHtcbiAgQ2hpbGRyZW46IHtcbiAgICBtYXA6IG1hcENoaWxkcmVuLFxuICAgIGZvckVhY2g6IGZvckVhY2hDaGlsZHJlbixcbiAgICBjb3VudDogY291bnRDaGlsZHJlbixcbiAgICB0b0FycmF5OiB0b0FycmF5LFxuICAgIG9ubHk6IG9ubHlDaGlsZFxuICB9LFxuXG4gIENvbXBvbmVudDogQ29tcG9uZW50LFxuICBQdXJlQ29tcG9uZW50OiBQdXJlQ29tcG9uZW50LFxuICB1bnN0YWJsZV9Bc3luY0NvbXBvbmVudDogQXN5bmNDb21wb25lbnQsXG5cbiAgRnJhZ21lbnQ6IFJFQUNUX0ZSQUdNRU5UX1RZUEUsXG5cbiAgY3JlYXRlRWxlbWVudDogY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uLFxuICBjbG9uZUVsZW1lbnQ6IGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uLFxuICBjcmVhdGVGYWN0b3J5OiBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24sXG4gIGlzVmFsaWRFbGVtZW50OiBpc1ZhbGlkRWxlbWVudCxcblxuICB2ZXJzaW9uOiBSZWFjdFZlcnNpb24sXG5cbiAgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6IHtcbiAgICBSZWFjdEN1cnJlbnRPd25lcjogUmVhY3RDdXJyZW50T3duZXIsXG4gICAgLy8gVXNlZCBieSByZW5kZXJlcnMgdG8gYXZvaWQgYnVuZGxpbmcgb2JqZWN0LWFzc2lnbiB0d2ljZSBpbiBVTUQgYnVuZGxlczpcbiAgICBhc3NpZ246IF9hc3NpZ25cbiAgfVxufTtcblxue1xuICBfYXNzaWduKFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVELCB7XG4gICAgLy8gVGhlc2Ugc2hvdWxkIG5vdCBiZSBpbmNsdWRlZCBpbiBwcm9kdWN0aW9uLlxuICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWU6IFJlYWN0RGVidWdDdXJyZW50RnJhbWUsXG4gICAgLy8gU2hpbSBmb3IgUmVhY3QgRE9NIDE2LjAuMCB3aGljaCBzdGlsbCBkZXN0cnVjdHVyZWQgKGJ1dCBub3QgdXNlZCkgdGhpcy5cbiAgICAvLyBUT0RPOiByZW1vdmUgaW4gUmVhY3QgMTcuMC5cbiAgICBSZWFjdENvbXBvbmVudFRyZWVIb29rOiB7fVxuICB9KTtcbn1cblxuXG5cbnZhciBSZWFjdCQyID0gT2JqZWN0LmZyZWV6ZSh7XG5cdGRlZmF1bHQ6IFJlYWN0XG59KTtcblxudmFyIFJlYWN0JDMgPSAoIFJlYWN0JDIgJiYgUmVhY3QgKSB8fCBSZWFjdCQyO1xuXG4vLyBUT0RPOiBkZWNpZGUgb24gdGhlIHRvcC1sZXZlbCBleHBvcnQgZm9ybS5cbi8vIFRoaXMgaXMgaGFja3kgYnV0IG1ha2VzIGl0IHdvcmsgd2l0aCBib3RoIFJvbGx1cCBhbmQgSmVzdC5cbnZhciByZWFjdCA9IFJlYWN0JDNbJ2RlZmF1bHQnXSA/IFJlYWN0JDNbJ2RlZmF1bHQnXSA6IFJlYWN0JDM7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVhY3Q7XG4gIH0pKCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDEyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbm9kZS1saWJzLWJyb3dzZXIvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIid1c2Ugc3RyaWN0JztcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciAkaXRlckRlZmluZSA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIHNldFNwZWNpZXMgPSByZXF1aXJlKCcuL19zZXQtc3BlY2llcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBmYXN0S2V5ID0gcmVxdWlyZSgnLi9fbWV0YScpLmZhc3RLZXk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgU0laRSA9IERFU0NSSVBUT1JTID8gJ19zJyA6ICdzaXplJztcblxudmFyIGdldEVudHJ5ID0gZnVuY3Rpb24gKHRoYXQsIGtleSkge1xuICAvLyBmYXN0IGNhc2VcbiAgdmFyIGluZGV4ID0gZmFzdEtleShrZXkpO1xuICB2YXIgZW50cnk7XG4gIGlmIChpbmRleCAhPT0gJ0YnKSByZXR1cm4gdGhhdC5faVtpbmRleF07XG4gIC8vIGZyb3plbiBvYmplY3QgY2FzZVxuICBmb3IgKGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubikge1xuICAgIGlmIChlbnRyeS5rID09IGtleSkgcmV0dXJuIGVudHJ5O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uICh3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKSB7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uICh0aGF0LCBpdGVyYWJsZSkge1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcbiAgICAgIHRoYXQuX3QgPSBOQU1FOyAgICAgICAgIC8vIGNvbGxlY3Rpb24gdHlwZVxuICAgICAgdGhhdC5faSA9IGNyZWF0ZShudWxsKTsgLy8gaW5kZXhcbiAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7ICAgIC8vIGZpcnN0IGVudHJ5XG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAgICAvLyBsYXN0IGVudHJ5XG4gICAgICB0aGF0W1NJWkVdID0gMDsgICAgICAgICAvLyBzaXplXG4gICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgfSk7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcbiAgICAgIC8vIDIzLjEuMy4xIE1hcC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgLy8gMjMuMi4zLjIgU2V0LnByb3RvdHlwZS5jbGVhcigpXG4gICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICAgIGZvciAodmFyIHRoYXQgPSB2YWxpZGF0ZSh0aGlzLCBOQU1FKSwgZGF0YSA9IHRoYXQuX2ksIGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubikge1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmIChlbnRyeS5wKSBlbnRyeS5wID0gZW50cnkucC5uID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGRlbGV0ZSBkYXRhW2VudHJ5LmldO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQuX2YgPSB0aGF0Ll9sID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGF0W1NJWkVdID0gMDtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuMyBNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG4gICAgICAvLyAyMy4yLjMuNCBTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB0aGF0ID0gdmFsaWRhdGUodGhpcywgTkFNRSk7XG4gICAgICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkubjtcbiAgICAgICAgICB2YXIgcHJldiA9IGVudHJ5LnA7XG4gICAgICAgICAgZGVsZXRlIHRoYXQuX2lbZW50cnkuaV07XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYgKHByZXYpIHByZXYubiA9IG5leHQ7XG4gICAgICAgICAgaWYgKG5leHQpIG5leHQucCA9IHByZXY7XG4gICAgICAgICAgaWYgKHRoYXQuX2YgPT0gZW50cnkpIHRoYXQuX2YgPSBuZXh0O1xuICAgICAgICAgIGlmICh0aGF0Ll9sID09IGVudHJ5KSB0aGF0Ll9sID0gcHJldjtcbiAgICAgICAgICB0aGF0W1NJWkVdLS07XG4gICAgICAgIH0gcmV0dXJuICEhZW50cnk7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICAgICAgdmFsaWRhdGUodGhpcywgTkFNRSk7XG4gICAgICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCAzKTtcbiAgICAgICAgdmFyIGVudHJ5O1xuICAgICAgICB3aGlsZSAoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGlzLl9mKSB7XG4gICAgICAgICAgZihlbnRyeS52LCBlbnRyeS5rLCB0aGlzKTtcbiAgICAgICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgICAgICB3aGlsZSAoZW50cnkgJiYgZW50cnkucikgZW50cnkgPSBlbnRyeS5wO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpIHtcbiAgICAgICAgcmV0dXJuICEhZ2V0RW50cnkodmFsaWRhdGUodGhpcywgTkFNRSksIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHRoaXMsIE5BTUUpW1NJWkVdO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBkZWY6IGZ1bmN0aW9uICh0aGF0LCBrZXksIHZhbHVlKSB7XG4gICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICB2YXIgcHJldiwgaW5kZXg7XG4gICAgLy8gY2hhbmdlIGV4aXN0aW5nIGVudHJ5XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICBlbnRyeS52ID0gdmFsdWU7XG4gICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0Ll9sID0gZW50cnkgPSB7XG4gICAgICAgIGk6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLCAvLyA8LSBpbmRleFxuICAgICAgICBrOiBrZXksICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0ga2V5XG4gICAgICAgIHY6IHZhbHVlLCAgICAgICAgICAgICAgICAgICAgICAvLyA8LSB2YWx1ZVxuICAgICAgICBwOiBwcmV2ID0gdGhhdC5fbCwgICAgICAgICAgICAgLy8gPC0gcHJldmlvdXMgZW50cnlcbiAgICAgICAgbjogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgIC8vIDwtIG5leHQgZW50cnlcbiAgICAgICAgcjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHJlbW92ZWRcbiAgICAgIH07XG4gICAgICBpZiAoIXRoYXQuX2YpIHRoYXQuX2YgPSBlbnRyeTtcbiAgICAgIGlmIChwcmV2KSBwcmV2Lm4gPSBlbnRyeTtcbiAgICAgIHRoYXRbU0laRV0rKztcbiAgICAgIC8vIGFkZCB0byBpbmRleFxuICAgICAgaWYgKGluZGV4ICE9PSAnRicpIHRoYXQuX2lbaW5kZXhdID0gZW50cnk7XG4gICAgfSByZXR1cm4gdGhhdDtcbiAgfSxcbiAgZ2V0RW50cnk6IGdldEVudHJ5LFxuICBzZXRTdHJvbmc6IGZ1bmN0aW9uIChDLCBOQU1FLCBJU19NQVApIHtcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgJGl0ZXJEZWZpbmUoQywgTkFNRSwgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gICAgICB0aGlzLl90ID0gdmFsaWRhdGUoaXRlcmF0ZWQsIE5BTUUpOyAvLyB0YXJnZXRcbiAgICAgIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAgICAgIC8vIGtpbmRcbiAgICAgIHRoaXMuX2wgPSB1bmRlZmluZWQ7ICAgICAgICAgICAgICAgIC8vIHByZXZpb3VzXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgdmFyIGtpbmQgPSB0aGF0Ll9rO1xuICAgICAgdmFyIGVudHJ5ID0gdGhhdC5fbDtcbiAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgd2hpbGUgKGVudHJ5ICYmIGVudHJ5LnIpIGVudHJ5ID0gZW50cnkucDtcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZiAoIXRoYXQuX3QgfHwgISh0aGF0Ll9sID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGF0Ll90Ll9mKSkge1xuICAgICAgICAvLyBvciBmaW5pc2ggdGhlIGl0ZXJhdGlvblxuICAgICAgICB0aGF0Ll90ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gc3RlcCgxKTtcbiAgICAgIH1cbiAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcbiAgICAgIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgZW50cnkuayk7XG4gICAgICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgZW50cnkudik7XG4gICAgICByZXR1cm4gc3RlcCgwLCBbZW50cnkuaywgZW50cnkudl0pO1xuICAgIH0sIElTX01BUCA/ICdlbnRyaWVzJyA6ICd2YWx1ZXMnLCAhSVNfTUFQLCB0cnVlKTtcblxuICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2xsZWN0aW9uLXN0cm9uZy5qc1xuLy8gbW9kdWxlIGlkID0gMTM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgbWV0YSA9IHJlcXVpcmUoJy4vX21ldGEnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGVhY2ggPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoMCk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChOQU1FLCB3cmFwcGVyLCBtZXRob2RzLCBjb21tb24sIElTX01BUCwgSVNfV0VBSykge1xuICB2YXIgQmFzZSA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIEMgPSBCYXNlO1xuICB2YXIgQURERVIgPSBJU19NQVAgPyAnc2V0JyA6ICdhZGQnO1xuICB2YXIgcHJvdG8gPSBDICYmIEMucHJvdG90eXBlO1xuICB2YXIgTyA9IHt9O1xuICBpZiAoIURFU0NSSVBUT1JTIHx8IHR5cGVvZiBDICE9ICdmdW5jdGlvbicgfHwgIShJU19XRUFLIHx8IHByb3RvLmZvckVhY2ggJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICBuZXcgQygpLmVudHJpZXMoKS5uZXh0KCk7XG4gIH0pKSkge1xuICAgIC8vIGNyZWF0ZSBjb2xsZWN0aW9uIGNvbnN0cnVjdG9yXG4gICAgQyA9IGNvbW1vbi5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwgbWV0aG9kcyk7XG4gICAgbWV0YS5ORUVEID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBDID0gd3JhcHBlcihmdW5jdGlvbiAodGFyZ2V0LCBpdGVyYWJsZSkge1xuICAgICAgYW5JbnN0YW5jZSh0YXJnZXQsIEMsIE5BTUUsICdfYycpO1xuICAgICAgdGFyZ2V0Ll9jID0gbmV3IEJhc2UoKTtcbiAgICAgIGlmIChpdGVyYWJsZSAhPSB1bmRlZmluZWQpIGZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRhcmdldFtBRERFUl0sIHRhcmdldCk7XG4gICAgfSk7XG4gICAgZWFjaCgnYWRkLGNsZWFyLGRlbGV0ZSxmb3JFYWNoLGdldCxoYXMsc2V0LGtleXMsdmFsdWVzLGVudHJpZXMsdG9KU09OJy5zcGxpdCgnLCcpLCBmdW5jdGlvbiAoS0VZKSB7XG4gICAgICB2YXIgSVNfQURERVIgPSBLRVkgPT0gJ2FkZCcgfHwgS0VZID09ICdzZXQnO1xuICAgICAgaWYgKEtFWSBpbiBwcm90byAmJiAhKElTX1dFQUsgJiYgS0VZID09ICdjbGVhcicpKSBoaWRlKEMucHJvdG90eXBlLCBLRVksIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGFuSW5zdGFuY2UodGhpcywgQywgS0VZKTtcbiAgICAgICAgaWYgKCFJU19BRERFUiAmJiBJU19XRUFLICYmICFpc09iamVjdChhKSkgcmV0dXJuIEtFWSA9PSAnZ2V0JyA/IHVuZGVmaW5lZCA6IGZhbHNlO1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5fY1tLRVldKGEgPT09IDAgPyAwIDogYSwgYik7XG4gICAgICAgIHJldHVybiBJU19BRERFUiA/IHRoaXMgOiByZXN1bHQ7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBJU19XRUFLIHx8IGRQKEMucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYy5zaXplO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0VG9TdHJpbmdUYWcoQywgTkFNRSk7XG5cbiAgT1tOQU1FXSA9IEM7XG4gICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GLCBPKTtcblxuICBpZiAoIUlTX1dFQUspIGNvbW1vbi5zZXRTdHJvbmcoQywgTkFNRSwgSVNfTUFQKTtcblxuICByZXR1cm4gQztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIi8vIDAgLT4gQXJyYXkjZm9yRWFjaFxuLy8gMSAtPiBBcnJheSNtYXBcbi8vIDIgLT4gQXJyYXkjZmlsdGVyXG4vLyAzIC0+IEFycmF5I3NvbWVcbi8vIDQgLT4gQXJyYXkjZXZlcnlcbi8vIDUgLT4gQXJyYXkjZmluZFxuLy8gNiAtPiBBcnJheSNmaW5kSW5kZXhcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBhc2MgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVFlQRSwgJGNyZWF0ZSkge1xuICB2YXIgSVNfTUFQID0gVFlQRSA9PSAxO1xuICB2YXIgSVNfRklMVEVSID0gVFlQRSA9PSAyO1xuICB2YXIgSVNfU09NRSA9IFRZUEUgPT0gMztcbiAgdmFyIElTX0VWRVJZID0gVFlQRSA9PSA0O1xuICB2YXIgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNjtcbiAgdmFyIE5PX0hPTEVTID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVg7XG4gIHZhciBjcmVhdGUgPSAkY3JlYXRlIHx8IGFzYztcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCkge1xuICAgIHZhciBPID0gdG9PYmplY3QoJHRoaXMpO1xuICAgIHZhciBzZWxmID0gSU9iamVjdChPKTtcbiAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCB0aGF0LCAzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWQ7XG4gICAgdmFyIHZhbCwgcmVzO1xuICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZikge1xuICAgICAgdmFsID0gc2VsZltpbmRleF07XG4gICAgICByZXMgPSBmKHZhbCwgaW5kZXgsIE8pO1xuICAgICAgaWYgKFRZUEUpIHtcbiAgICAgICAgaWYgKElTX01BUCkgcmVzdWx0W2luZGV4XSA9IHJlczsgICAvLyBtYXBcbiAgICAgICAgZWxzZSBpZiAocmVzKSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsOyAgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcmVzdWx0LnB1c2godmFsKTsgICAgICAgIC8vIGZpbHRlclxuICAgICAgICB9IGVsc2UgaWYgKElTX0VWRVJZKSByZXR1cm4gZmFsc2U7IC8vIGV2ZXJ5XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiByZXN1bHQ7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LW1ldGhvZHMuanNcbi8vIG1vZHVsZSBpZCA9IDEzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCIvLyA5LjQuMi4zIEFycmF5U3BlY2llc0NyZWF0ZShvcmlnaW5hbEFycmF5LCBsZW5ndGgpXG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbCwgbGVuZ3RoKSB7XG4gIHJldHVybiBuZXcgKHNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbCkpKGxlbmd0aCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LXNwZWNpZXMtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsKSB7XG4gIHZhciBDO1xuICBpZiAoaXNBcnJheShvcmlnaW5hbCkpIHtcbiAgICBDID0gb3JpZ2luYWwuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZiAodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKSBDID0gdW5kZWZpbmVkO1xuICAgIGlmIChpc09iamVjdChDKSkge1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZiAoQyA9PT0gbnVsbCkgQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gMTM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIGZyb20gPSByZXF1aXJlKCcuL19hcnJheS1mcm9tLWl0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChOQU1FKSB7XG4gIHJldHVybiBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgaWYgKGNsYXNzb2YodGhpcykgIT0gTkFNRSkgdGhyb3cgVHlwZUVycm9yKE5BTUUgKyBcIiN0b0pTT04gaXNuJ3QgZ2VuZXJpY1wiKTtcbiAgICByZXR1cm4gZnJvbSh0aGlzKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi10by1qc29uLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwidmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXIsIElURVJBVE9SKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yT2YoaXRlciwgZmFsc2UsIHJlc3VsdC5wdXNoLCByZXN1bHQsIElURVJBVE9SKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktZnJvbS1pdGVyYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS9cbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENPTExFQ1RJT04pIHtcbiAgJGV4cG9ydCgkZXhwb3J0LlMsIENPTExFQ1RJT04sIHsgb2Y6IGZ1bmN0aW9uIG9mKCkge1xuICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBBID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gICAgd2hpbGUgKGxlbmd0aC0tKSBBW2xlbmd0aF0gPSBhcmd1bWVudHNbbGVuZ3RoXTtcbiAgICByZXR1cm4gbmV3IHRoaXMoQSk7XG4gIH0gfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1jb2xsZWN0aW9uLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tL1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ09MTEVDVElPTikge1xuICAkZXhwb3J0KCRleHBvcnQuUywgQ09MTEVDVElPTiwgeyBmcm9tOiBmdW5jdGlvbiBmcm9tKHNvdXJjZSAvKiAsIG1hcEZuLCB0aGlzQXJnICovKSB7XG4gICAgdmFyIG1hcEZuID0gYXJndW1lbnRzWzFdO1xuICAgIHZhciBtYXBwaW5nLCBBLCBuLCBjYjtcbiAgICBhRnVuY3Rpb24odGhpcyk7XG4gICAgbWFwcGluZyA9IG1hcEZuICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG1hcHBpbmcpIGFGdW5jdGlvbihtYXBGbik7XG4gICAgaWYgKHNvdXJjZSA9PSB1bmRlZmluZWQpIHJldHVybiBuZXcgdGhpcygpO1xuICAgIEEgPSBbXTtcbiAgICBpZiAobWFwcGluZykge1xuICAgICAgbiA9IDA7XG4gICAgICBjYiA9IGN0eChtYXBGbiwgYXJndW1lbnRzWzJdLCAyKTtcbiAgICAgIGZvck9mKHNvdXJjZSwgZmFsc2UsIGZ1bmN0aW9uIChuZXh0SXRlbSkge1xuICAgICAgICBBLnB1c2goY2IobmV4dEl0ZW0sIG4rKykpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvck9mKHNvdXJjZSwgZmFsc2UsIEEucHVzaCwgQSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgdGhpcyhBKTtcbiAgfSB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LWNvbGxlY3Rpb24tZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gMTQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5c1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDUiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDE2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiA1IiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpIHtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgNSIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3InKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDE2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiA1IiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0ID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBpdGVyRm4gPSBnZXQoaXQpO1xuICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgcmV0dXJuIGFuT2JqZWN0KGl0ZXJGbi5jYWxsKGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDE2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiA1IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2lzLWl0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgNSIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgNSIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5pc0l0ZXJhYmxlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPID0gT2JqZWN0KGl0KTtcbiAgcmV0dXJuIE9bSVRFUkFUT1JdICE9PSB1bmRlZmluZWRcbiAgICB8fCAnQEBpdGVyYXRvcicgaW4gT1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICB8fCBJdGVyYXRvcnMuaGFzT3duUHJvcGVydHkoY2xhc3NvZihPKSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfbWFwID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL21hcCcpO1xuXG52YXIgX21hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXApO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXknKTtcblxudmFyIF9zbGljZWRUb0FycmF5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NsaWNlZFRvQXJyYXkyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbmV4cG9ydHMuZmx1c2ggPSBmbHVzaDtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfc3R5bGVzaGVldFJlZ2lzdHJ5ID0gcmVxdWlyZSgnLi9zdHlsZXNoZWV0LXJlZ2lzdHJ5Jyk7XG5cbnZhciBfc3R5bGVzaGVldFJlZ2lzdHJ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0eWxlc2hlZXRSZWdpc3RyeSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBzdHlsZVNoZWV0UmVnaXN0cnkgPSBuZXcgX3N0eWxlc2hlZXRSZWdpc3RyeTIuZGVmYXVsdCgpO1xuXG52YXIgSlNYU3R5bGUgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShKU1hTdHlsZSwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSlNYU3R5bGUoKSB7XG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgSlNYU3R5bGUpO1xuICAgIHJldHVybiAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChKU1hTdHlsZS5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoSlNYU3R5bGUpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKEpTWFN0eWxlLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIHN0eWxlU2hlZXRSZWdpc3RyeS5hZGQodGhpcy5wcm9wcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY3NzICE9PSBuZXh0UHJvcHMuY3NzO1xuICAgIH1cblxuICAgIC8vIFRvIGF2b2lkIEZPVUMsIHdlIHByb2Nlc3MgbmV3IGNoYW5nZXNcbiAgICAvLyBvbiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgcmF0aGVyIHRoYW4gYGNvbXBvbmVudERpZFVwZGF0ZWAuXG5cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgc3R5bGVTaGVldFJlZ2lzdHJ5LnVwZGF0ZSh0aGlzLnByb3BzLCBuZXh0UHJvcHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBzdHlsZVNoZWV0UmVnaXN0cnkucmVtb3ZlKHRoaXMucHJvcHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiAnZHluYW1pYycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGR5bmFtaWMoaW5mbykge1xuICAgICAgcmV0dXJuIGluZm8ubWFwKGZ1bmN0aW9uICh0YWdJbmZvKSB7XG4gICAgICAgIHZhciBfdGFnSW5mbyA9ICgwLCBfc2xpY2VkVG9BcnJheTMuZGVmYXVsdCkodGFnSW5mbywgMiksXG4gICAgICAgICAgICBiYXNlSWQgPSBfdGFnSW5mb1swXSxcbiAgICAgICAgICAgIHByb3BzID0gX3RhZ0luZm9bMV07XG5cbiAgICAgICAgcmV0dXJuIHN0eWxlU2hlZXRSZWdpc3RyeS5jb21wdXRlSWQoYmFzZUlkLCBwcm9wcyk7XG4gICAgICB9KS5qb2luKCcgJyk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBKU1hTdHlsZTtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEpTWFN0eWxlO1xuZnVuY3Rpb24gZmx1c2goKSB7XG4gIHZhciBjc3NSdWxlcyA9IHN0eWxlU2hlZXRSZWdpc3RyeS5jc3NSdWxlcygpO1xuICBzdHlsZVNoZWV0UmVnaXN0cnkuZmx1c2goKTtcbiAgcmV0dXJuIG5ldyBfbWFwMi5kZWZhdWx0KGNzc1J1bGVzKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZWQtanN4L2Rpc3Qvc3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IDM4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9tYXBcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvbWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAzODJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDUiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWFwJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5tYXAudG8tanNvbicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcubWFwLm9mJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5tYXAuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuTWFwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL21hcC5qc1xuLy8gbW9kdWxlIGlkID0gMzgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiA1IiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tc3Ryb25nJyk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgTUFQID0gJ01hcCc7XG5cbi8vIDIzLjEgTWFwIE9iamVjdHNcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKE1BUCwgZnVuY3Rpb24gKGdldCkge1xuICByZXR1cm4gZnVuY3Rpb24gTWFwKCkgeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMS4zLjYgTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICB2YXIgZW50cnkgPSBzdHJvbmcuZ2V0RW50cnkodmFsaWRhdGUodGhpcywgTUFQKSwga2V5KTtcbiAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudjtcbiAgfSxcbiAgLy8gMjMuMS4zLjkgTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBzdHJvbmcuZGVmKHZhbGlkYXRlKHRoaXMsIE1BUCksIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcbiAgfVxufSwgc3Ryb25nLCB0cnVlKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5tYXAuanNcbi8vIG1vZHVsZSBpZCA9IDM4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNSIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnTWFwJywgeyB0b0pTT046IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tdG8tanNvbicpKCdNYXAnKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5tYXAudG8tanNvbi5qc1xuLy8gbW9kdWxlIGlkID0gMzg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA1IiwiLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tLyNzZWMtbWFwLm9mXG5yZXF1aXJlKCcuL19zZXQtY29sbGVjdGlvbi1vZicpKCdNYXAnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5tYXAub2YuanNcbi8vIG1vZHVsZSBpZCA9IDM4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNSIsIi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS8jc2VjLW1hcC5mcm9tXG5yZXF1aXJlKCcuL19zZXQtY29sbGVjdGlvbi1mcm9tJykoJ01hcCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm1hcC5mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSAzODdcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfa2V5cyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cycpO1xuXG52YXIgX2tleXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfa2V5cyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3N0cmluZ0hhc2ggPSByZXF1aXJlKCdzdHJpbmctaGFzaCcpO1xuXG52YXIgX3N0cmluZ0hhc2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaW5nSGFzaCk7XG5cbnZhciBfc3R5bGVzaGVldCA9IHJlcXVpcmUoJy4vbGliL3N0eWxlc2hlZXQnKTtcblxudmFyIF9zdHlsZXNoZWV0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0eWxlc2hlZXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgU3R5bGVTaGVldFJlZ2lzdHJ5ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdHlsZVNoZWV0UmVnaXN0cnkoKSB7XG4gICAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgICBfcmVmJHN0eWxlU2hlZXQgPSBfcmVmLnN0eWxlU2hlZXQsXG4gICAgICAgIHN0eWxlU2hlZXQgPSBfcmVmJHN0eWxlU2hlZXQgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBfcmVmJHN0eWxlU2hlZXQsXG4gICAgICAgIF9yZWYkb3B0aW1pemVGb3JTcGVlZCA9IF9yZWYub3B0aW1pemVGb3JTcGVlZCxcbiAgICAgICAgb3B0aW1pemVGb3JTcGVlZCA9IF9yZWYkb3B0aW1pemVGb3JTcGVlZCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcmVmJG9wdGltaXplRm9yU3BlZWQsXG4gICAgICAgIF9yZWYkaXNCcm93c2VyID0gX3JlZi5pc0Jyb3dzZXIsXG4gICAgICAgIGlzQnJvd3NlciA9IF9yZWYkaXNCcm93c2VyID09PSB1bmRlZmluZWQgPyB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA6IF9yZWYkaXNCcm93c2VyO1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgU3R5bGVTaGVldFJlZ2lzdHJ5KTtcblxuICAgIHRoaXMuX3NoZWV0ID0gc3R5bGVTaGVldCB8fCBuZXcgX3N0eWxlc2hlZXQyLmRlZmF1bHQoe1xuICAgICAgbmFtZTogJ3N0eWxlZC1qc3gnLFxuICAgICAgb3B0aW1pemVGb3JTcGVlZDogb3B0aW1pemVGb3JTcGVlZFxuICAgIH0pO1xuICAgIHRoaXMuX3NoZWV0LmluamVjdCgpO1xuICAgIHRoaXMuX2lzQnJvd3NlciA9IGlzQnJvd3NlcjtcblxuICAgIHRoaXMuX2Zyb21TZXJ2ZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5faW5kaWNlcyA9IHt9O1xuICAgIHRoaXMuX2luc3RhbmNlc0NvdW50cyA9IHt9O1xuXG4gICAgdGhpcy5jb21wdXRlSWQgPSB0aGlzLmNyZWF0ZUNvbXB1dGVJZCgpO1xuICAgIHRoaXMuY29tcHV0ZVNlbGVjdG9yID0gdGhpcy5jcmVhdGVDb21wdXRlU2VsZWN0b3IoKTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKFN0eWxlU2hlZXRSZWdpc3RyeSwgW3tcbiAgICBrZXk6ICdhZGQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGQocHJvcHMpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICh1bmRlZmluZWQgPT09IHRoaXMuX29wdGltaXplRm9yU3BlZWQpIHtcbiAgICAgICAgdGhpcy5fb3B0aW1pemVGb3JTcGVlZCA9IEFycmF5LmlzQXJyYXkocHJvcHMuY3NzKTtcbiAgICAgICAgdGhpcy5fc2hlZXQuc2V0T3B0aW1pemVGb3JTcGVlZCh0aGlzLl9vcHRpbWl6ZUZvclNwZWVkKTtcbiAgICAgICAgdGhpcy5fb3B0aW1pemVGb3JTcGVlZCA9IHRoaXMuX3NoZWV0LmlzT3B0aW1pemVGb3JTcGVlZCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5faXNCcm93c2VyICYmICF0aGlzLl9mcm9tU2VydmVyKSB7XG4gICAgICAgIHRoaXMuX2Zyb21TZXJ2ZXIgPSB0aGlzLnNlbGVjdEZyb21TZXJ2ZXIoKTtcbiAgICAgICAgdGhpcy5faW5zdGFuY2VzQ291bnRzID0gKDAsIF9rZXlzMi5kZWZhdWx0KSh0aGlzLl9mcm9tU2VydmVyKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgdGFnTmFtZSkge1xuICAgICAgICAgIGFjY1t0YWdOYW1lXSA9IDA7XG4gICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwge30pO1xuICAgICAgfVxuXG4gICAgICB2YXIgX2dldElkQW5kUnVsZXMgPSB0aGlzLmdldElkQW5kUnVsZXMocHJvcHMpLFxuICAgICAgICAgIHN0eWxlSWQgPSBfZ2V0SWRBbmRSdWxlcy5zdHlsZUlkLFxuICAgICAgICAgIHJ1bGVzID0gX2dldElkQW5kUnVsZXMucnVsZXM7XG5cbiAgICAgIC8vIERlZHVwaW5nOiBqdXN0IGluY3JlYXNlIHRoZSBpbnN0YW5jZXMgY291bnQuXG5cblxuICAgICAgaWYgKHN0eWxlSWQgaW4gdGhpcy5faW5zdGFuY2VzQ291bnRzKSB7XG4gICAgICAgIHRoaXMuX2luc3RhbmNlc0NvdW50c1tzdHlsZUlkXSArPSAxO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBpbmRpY2VzID0gcnVsZXMubWFwKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5fc2hlZXQuaW5zZXJ0UnVsZShydWxlKTtcbiAgICAgIH0pXG4gICAgICAvLyBGaWx0ZXIgb3V0IGludmFsaWQgcnVsZXNcbiAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHJldHVybiBpbmRleCAhPT0gLTE7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGluZGljZXMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLl9pbmRpY2VzW3N0eWxlSWRdID0gaW5kaWNlcztcbiAgICAgICAgdGhpcy5faW5zdGFuY2VzQ291bnRzW3N0eWxlSWRdID0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUocHJvcHMpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX2dldElkQW5kUnVsZXMyID0gdGhpcy5nZXRJZEFuZFJ1bGVzKHByb3BzKSxcbiAgICAgICAgICBzdHlsZUlkID0gX2dldElkQW5kUnVsZXMyLnN0eWxlSWQ7XG5cbiAgICAgIGludmFyaWFudChzdHlsZUlkIGluIHRoaXMuX2luc3RhbmNlc0NvdW50cywgJ3N0eWxlSWQ6IGAnICsgc3R5bGVJZCArICdgIG5vdCBmb3VuZCcpO1xuICAgICAgdGhpcy5faW5zdGFuY2VzQ291bnRzW3N0eWxlSWRdIC09IDE7XG5cbiAgICAgIGlmICh0aGlzLl9pbnN0YW5jZXNDb3VudHNbc3R5bGVJZF0gPCAxKSB7XG4gICAgICAgIHZhciB0YWdGcm9tU2VydmVyID0gdGhpcy5fZnJvbVNlcnZlciAmJiB0aGlzLl9mcm9tU2VydmVyW3N0eWxlSWRdO1xuICAgICAgICBpZiAodGFnRnJvbVNlcnZlcikge1xuICAgICAgICAgIHRhZ0Zyb21TZXJ2ZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YWdGcm9tU2VydmVyKTtcbiAgICAgICAgICBkZWxldGUgdGhpcy5fZnJvbVNlcnZlcltzdHlsZUlkXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9pbmRpY2VzW3N0eWxlSWRdLmZvckVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMyLl9zaGVldC5kZWxldGVSdWxlKGluZGV4KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBkZWxldGUgdGhpcy5faW5kaWNlc1tzdHlsZUlkXTtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgdGhpcy5faW5zdGFuY2VzQ291bnRzW3N0eWxlSWRdO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3VwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZShwcm9wcywgbmV4dFByb3BzKSB7XG4gICAgICB0aGlzLmFkZChuZXh0UHJvcHMpO1xuICAgICAgdGhpcy5yZW1vdmUocHJvcHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2ZsdXNoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgICB0aGlzLl9zaGVldC5mbHVzaCgpO1xuICAgICAgdGhpcy5fc2hlZXQuaW5qZWN0KCk7XG4gICAgICB0aGlzLl9mcm9tU2VydmVyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW5kaWNlcyA9IHt9O1xuICAgICAgdGhpcy5faW5zdGFuY2VzQ291bnRzID0ge307XG5cbiAgICAgIHRoaXMuY29tcHV0ZUlkID0gdGhpcy5jcmVhdGVDb21wdXRlSWQoKTtcbiAgICAgIHRoaXMuY29tcHV0ZVNlbGVjdG9yID0gdGhpcy5jcmVhdGVDb21wdXRlU2VsZWN0b3IoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjc3NSdWxlcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNzc1J1bGVzKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBmcm9tU2VydmVyID0gdGhpcy5fZnJvbVNlcnZlciA/ICgwLCBfa2V5czIuZGVmYXVsdCkodGhpcy5fZnJvbVNlcnZlcikubWFwKGZ1bmN0aW9uIChzdHlsZUlkKSB7XG4gICAgICAgIHJldHVybiBbc3R5bGVJZCwgX3RoaXMzLl9mcm9tU2VydmVyW3N0eWxlSWRdXTtcbiAgICAgIH0pIDogW107XG4gICAgICB2YXIgY3NzUnVsZXMgPSB0aGlzLl9zaGVldC5jc3NSdWxlcygpO1xuXG4gICAgICByZXR1cm4gZnJvbVNlcnZlci5jb25jYXQoKDAsIF9rZXlzMi5kZWZhdWx0KSh0aGlzLl9pbmRpY2VzKS5tYXAoZnVuY3Rpb24gKHN0eWxlSWQpIHtcbiAgICAgICAgcmV0dXJuIFtzdHlsZUlkLCBfdGhpczMuX2luZGljZXNbc3R5bGVJZF0ubWFwKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgIHJldHVybiBjc3NSdWxlc1tpbmRleF0uY3NzVGV4dDtcbiAgICAgICAgfSkuam9pbignXFxuJyldO1xuICAgICAgfSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNyZWF0ZUNvbXB1dGVJZFxuICAgICAqXG4gICAgICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRvIGNvbXB1dGUgYW5kIG1lbW9pemUgYSBqc3ggaWQgZnJvbSBhIGJhc2VkSWQgYW5kIG9wdGlvbmFsbHkgcHJvcHMuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2NyZWF0ZUNvbXB1dGVJZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUNvbXB1dGVJZCgpIHtcbiAgICAgIHZhciBjYWNoZSA9IHt9O1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChiYXNlSWQsIHByb3BzKSB7XG4gICAgICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgICByZXR1cm4gJ2pzeC0nICsgYmFzZUlkO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcm9wc1RvU3RyaW5nID0gU3RyaW5nKHByb3BzKTtcbiAgICAgICAgdmFyIGtleSA9IGJhc2VJZCArIHByb3BzVG9TdHJpbmc7XG4gICAgICAgIC8vIHJldHVybiBganN4LSR7aGFzaFN0cmluZyhgJHtiYXNlSWR9LSR7cHJvcHNUb1N0cmluZ31gKX1gXG4gICAgICAgIGlmICghY2FjaGVba2V5XSkge1xuICAgICAgICAgIGNhY2hlW2tleV0gPSAnanN4LScgKyAoMCwgX3N0cmluZ0hhc2gyLmRlZmF1bHQpKGJhc2VJZCArICctJyArIHByb3BzVG9TdHJpbmcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWNoZVtrZXldO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjcmVhdGVDb21wdXRlU2VsZWN0b3JcbiAgICAgKlxuICAgICAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0byBjb21wdXRlIGFuZCBtZW1vaXplIGR5bmFtaWMgc2VsZWN0b3JzLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdjcmVhdGVDb21wdXRlU2VsZWN0b3InLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVDb21wdXRlU2VsZWN0b3IoKSB7XG4gICAgICB2YXIgc2VsZWN0b1BsYWNlaG9sZGVyUmVnZXhwID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAvX19qc3gtc3R5bGUtZHluYW1pYy1zZWxlY3Rvci9nO1xuXG4gICAgICB2YXIgY2FjaGUgPSB7fTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoaWQsIGNzcykge1xuICAgICAgICB2YXIgaWRjc3MgPSBpZCArIGNzcztcbiAgICAgICAgaWYgKCFjYWNoZVtpZGNzc10pIHtcbiAgICAgICAgICBjYWNoZVtpZGNzc10gPSBjc3MucmVwbGFjZShzZWxlY3RvUGxhY2Vob2xkZXJSZWdleHAsIGlkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FjaGVbaWRjc3NdO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRJZEFuZFJ1bGVzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SWRBbmRSdWxlcyhwcm9wcykge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIGlmIChwcm9wcy5keW5hbWljKSB7XG4gICAgICAgIHZhciBzdHlsZUlkID0gdGhpcy5jb21wdXRlSWQocHJvcHMuc3R5bGVJZCwgcHJvcHMuZHluYW1pYyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3R5bGVJZDogc3R5bGVJZCxcbiAgICAgICAgICBydWxlczogQXJyYXkuaXNBcnJheShwcm9wcy5jc3MpID8gcHJvcHMuY3NzLm1hcChmdW5jdGlvbiAocnVsZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5jb21wdXRlU2VsZWN0b3Ioc3R5bGVJZCwgcnVsZSk7XG4gICAgICAgICAgfSkgOiBbdGhpcy5jb21wdXRlU2VsZWN0b3Ioc3R5bGVJZCwgcHJvcHMuY3NzKV1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3R5bGVJZDogdGhpcy5jb21wdXRlSWQocHJvcHMuc3R5bGVJZCksXG4gICAgICAgIHJ1bGVzOiBBcnJheS5pc0FycmF5KHByb3BzLmNzcykgPyBwcm9wcy5jc3MgOiBbcHJvcHMuY3NzXVxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzZWxlY3RGcm9tU2VydmVyXG4gICAgICpcbiAgICAgKiBDb2xsZWN0cyBzdHlsZSB0YWdzIGZyb20gdGhlIGRvY3VtZW50IHdpdGggaWQgX19qc3gtWFhYXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3NlbGVjdEZyb21TZXJ2ZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZWxlY3RGcm9tU2VydmVyKCkge1xuICAgICAgdmFyIGVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2lkXj1cIl9fanN4LVwiXScpKTtcblxuICAgICAgcmV0dXJuIGVsZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBlbGVtZW50KSB7XG4gICAgICAgIHZhciBpZCA9IGVsZW1lbnQuaWQuc2xpY2UoMik7XG4gICAgICAgIGFjY1tpZF0gPSBlbGVtZW50O1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gU3R5bGVTaGVldFJlZ2lzdHJ5O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBTdHlsZVNoZWV0UmVnaXN0cnk7XG5cblxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcignU3R5bGVTaGVldFJlZ2lzdHJ5OiAnICsgbWVzc2FnZSArICcuJyk7XG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZWQtanN4L2Rpc3Qvc3R5bGVzaGVldC1yZWdpc3RyeS5qc1xuLy8gbW9kdWxlIGlkID0gMzg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA1IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGhhc2goc3RyKSB7XG4gIHZhciBoYXNoID0gNTM4MSxcbiAgICAgIGkgICAgPSBzdHIubGVuZ3RoO1xuXG4gIHdoaWxlKGkpIHtcbiAgICBoYXNoID0gKGhhc2ggKiAzMykgXiBzdHIuY2hhckNvZGVBdCgtLWkpO1xuICB9XG5cbiAgLyogSmF2YVNjcmlwdCBkb2VzIGJpdHdpc2Ugb3BlcmF0aW9ucyAobGlrZSBYT1IsIGFib3ZlKSBvbiAzMi1iaXQgc2lnbmVkXG4gICAqIGludGVnZXJzLiBTaW5jZSB3ZSB3YW50IHRoZSByZXN1bHRzIHRvIGJlIGFsd2F5cyBwb3NpdGl2ZSwgY29udmVydCB0aGVcbiAgICogc2lnbmVkIGludCB0byBhbiB1bnNpZ25lZCBieSBkb2luZyBhbiB1bnNpZ25lZCBiaXRzaGlmdC4gKi9cbiAgcmV0dXJuIGhhc2ggPj4+IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0cmluZy1oYXNoL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzODlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKlxuQmFzZWQgb24gR2xhbW9yJ3Mgc2hlZXRcbmh0dHBzOi8vZ2l0aHViLmNvbS90aHJlZXBvaW50b25lL2dsYW1vci9ibG9iLzY2N2I0ODBkMzFiMzcyMWE5MDUwMjFiMjZlMTI5MGNlOTJjYTI4Nzkvc3JjL3NoZWV0LmpzXG4qL1xuXG52YXIgaXNQcm9kID0gcHJvY2Vzcy5lbnYgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcbnZhciBpc1N0cmluZyA9IGZ1bmN0aW9uIGlzU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG59O1xuXG52YXIgU3R5bGVTaGVldCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3R5bGVTaGVldCgpIHtcbiAgICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICAgIF9yZWYkbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgICAgbmFtZSA9IF9yZWYkbmFtZSA9PT0gdW5kZWZpbmVkID8gJ3N0eWxlc2hlZXQnIDogX3JlZiRuYW1lLFxuICAgICAgICBfcmVmJG9wdGltaXplRm9yU3BlZWQgPSBfcmVmLm9wdGltaXplRm9yU3BlZWQsXG4gICAgICAgIG9wdGltaXplRm9yU3BlZWQgPSBfcmVmJG9wdGltaXplRm9yU3BlZWQgPT09IHVuZGVmaW5lZCA/IGlzUHJvZCA6IF9yZWYkb3B0aW1pemVGb3JTcGVlZCxcbiAgICAgICAgX3JlZiRpc0Jyb3dzZXIgPSBfcmVmLmlzQnJvd3NlcixcbiAgICAgICAgaXNCcm93c2VyID0gX3JlZiRpc0Jyb3dzZXIgPT09IHVuZGVmaW5lZCA/IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnIDogX3JlZiRpc0Jyb3dzZXI7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBTdHlsZVNoZWV0KTtcblxuICAgIGludmFyaWFudChpc1N0cmluZyhuYW1lKSwgJ2BuYW1lYCBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fZGVsZXRlZFJ1bGVQbGFjZWhvbGRlciA9ICcjJyArIG5hbWUgKyAnLWRlbGV0ZWQtcnVsZV9fX197fSc7XG5cbiAgICBpbnZhcmlhbnQodHlwZW9mIG9wdGltaXplRm9yU3BlZWQgPT09ICdib29sZWFuJywgJ2BvcHRpbWl6ZUZvclNwZWVkYCBtdXN0IGJlIGEgYm9vbGVhbicpO1xuICAgIHRoaXMuX29wdGltaXplRm9yU3BlZWQgPSBvcHRpbWl6ZUZvclNwZWVkO1xuICAgIHRoaXMuX2lzQnJvd3NlciA9IGlzQnJvd3NlcjtcblxuICAgIHRoaXMuX3NlcnZlclNoZWV0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3RhZ3MgPSBbXTtcbiAgICB0aGlzLl9pbmplY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3J1bGVzQ291bnQgPSAwO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoU3R5bGVTaGVldCwgW3tcbiAgICBrZXk6ICdzZXRPcHRpbWl6ZUZvclNwZWVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0T3B0aW1pemVGb3JTcGVlZChib29sKSB7XG4gICAgICBpbnZhcmlhbnQodHlwZW9mIGJvb2wgPT09ICdib29sZWFuJywgJ2BzZXRPcHRpbWl6ZUZvclNwZWVkYCBhY2NlcHRzIGEgYm9vbGVhbicpO1xuXG4gICAgICBpbnZhcmlhbnQodGhpcy5fcnVsZXNDb3VudCA9PT0gMCwgJ29wdGltaXplRm9yU3BlZWQgY2Fubm90IGJlIHdoZW4gcnVsZXMgaGF2ZSBhbHJlYWR5IGJlZW4gaW5zZXJ0ZWQnKTtcbiAgICAgIHRoaXMuZmx1c2goKTtcbiAgICAgIHRoaXMuX29wdGltaXplRm9yU3BlZWQgPSBib29sO1xuICAgICAgdGhpcy5pbmplY3QoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc09wdGltaXplRm9yU3BlZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc09wdGltaXplRm9yU3BlZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fb3B0aW1pemVGb3JTcGVlZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpbmplY3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbmplY3QoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpbnZhcmlhbnQoIXRoaXMuX2luamVjdGVkLCAnc2hlZXQgYWxyZWFkeSBpbmplY3RlZCcpO1xuICAgICAgdGhpcy5faW5qZWN0ZWQgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMuX2lzQnJvd3NlciAmJiB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkKSB7XG4gICAgICAgIHRoaXMuX3RhZ3NbMF0gPSB0aGlzLm1ha2VTdHlsZVRhZyh0aGlzLl9uYW1lKTtcbiAgICAgICAgdGhpcy5fb3B0aW1pemVGb3JTcGVlZCA9ICdpbnNlcnRSdWxlJyBpbiB0aGlzLmdldFNoZWV0KCk7XG4gICAgICAgIGlmICghdGhpcy5fb3B0aW1pemVGb3JTcGVlZCkge1xuICAgICAgICAgIGlmICghaXNQcm9kKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1N0eWxlU2hlZXQ6IG9wdGltaXplRm9yU3BlZWQgbW9kZSBub3Qgc3VwcG9ydGVkIGZhbGxpbmcgYmFjayB0byBzdGFuZGFyZCBtb2RlLicpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5mbHVzaCgpO1xuICAgICAgICAgIHRoaXMuX2luamVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3NlcnZlclNoZWV0ID0ge1xuICAgICAgICBjc3NSdWxlczogW10sXG4gICAgICAgIGluc2VydFJ1bGU6IGZ1bmN0aW9uIGluc2VydFJ1bGUocnVsZSwgaW5kZXgpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGluZGV4ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgX3RoaXMuX3NlcnZlclNoZWV0LmNzc1J1bGVzW2luZGV4XSA9IHsgY3NzVGV4dDogcnVsZSB9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5fc2VydmVyU2hlZXQuY3NzUnVsZXMucHVzaCh7IGNzc1RleHQ6IHJ1bGUgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgfSxcbiAgICAgICAgZGVsZXRlUnVsZTogZnVuY3Rpb24gZGVsZXRlUnVsZShpbmRleCkge1xuICAgICAgICAgIF90aGlzLl9zZXJ2ZXJTaGVldC5jc3NSdWxlc1tpbmRleF0gPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFNoZWV0Rm9yVGFnJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2hlZXRGb3JUYWcodGFnKSB7XG4gICAgICBpZiAodGFnLnNoZWV0KSB7XG4gICAgICAgIHJldHVybiB0YWcuc2hlZXQ7XG4gICAgICB9XG5cbiAgICAgIC8vIHRoaXMgd2VpcmRuZXNzIGJyb3VnaHQgdG8geW91IGJ5IGZpcmVmb3hcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZG9jdW1lbnQuc3R5bGVTaGVldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldLm93bmVyTm9kZSA9PT0gdGFnKSB7XG4gICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0U2hlZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTaGVldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFNoZWV0Rm9yVGFnKHRoaXMuX3RhZ3NbdGhpcy5fdGFncy5sZW5ndGggLSAxXSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaW5zZXJ0UnVsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluc2VydFJ1bGUocnVsZSwgaW5kZXgpIHtcbiAgICAgIGludmFyaWFudChpc1N0cmluZyhydWxlKSwgJ2BpbnNlcnRSdWxlYCBhY2NlcHRzIG9ubHkgc3RyaW5ncycpO1xuXG4gICAgICBpZiAoIXRoaXMuX2lzQnJvd3Nlcikge1xuICAgICAgICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgIGluZGV4ID0gdGhpcy5fc2VydmVyU2hlZXQuY3NzUnVsZXMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NlcnZlclNoZWV0Lmluc2VydFJ1bGUocnVsZSwgaW5kZXgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fcnVsZXNDb3VudCsrO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fb3B0aW1pemVGb3JTcGVlZCkge1xuICAgICAgICB2YXIgc2hlZXQgPSB0aGlzLmdldFNoZWV0KCk7XG4gICAgICAgIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgaW5kZXggPSBzaGVldC5jc3NSdWxlcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcyB3ZWlyZG5lc3MgZm9yIHBlcmYsIGFuZCBjaHJvbWUncyB3ZWlyZCBidWdcbiAgICAgICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjAwMDc5OTIvY2hyb21lLXN1ZGRlbmx5LXN0b3BwZWQtYWNjZXB0aW5nLWluc2VydHJ1bGVcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBzaGVldC5pbnNlcnRSdWxlKHJ1bGUsIGluZGV4KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgaWYgKCFpc1Byb2QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignU3R5bGVTaGVldDogaWxsZWdhbCBydWxlOiBcXG5cXG4nICsgcnVsZSArICdcXG5cXG5TZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzIwMDA3OTkyIGZvciBtb3JlIGluZm8nKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGluc2VydGlvblBvaW50ID0gdGhpcy5fdGFnc1tpbmRleF07XG4gICAgICAgIHRoaXMuX3RhZ3MucHVzaCh0aGlzLm1ha2VTdHlsZVRhZyh0aGlzLl9uYW1lLCBydWxlLCBpbnNlcnRpb25Qb2ludCkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fcnVsZXNDb3VudCsrO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlcGxhY2VSdWxlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVwbGFjZVJ1bGUoaW5kZXgsIHJ1bGUpIHtcbiAgICAgIGlmICh0aGlzLl9vcHRpbWl6ZUZvclNwZWVkIHx8ICF0aGlzLl9pc0Jyb3dzZXIpIHtcbiAgICAgICAgdmFyIHNoZWV0ID0gdGhpcy5faXNCcm93c2VyID8gdGhpcy5nZXRTaGVldCgpIDogdGhpcy5fc2VydmVyU2hlZXQ7XG4gICAgICAgIGlmICghcnVsZS50cmltKCkpIHtcbiAgICAgICAgICBydWxlID0gdGhpcy5fZGVsZXRlZFJ1bGVQbGFjZWhvbGRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc2hlZXQuY3NzUnVsZXNbaW5kZXhdKSB7XG4gICAgICAgICAgLy8gQFRCRCBTaG91bGQgd2UgdGhyb3cgYW4gZXJyb3I/XG4gICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgc2hlZXQuZGVsZXRlUnVsZShpbmRleCk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBzaGVldC5pbnNlcnRSdWxlKHJ1bGUsIGluZGV4KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgaWYgKCFpc1Byb2QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignU3R5bGVTaGVldDogaWxsZWdhbCBydWxlOiBcXG5cXG4nICsgcnVsZSArICdcXG5cXG5TZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzIwMDA3OTkyIGZvciBtb3JlIGluZm8nKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEluIG9yZGVyIHRvIHByZXNlcnZlIHRoZSBpbmRpY2VzIHdlIGluc2VydCBhIGRlbGV0ZVJ1bGVQbGFjZWhvbGRlclxuICAgICAgICAgIHNoZWV0Lmluc2VydFJ1bGUodGhpcy5fZGVsZXRlZFJ1bGVQbGFjZWhvbGRlciwgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgdGFnID0gdGhpcy5fdGFnc1tpbmRleF07XG4gICAgICAgIGludmFyaWFudCh0YWcsICdvbGQgcnVsZSBhdCBpbmRleCBgJyArIGluZGV4ICsgJ2Agbm90IGZvdW5kJyk7XG4gICAgICAgIHRhZy50ZXh0Q29udGVudCA9IHJ1bGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGVsZXRlUnVsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlbGV0ZVJ1bGUoaW5kZXgpIHtcbiAgICAgIGlmICghdGhpcy5faXNCcm93c2VyKSB7XG4gICAgICAgIHRoaXMuX3NlcnZlclNoZWV0LmRlbGV0ZVJ1bGUoaW5kZXgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9vcHRpbWl6ZUZvclNwZWVkKSB7XG4gICAgICAgIHRoaXMucmVwbGFjZVJ1bGUoaW5kZXgsICcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB0YWcgPSB0aGlzLl90YWdzW2luZGV4XTtcbiAgICAgICAgaW52YXJpYW50KHRhZywgJ3J1bGUgYXQgaW5kZXggYCcgKyBpbmRleCArICdgIG5vdCBmb3VuZCcpO1xuICAgICAgICB0YWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YWcpO1xuICAgICAgICB0aGlzLl90YWdzW2luZGV4XSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZmx1c2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICAgIHRoaXMuX2luamVjdGVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9ydWxlc0NvdW50ID0gMDtcbiAgICAgIGlmICh0aGlzLl9pc0Jyb3dzZXIpIHtcbiAgICAgICAgdGhpcy5fdGFncy5mb3JFYWNoKGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgICAgICByZXR1cm4gdGFnICYmIHRhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhZyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl90YWdzID0gW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBzaW1wbGVyIG9uIHNlcnZlclxuICAgICAgICB0aGlzLl9zZXJ2ZXJTaGVldC5jc3NSdWxlcyA9IFtdO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Nzc1J1bGVzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3NzUnVsZXMoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgaWYgKCF0aGlzLl9pc0Jyb3dzZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZlclNoZWV0LmNzc1J1bGVzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX3RhZ3MucmVkdWNlKGZ1bmN0aW9uIChydWxlcywgdGFnKSB7XG4gICAgICAgIGlmICh0YWcpIHtcbiAgICAgICAgICBydWxlcyA9IHJ1bGVzLmNvbmNhdChfdGhpczIuZ2V0U2hlZXRGb3JUYWcodGFnKS5jc3NSdWxlcy5tYXAoZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiBydWxlLmNzc1RleHQgPT09IF90aGlzMi5fZGVsZXRlZFJ1bGVQbGFjZWhvbGRlciA/IG51bGwgOiBydWxlO1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBydWxlcy5wdXNoKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBydWxlcztcbiAgICAgIH0sIFtdKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdtYWtlU3R5bGVUYWcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtYWtlU3R5bGVUYWcobmFtZSwgY3NzU3RyaW5nLCByZWxhdGl2ZVRvVGFnKSB7XG4gICAgICBpZiAoY3NzU3RyaW5nKSB7XG4gICAgICAgIGludmFyaWFudChpc1N0cmluZyhjc3NTdHJpbmcpLCAnbWFrZVN0eWxlVGFnIGFjY2VwcyBvbmx5IHN0cmluZ3MgYXMgc2Vjb25kIHBhcmFtZXRlcicpO1xuICAgICAgfVxuICAgICAgdmFyIHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICB0YWcudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICB0YWcuc2V0QXR0cmlidXRlKCdkYXRhLScgKyBuYW1lLCAnJyk7XG4gICAgICBpZiAoY3NzU3RyaW5nKSB7XG4gICAgICAgIHRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3NTdHJpbmcpKTtcbiAgICAgIH1cbiAgICAgIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgICAgaWYgKHJlbGF0aXZlVG9UYWcpIHtcbiAgICAgICAgaGVhZC5pbnNlcnRCZWZvcmUodGFnLCByZWxhdGl2ZVRvVGFnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQodGFnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0YWc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbGVuZ3RoJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ydWxlc0NvdW50O1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gU3R5bGVTaGVldDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU3R5bGVTaGVldDtcblxuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTdHlsZVNoZWV0OiAnICsgbWVzc2FnZSArICcuJyk7XG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZWQtanN4L2Rpc3QvbGliL3N0eWxlc2hlZXQuanNcbi8vIG1vZHVsZSBpZCA9IDM5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNSIsIlxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyLmpzJ1xyXG5pbXBvcnQgU2VjdGlvbk9uZSBmcm9tICcuLi9jb21wb25lbnRzL1NlY3Rpb25PbmUuanMnXHJcbmltcG9ydCBNYWluQ3NzIGZyb20gJy4uL2NvbXBvbmVudHMvc3R5bGVzLWpzeC9tYWluX2Nzcy5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpPT4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgXHJcbiAgICAgICAgPE1haW5Dc3MvPlxyXG4gICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgIDxTZWN0aW9uT25lLz5cclxuICAgIFxyXG4gICAgICAgIDxzZWN0aW9uIGlkPVwic2Vjb25kXCIgY2xhc3NOYW1lPVwibWFpblwiPlxyXG4gICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aDI+UHJvbW9jaW9uZXMgeSBUb3VyczwvaDI+XHJcbiAgICAgICAgICAgICAgPHA+U2kgZGVzZWFzIGhhY2VyIGxhcyBtZWpvcmVzIGFjdGl2aWRhZGVzIHF1ZSBicmluZGEgbGEgRm9ydHVuYSBkZSBTYW4gQ2FybG9zLCBpbmdyZXNhIHBhcmEgdmVyIHZpZGVvcyBkZSBsYXMgZGlmZXJlbnRlcyBhY3RpdmlkYWRlcywgc2kgZGVzZWFzIHJlY2liaXIgbG9zIG1lam9yZXMgcHJlY2lvcyBzb2xvIGRlYmVzIGVzY3JpYmlybm9zIGVuIGJyZXZlIHRlIGJyaW5kYXJlbW9zIGxhIGluZm9ybWFjaW9uIHF1ZSBkZXNlYXMuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IGRhcmsgc3R5bGUyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIHsvKlx0PGRpdiBjbGFzcz1cInU0IHUxMi1uYXJyb3dcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzZWN0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDM+UHJvbW9jaW9uZXMgeSBUb3VyczwvaDM+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwPlNpIGRlc2VhcyBjb25vY2VyIGRlIGxhcyBtZWpvcmVzIGFjdGl2aWRhZGVzIHF1ZSBzZSBwdWVkZW4gcmVhbGl6YXIgZW4gbGEgRm9ydHVuYSBkZSBTYW4gQ2FybG9zLCBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRlIGF5dWRhcmVtb3MgYSBlbmNvbnRyYXIgbG9zIG1lam9yZXMgdG91cnMgYWwgcHJlY2lvIG3DoXMgYWNjZXNpYmxlLCB0ZW5lbW9zIGRpZmVyZW50ZXMgdG91cnMgZGUgYWRyZW5hbGluYSBvIHJlbGFqYW50ZXMgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvIHNpIGRlc2VhcyBjb25vY2VyIGRlIGxhIGZsb3JhIHkgZmF1bmEsIHRlbmVtb3MgbGFzIG1lam9yZXMgYWN0aXZpZGFkZXMgcGFyYSBxdWUgZGlzZnJ1dGVzIGRlIHN1cyB2YWNhY2lvbmVzLCBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdExlIGJyaW5kYXJlbW9zIGxvcyBtZWpvcmVzIHNlcnZpY2lvcy4gVmVuZ2EgeSBkaXNmcnV0ZSBkZSBzdSBlc3RhbmNpYSBlbiBlbCBjb25mb3J0IGRlIGxhIGNpdWRhZCwgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvIHNpIHByZWZpZXJlIGxhIHBheiB5IGxhIHRyYW5xdWlsaWRhZCBsZSBvZnJlY2Vtb3MgbnVlc3RybyBob3NwZWRhamUgZW4gZWwgSG9zdGVsIFJpbyBEYW50YSBhbCBtZWpvciBwcmVjaW8geSBjb24gbGFzIG1lam9yZXMgYWN0aXZpZGFkZXMuPC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQqL31cclxuICAgICAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz5Ub3VyczwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiZGVmYXVsdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPklEPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRvdXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGVzY3JpcHRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjx2aWRlbyBzcmM9XCJhc3NldHMvZ2lmL2ZseV9ib2FyZC5tcDRcIiBoZWlnaHQ9ezEwMH0gd2lkdGg9ezEwMH0gYXV0b1BsYXkgY29udHJvbHMgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Rmx5IEJvYXJkPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkVudHJhZGEgYSBCYWxkaSArIEFsbXVlcnpvICsgQ2VuYSB0aXBvIEJ1ZmZldDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4kOTA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjx2aWRlbyBzcmM9XCJhc3NldHMvZ2lmL2Nhbm9weV9Ta3kubXA0XCIgaGVpZ2h0PXsxMDB9IHdpZHRoPXsxMDB9IGF1dG9QbGF5IGNvbnRyb2xzIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmFjb24gKyBBbGltZW50YWNpb248L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RW50cmFkYSBhIFRhYmFjb24gKyBBbG11ZXJ6byArIENlbmEgdGlwbyBCdWZmZXQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JDU1PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48c3BhbiBjbGFzc05hbWU9XCJpY29uIGZhXCI+PGltZyBzcmM9XCJzdGF0aWMvaW1hZ2VzL2thbGFtYnUuanBnXCIgaGVpZ2h0PXsxMDB9IHdpZHRoPXsxMDB9IC8+PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5CYWxkaSArIEFsaW1lbnRhY2lvbjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5FbnRyYWRhIGEgQmFsZGkgKyBBbG11ZXJ6byArIENlbmEgdGlwbyBCdWZmZXQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JDU1PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48c3BhbiBjbGFzc05hbWU9XCJpY29uIGZhXCI+PGltZyBzcmM9XCJzdGF0aWMvaW1hZ2VzL2Vjb3Rlcm1hbGVzLmpwZ1wiIGhlaWdodD17MTAwfSB3aWR0aD17MTAwfSAvPjwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+QmFsZGkgKyBBbGltZW50YWNpb248L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RW50cmFkYSBhIEJhbGRpICsgQWxtdWVyem8gKyBDZW5hIHRpcG8gQnVmZmV0PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiQ1NTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBmYVwiPjxpbWcgc3JjPVwic3RhdGljL2ltYWdlcy9hdHYuanBnXCIgaGVpZ2h0PXsxMDB9IHdpZHRoPXsxMDB9IC8+PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5CYWxkaSArIEFsaW1lbnRhY2lvbjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5FbnRyYWRhIGEgQmFsZGkgKyBBbG11ZXJ6byArIENlbmEgdGlwbyBCdWZmZXQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JDU1PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48c3BhbiBjbGFzc05hbWU9XCJpY29uIGZhXCI+PGltZyBzcmM9XCJzdGF0aWMvaW1hZ2VzL3JhZnRpbmcuanBnXCIgaGVpZ2h0PXsxMDB9IHdpZHRoPXsxMDB9IC8+PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5CYWxkaSArIEFsaW1lbnRhY2lvbjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5FbnRyYWRhIGEgQmFsZGkgKyBBbG11ZXJ6byArIENlbmEgdGlwbyBCdWZmZXQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JDU1PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48c3BhbiBjbGFzc05hbWU9XCJpY29uIGZhXCI+PGltZyBzcmM9XCJzdGF0aWMvaW1hZ2VzL2Nhbm9weS5qcGdcIiBoZWlnaHQ9ezEwMH0gd2lkdGg9ezEwMH0gLz48L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkJhbGRpICsgQWxpbWVudGFjaW9uPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkVudHJhZGEgYSBCYWxkaSArIEFsbXVlcnpvICsgQ2VuYSB0aXBvIEJ1ZmZldDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4kNTU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Zm9vdD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xMDAuMDA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3Rmb290PlxyXG4gICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3RoaXJkXCIgY2xhc3NOYW1lPVwiYnV0dG9uIHNjcm9sbHlcIj5SZXNlcnZhY2lvbmVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1MTIgdTEyLW5hcnJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dmlkZW8gc3JjPVwiYXNzZXRzL2dpZi9mbHlfYm9hcmQubXA0XCIgaGVpZ2h0PXsxNTB9IHdpZHRoPXsxNTB9IGF1dG9QbGF5IGNvbnRyb2xzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInU2XCI+PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJpbWFnZVwiPjxpbWcgc3JjPVwic3RhdGljL2ltYWdlcy9hdHYuanBnXCIgY2xhc3NOYW1lPVwidG91clwiIGhlaWdodD17MTUwfSB3aWR0aD17MTUwfSAvPjwvYT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidTZcIj48YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImltYWdlXCI+PGltZyBzcmM9XCJzdGF0aWMvaW1hZ2VzL2JhbGRpLmpwZ1wiIGNsYXNzTmFtZT1cInRvdXJcIiBoZWlnaHQ9ezE1MH0gd2lkdGg9ezE1MH0gLz48L2E+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInU2XCI+PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJpbWFnZVwiPjxpbWcgc3JjPVwic3RhdGljL2ltYWdlcy9lc3RhbmRhci5qcGdcIiBjbGFzc05hbWU9XCJ0b3VyXCIgaGVpZ2h0PXsyMDB9IHdpZHRoPXsyMDB9IC8+PC9hPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1NlwiPjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaW1hZ2VcIj48aW1nIHNyYz1cInN0YXRpYy9pbWFnZXMvY2VsZXN0ZS5qcGdcIiBjbGFzc05hbWU9XCJ0b3VyXCIgaGVpZ2h0PXsyMDB9IHdpZHRoPXsyMDB9IC8+PC9hPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1NlwiPjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaW1hZ2VcIj48aW1nIHNyYz1cInN0YXRpYy9pbWFnZXMvZWNvdGVybWFsZXMuanBnXCIgY2xhc3NOYW1lPVwidG91clwiIGhlaWdodD17MjAwfSB3aWR0aD17MjAwfSAvPjwvYT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidTZcIj48YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImltYWdlIGZpdFwiPjxpbWcgc3JjPVwic3RhdGljL2ltYWdlcy90dWNhbi5qcGdcIiBjbGFzc05hbWU9XCJ0b3VyXCIgaGVpZ2h0PXsyMDB9IHdpZHRoPXsyMDB9IC8+PC9hPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1NlwiPjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaW1hZ2UgZml0XCI+PGltZyBzcmM9XCJzdGF0aWMvaW1hZ2VzL3JhbmFjcmlzdGFsLmpwZ1wiIGNsYXNzTmFtZT1cInRvdXJcIiBoZWlnaHQ9ezIwMH0gd2lkdGg9ezIwMH0gLz48L2E+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInU2XCI+PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJpbWFnZSBmaXRcIj48aW1nIHNyYz1cInN0YXRpYy9pbWFnZXMvcmFmdGluZy5qcGdcIiBjbGFzc05hbWU9XCJ0b3VyXCIgaGVpZ2h0PXsyMDB9IHdpZHRoPXsyMDB9IC8+PC9hPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1NlwiPjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaW1hZ2UgZml0XCI+PGltZyBzcmM9XCJzdGF0aWMvaW1hZ2VzL3RhYmFjb24uanBnXCIgY2xhc3NOYW1lPVwidG91clwiIGhlaWdodD17MjAwfSB3aWR0aD17MjAwfSAvPjwvYT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidTZcIj48YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImltYWdlIGZpdFwiPjxpbWcgc3JjPVwic3RhdGljL2ltYWdlcy9hdHYuanBnXCIgY2xhc3NOYW1lPVwidG91clwiIGhlaWdodD17MjAwfSB3aWR0aD17MjAwfSAvPjwvYT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidTZcIj48YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImltYWdlIGZpdFwiPjxpbWcgc3JjPVwic3RhdGljL2ltYWdlcy90dWNhbi5qcGdcIiBjbGFzc05hbWU9XCJ0b3VyXCIgaGVpZ2h0PXsyMDB9IHdpZHRoPXsyMDB9IC8+PC9hPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1NlwiPjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaW1hZ2UgZml0XCI+PGltZyBzcmM9XCJzdGF0aWMvaW1hZ2VzL2Nhbm9weS5qcGdcIiBjbGFzc05hbWU9XCJ0b3VyXCIgaGVpZ2h0PXsyMDB9IHdpZHRoPXsyMDB9IC8+PC9hPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgey8qIFRoaXJkICovfVxyXG4gICAgICAgIDxzZWN0aW9uIGlkPVwidGhpcmRcIiBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxoMj5BcHJvdmVjaGEgRGUgTnVlc3Ryb3MgRGVzY3VlbnRvcyBTaSBSZXNlcnZhcyBIb3NwZWRhamUgKyBUb3VyczwvaDI+XHJcbiAgICAgICAgICAgICAgPHA+R3JhdmlkYSBkaXMgcGxhY2VyYXQgbGVjdHVzIGFudGUgdmVsIG51bmMgZXVpc21vZCBlZ2V0IG9ybmFyZSB2YXJpdXMgZ3JhdmlkYSBldWlzbW9kIGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlcXVhdDxiciAvPlxyXG4gICAgICAgICAgICAgICAgZmV1Z2lhdC4gR3JhdmlkYSBkaXMgcGxhY2VyYXQgbGVjdHVzIGFudGUgdmVsIG51bmMgZXVpc21vZCBlZ2V0IG9ybmFyZSB2YXJpdXMgZ3JhdmlkYSBldWlzbW9kIGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCBkYXJrIHN0eWxlM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImltYWdlIGZlYXR1cmVkXCI+PGltZyBzcmM9XCJzdGF0aWMvaW1hZ2VzL3BpYzA3LmpwZ1wiIGFsdCAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1NCB1MTItbmFycm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz5EaWFtIHZpdmFtdXMgdHVycGlzIGxvcmVtIHNvZGFsZXMgbGVjdHVzIG9ybmFyZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxwPkdyYXZpZGEgZGlzIHBsYWNlcmF0IGxlY3R1cyBhbnRlIHZlbCBudW5jIGV1aXNtb2QgZXN0IHR1cnBpcyBzb2RhbGVzLiBEaWFtXHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcG9yIGR1aSBsYWNpbmlhIGVnZXQgb3JuYXJlIHZhcml1cyBncmF2aWRhLiBHcmF2aWRhIGRpcyBwbGFjZXJhdCBsZWN0dXMgYW50ZVxyXG4gICAgICAgICAgICAgICAgICAgIHZlbCBudW5jIGV1aXNtb2QgZXN0IHR1cnBpcyBzb2RhbGVzLiBEaWFtIHRlbXBvciBkdWkgbGFjaW5pYSBhY2N1bXNhbiB2aXZhbXVzXHJcbiAgICAgICAgICAgICAgICAgICAgYXVndWUgY3ViaWxpYSB2aXZhbXVzIG5pc2kgZXUgZWdldCBvcm5hcmUgdmFyaXVzIGdyYXZpZGEgZXVpc21vZC4gIEdyYXZpZGEgZGlzXHJcbiAgICAgICAgICAgICAgICAgICAgbG9yZW0gaXBzdW0gZG9sb3IgcGxhY2VyYXQgbWFnbmEgdGVtcHVzIGZldWdpYXQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD5MZWN0dXMgYW50ZSB2ZWwgbnVuYyBldWlzbW9kIGVzdCB0dXJwaXMgc29kYWxlcy4gRGlhbSB0ZW1wb3IgZHVpIGxhY2luaWFcclxuICAgICAgICAgICAgICAgICAgICBhY2N1bXNhbiB2aXZhbXVzIGF1Z3VlIGN1YmlsaWEgdml2YW11cyBuaXNpIGV1IGVnZXQgb3JuYXJlIHZhcml1cyBncmF2aWRhIGRvbG9yZVxyXG4gICAgICAgICAgICAgICAgICAgIGV1aXNtb2QgbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VxdWF0LiB2aXZhbXVzIG5pc2kgZXUgZWdldCBvcm5hcmUgdmFyaXVzXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhdmlkYSBkb2xvcmUgZXVpc21vZCBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZXF1YXQuIHZpdmFtdXMgbmlzaSBldVxyXG4gICAgICAgICAgICAgICAgICAgIGVnZXQgb3JuYXJlIGV0IG1hZ25hLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1NCB1MTItbmFycm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPkdyYXZpZGEgZGlzIHBsYWNlcmF0IGxlY3R1cyBhbnRlIHZlbCBudW5jIGV1aXNtb2QgZXN0IHR1cnBpcyBzb2RhbGVzLiBEaWFtXHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcG9yIGR1aSBsYWNpbmlhIGVnZXQgb3JuYXJlIHZhcml1cyBncmF2aWRhLiBHcmF2aWRhIGRpcyBwbGFjZXJhdCBsZWN0dXMgYW50ZVxyXG4gICAgICAgICAgICAgICAgICAgIHZlbCBudW5jIGV1aXNtb2QgZXN0IHR1cnBpcyBzb2RhbGVzLiBEaWFtIHRlbXBvciBkdWkgbGFjaW5pYSBhY2N1bXNhbiB2aXZhbXVzXHJcbiAgICAgICAgICAgICAgICAgICAgYXVndWUgY3ViaWxpYSB2aXZhbXVzIG5pc2kgZXUgZWdldCBvcm5hcmUgdmFyaXVzIGdyYXZpZGEgZXVpc21vZC4gIEdyYXZpZGEgZGlzXHJcbiAgICAgICAgICAgICAgICAgICAgbG9yZW0gaXBzdW0gZG9sb3IgcGxhY2VyYXQgbWFnbmEgdGVtcHVzIGZldWdpYXQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD5MZWN0dXMgYW50ZSB2ZWwgbnVuYyBldWlzbW9kIGVzdCB0dXJwaXMgc29kYWxlcy4gRGlhbSB0ZW1wb3IgZHVpIGxhY2luaWFcclxuICAgICAgICAgICAgICAgICAgICBhY2N1bXNhbiB2aXZhbXVzIGF1Z3VlIGN1YmlsaWEgdml2YW11cyBuaXNpIGV1IGVnZXQgb3JuYXJlIHZhcml1cyBncmF2aWRhIGRvbG9yZVxyXG4gICAgICAgICAgICAgICAgICAgIGV1aXNtb2QgbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VxdWF0IGVnZXQgb3JuYXJlIHZhcml1cyBncmF2aWRhIGV1aXNtb2QuXHJcbiAgICAgICAgICAgICAgICAgICAgR3JhdmlkYSBkaXMgbG9yZW0gaXBzdW0gZG9sb3IgcGxhY2VyYXQgbWFnbmEgdGVtcHVzIGZldWdpYXQgbWFnbmEgdGVtcHVzIGxvcmVtLjwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+TGVjdHVzIGFudGUgdmVsIG51bmMgZXVpc21vZCBlc3QgdHVycGlzIHNvZGFsZXMuIERpYW0gdGVtcG9yIGR1aSBsYWNpbmlhXHJcbiAgICAgICAgICAgICAgICAgICAgYWNjdW1zYW4gdml2YW11cyBhdWd1ZSBjdWJpbGlhLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1NCB1MTItbmFycm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlBsYWNlcmF0IGxlY3R1cyBhbnRlIHZlbCBudW5jIGV1aXNtb2QgZXN0IHR1cnBpcyBzb2RhbGVzLiBEaWFtIHRlbXBvciBkdWlcclxuICAgICAgICAgICAgICAgICAgICBsYWNpbmlhIGVnZXQgb3JuYXJlIHZhcml1cyBncmF2aWRhLiBHcmF2aWRhIGRpcyBwbGFjZXJhdCBsZWN0dXMgYW50ZSB2ZWwgbnVuY1xyXG4gICAgICAgICAgICAgICAgICAgIGV1aXNtb2QgZXN0IHR1cnBpcyBzb2RhbGVzLiBEaWFtIHRlbXBvciBkdWkgbGFjaW5pYSBhY2N1bXNhbiB2aXZhbXVzIGF1Z3VlXHJcbiAgICAgICAgICAgICAgICAgICAgY3ViaWxpYSB2aXZhbXVzIG5pc2kgZXUgZWdldCBvcm5hcmUgdmFyaXVzIGdyYXZpZGEgZXVpc21vZC4gIEdyYXZpZGEgZGlzXHJcbiAgICAgICAgICAgICAgICAgICAgbG9yZW0gaXBzdW0gZG9sb3IgcGxhY2VyYXQgbWFnbmEgdGVtcHVzIGZldWdpYXQuIExlY3R1cyBhbnRlIHZlbCBudW5jIGV1aXNtb2RcclxuICAgICAgICAgICAgICAgICAgICBlc3QgdHVycGlzIHNvZGFsZXMuIERpYW0gdGVtcG9yIGR1aSBsYWNpbmlhIGRvbG9yZS48L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPkFjY3Vtc2FuIHZpdmFtdXMgYXVndWUgY3ViaWxpYSB2aXZhbXVzIG5pc2kgZXUgZWdldCBvcm5hcmUgdmFyaXVzIGdyYXZpZGFcclxuICAgICAgICAgICAgICAgICAgICBkb2xvcmUgZXVpc21vZCBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWlzbW9kIGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc2VxdWF0IGxvcmVtIGlwc3VtIGNvbnNlcXVhdCBmZXVnaWF0IHNlZCB0ZW1wdXMgZXVpc21vZCBmZXVnaWF0IHZlcm9lcm9zLjwvcD5cclxuICAgICAgICAgICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2ZvdXJ0aFwiIGNsYXNzTmFtZT1cImJ1dHRvbiBzY3JvbGx5XCI+SXBzdW0gb3JuYXJlIGxvcmVtIGRvbG9yPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICBcclxuICAgICAgICB7LyogRm91cnRoICovfVxyXG4gICAgICAgIDxzZWN0aW9uIGlkPVwiZm91cnRoXCIgY2xhc3NOYW1lPVwibWFpblwiPlxyXG4gICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aDI+U2VkIGZldWdpYXQgaXBzdW0gY29uc2VxdWF0PC9oMj5cclxuICAgICAgICAgICAgICA8cD5HcmF2aWRhIGRpcyBwbGFjZXJhdCBsZWN0dXMgYW50ZSB2ZWwgbnVuYyBldWlzbW9kIGVnZXQgb3JuYXJlIHZhcml1cyBncmF2aWRhIGV1aXNtb2QgbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VxdWF0PGJyIC8+XHJcbiAgICAgICAgICAgICAgICBmZXVnaWF0LiBHcmF2aWRhIGRpcyBwbGFjZXJhdCBsZWN0dXMgYW50ZSB2ZWwgbnVuYyBldWlzbW9kIGVnZXQgb3JuYXJlIHZhcml1cyBncmF2aWRhIGV1aXNtb2QgbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IHN0eWxlNCBmZWF0dXJlZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwZXJjZW50LTc1XCI+XHJcbiAgICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIGFjdGlvbj1cIiNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHBlcmNlbnQtNTBcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1NiB1MTItbW9iaWxlXCI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1NiB1MTItbW9iaWxlXCI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHBlcmNlbnQtNTBcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1MTJcIj48dGV4dGFyZWEgbmFtZT1cIm1lc3NhZ2VcIiBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIiBkZWZhdWx0VmFsdWU9e1wiXCJ9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT48aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ1dHRvblwiIGRlZmF1bHRWYWx1ZT1cIlNlbmQgTWVzc2FnZVwiIC8+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT48aW5wdXQgdHlwZT1cInJlc2V0XCIgY2xhc3NOYW1lPVwiYnV0dG9uIGFsdFwiIGRlZmF1bHRWYWx1ZT1cIkNsZWFyIEZvcm1cIiAvPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIHsvKiBGb290ZXIgKi99XHJcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJmb290ZXJcIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJpY29uc1wiPlxyXG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJpY29uIGZhLXR3aXR0ZXJcIj48c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPlR3aXR0ZXI8L3NwYW4+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImljb24gZmEtZmFjZWJvb2tcIj48c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPkZhY2Vib29rPC9zcGFuPjwvYT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJpY29uIGZhLWluc3RhZ3JhbVwiPjxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+SW5zdGFncmFtPC9zcGFuPjwvYT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJpY29uIGZhLWRyaWJiYmxlXCI+PHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj5EcmliYmJsZTwvc3Bhbj48L2E+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaWNvbiBmYS1naXRodWJcIj48c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPkdpdEh1Yjwvc3Bhbj48L2E+PC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcHlyaWdodFwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgIDxsaT7CqSBVbnRpdGxlZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC48L2xpPjxsaT5EZXNpZ246IDxhIGhyZWY9XCJodHRwOi8vaHRtbDV1cC5uZXRcIj5IVE1MNSBVUDwvYT48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIHsvKiBTY3JpcHRzICovfVxyXG4gICAgPC9kaXY+XHJcbiAgICAgXHJcbilcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgSGVhZGVyQ3NzIGZyb20gJy4vc3R5bGVzLWpzeC9oZWFkZXJfY3NzLmpzJztcclxuZXhwb3J0IGRlZmF1bHQgKCk9PntcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxIZWFkZXJDc3MvPlxyXG4gICAgICAgIDxzZWN0aW9uIGlkPVwiaGVhZGVyXCIgY2xhc3NOYW1lPVwiZGFya1wiPlxyXG4gICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGgxPldlbGNvbWUgdG8gUmlvIERhbnRhIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cD5Ib3NwZWRhamUgeSBUb3VycyBFbiBFbCBNaXNtbyBMdWdhciBBIFVuIFByZWNpbyBBY2Nlc2libGU8L3A+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNmaXJzdFwiIGNsYXNzTmFtZT1cImJ1dHRvbiBzY3JvbGx5XCI+PC9hPlxyXG4gICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJleHBvcnQgZGVmYXVsdCAoKT0+KFxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgIGhlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoZWFkZXIgaDEsIGhlYWRlciBoMiwgaGVhZGVyIGgzLCBoZWFkZXIgaDQsIGhlYWRlciBoNSwgaGVhZGVyIGg2IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaGVhZGVyIHAge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjI1ZW0gMCAwLjVlbSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBIZWFkZXIgKi9cclxuXHJcbiAgICAgICAgICAgICNoZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSg2MywgNDYsIDY1LCAwLjgpLCAgcmdiYSg2NSwgNTUsIDQ2LCAwLjgpKSwgdXJsKFwic3RhdGljL2ltYWdlcy9iZy5qcGdcIik7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6ICBjb3ZlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6ICBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNGVtIDAgMTRlbSAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICNoZWFkZXIgaGVhZGVyIGgxIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuMjVlbTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI2hlYWRlciBoZWFkZXIgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMS4yNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjVlbTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICNoZWFkZXIgZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMS41ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgYH08L3N0eWxlPlxyXG4pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zdHlsZXMtanN4L2hlYWRlcl9jc3MuanMiLCJleHBvcnQgZGVmYXVsdCAoKT0+KFxyXG4gICAgICA8c2VjdGlvbiBpZD1cImZpcnN0XCIgY2xhc3NOYW1lPVwibWFpblwiPlxyXG4gICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aDI+SGFiaXRhY2lvbmVzICZhbXA7IE9mZXJ0YXMgRXNwZWNpYWxlczwvaDI+XHJcbiAgICAgICAgICAgIDxwPlBvZHLDoXMgT2J0ZW5lciBJbmNyZWlibGVzIERlc2N1ZW50b3MgU2kgUmVzZXJ2YXMgSG9zcGVkYWplICsgVG91ciBEZXNkZSBOdWVzdHJhIFBhZ2luYSBXZWIuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibGVmdFwiIHdpZHRoPVwiMjAwXCIgaGVpZ3RoPVwiNTBcIiBzcmM9XCJodHRwOi8vd3d3Lmhvc3RlbHJpb2RhbnRhLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8xMC9sb2dvX3Jpb2RhbnRhLTIuanBnXCIvPlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgZGFyayBzdHlsZTEgZmVhdHVyZWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1NCB1MTItbmFycm93XCI+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmVhdHVyZS1pY29uXCI+PHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBcIj48aW1nIHNyYz1cInN0YXRpYy9pbWFnZXMvYWNjMS5wbmdcIiBoZWlnaHQ9ezEwMH0gd2lkdGg9ezEwMH0gc3R5bGU9e3ttYXJnaW5nVG9wIDogJzE1JSd9fSAvPjwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkhhYml0YWNpb25lcyBTdXBlcmlvcmVzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlNlcnZpY2lvczogRGVzYXl1bm8gaW5jbHVpZG8sIEFpcmUgYWNvbmRpY2lvbmFkbywgVFYgcG9yIGNhYmxlLCBJbnRlcm5ldCBpbmFsYW1icmljbywgQWd1YSBjYWxpZW50ZSwgUGFycXVlbyBjb24gY2FtYXJhcyBkZSBzZWd1cmlkYWQuPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidTQgdTEyLW5hcnJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZlYXR1cmUtaWNvblwiPjxzcGFuIGNsYXNzTmFtZT1cImljb24gXCI+PGltZyBzcmM9XCJzdGF0aWMvaW1hZ2VzL2ZhbjEucG5nXCIgaGVpZ2h0PXs2NX0gd2lkdGg9ezg1fSBzdHlsZT17e21hcmdpbmdUb3A6ICcxNSUnfX0gLz48L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5IYWJpdGFjaW9uZXMgRXN0YW5kYXI8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgPHA+U2VydmljaW9zOiBEZXNheXVubyBpbmNsdWlkbywgVFYgcG9yIGNhYmxlLCBJbnRlcm5ldCBpbmFsYW1icmljbywgQWd1YSBjYWxpZW50ZSwgUGFycXVlbyBjb24gY2FtYXJhcyBkZSBzZWd1cmlkYWQsIFZlbnRpbGFkb3IgZGUgcGllLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInU0IHUxMi1uYXJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmZWF0dXJlLWljb25cIj48c3BhbiBjbGFzc05hbWU9XCJpY29uIFwiPjxpbWcgc3JjPVwic3RhdGljL2ltYWdlcy9iZWQxLnBuZ1wiIGhlaWdodD17NzB9IHdpZHRoPXs2MH0gc3R5bGU9e3ttYXJnaW5nVG9wOiAnMjUlJ319IC8+PC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+SGFiaXRhY2lvbmVzIENvbXBhcnRpZGFzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlNlcnZpY2lvczogRGVzYXl1bm8gaW5jbHVpZG8sIFRWIHBvciBjYWJsZSwgSW50ZXJuZXQgaW5hbGFtYnJpY28sIEFndWEgY2FsaWVudGUsIFBhcnF1ZW8gY29uIGNhbWFyYXMgZGUgc2VndXJpZGFkLCBWZW50aWxhZG9yIGRlIHBpZS48L3A+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3NlY29uZFwiIGNsYXNzTmFtZT1cImJ1dHRvbiBzY3JvbGx5XCI+TnVlc3Ryb3MgVG91cnMgJmFtcDsgRGVzY3VlbnRvczwvYT5cclxuICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbilcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9TZWN0aW9uT25lLmpzIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuQGltcG9ydCB1cmwoXCJmb250LWF3ZXNvbWUubWluLmNzc1wiKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjEwMCwxMDBpdGFsaWMsMzAwLDMwMGl0YWxpYyw0MDAsNDAwaXRhbGljXCIpO1xyXG5cclxuLypcclxuXHRUZXNzZWxsYXRlIGJ5IEhUTUw1IFVQXHJcblx0aHRtbDV1cC5uZXQgfCBAYWpsa25cclxuXHRGcmVlIGZvciBwZXJzb25hbCBhbmQgY29tbWVyY2lhbCB1c2UgdW5kZXIgdGhlIENDQSAzLjAgbGljZW5zZSAoaHRtbDV1cC5uZXQvbGljZW5zZSlcclxuKi9cclxuXHJcbi8qIFJlc2V0ICovXHJcblxyXG5cdGh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLCBhLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsIGRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCwgc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhciwgYiwgdSwgaSwgY2VudGVyLCBkbCwgZHQsIGRkLCBvbCwgdWwsIGxpLCBmaWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCwgdGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsIGFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBmaWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LCB0aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHRcdGJvcmRlcjogMDtcclxuXHRcdGZvbnQtc2l6ZTogMTAwJTtcclxuXHRcdGZvbnQ6IGluaGVyaXQ7XHJcblx0XHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcblx0fVxyXG5cclxuXHRhcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0fVxyXG5cclxuXHRib2R5IHtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxO1xyXG5cdH1cclxuXHJcblx0b2wsIHVsIHtcclxuXHRcdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0fVxyXG5cclxuXHRibG9ja3F1b3RlLCBxIHtcclxuXHRcdHF1b3Rlczogbm9uZTtcclxuXHR9XHJcblxyXG5cdGJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLCBxOmJlZm9yZSwgcTphZnRlciB7XHJcblx0XHRjb250ZW50OiAnJztcclxuXHRcdGNvbnRlbnQ6IG5vbmU7XHJcblx0fVxyXG5cclxuXHR0YWJsZSB7XHJcblx0XHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG5cdFx0Ym9yZGVyLXNwYWNpbmc6IDA7XHJcblx0fVxyXG5cclxuXHRib2R5IHtcclxuXHRcdC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcclxuXHR9XHJcblxyXG4vKiBCb3ggTW9kZWwgKi9cclxuXHJcblx0KiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xyXG5cdFx0LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHR9XHJcblxyXG4vKiBDb250YWluZXJzICovXHJcblxyXG5cdC5jb250YWluZXIge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0XHRtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0fVxyXG5cclxuXHQuY29udGFpbmVyLnBlcmNlbnQtMTI1IHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0bWF4LXdpZHRoOiAxNzAwcHg7XHJcblx0XHRtaW4td2lkdGg6IDEzNjBweDtcclxuXHR9XHJcblxyXG5cdC5jb250YWluZXIucGVyY2VudC03NSB7XHJcblx0XHR3aWR0aDogMTAyMHB4O1xyXG5cdH1cclxuXHJcblx0LmNvbnRhaW5lci5wZXJjZW50LTUwIHtcclxuXHRcdHdpZHRoOiA2ODBweDtcclxuXHR9XHJcblxyXG5cdC5jb250YWluZXIucGVyY2VudC0yNSB7XHJcblx0XHR3aWR0aDogMzQwcHg7XHJcblx0fVxyXG5cclxuXHQuY29udGFpbmVyIHtcclxuXHRcdHdpZHRoOiAxMzYwcHg7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjgwcHgpIHtcclxuXHJcblx0XHQuY29udGFpbmVyLnBlcmNlbnQtMTI1IHtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdG1heC13aWR0aDogMTUwMHB4O1xyXG5cdFx0XHRtaW4td2lkdGg6IDEyMDBweDtcclxuXHRcdH1cclxuXHJcblx0XHQuY29udGFpbmVyLnBlcmNlbnQtNzUge1xyXG5cdFx0XHR3aWR0aDogOTAwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LmNvbnRhaW5lci5wZXJjZW50LTUwIHtcclxuXHRcdFx0d2lkdGg6IDYwMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5jb250YWluZXIucGVyY2VudC0yNSB7XHJcblx0XHRcdHdpZHRoOiAzMDBweDtcclxuXHRcdH1cclxuXHJcblx0XHQuY29udGFpbmVyIHtcclxuXHRcdFx0d2lkdGg6IDEyMDBweDtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuXHJcblx0XHQuY29udGFpbmVyLnBlcmNlbnQtMTI1IHtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdG1heC13aWR0aDogMTIwMHB4O1xyXG5cdFx0XHRtaW4td2lkdGg6IDk2MHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5jb250YWluZXIucGVyY2VudC03NSB7XHJcblx0XHRcdHdpZHRoOiA3MjBweDtcclxuXHRcdH1cclxuXHJcblx0XHQuY29udGFpbmVyLnBlcmNlbnQtNTAge1xyXG5cdFx0XHR3aWR0aDogNDgwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LmNvbnRhaW5lci5wZXJjZW50LTI1IHtcclxuXHRcdFx0d2lkdGg6IDI0MHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5jb250YWluZXIge1xyXG5cdFx0XHR3aWR0aDogOTYwcHg7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcblxyXG5cdFx0LmNvbnRhaW5lci5wZXJjZW50LTEyNSB7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRtYXgtd2lkdGg6IDEyNSU7XHJcblx0XHRcdG1pbi13aWR0aDogMTAwJTtcclxuXHRcdH1cclxuXHJcblx0XHQuY29udGFpbmVyLnBlcmNlbnQtNzUge1xyXG5cdFx0XHR3aWR0aDogNzUlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5jb250YWluZXIucGVyY2VudC01MCB7XHJcblx0XHRcdHdpZHRoOiA1MCU7XHJcblx0XHR9XHJcblxyXG5cdFx0LmNvbnRhaW5lci5wZXJjZW50LTI1IHtcclxuXHRcdFx0d2lkdGg6IDI1JTtcclxuXHRcdH1cclxuXHJcblx0XHQuY29udGFpbmVyIHtcclxuXHRcdFx0d2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzZweCkge1xyXG5cclxuXHRcdC5jb250YWluZXIucGVyY2VudC0xMjUge1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0bWF4LXdpZHRoOiAxMjUlO1xyXG5cdFx0XHRtaW4td2lkdGg6IDEwMCU7XHJcblx0XHR9XHJcblxyXG5cdFx0LmNvbnRhaW5lci5wZXJjZW50LTc1IHtcclxuXHRcdFx0d2lkdGg6IDc1JTtcclxuXHRcdH1cclxuXHJcblx0XHQuY29udGFpbmVyLnBlcmNlbnQtNTAge1xyXG5cdFx0XHR3aWR0aDogNTAlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5jb250YWluZXIucGVyY2VudC0yNSB7XHJcblx0XHRcdHdpZHRoOiAyNSU7XHJcblx0XHR9XHJcblxyXG5cdFx0LmNvbnRhaW5lciB7XHJcblx0XHRcdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcbi8qIEdyaWQgKi9cclxuXHJcblx0LnJvdyB7XHJcblx0XHRib3JkZXItYm90dG9tOiBzb2xpZCAxcHggdHJhbnNwYXJlbnQ7XHJcblx0XHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdH1cclxuXHJcblx0LnJvdyA+ICoge1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdH1cclxuXHJcblx0LnJvdzphZnRlciwgLnJvdzpiZWZvcmUge1xyXG5cdFx0Y29udGVudDogJyc7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdGNsZWFyOiBib3RoO1xyXG5cdFx0aGVpZ2h0OiAwO1xyXG5cdH1cclxuXHJcblx0LnJvdy51bmlmb3JtID4gKiA+IDpmaXJzdC1jaGlsZCB7XHJcblx0XHRtYXJnaW4tdG9wOiAwO1xyXG5cdH1cclxuXHJcblx0LnJvdy51bmlmb3JtID4gKiA+IDpsYXN0LWNoaWxkIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDA7XHJcblx0fVxyXG5cclxuXHQucm93LnBlcmNlbnQtMCA+ICoge1xyXG5cdFx0cGFkZGluZzogMHB4IDAgMCAwcHg7XHJcblx0fVxyXG5cclxuXHQucm93LnBlcmNlbnQtMCB7XHJcblx0XHRtYXJnaW46IDBweCAwIC0xcHggMHB4O1xyXG5cdH1cclxuXHJcblx0LnJvdy51bmlmb3JtLnBlcmNlbnQtMCA+ICoge1xyXG5cdFx0cGFkZGluZzogMHB4IDAgMCAwcHg7XHJcblx0fVxyXG5cclxuXHQucm93LnVuaWZvcm0ucGVyY2VudC0wIHtcclxuXHRcdG1hcmdpbjogMHB4IDAgLTFweCAwcHg7XHJcblx0fVxyXG5cclxuXHQucm93ID4gKiB7XHJcblx0XHRwYWRkaW5nOiA1MHB4IDAgMCA1MHB4O1xyXG5cdH1cclxuXHJcblx0LnJvdyB7XHJcblx0XHRtYXJnaW46IC01MHB4IDAgLTFweCAtNTBweDtcclxuXHR9XHJcblxyXG5cdC5yb3cudW5pZm9ybSA+ICoge1xyXG5cdFx0cGFkZGluZzogNTBweCAwIDAgNTBweDtcclxuXHR9XHJcblxyXG5cdC5yb3cudW5pZm9ybSB7XHJcblx0XHRtYXJnaW46IC01MHB4IDAgLTFweCAtNTBweDtcclxuXHR9XHJcblxyXG5cdC5yb3cucGVyY2VudC0yMDAgPiAqIHtcclxuXHRcdHBhZGRpbmc6IDEwMHB4IDAgMCAxMDBweDtcclxuXHR9XHJcblxyXG5cdC5yb3cucGVyY2VudC0yMDAge1xyXG5cdFx0bWFyZ2luOiAtMTAwcHggMCAtMXB4IC0xMDBweDtcclxuXHR9XHJcblxyXG5cdC5yb3cudW5pZm9ybS5wZXJjZW50LTIwMCA+ICoge1xyXG5cdFx0cGFkZGluZzogMTAwcHggMCAwIDEwMHB4O1xyXG5cdH1cclxuXHJcblx0LnJvdy51bmlmb3JtLnBlcmNlbnQtMjAwIHtcclxuXHRcdG1hcmdpbjogLTEwMHB4IDAgLTFweCAtMTAwcHg7XHJcblx0fVxyXG5cclxuXHQucm93LnBlcmNlbnQtMTUwID4gKiB7XHJcblx0XHRwYWRkaW5nOiA3NXB4IDAgMCA3NXB4O1xyXG5cdH1cclxuXHJcblx0LnJvdyAucGVyY2VudC0xNTAge1xyXG5cdFx0bWFyZ2luOiAtNzVweCAwIC0xcHggLTc1cHg7XHJcblx0fVxyXG5cclxuXHQucm93LnVuaWZvcm0ucGVyY2VudC0xNTAgPiAqIHtcclxuXHRcdHBhZGRpbmc6IDc1cHggMCAwIDc1cHg7XHJcblx0fVxyXG5cclxuXHQucm93LnVuaWZvcm0ucGVyY2VudC0xNTAge1xyXG5cdFx0bWFyZ2luOiAtNzVweCAwIC0xcHggLTc1cHg7XHJcblx0fVxyXG5cclxuXHQucm93LnBlcmNlbnQtNTAgPiAqIHtcclxuXHRcdHBhZGRpbmc6IDI1cHggMCAwIDI1cHg7XHJcblx0fVxyXG5cclxuXHQucm93LnBlcmNlbnQtNTAge1xyXG5cdFx0bWFyZ2luOiAtMjVweCAwIC0xcHggLTI1cHg7XHJcblx0fVxyXG5cclxuXHQucm93LnVuaWZvcm0ucGVyY2VudC01MCA+ICoge1xyXG5cdFx0cGFkZGluZzogMjVweCAwIDAgMjVweDtcclxuXHR9XHJcblxyXG5cdC5yb3cudW5pZm9ybS5wZXJjZW50LTUwIHtcclxuXHRcdG1hcmdpbjogLTI1cHggMCAtMXB4IC0yNXB4O1xyXG5cdH1cclxuXHJcblx0LnJvdy5wZXJjZW50LTI1ID4gKiB7XHJcblx0XHRwYWRkaW5nOiAxMi41cHggMCAwIDEyLjVweDtcclxuXHR9XHJcblxyXG5cdC5yb3cucGVyY2VudC0yNSB7XHJcblx0XHRtYXJnaW46IC0xMi41cHggMCAtMXB4IC0xMi41cHg7XHJcblx0fVxyXG5cclxuXHQucm93LnVuaWZvcm0ucGVyY2VudC0yNSA+ICoge1xyXG5cdFx0cGFkZGluZzogMTIuNXB4IDAgMCAxMi41cHg7XHJcblx0fVxyXG5cclxuXHQucm93LnVuaWZvcm0ucGVyY2VudC0yNSB7XHJcblx0XHRtYXJnaW46IC0xMi41cHggMCAtMXB4IC0xMi41cHg7XHJcblx0fVxyXG5cclxuXHQudTEyLCAudTEyeCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGNsZWFyOiBub25lO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0fVxyXG5cclxuXHQudTExLCAudTExeCB7XHJcblx0XHR3aWR0aDogOTEuNjY2NjY2NjY2NyU7XHJcblx0XHRjbGVhcjogbm9uZTtcclxuXHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdH1cclxuXHJcblx0LnUxMCwgLnUxMHgge1xyXG5cdFx0d2lkdGg6IDgzLjMzMzMzMzMzMzMlO1xyXG5cdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHR9XHJcblxyXG5cdC51OSwgLnU5eCB7XHJcblx0XHR3aWR0aDogNzUlO1xyXG5cdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHR9XHJcblxyXG5cdC51OCwgLnU4eCB7XHJcblx0XHR3aWR0aDogNjYuNjY2NjY2NjY2NyU7XHJcblx0XHRjbGVhcjogbm9uZTtcclxuXHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdH1cclxuXHJcblx0LnU3LCAudTd4IHtcclxuXHRcdHdpZHRoOiA1OC4zMzMzMzMzMzMzJTtcclxuXHRcdGNsZWFyOiBub25lO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0fVxyXG5cclxuXHQudTYsIC51Nngge1xyXG5cdFx0d2lkdGg6IDUwJTtcclxuXHRcdGNsZWFyOiBub25lO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0fVxyXG5cclxuXHQudTUsIC51NXgge1xyXG5cdFx0d2lkdGg6IDQxLjY2NjY2NjY2NjclO1xyXG5cdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHR9XHJcblxyXG5cdC51NCwgLnU0eCB7XHJcblx0XHR3aWR0aDogMzMuMzMzMzMzMzMzMyU7XHJcblx0XHRjbGVhcjogbm9uZTtcclxuXHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdH1cclxuXHJcblx0LnUzLCAudTN4IHtcclxuXHRcdHdpZHRoOiAyNSU7XHJcblx0XHRjbGVhcjogbm9uZTtcclxuXHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdH1cclxuXHJcblx0LnUyLCAudTJ4IHtcclxuXHRcdHdpZHRoOiAxNi42NjY2NjY2NjY3JTtcclxuXHRcdGNsZWFyOiBub25lO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0fVxyXG5cclxuXHQudTEsIC51MXgge1xyXG5cdFx0d2lkdGg6IDguMzMzMzMzMzMzMyU7XHJcblx0XHRjbGVhcjogbm9uZTtcclxuXHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdH1cclxuXHJcblx0LnUxMnggKyAqLFxyXG5cdC51MTF4ICsgKixcclxuXHQudTEweCArICosXHJcblx0LnU5eCArICosXHJcblx0LnU4eCArICosXHJcblx0LnU3eCArICosXHJcblx0LnU2eCArICosXHJcblx0LnU1eCArICosXHJcblx0LnU0eCArICosXHJcblx0LnUzeCArICosXHJcblx0LnUyeCArICosXHJcblx0LnUxeCArICoge1xyXG5cdFx0Y2xlYXI6IGxlZnQ7XHJcblx0fVxyXG5cclxuXHQuLXUxMXUge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDkxLjY2NjY3JTtcclxuXHR9XHJcblxyXG5cdC4tdTEwdSB7XHJcblx0XHRtYXJnaW4tbGVmdDogODMuMzMzMzMlO1xyXG5cdH1cclxuXHJcblx0Li11OXUge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDc1JTtcclxuXHR9XHJcblxyXG5cdC4tdTh1IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiA2Ni42NjY2NyU7XHJcblx0fVxyXG5cclxuXHQuLXU3dSB7XHJcblx0XHRtYXJnaW4tbGVmdDogNTguMzMzMzMlO1xyXG5cdH1cclxuXHJcblx0Li11NnUge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDUwJTtcclxuXHR9XHJcblxyXG5cdC4tdTV1IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiA0MS42NjY2NyU7XHJcblx0fVxyXG5cclxuXHQuLXU0dSB7XHJcblx0XHRtYXJnaW4tbGVmdDogMzMuMzMzMzMlO1xyXG5cdH1cclxuXHJcblx0Li11M3Uge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDI1JTtcclxuXHR9XHJcblxyXG5cdC4tdTJ1IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxNi42NjY2NyU7XHJcblx0fVxyXG5cclxuXHQuLXUxdSB7XHJcblx0XHRtYXJnaW4tbGVmdDogOC4zMzMzMyU7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjgwcHgpIHtcclxuXHJcblx0XHQucm93ID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDQwcHggMCAwIDQwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdyB7XHJcblx0XHRcdG1hcmdpbjogLTQwcHggMCAtMXB4IC00MHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybSA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiA0MHB4IDAgMCA0MHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybSB7XHJcblx0XHRcdG1hcmdpbjogLTQwcHggMCAtMXB4IC00MHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cucGVyY2VudC0yMDAgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogODBweCAwIDAgODBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtMjAwIHtcclxuXHRcdFx0bWFyZ2luOiAtODBweCAwIC0xcHggLTgwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtLnBlcmNlbnQtMjAwID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDgwcHggMCAwIDgwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtLnBlcmNlbnQtMjAwIHtcclxuXHRcdFx0bWFyZ2luOiAtODBweCAwIC0xcHggLTgwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy5wZXJjZW50LTE1MCA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiA2MHB4IDAgMCA2MHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cucGVyY2VudC0xNTAge1xyXG5cdFx0XHRtYXJnaW46IC02MHB4IDAgLTFweCAtNjBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ucGVyY2VudC0xNTAgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogNjBweCAwIDAgNjBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ucGVyY2VudC0xNTAge1xyXG5cdFx0XHRtYXJnaW46IC02MHB4IDAgLTFweCAtNjBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtNTAgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogMjBweCAwIDAgMjBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtNTAge1xyXG5cdFx0XHRtYXJnaW46IC0yMHB4IDAgLTFweCAtMjBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ucGVyY2VudC01MCA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiAyMHB4IDAgMCAyMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybS5wZXJjZW50LTUwIHtcclxuXHRcdFx0bWFyZ2luOiAtMjBweCAwIC0xcHggLTIwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy5wZXJjZW50LTI1ID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDEwcHggMCAwIDEwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy5wZXJjZW50LTI1IHtcclxuXHRcdFx0bWFyZ2luOiAtMTBweCAwIC0xcHggLTEwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtLnBlcmNlbnQtMjUgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogMTBweCAwIDAgMTBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ucGVyY2VudC0yNSB7XHJcblx0XHRcdG1hcmdpbjogLTEwcHggMCAtMXB4IC0xMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC51MTItd2lkZSwgLnUxMngtd2lkZSB7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUxMS13aWRlLCAudTExeC13aWRlIHtcclxuXHRcdFx0d2lkdGg6IDkxLjY2NjY2NjY2NjclO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUxMC13aWRlLCAudTEweC13aWRlIHtcclxuXHRcdFx0d2lkdGg6IDgzLjMzMzMzMzMzMzMlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnU5LXdpZGUsIC51OXgtd2lkZSB7XHJcblx0XHRcdHdpZHRoOiA3NSU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTgtd2lkZSwgLnU4eC13aWRlIHtcclxuXHRcdFx0d2lkdGg6IDY2LjY2NjY2NjY2NjclO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnU3LXdpZGUsIC51N3gtd2lkZSB7XHJcblx0XHRcdHdpZHRoOiA1OC4zMzMzMzMzMzMzJTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51Ni13aWRlLCAudTZ4LXdpZGUge1xyXG5cdFx0XHR3aWR0aDogNTAlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnU1LXdpZGUsIC51NXgtd2lkZSB7XHJcblx0XHRcdHdpZHRoOiA0MS42NjY2NjY2NjY3JTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51NC13aWRlLCAudTR4LXdpZGV7XHJcblx0XHRcdHdpZHRoOiAzMy4zMzMzMzMzMzMzJTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51My13aWRlLCAudTN4LXdpZGUge1xyXG5cdFx0XHR3aWR0aDogMjUlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUyLXdpZGUsIC51Mngtd2lkZSB7XHJcblx0XHRcdHdpZHRoOiAxNi42NjY2NjY2NjY3JTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51MS13aWRlLCAudTF4LXdpZGUge1xyXG5cdFx0XHR3aWR0aDogOC4zMzMzMzMzMzMzJTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51MTJ4LXdpZGUgKyAqLFxyXG5cdFx0LnUxMXgtd2lkZSArICosXHJcblx0XHQudTEweC13aWRlICsgKixcclxuXHRcdC51OXgtd2lkZSArICosXHJcblx0XHQudTh4LXdpZGUgKyAqLFxyXG5cdFx0LnU3eC13aWRlICsgKixcclxuXHRcdC51Nngtd2lkZSArICosXHJcblx0XHQudTV4LXdpZGUgKyAqLFxyXG5cdFx0LnU0eC13aWRlKyAqLFxyXG5cdFx0LnUzeC13aWRlICsgKixcclxuXHRcdC51Mngtd2lkZSArICosXHJcblx0XHQudTF4LXdpZGUgKyAqIHtcclxuXHRcdFx0Y2xlYXI6IGxlZnQ7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11MTEtd2lkZSB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA5MS42NjY2NyU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11MTAtd2lkZSB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA4My4zMzMzMyU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11OS13aWRlIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDc1JTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXU4LXdpZGUge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogNjYuNjY2NjclO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTctd2lkZSB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA1OC4zMzMzMyU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11Ni13aWRlIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDUwJTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXU1LXdpZGUge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogNDEuNjY2NjclO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTQtd2lkZSB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11My13aWRlIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDI1JTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXUyLXdpZGUge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMTYuNjY2NjclO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTEtd2lkZSB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA4LjMzMzMzJTtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuXHJcblx0XHQucm93ID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDMwcHggMCAwIDMwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdyB7XHJcblx0XHRcdG1hcmdpbjogLTMwcHggMCAtMXB4IC0zMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybSA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiAzMHB4IDAgMCAzMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybSB7XHJcblx0XHRcdG1hcmdpbjogLTMwcHggMCAtMXB4IC0zMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cucGVyY2VudC0yMDAgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogNjBweCAwIDAgNjBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtMjAwIHtcclxuXHRcdFx0bWFyZ2luOiAtNjBweCAwIC0xcHggLTYwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtLnBlcmNlbnQtMjAwID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDYwcHggMCAwIDYwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtLnBlcmNlbnQtMjAwIHtcclxuXHRcdFx0bWFyZ2luOiAtNjBweCAwIC0xcHggLTYwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy5wZXJjZW50LTE1MCA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiA0NXB4IDAgMCA0NXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cucGVyY2VudC0xNTAge1xyXG5cdFx0XHRtYXJnaW46IC00NXB4IDAgLTFweCAtNDVweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ucGVyY2VudC0xNTAgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogNDVweCAwIDAgNDVweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ucGVyY2VudC0xNTAge1xyXG5cdFx0XHRtYXJnaW46IC00NXB4IDAgLTFweCAtNDVweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtNTAgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogMTVweCAwIDAgMTVweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtNTAge1xyXG5cdFx0XHRtYXJnaW46IC0xNXB4IDAgLTFweCAtMTVweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ucGVyY2VudC01MCA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiAxNXB4IDAgMCAxNXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybS5wZXJjZW50LTUwIHtcclxuXHRcdFx0bWFyZ2luOiAtMTVweCAwIC0xcHggLTE1cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy5wZXJjZW50LTI1ID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDcuNXB4IDAgMCA3LjVweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtMjUge1xyXG5cdFx0XHRtYXJnaW46IC03LjVweCAwIC0xcHggLTcuNXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybS5wZXJjZW50LTI1ID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDcuNXB4IDAgMCA3LjVweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ucGVyY2VudC0yNSB7XHJcblx0XHRcdG1hcmdpbjogLTcuNXB4IDAgLTFweCAtNy41cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUxMi1ub3JtYWwsIC51MTJ4LW5vcm1hbCB7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUxMS1ub3JtYWwsIC51MTF4LW5vcm1hbCB7XHJcblx0XHRcdHdpZHRoOiA5MS42NjY2NjY2NjY3JTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51MTAtbm9ybWFsLCAudTEweC1ub3JtYWwge1xyXG5cdFx0XHR3aWR0aDogODMuMzMzMzMzMzMzMyU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTktbm9ybWFsLCAudTl4LW5vcm1hbCB7XHJcblx0XHRcdHdpZHRoOiA3NSU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTgtbm9ybWFsLCAudTh4LW5vcm1hbCB7XHJcblx0XHRcdHdpZHRoOiA2Ni42NjY2NjY2NjY3JTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51Ny1ub3JtYWwsIC51N3gtbm9ybWFsIHtcclxuXHRcdFx0d2lkdGg6IDU4LjMzMzMzMzMzMzMlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnU2LW5vcm1hbCwgLnU2eC1ub3JtYWwge1xyXG5cdFx0XHR3aWR0aDogNTAlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnU1LW5vcm1hbCwgLnU1eC1ub3JtYWwge1xyXG5cdFx0XHR3aWR0aDogNDEuNjY2NjY2NjY2NyU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTQtbm9ybWFsLCAudTR4LW5vcm1hbCB7XHJcblx0XHRcdHdpZHRoOiAzMy4zMzMzMzMzMzMzJTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51My1ub3JtYWwsIC51M3gtbm9ybWFsIHtcclxuXHRcdFx0d2lkdGg6IDI1JTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51Mi1ub3JtYWwsIC51Mngtbm9ybWFsIHtcclxuXHRcdFx0d2lkdGg6IDE2LjY2NjY2NjY2NjclO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUxLW5vcm1hbCwgLnUxeC1ub3JtYWwge1xyXG5cdFx0XHR3aWR0aDogOC4zMzMzMzMzMzMzJTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51MTJ4LW5vcm1hbCArICosXHJcblx0XHQudTExeC1ub3JtYWwgKyAqLFxyXG5cdFx0LnUxMHgtbm9ybWFsICsgKixcclxuXHRcdC51OXgtbm9ybWFsICsgKixcclxuXHRcdC51OHgtbm9ybWFsICsgKixcclxuXHRcdC51N3gtbm9ybWFsICsgKixcclxuXHRcdC51Nngtbm9ybWFsICsgKixcclxuXHRcdC51NXgtbm9ybWFsICsgKixcclxuXHRcdC51NHgtbm9ybWFsICsgKixcclxuXHRcdC51M3gtbm9ybWFsICsgKixcclxuXHRcdC51Mngtbm9ybWFsICsgKixcclxuXHRcdC51MXgtbm9ybWFsICsgKiB7XHJcblx0XHRcdGNsZWFyOiBsZWZ0O1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTExLW5vcm1hbCB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA5MS42NjY2NyU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11MTAtbm9ybWFsIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDgzLjMzMzMzJTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXU5LW5vcm1hbCB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA3NSU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11OC1ub3JtYWwge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogNjYuNjY2NjclO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTctbm9ybWFsIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDU4LjMzMzMzJTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXU2LW5vcm1hbCB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA1MCU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11NS1ub3JtYWwge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogNDEuNjY2NjclO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTQtbm9ybWFsIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXUzLW5vcm1hbCB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAyNSU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11Mi1ub3JtYWwge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMTYuNjY2NjclO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTEtbm9ybWFsIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDguMzMzMzMlO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG5cclxuXHRcdC5yb3cgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogMjVweCAwIDAgMjVweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93IHtcclxuXHRcdFx0bWFyZ2luOiAtMjVweCAwIC0xcHggLTI1cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDI1cHggMCAwIDI1cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtIHtcclxuXHRcdFx0bWFyZ2luOiAtMjVweCAwIC0xcHggLTI1cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy5wZXJjZW50LTIwMCA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiA1MHB4IDAgMCA1MHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cucGVyY2VudC0yMDAge1xyXG5cdFx0XHRtYXJnaW46IC01MHB4IDAgLTFweCAtNTBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ucGVyY2VudC0yMDAgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogNTBweCAwIDAgNTBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ucGVyY2VudC0yMDAge1xyXG5cdFx0XHRtYXJnaW46IC01MHB4IDAgLTFweCAtNTBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtMTUwID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDM3LjVweCAwIDAgMzcuNXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cucGVyY2VudC0xNTAge1xyXG5cdFx0XHRtYXJnaW46IC0zNy41cHggMCAtMXB4IC0zNy41cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtLnBlcmNlbnQtMTUwID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDM3LjVweCAwIDAgMzcuNXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybS5wZXJjZW50LTE1MCB7XHJcblx0XHRcdG1hcmdpbjogLTM3LjVweCAwIC0xcHggLTM3LjVweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtNTAgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogMTIuNXB4IDAgMCAxMi41cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy5wZXJjZW50LTUwIHtcclxuXHRcdFx0bWFyZ2luOiAtMTIuNXB4IDAgLTFweCAtMTIuNXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybS5wZXJjZW50LTUwID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDEyLjVweCAwIDAgMTIuNXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybS5wZXJjZW50LTUwIHtcclxuXHRcdFx0bWFyZ2luOiAtMTIuNXB4IDAgLTFweCAtMTIuNXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cucGVyY2VudC0yNSA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiA2LjI1cHggMCAwIDYuMjVweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtMjUge1xyXG5cdFx0XHRtYXJnaW46IC02LjI1cHggMCAtMXB4IC02LjI1cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtLnBlcmNlbnQtMjUgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogNi4yNXB4IDAgMCA2LjI1cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtLnBlcmNlbnQtMjUge1xyXG5cdFx0XHRtYXJnaW46IC02LjI1cHggMCAtMXB4IC02LjI1cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUxMi1uYXJyb3csIC51MTJ4LW5hcnJvdyB7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUxMS1uYXJyb3csIC51MTF4LW5hcnJvdyB7XHJcblx0XHRcdHdpZHRoOiA5MS42NjY2NjY2NjY3JTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51MTAtbmFycm93LCAudTEweC1uYXJyb3cge1xyXG5cdFx0XHR3aWR0aDogODMuMzMzMzMzMzMzMyU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTktbmFycm93LCAudTl4LW5hcnJvdyB7XHJcblx0XHRcdHdpZHRoOiA3NSU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTgtbmFycm93LCAudTh4LW5hcnJvdyB7XHJcblx0XHRcdHdpZHRoOiA2Ni42NjY2NjY2NjY3JTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51Ny1uYXJyb3csIC51N3gtbmFycm93IHtcclxuXHRcdFx0d2lkdGg6IDU4LjMzMzMzMzMzMzMlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnU2LW5hcnJvdywgLnU2eC1uYXJyb3cge1xyXG5cdFx0XHR3aWR0aDogNTAlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnU1LW5hcnJvdywgLnU1eC1uYXJyb3cge1xyXG5cdFx0XHR3aWR0aDogNDEuNjY2NjY2NjY2NyU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTQtbmFycm93LCAudTR4LW5hcnJvdyB7XHJcblx0XHRcdHdpZHRoOiAzMy4zMzMzMzMzMzMzJTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51My1uYXJyb3csIC51M3gtbmFycm93IHtcclxuXHRcdFx0d2lkdGg6IDI1JTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51Mi1uYXJyb3csIC51MngtbmFycm93IHtcclxuXHRcdFx0d2lkdGg6IDE2LjY2NjY2NjY2NjclO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUxLW5hcnJvdywgLnUxeC1uYXJyb3cge1xyXG5cdFx0XHR3aWR0aDogOC4zMzMzMzMzMzMzJTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51MTJ4LW5hcnJvdyArICosXHJcblx0XHQudTExeC1uYXJyb3cgKyAqLFxyXG5cdFx0LnUxMHgtbmFycm93ICsgKixcclxuXHRcdC51OXgtbmFycm93ICsgKixcclxuXHRcdC51OHgtbmFycm93ICsgKixcclxuXHRcdC51N3gtbmFycm93ICsgKixcclxuXHRcdC51NngtbmFycm93ICsgKixcclxuXHRcdC51NXgtbmFycm93ICsgKixcclxuXHRcdC51NHgtbmFycm93ICsgKixcclxuXHRcdC51M3gtbmFycm93ICsgKixcclxuXHRcdC51MngtbmFycm93ICsgKixcclxuXHRcdC51MXgtbmFycm93ICsgKiB7XHJcblx0XHRcdGNsZWFyOiBsZWZ0O1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTExLW5hcnJvdyB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA5MS42NjY2NyU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11MTAtbmFycm93IHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDgzLjMzMzMzJTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXU5LW5hcnJvdyB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA3NSU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11OC1uYXJyb3cge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogNjYuNjY2NjclO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTctbmFycm93IHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDU4LjMzMzMzJTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXU2LW5hcnJvdyB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA1MCU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11NS1uYXJyb3cge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogNDEuNjY2NjclO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTQtbmFycm93IHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXUzLW5hcnJvdyB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAyNSU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11Mi1uYXJyb3cge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMTYuNjY2NjclO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTEtbmFycm93IHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDguMzMzMzMlO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSB7XHJcblxyXG5cdFx0LnJvdyA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiAyMHB4IDAgMCAyMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cge1xyXG5cdFx0XHRtYXJnaW46IC0yMHB4IDAgLTFweCAtMjBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0gPiAqIHtcclxuXHRcdFx0cGFkZGluZzogMjBweCAwIDAgMjBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ge1xyXG5cdFx0XHRtYXJnaW46IC0yMHB4IDAgLTFweCAtMjBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtMjAwID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDQwcHggMCAwIDQwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy5wZXJjZW50LTIwMCB7XHJcblx0XHRcdG1hcmdpbjogLTQwcHggMCAtMXB4IC00MHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybS5wZXJjZW50LTIwMCA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiA0MHB4IDAgMCA0MHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybS5wZXJjZW50LTIwMCB7XHJcblx0XHRcdG1hcmdpbjogLTQwcHggMCAtMXB4IC00MHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cucGVyY2VudC0xNTAgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogMzBweCAwIDAgMzBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtMTUwIHtcclxuXHRcdFx0bWFyZ2luOiAtMzBweCAwIC0xcHggLTMwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtLnBlcmNlbnQtMTUwID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDMwcHggMCAwIDMwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtLnBlcmNlbnQtMTUwIHtcclxuXHRcdFx0bWFyZ2luOiAtMzBweCAwIC0xcHggLTMwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy5wZXJjZW50LTUwID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDEwcHggMCAwIDEwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy5wZXJjZW50LTUwIHtcclxuXHRcdFx0bWFyZ2luOiAtMTBweCAwIC0xcHggLTEwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtLnBlcmNlbnQtNTAgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogMTBweCAwIDAgMTBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ucGVyY2VudC01MCB7XHJcblx0XHRcdG1hcmdpbjogLTEwcHggMCAtMXB4IC0xMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cucGVyY2VudC0yNSA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiA1cHggMCAwIDVweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtMjUge1xyXG5cdFx0XHRtYXJnaW46IC01cHggMCAtMXB4IC01cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtLnBlcmNlbnQtMjUgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogNXB4IDAgMCA1cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtLnBlcmNlbnQtMjUge1xyXG5cdFx0XHRtYXJnaW46IC01cHggMCAtMXB4IC01cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUxMi1tb2JpbGUsIC51MTJ4LW1vYmlsZSB7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUxMS1tb2JpbGUsIC51MTF4LW1vYmlsZSB7XHJcblx0XHRcdHdpZHRoOiA5MS42NjY2NjY2NjY3JTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51MTAtbW9iaWxlLCAudTEweC1tb2JpbGUge1xyXG5cdFx0XHR3aWR0aDogODMuMzMzMzMzMzMzMyU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTktbW9iaWxlLCAudTl4LW1vYmlsZSB7XHJcblx0XHRcdHdpZHRoOiA3NSU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTgtbW9iaWxlLCAudTh4LW1vYmlsZSB7XHJcblx0XHRcdHdpZHRoOiA2Ni42NjY2NjY2NjY3JTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51Ny1tb2JpbGUsIC51N3gtbW9iaWxlIHtcclxuXHRcdFx0d2lkdGg6IDU4LjMzMzMzMzMzMzMlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnU2LW1vYmlsZSwgLnU2eC1tb2JpbGUge1xyXG5cdFx0XHR3aWR0aDogNTAlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnU1LW1vYmlsZSwgLnU1eC1tb2JpbGUge1xyXG5cdFx0XHR3aWR0aDogNDEuNjY2NjY2NjY2NyU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTQtbW9iaWxlLCAudTR4LW1vYmlsZSB7XHJcblx0XHRcdHdpZHRoOiAzMy4zMzMzMzMzMzMzJTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51My1tb2JpbGUsIC51M3gtbW9iaWxlIHtcclxuXHRcdFx0d2lkdGg6IDI1JTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51Mi1tb2JpbGUsIC51MngtbW9iaWxlIHtcclxuXHRcdFx0d2lkdGg6IDE2LjY2NjY2NjY2NjclO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUxLW1vYmlsZSwgLnUxeC1tb2JpbGUge1xyXG5cdFx0XHR3aWR0aDogOC4zMzMzMzMzMzMzJTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51MTJ4LW1vYmlsZSArICosXHJcblx0XHQudTExeC1tb2JpbGUgKyAqLFxyXG5cdFx0LnUxMHgtbW9iaWxlICsgKixcclxuXHRcdC51OXgtbW9iaWxlICsgKixcclxuXHRcdC51OHgtbW9iaWxlICsgKixcclxuXHRcdC51N3gtbW9iaWxlICsgKixcclxuXHRcdC51NngtbW9iaWxlICsgKixcclxuXHRcdC51NXgtbW9iaWxlICsgKixcclxuXHRcdC51NHgtbW9iaWxlICsgKixcclxuXHRcdC51M3gtbW9iaWxlICsgKixcclxuXHRcdC51MngtbW9iaWxlICsgKixcclxuXHRcdC51MXgtbW9iaWxlICsgKiB7XHJcblx0XHRcdGNsZWFyOiBsZWZ0O1xyXG5cdFx0fVxyXG5cclxuXHRcdC51MTEtbW9iaWxlIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDkxLjY2NjY3JTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXUxMC1tb2JpbGUge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogODMuMzMzMzMlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTktbW9iaWxlIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDc1JTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXU4LW1vYmlsZSB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA2Ni42NjY2NyU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11Ny1tb2JpbGUge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogNTguMzMzMzMlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTYtbW9iaWxlIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDUwJTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXU1LW1vYmlsZSB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA0MS42NjY2NyU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11NC1tb2JpbGUge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMzMuMzMzMzMlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTMtbW9iaWxlIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDI1JTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXUyLW1vYmlsZSB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAxNi42NjY2NyU7XHJcblx0XHR9XHJcbjZ1XHJcblx0XHQuLXUxLW1vYmlsZSB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA4LjMzMzMzJTtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuLyogQmFzaWMgKi9cclxuXHJcblx0QC1tcy12aWV3cG9ydCB7XHJcblx0XHR3aWR0aDogZGV2aWNlLXdpZHRoO1xyXG5cdH1cclxuXHJcblx0Ym9keSB7XHJcblx0XHRiYWNrZ3JvdW5kOiAjRjhGOEY4O1xyXG5cdFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDMwMDtcclxuXHRcdGZvbnQtc2l6ZTogMTdwdDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxLjc1ZW07XHJcblx0XHRjb2xvcjogIzg4ODtcclxuXHRcdC13ZWJraXQtdGV4dC1zdHJva2U6IDAuMXB4O1xyXG5cdH1cclxuXHJcblx0XHRib2R5LmlzLWxvYWRpbmcgKiB7XHJcblx0XHRcdC1tb3otdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0XHQtd2Via2l0LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuXHRcdFx0LW1zLXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuXHRcdFx0dHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0XHQtbW96LWFuaW1hdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0XHQtd2Via2l0LWFuaW1hdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0XHQtbXMtYW5pbWF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcblx0XHRcdGFuaW1hdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0fVxyXG5cclxuXHQuZGFyayB7XHJcblx0XHRjb2xvcjogI2FhYTtcclxuXHRcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjUpO1xyXG5cdH1cclxuXHJcblx0aW5wdXQsIHRleHRhcmVhLCBzZWxlY3Qge1xyXG5cdFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDMwMDtcclxuXHRcdGZvbnQtc2l6ZTogMTdwdDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxLjc1ZW07XHJcblx0XHRjb2xvcjogIzg4ODtcclxuXHRcdC13ZWJraXQtdGV4dC1zdHJva2U6IDAuMXB4O1xyXG5cdH1cclxuXHJcblx0aDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcblx0XHRjb2xvcjogIzY2NjtcclxuXHRcdG1hcmdpbjogMCAwIDFlbSAwO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDEwMDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuXHR9XHJcblxyXG5cdGgxIGEsIGgyIGEsIGgzIGEsIGg0IGEsIGg1IGEsIGg2IGEge1xyXG5cdFx0Y29sb3I6IGluaGVyaXQ7XHJcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0fVxyXG5cclxuXHQuZGFyayBoMSwgLmRhcmsgaDIsIC5kYXJrIGgzLCAuZGFyayBoNCwgLmRhcmsgaDUsIC5kYXJrIGg2IHtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdH1cclxuXHJcblx0c3Ryb25nLCBiIHtcclxuXHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0XHRjb2xvcjogaW5oZXJpdDtcclxuXHR9XHJcblxyXG5cdC5kYXJrIHN0cm9uZywgLmRhcmsgYiB7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xyXG5cdH1cclxuXHJcblx0ZW0sIGkge1xyXG5cdFx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG5cdH1cclxuXHJcblx0YSB7XHJcblx0XHQtbW96LXRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblx0XHQtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblx0XHQtbXMtdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHRcdHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblx0XHRjb2xvcjogaW5oZXJpdDtcclxuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdGJvcmRlci1ib3R0b206IGRvdHRlZCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuXHR9XHJcblxyXG5cdFx0YTpob3ZlciB7XHJcblx0XHRcdGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdFx0fVxyXG5cclxuXHQuZGFyayBhIHtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG5cdH1cclxuXHJcblx0XHQuZGFyayBhOmhvdmVyIHtcclxuXHRcdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuXHRcdH1cclxuXHJcblx0c3ViIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHRvcDogMC41ZW07XHJcblx0XHRmb250LXNpemU6IDAuOGVtO1xyXG5cdH1cclxuXHJcblx0c3VwIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHRvcDogLTAuNWVtO1xyXG5cdFx0Zm9udC1zaXplOiAwLjhlbTtcclxuXHR9XHJcblxyXG5cdGhyIHtcclxuXHRcdGJvcmRlcjogMDtcclxuXHRcdGJvcmRlci10b3A6IHNvbGlkIDFweCAjZTZlNmU2O1xyXG5cdFx0bWFyZ2luOiAyZW0gMCAyZW0gMDtcclxuXHR9XHJcblxyXG5cdC5kYXJrIGhyIHtcclxuXHRcdGJvcmRlci10b3AtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuXHR9XHJcblxyXG5cdGJsb2NrcXVvdGUge1xyXG5cdFx0Ym9yZGVyLWxlZnQ6IHNvbGlkIDAuMjVlbSAjZTZlNmU2O1xyXG5cdFx0cGFkZGluZzogMWVtIDAgMWVtIDJlbTtcclxuXHRcdGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHR9XHJcblxyXG5cdC5kYXJrIGJsb2NrcXVvdGUge1xyXG5cdFx0Ym9yZGVyLWxlZnQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuXHR9XHJcblxyXG5cdHAsIHVsLCBvbCwgZGwsIHRhYmxlIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDFlbTtcclxuXHR9XHJcblxyXG5cdHAge1xyXG5cdFx0dGV4dC1hbGlnbjoganVzdGlmeTtcclxuXHR9XHJcblxyXG5cdGhlYWRlciB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxZW07XHJcblx0fVxyXG5cclxuXHRcdGhlYWRlciBoMSwgaGVhZGVyIGgyLCBoZWFkZXIgaDMsIGhlYWRlciBoNCwgaGVhZGVyIGg1LCBoZWFkZXIgaDYge1xyXG5cdFx0XHRtYXJnaW46IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0aGVhZGVyIHAge1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRwYWRkaW5nOiAwLjI1ZW0gMCAwLjVlbSAwO1xyXG5cdFx0fVxyXG5cclxuXHRmb290ZXIge1xyXG5cdFx0cGFkZGluZy10b3A6IDEuNWVtO1xyXG5cdH1cclxuXHJcblx0YnIuY2xlYXIge1xyXG5cdFx0Y2xlYXI6IGJvdGg7XHJcblx0fVxyXG5cclxuXHQuZmVhdHVyZWQge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0XHQuZmVhdHVyZWQgcCB7XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdH1cclxuXHJcbi8qIFNlY3Rpb25zL0FydGljbGUgKi9cclxuXHJcblx0c2VjdGlvbixcclxuXHRhcnRpY2xlIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDNlbTtcclxuXHR9XHJcblxyXG5cdHNlY3Rpb24gPiA6bGFzdC1jaGlsZCxcclxuXHRhcnRpY2xlID4gOmxhc3QtY2hpbGQsXHJcblx0c2VjdGlvbjpsYXN0LWNoaWxkLFxyXG5cdGFydGljbGU6bGFzdC1jaGlsZCB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdH1cclxuXHJcblx0LnJvdyA+IHNlY3Rpb24sXHJcblx0LnJvdyA+IGFydGljbGUge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHR9XHJcblxyXG4vKiBJbWFnZSAqL1xyXG5cclxuXHQuaW1hZ2Uge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0Ym9yZGVyOiAwO1xyXG5cdH1cclxuXHJcblx0XHQuaW1hZ2U6YWZ0ZXIge1xyXG5cdFx0XHRjb250ZW50OiAnJztcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHR0b3A6IDA7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdGJhY2tncm91bmQ6IHVybChcInN0YXRpYy9pbWFnZXMvb3ZlcmxheS5wbmdcIik7XHJcblx0XHR9XHJcblxyXG5cdFx0LmltYWdlIGltZyB7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMC41ZW07XHJcblx0XHR9XHJcblxyXG5cdFx0LmltYWdlLmZlYXR1cmVkIHtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRtYXJnaW46IDAgMCAyZW0gMDtcclxuXHRcdH1cclxuXHJcblx0XHQuaW1hZ2UuZml0IHtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5pbWFnZS5sZWZ0IHtcclxuXHRcdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHRcdG1hcmdpbjogMCAyZW0gMmVtIDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LmltYWdlLmNlbnRlcmVkIHtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdG1hcmdpbjogMCAwIDJlbSAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdFx0LmltYWdlLmNlbnRlcmVkIGltZyB7XHJcblx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRcdFx0d2lkdGg6IGF1dG87XHJcblx0XHRcdH1cclxuXHJcbi8qIExpc3QgKi9cclxuXHJcblx0dWwuZGVmYXVsdCB7XHJcblx0XHRsaXN0LXN0eWxlOiBkaXNjO1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAxZW07XHJcblx0fVxyXG5cclxuXHRcdHVsLmRlZmF1bHQgbGkge1xyXG5cdFx0XHRwYWRkaW5nLWxlZnQ6IDAuNWVtO1xyXG5cdFx0fVxyXG5cclxuXHR1bC5pY29ucyB7XHJcblx0XHRjdXJzb3I6IGRlZmF1bHQ7XHJcblx0fVxyXG5cclxuXHRcdHVsLmljb25zIGxpIHtcclxuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRwYWRkaW5nLWxlZnQ6IDAuNzVlbTtcclxuXHRcdH1cclxuXHJcblx0XHR1bC5pY29ucyBhIHtcclxuXHRcdFx0LW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cdFx0XHQtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblx0XHRcdC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cdFx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdHdpZHRoOiAyLjc1ZW07XHJcblx0XHRcdGhlaWdodDogMi43NWVtO1xyXG5cdFx0XHRsaW5lLWhlaWdodDogMi44ZW07XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0Ym9yZGVyOiAwO1xyXG5cdFx0XHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2U2ZTZlNjtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTAwJTtcclxuXHRcdFx0Y29sb3I6ICNhYWE7XHJcblx0XHR9XHJcblxyXG5cdFx0XHR1bC5pY29ucyBhOmhvdmVyIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDI1KTtcclxuXHRcdFx0fVxyXG5cclxuXHR1bC5tZW51IHtcclxuXHRcdGN1cnNvcjogZGVmYXVsdDtcclxuXHR9XHJcblxyXG5cdFx0dWwubWVudSBsaSB7XHJcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDFlbTtcclxuXHRcdFx0Ym9yZGVyLWxlZnQ6IHNvbGlkIDFweCAjZTZlNmU2O1xyXG5cdFx0XHRwYWRkaW5nOiAwIDAgMCAwLjVlbTtcclxuXHRcdFx0bWFyZ2luOiAwIDAgMCAwLjVlbTtcclxuXHRcdH1cclxuXHJcblx0XHRcdHVsLm1lbnUgbGk6Zmlyc3QtY2hpbGQge1xyXG5cdFx0XHRcdGJvcmRlci1sZWZ0OiAwO1xyXG5cdFx0XHRcdHBhZGRpbmctbGVmdDogMDtcclxuXHRcdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdFx0fVxyXG5cclxuXHR1bC5hY3Rpb25zIHtcclxuXHRcdGN1cnNvcjogZGVmYXVsdDtcclxuXHR9XHJcblxyXG5cdFx0dWwuYWN0aW9ucyBsaSB7XHJcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0bWFyZ2luOiAwIDAgMCAwLjVlbTtcclxuXHRcdH1cclxuXHJcblx0XHRcdHVsLmFjdGlvbnMgbGk6Zmlyc3QtY2hpbGQge1xyXG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdG9sLmRlZmF1bHQge1xyXG5cdFx0bGlzdC1zdHlsZTogZGVjaW1hbDtcclxuXHRcdHBhZGRpbmctbGVmdDogMS4yNWVtO1xyXG5cdH1cclxuXHJcblx0XHRvbC5kZWZhdWx0IGxpIHtcclxuXHRcdFx0cGFkZGluZy1sZWZ0OiAwLjI1ZW07XHJcblx0XHR9XHJcblxyXG4vKiBGb3JtICovXHJcblxyXG5cdGZvcm0gLmFjdGlvbnMge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHR9XHJcblxyXG5cdGZvcm0gbGFiZWwge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0fVxyXG5cclxuXHRmb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG5cdGZvcm0gaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG5cdGZvcm0gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxyXG5cdGZvcm0gc2VsZWN0LFxyXG5cdGZvcm0gLnNlbGVjdCxcclxuXHRmb3JtIHRleHRhcmVhIHtcclxuXHRcdC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cdFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblx0XHQtbXMtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cdFx0dHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cdFx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG5cdFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cdFx0LW1zLWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0XHRhcHBlYXJhbmNlOiBub25lO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2U2ZTZlNjtcclxuXHRcdGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHBhZGRpbmc6IDAuODVlbSAxZW0gMC44NWVtIDFlbTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcclxuXHRcdGJvcmRlcjogMDtcclxuXHR9XHJcblxyXG5cdFx0Zm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyxcclxuXHRcdGZvcm0gaW5wdXRbdHlwZT1cImVtYWlsXCJdOmZvY3VzLFxyXG5cdFx0Zm9ybSBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Zm9jdXMsXHJcblx0XHRmb3JtIHNlbGVjdDpmb2N1cyxcclxuXHRcdGZvcm0gLnNlbGVjdDpmb2N1cyxcclxuXHRcdGZvcm0gdGV4dGFyZWE6Zm9jdXMge1xyXG5cdFx0XHRvdXRsaW5lOiAwO1xyXG5cdFx0XHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2FmZDllMDtcclxuXHRcdFx0YmFja2dyb3VuZDogI2ZjZmNmYztcclxuXHRcdH1cclxuXHJcblx0Zm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuXHRmb3JtIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuXHRmb3JtIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcclxuXHRmb3JtIHNlbGVjdCB7XHJcblx0XHRsaW5lLWhlaWdodDogMS4yNWVtO1xyXG5cdH1cclxuXHJcblx0Zm9ybSB0ZXh0YXJlYSB7XHJcblx0XHRtaW4taGVpZ2h0OiAxM2VtO1xyXG5cdH1cclxuXHJcblx0Zm9ybSBzZWxlY3Qge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHJcblx0XHRmb3JtIHNlbGVjdCBvcHRpb246bm90KDpjaGVja2VkKSB7XHJcblx0XHRcdGNvbG9yOiAjMDAwO1xyXG5cdFx0fVxyXG5cclxuXHRmb3JtIC5zZWxlY3Qge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHRcdG92ZXJmbG93LXg6IGhpZGRlbjtcclxuXHRcdG91dGxpbmU6IDA7XHJcblx0fVxyXG5cclxuXHRcdGZvcm0gLnNlbGVjdCBzZWxlY3Qge1xyXG5cdFx0XHR3aWR0aDogY2FsYygxMDAlICsgMmVtKTtcclxuXHRcdFx0YmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0XHRib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcblx0XHRcdGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHR9XHJcblxyXG5cdFx0XHRmb3JtIC5zZWxlY3Qgc2VsZWN0OjotbW96LWZvY3VzLWlubmVyIHtcclxuXHRcdFx0XHRib3JkZXI6IDA7XHJcblx0XHRcdFx0b3V0bGluZTogMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdGZvcm0gLnNlbGVjdDpiZWZvcmUge1xyXG5cdFx0XHRjb250ZW50OiAnJztcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHR0b3A6IDE1JTtcclxuXHRcdFx0cmlnaHQ6IDFlbTtcclxuXHRcdFx0d2lkdGg6IDEuMjVlbTtcclxuXHRcdFx0aGVpZ2h0OiA3NSU7XHJcblx0XHRcdGJhY2tncm91bmQ6IHVybChcInN0YXRpYy9pbWFnZXMvYXJyb3cuc3ZnXCIpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xyXG5cdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcblx0XHRcdHotaW5kZXg6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9ybSAuc2VsZWN0IHNlbGVjdDo6LW1zLWV4cGFuZCB7XHJcblx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHR9XHJcblxyXG5cdGZvcm0gOjotbW96LWZvY3VzLWlubmVyIHtcclxuXHRcdGJvcmRlcjogMDtcclxuXHR9XHJcblxyXG5cdGZvcm0gLmZvcm1lcml6ZS1wbGFjZWhvbGRlciB7XHJcblx0XHRjb2xvcjogIzU1NSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0Zm9ybSA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG5cdFx0Y29sb3I6ICNhYWEgIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdGZvcm0gOi1tb3otcGxhY2Vob2xkZXIge1xyXG5cdFx0Y29sb3I6ICM1NTUgIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdGZvcm0gOjotbW96LXBsYWNlaG9sZGVyIHtcclxuXHRcdGNvbG9yOiAjNTU1ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHRmb3JtIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG5cdFx0Y29sb3I6ICM1NTUgIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC5kYXJrIGZvcm0gaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcblx0LmRhcmsgZm9ybSBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcblx0LmRhcmsgZm9ybSBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXHJcblx0LmRhcmsgZm9ybSBzZWxlY3QsXHJcblx0LmRhcmsgZm9ybSAuc2VsZWN0LFxyXG5cdC5kYXJrIGZvcm0gdGV4dGFyZWEge1xyXG5cdFx0YmFja2dyb3VuZDogbm9uZTtcclxuXHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHR9XHJcblxyXG5cdFx0LmRhcmsgZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyxcclxuXHRcdC5kYXJrIGZvcm0gaW5wdXRbdHlwZT1cImVtYWlsXCJdOmZvY3VzLFxyXG5cdFx0LmRhcmsgZm9ybSBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Zm9jdXMsXHJcblx0XHQuZGFyayBmb3JtIHNlbGVjdDpmb2N1cyxcclxuXHRcdC5kYXJrIGZvcm0gLnNlbGVjdDpmb2N1cyxcclxuXHRcdC5kYXJrIGZvcm0gdGV4dGFyZWE6Zm9jdXMge1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcblx0XHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZmZmO1xyXG5cdFx0fVxyXG5cclxuXHQuZGFyayBmb3JtIC5zZWxlY3Q6YmVmb3JlIHtcclxuXHRcdGJhY2tncm91bmQ6IHVybChcInN0YXRpYy9pbWFnZXMvZGFyay1hcnJvdy5zdmdcIikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XHJcblx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcblx0fVxyXG5cclxuXHQuZGFyayBmb3JtIC5mb3JtZXJpemUtcGxhY2Vob2xkZXIge1xyXG5cdFx0Y29sb3I6ICNhYWEgIWltcG9ydGFudDtcclxuXHRcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQuZGFyayBmb3JtIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcblx0XHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0LmRhcmsgZm9ybSA6LW1vei1wbGFjZWhvbGRlciB7XHJcblx0XHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0LmRhcmsgZm9ybSA6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG5cdFx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSkgIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC5kYXJrIGZvcm0gOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcblx0XHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcbi8qIFRhYmxlICovXHJcblxyXG5cdHRhYmxlIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHJcblx0XHR0YWJsZS5kZWZhdWx0IHtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0XHR0YWJsZS5kZWZhdWx0IHRib2R5IHRyIHtcclxuXHRcdFx0XHRib3JkZXI6IHNvbGlkIDFweCAjZTZlNmU2O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRhYmxlLmRlZmF1bHQgdGJvZHkgdHI6bnRoLWNoaWxkKDJuKzIpIHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0dGFibGUuZGVmYXVsdCB0ZCB7XHJcblx0XHRcdFx0cGFkZGluZzogMC41ZW0gMWVtIDAuNWVtIDFlbTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGFibGUuZGVmYXVsdCB0aCB7XHJcblx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRcdFx0XHRwYWRkaW5nOiAwLjVlbSAxZW0gMWVtIDFlbTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGFibGUuZGVmYXVsdCB0Zm9vdCB0ZCB7XHJcblx0XHRcdFx0cGFkZGluZy10b3A6IDFlbTtcclxuXHRcdFx0fVxyXG5cclxuXHQuZGFyayB0YWJsZS5kZWZhdWx0IHRib2R5IHRyIHtcclxuXHRcdGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG5cdH1cclxuXHJcblx0XHQuZGFyayB0YWJsZS5kZWZhdWx0IHRib2R5IHRyOm50aC1jaGlsZCgybisyKSB7XHJcblx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuXHRcdH1cclxuXHJcbi8qIEJ1dHRvbiAqL1xyXG5cclxuXHRpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLFxyXG5cdGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXHJcblx0aW5wdXRbdHlwZT1cInJlc2V0XCJdLFxyXG5cdGJ1dHRvbixcclxuXHQuYnV0dG9uIHtcclxuXHRcdC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cdFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblx0XHQtbXMtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cdFx0dHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cdFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0YmFja2dyb3VuZDogIzNkM2QzZDtcclxuXHRcdHBhZGRpbmc6IDAuODVlbSAzZW0gMC44NWVtIDNlbTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcclxuXHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdGJvcmRlcjogMDtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdH1cclxuXHJcblx0XHRpbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmhvdmVyLFxyXG5cdFx0aW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlcixcclxuXHRcdGlucHV0W3R5cGU9XCJyZXNldFwiXTpob3ZlcixcclxuXHRcdGJ1dHRvbjpob3ZlcixcclxuXHRcdC5idXR0b246aG92ZXIge1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjNGY0ZjRmO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlucHV0W3R5cGU9XCJidXR0b25cIl0uYWx0LFxyXG5cdFx0aW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5hbHQsXHJcblx0XHRpbnB1dFt0eXBlPVwicmVzZXRcIl0uYWx0LFxyXG5cdFx0YnV0dG9uLmFsdCxcclxuXHRcdC5idXR0b24uYWx0IHtcclxuXHRcdFx0Y29sb3I6IGluaGVyaXQ7XHJcblx0XHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZTZlNmU2O1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiBub25lO1xyXG5cdFx0fVxyXG5cclxuXHRcdFx0aW5wdXRbdHlwZT1cImJ1dHRvblwiXS5hbHQ6aG92ZXIsXHJcblx0XHRcdGlucHV0W3R5cGU9XCJzdWJtaXRcIl0uYWx0OmhvdmVyLFxyXG5cdFx0XHRpbnB1dFt0eXBlPVwicmVzZXRcIl0uYWx0OmhvdmVyLFxyXG5cdFx0XHRidXR0b24uYWx0OmhvdmVyLFxyXG5cdFx0XHQuYnV0dG9uLmFsdDpob3ZlciB7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAyNSk7XHJcblx0XHRcdH1cclxuXHJcblx0LmRhcmsgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSxcclxuXHQuZGFyayBpbnB1dFt0eXBlPVwic3VibWl0XCJdLFxyXG5cdC5kYXJrIGlucHV0W3R5cGU9XCJyZXNldFwiXSxcclxuXHQuZGFyayBidXR0b24sXHJcblx0LmRhcmsgLmJ1dHRvbiB7XHJcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xyXG5cdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNmZmY7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHR9XHJcblxyXG5cdFx0LmRhcmsgaW5wdXRbdHlwZT1cImJ1dHRvblwiXTpob3ZlcixcclxuXHRcdC5kYXJrIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIsXHJcblx0XHQuZGFyayBpbnB1dFt0eXBlPVwicmVzZXRcIl06aG92ZXIsXHJcblx0XHQuZGFyayBidXR0b246aG92ZXIsXHJcblx0XHQuZGFyayAuYnV0dG9uOmhvdmVyIHtcclxuXHRcdFx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcclxuXHRcdH1cclxuXHJcblx0XHQuZGFyayBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLmFsdCxcclxuXHRcdC5kYXJrIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0uYWx0LFxyXG5cdFx0LmRhcmsgaW5wdXRbdHlwZT1cInJlc2V0XCJdLmFsdCxcclxuXHRcdC5kYXJrIGJ1dHRvbi5hbHQsXHJcblx0XHQuZGFyayAuYnV0dG9uLmFsdCB7XHJcblx0XHRcdGJhY2tncm91bmQ6IG5vbmU7XHJcblx0XHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcblx0XHR9XHJcblxyXG5cdFx0XHQuZGFyayBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLmFsdDpob3ZlcixcclxuXHRcdFx0LmRhcmsgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5hbHQ6aG92ZXIsXHJcblx0XHRcdC5kYXJrIGlucHV0W3R5cGU9XCJyZXNldFwiXS5hbHQ6aG92ZXIsXHJcblx0XHRcdC5kYXJrIGJ1dHRvbi5hbHQ6aG92ZXIsXHJcblx0XHRcdC5kYXJrIC5idXR0b24uYWx0OmhvdmVyIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xyXG5cdFx0XHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZmZmO1xyXG5cdFx0XHR9XHJcblxyXG4vKiBGZWF0dXJlIEljb24gKi9cclxuXHJcblx0LmZlYXR1cmUtaWNvbiB7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogNWVtO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMi43NWVtO1xyXG5cdFx0Y3Vyc29yOiBkZWZhdWx0O1xyXG5cdH1cclxuXHJcblx0XHQuZmVhdHVyZS1pY29uIC5pY29uIHtcclxuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHR3aWR0aDogMmVtO1xyXG5cdFx0XHRoZWlnaHQ6IDJlbTtcclxuXHRcdFx0Zm9udC1zaXplOiA0LjVlbTtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTAwJTtcclxuXHRcdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICM2NjY7XHJcblx0XHRcdGNvbG9yOiAjNjY2O1xyXG5cdFx0XHRsaW5lLWhlaWdodDogMi4xZW07XHJcblx0XHR9XHJcblxyXG5cdFx0LmZlYXR1cmUtaWNvbjpiZWZvcmUge1xyXG5cdFx0XHRjb250ZW50OiAnJztcclxuXHRcdFx0YmFja2dyb3VuZDogIzY2NjtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRib3R0b206IDA7XHJcblx0XHRcdGxlZnQ6IDUwJTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IC0wLjMyNWVtO1xyXG5cdFx0XHR3aWR0aDogMC42NWVtO1xyXG5cdFx0XHRoZWlnaHQ6IDAuNjVlbTtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcblx0XHR9XHJcblxyXG5cdFx0LmZlYXR1cmUtaWNvbjphZnRlciB7XHJcblx0XHRcdGNvbnRlbnQ6ICcnO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGxlZnQ6IDUwJTtcclxuXHRcdFx0Ym90dG9tOiAwLjY1ZW07XHJcblx0XHRcdHdpZHRoOiAxcHg7XHJcblx0XHRcdGhlaWdodDogNC4zNWVtO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjNjY2O1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogLTAuNXB4O1xyXG5cdFx0fVxyXG5cclxuXHQuZGFyayAuZmVhdHVyZS1pY29uIC5pY29uIHtcclxuXHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XHJcblx0XHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0fVxyXG5cclxuXHQuZGFyayAuZmVhdHVyZS1pY29uOmJlZm9yZSwgLmRhcmsgLmZlYXR1cmUtaWNvbjphZnRlciB7XHJcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcblx0fVxyXG5cclxuLyogSWNvbnMgKi9cclxuXHJcblx0Lmljb24ge1xyXG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdH1cclxuXHJcblx0XHQuaWNvbjpiZWZvcmUge1xyXG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuXHRcdFx0Zm9udC1zaXplOiAxLjI1ZW07XHJcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdFx0Zm9udC1zdHlsZTogbm9ybWFsO1xyXG5cdFx0XHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdFx0XHRsaW5lLWhlaWdodDogMTtcclxuXHRcdFx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcblx0XHRcdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcblx0XHR9XHJcblxyXG5cdFx0Lmljb24gPiAubGFiZWwge1xyXG5cdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0fVxyXG5cclxuXHJcbi8qIE1haW4gU2VjdGlvbnMgKi9cclxuXHJcblx0Lm1haW4ge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdH1cclxuXHJcblx0XHQubWFpbiA+IGhlYWRlciB7XHJcblx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0cGFkZGluZzogNWVtIDAgNWVtIDA7XHJcblx0XHRcdG1hcmdpbjogMDtcclxuXHRcdH1cclxuXHJcblx0XHRcdC5tYWluID4gaGVhZGVyIGgyIHtcclxuXHRcdFx0XHRmb250LXNpemU6IDIuMjVlbTtcclxuXHRcdFx0XHRmb250LXdlaWdodDogMTAwO1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5tYWluID4gaGVhZGVyIHAge1xyXG5cdFx0XHRcdG1hcmdpbjogMmVtIDAgMCAwO1xyXG5cdFx0XHRcdHBhZGRpbmc6IDA7XHJcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0Lm1haW4gPiAuY29udGVudCB7XHJcblx0XHRcdHBhZGRpbmc6IDZlbSAwIDZlbSAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdFx0Lm1haW4gPiAuY29udGVudCBoMyB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxLjVlbTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Lm1haW4gPiAuY29udGVudC5kYXJrIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjNDMzO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQubWFpbiA+IC5jb250ZW50LnN0eWxlMSB7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogdXJsKFwic3RhdGljL2ltYWdlcy9iZ3RyLnN2Z1wiKSB0b3AgcmlnaHQgbm8tcmVwZWF0LCB1cmwoXCJzdGF0aWMvaW1hZ2VzL2JnYmwuc3ZnXCIpIGJvdHRvbSBsZWZ0IG5vLXJlcGVhdCwgdXJsKFwic3RhdGljL2ltYWdlcy9iZ2JsLnN2Z1wiKSBib3R0b20gbGVmdCBuby1yZXBlYXQsIHVybChcInN0YXRpYy9pbWFnZXMvb3ZlcmxheS5wbmdcIiksIGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2IzOWM2OCwgI2E1NjM2NSwgIzQxMmU0Yyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5tYWluID4gLmNvbnRlbnQuc3R5bGUyIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoXCJzdGF0aWMvaW1hZ2VzL2JndHIuc3ZnXCIpIHRvcCByaWdodCBuby1yZXBlYXQsIHVybChcInN0YXRpYy9pbWFnZXMvYmdibC5zdmdcIikgYm90dG9tIGxlZnQgbm8tcmVwZWF0LCB1cmwoXCJzdGF0aWMvaW1hZ2VzL292ZXJsYXkucG5nXCIpLCBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMzODQ5NTUsICM2NTUzNjEsICM4NTUwNWYpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQubWFpbiA+IC5jb250ZW50LnN0eWxlMyB7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogdXJsKFwic3RhdGljL2ltYWdlcy9iZ3RyLnN2Z1wiKSB0b3AgcmlnaHQgbm8tcmVwZWF0LCB1cmwoXCJzdGF0aWMvaW1hZ2VzL2JnYmwuc3ZnXCIpIGJvdHRvbSBsZWZ0IG5vLXJlcGVhdCwgdXJsKFwic3RhdGljL2ltYWdlcy9vdmVybGF5LnBuZ1wiKSwgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNWY3OTZiLCAjM2E0ZTU5LCAjMmYzOTRlKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Lm1haW4gPiAuY29udGVudC5zdHlsZTQge1xyXG5cdFx0XHRcdHBhZGRpbmctdG9wOiAwO1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRcdH1cclxuXHJcbi8qIEZvb3RlciAqL1xyXG5cclxuXHQjZm9vdGVyIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDRlbSAwIDhlbSAwO1xyXG5cdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAxcHggMCAwICNlNmU2ZTY7XHJcblx0fVxyXG5cclxuXHRcdCNmb290ZXIgLmNvcHlyaWdodCB7XHJcblx0XHRcdG1hcmdpbi10b3A6IDNlbTtcclxuXHRcdFx0Zm9udC1zaXplOiAwLjhlbTtcclxuXHRcdFx0Y29sb3I6ICNhYWE7XHJcblx0XHR9XHJcblxyXG5cdFx0XHQjZm9vdGVyIC5jb3B5cmlnaHQgYSB7XHJcblx0XHRcdFx0Y29sb3I6IGluaGVyaXQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHQjZm9vdGVyIHVsLmljb25zIGEge1xyXG5cdFx0XHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2Q2ZDZkNjtcclxuXHRcdH1cclxuXHJcbi8qIFdpZGUgKi9cclxuXHJcblx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY4MHB4KSB7XHJcblxyXG5cdFx0LyogQmFzaWMgKi9cclxuXHJcblx0XHRcdGJvZHksIGlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0IHtcclxuXHRcdFx0XHRmb250LXNpemU6IDE1cHQ7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuNzVlbTtcclxuXHRcdFx0fVxyXG5cclxuXHR9XHJcblxyXG4vKiBOb3JtYWwgKi9cclxuXHJcblx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcblxyXG5cdFx0LyogQmFzaWMgKi9cclxuXHJcblx0XHRcdGJvZHksIGlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0IHtcclxuXHRcdFx0XHRmb250LXNpemU6IDEzcHQ7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuNjVlbTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdC8qIEZlYXR1cmUgSWNvbiAqL1xyXG5cclxuXHRcdFx0LmZlYXR1cmUtaWNvbiB7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMmVtO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0LyogSGVhZGVyICovXHJcblxyXG5cdFx0XHQjaGVhZGVyIHtcclxuXHRcdFx0XHRwYWRkaW5nOiAxMmVtIDAgMTJlbSAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0LyogTWFpbiBTZWN0aW9ucyAqL1xyXG5cclxuXHRcdFx0Lm1haW4gPiBoZWFkZXIge1xyXG5cdFx0XHRcdHBhZGRpbmc6IDRlbSAwIDRlbSAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQubWFpbiA+IC5jb250ZW50IHtcclxuXHRcdFx0XHRwYWRkaW5nOiA0ZW0gMCA0ZW0gMDtcclxuXHRcdFx0fVxyXG5cclxuXHR9XHJcblxyXG4vKiBOYXJyb3cgKi9cclxuXHJcblx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcblxyXG5cdFx0LyogQmFzaWMgKi9cclxuXHJcblx0XHRcdGhlYWRlciwgZm9vdGVyLCBoMiwgaDMsIGg0LCBoNSwgaDYsIGhlYWRlciA+IHAge1xyXG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdC8qIFNlY3Rpb25zL0FydGljbGUgKi9cclxuXHJcblx0XHRcdHNlY3Rpb24sIGFydGljbGUge1xyXG5cdFx0XHRcdG1hcmdpbjogMCAwIDIuNWVtIDAgIWltcG9ydGFudDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LnJvdyA+IHNlY3Rpb24sIC5yb3cgPiBhcnRpY2xlIHtcclxuXHRcdFx0XHRtYXJnaW46IDAgMCAyLjVlbSAwICFpbXBvcnRhbnQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHQvKiBUYWJsZSAqL1xyXG5cclxuXHRcdFx0LnRhYmxlLXdyYXBwZXIge1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdG92ZXJmbG93LXg6IHNjcm9sbDtcclxuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDFweDtcclxuXHRcdFx0XHQtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcblx0XHRcdH1cclxuXHJcblx0XHQvKiBMaXN0ICovXHJcblxyXG5cdFx0XHR1bC5hY3Rpb25zIHtcclxuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdH1cclxuXHJcblx0XHQvKiBIZWFkZXIgKi9cclxuXHJcblx0XHRcdCNoZWFkZXIge1xyXG5cdFx0XHRcdG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdHBhZGRpbmc6IDhlbSAyZW0gOGVtIDJlbTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0XHQjaGVhZGVyIGhlYWRlciBwIHtcclxuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDFlbTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdCNoZWFkZXIgZm9vdGVyIHtcclxuXHRcdFx0XHRcdHBhZGRpbmctdG9wOiAxLjI1ZW07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdC8qIE1haW4gU2VjdGlvbnMgKi9cclxuXHJcblx0XHRcdC5tYWluIHtcclxuXHRcdFx0XHRtYXJnaW46IDAgIWltcG9ydGFudDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0XHQubWFpbiA+IGhlYWRlciB7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAzLjVlbSAyZW0gMy41ZW0gMmVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQubWFpbiA+IGhlYWRlciBoMiB7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS44NWVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5tYWluID4gaGVhZGVyIGJyIHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQubWFpbiA+IGhlYWRlciBwIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAxLjVlbSAwIDAgMDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Lm1haW4gPiAuY29udGVudCB7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAzLjVlbSAyMHB4IDMuNWVtIDIwcHg7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5tYWluID4gLmNvbnRlbnQgPiAuY29udGFpbmVyID4gOmxhc3QtY2hpbGQge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0LyogRm9vdGVyICovXHJcblxyXG5cdFx0XHQjZm9vdGVyIHtcclxuXHRcdFx0XHRtYXJnaW46IDAgIWltcG9ydGFudDtcclxuXHRcdFx0XHRwYWRkaW5nOiAzZW0gMCAzZW0gMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0XHQjZm9vdGVyIC5jb3B5cmlnaHQge1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMmVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0fVxyXG5cclxuLyogTW9iaWxlICovXHJcblxyXG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSB7XHJcblxyXG5cdFx0LyogQmFzaWMgKi9cclxuXHJcblx0XHRcdGJvZHksIGlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0IHtcclxuXHRcdFx0XHRmb250LXNpemU6IDExcHQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHQvKiBTZWN0aW9ucy9BcnRpY2xlICovXHJcblxyXG5cdFx0XHRzZWN0aW9uLCBhcnRpY2xlIHtcclxuXHRcdFx0XHRtYXJnaW46IDAgMCAxLjVlbSAwICFpbXBvcnRhbnQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5yb3cgPiBzZWN0aW9uLCAucm93ID4gYXJ0aWNsZSB7XHJcblx0XHRcdFx0bWFyZ2luOiAwIDAgMS41ZW0gMCAhaW1wb3J0YW50O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0LyogQnV0dG9uICovXHJcblxyXG5cdFx0XHQuYnV0dG9uIHtcclxuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDA7XHJcblx0XHRcdFx0cGFkZGluZy1yaWdodDogMDtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRtYXgtd2lkdGg6IDMwMHB4O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0LyogTGlzdCAqL1xyXG5cclxuXHRcdFx0dWwuaWNvbnMgbGkge1xyXG5cdFx0XHRcdHBhZGRpbmctbGVmdDogMC4zNWVtO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR1bC5hY3Rpb25zIGxpIHtcclxuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRtYXJnaW46IDFlbSAwIDFlbSAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR1bC5tZW51IGxpIHtcclxuXHRcdFx0XHRib3JkZXI6IDA7XHJcblx0XHRcdFx0cGFkZGluZzogMDtcclxuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRtYXJnaW46IDFlbSAwIDFlbSAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0LyogSGVhZGVyICovXHJcblxyXG5cdFx0XHQjaGVhZGVyIHtcclxuXHRcdFx0XHRwYWRkaW5nOiA2ZW0gMjBweCA2ZW0gMjBweDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0XHQjaGVhZGVyID4gaGVhZGVyIHtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDAgMWVtIDAgMWVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHQvKiBNYWluIFNlY3Rpb25zICovXHJcblxyXG5cdFx0XHQubWFpbiA+IGhlYWRlciB7XHJcblx0XHRcdFx0cGFkZGluZzogM2VtIDIwcHggM2VtIDIwcHg7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdFx0Lm1haW4gPiBoZWFkZXIgaDIge1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxLjVlbTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQubWFpbiA+IC5jb250ZW50IHtcclxuXHRcdFx0XHRwYWRkaW5nOiAzZW0gMjBweCAzZW0gMjBweDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0XHQubWFpbiA+IC5jb250ZW50IGgzIHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4yNWVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0fVxyXG4gICAgYH08L3N0eWxlPlxyXG4pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zdHlsZXMtanN4L21haW5fY3NzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc3R5bGUnKVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGVkLWpzeC9zdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gMzk3XG4vLyBtb2R1bGUgY2h1bmtzID0gNSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOzs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDZkE7QUFDQTtBQUNBOzs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0xBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbEJBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNIQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDaEJBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUMxREE7QUFDQTtBQUNBOzs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDWkE7QUFDQTtBQUNBOzs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNKQTtBQUNBOzs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNiQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSEE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDakNBOzs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOzs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDUkE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7OztBQ0ZBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3pPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2xCQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7OztBQ0FBO0FBQ0E7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3hCQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM1MENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQy9JQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBOzs7Ozs7QUNBQTtBQUNBOzs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDUkE7QUFDQTtBQUNBOzs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNOQTs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3ZHQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0hBO0FBQ0E7Ozs7Ozs7QUNEQTtBQUNBOzs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDNVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xSQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFFQTtBQUNBOzs7Ozs7O0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQVVBO0FBVkE7QUFVQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFSQTtBQVFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUtBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTUE7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBVEE7QUFTQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXpOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBOzs7Ozs7O0FBREE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFNQTtBQU5BOztBQVZBOzs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7Ozs7OztBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7Ozs7OztBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUxBO0FBS0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUE3Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7Ozs7OztBQURBOztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUNBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        