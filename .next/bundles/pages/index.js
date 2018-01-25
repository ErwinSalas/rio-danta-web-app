
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

var _SectionTours = __webpack_require__(398);

var _SectionTours2 = _interopRequireDefault(_SectionTours);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Pavilion\\Documents\\Proyectos\\WebAppRioDanta\\pages\\index.js?entry';

exports.default = function () {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement(_main_css2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement(_SectionOne2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement(_SectionTours2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), _react2.default.createElement('section', { id: 'third', className: 'main', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement('header', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement('div', { className: 'container', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, 'Aprovecha De Nuestros Descuentos Si Reservas Hospedaje + Tours'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, 'Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet consequat', _react2.default.createElement('br', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), 'feugiat. Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet.'))), _react2.default.createElement('div', { className: 'content dark style3', __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement('div', { className: 'container', __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement('span', { className: 'image featured', __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement('img', { src: 'static/images/pic07.jpg', alt: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  })), _react2.default.createElement('div', { className: 'row', __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, _react2.default.createElement('div', { className: 'u4 u12-narrow', __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, 'Diam vivamus turpis lorem sodales lectus ornare'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, 'Gravida dis placerat lectus ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia eget ornare varius gravida. Gravida dis placerat lectus ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia accumsan vivamus augue cubilia vivamus nisi eu eget ornare varius gravida euismod.  Gravida dis lorem ipsum dolor placerat magna tempus feugiat.'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, 'Lectus ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia accumsan vivamus augue cubilia vivamus nisi eu eget ornare varius gravida dolore euismod lorem ipsum dolor sit amet consequat. vivamus nisi eu eget ornare varius gravida dolore euismod lorem ipsum dolor sit amet consequat. vivamus nisi eu eget ornare et magna.')), _react2.default.createElement('div', { className: 'u4 u12-narrow', __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, 'Gravida dis placerat lectus ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia eget ornare varius gravida. Gravida dis placerat lectus ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia accumsan vivamus augue cubilia vivamus nisi eu eget ornare varius gravida euismod.  Gravida dis lorem ipsum dolor placerat magna tempus feugiat.'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, 'Lectus ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia accumsan vivamus augue cubilia vivamus nisi eu eget ornare varius gravida dolore euismod lorem ipsum dolor sit amet consequat eget ornare varius gravida euismod. Gravida dis lorem ipsum dolor placerat magna tempus feugiat magna tempus lorem.'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, 'Lectus ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia accumsan vivamus augue cubilia.')), _react2.default.createElement('div', { className: 'u4 u12-narrow', __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, 'Placerat lectus ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia eget ornare varius gravida. Gravida dis placerat lectus ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia accumsan vivamus augue cubilia vivamus nisi eu eget ornare varius gravida euismod.  Gravida dis lorem ipsum dolor placerat magna tempus feugiat. Lectus ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia dolore.'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, 'Accumsan vivamus augue cubilia vivamus nisi eu eget ornare varius gravida dolore euismod lorem ipsum dolor sit amet conseismod lorem ipsum dolor sit amet consequat lorem ipsum consequat feugiat sed tempus euismod feugiat veroeros.'), _react2.default.createElement('footer', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, _react2.default.createElement('a', { href: '#fourth', className: 'button scrolly', __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, 'Ipsum ornare lorem dolor'))))))), _react2.default.createElement('section', { id: 'fourth', className: 'main', __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, _react2.default.createElement('header', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, _react2.default.createElement('div', { className: 'container', __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, 'Sed feugiat ipsum consequat'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }, 'Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet consequat', _react2.default.createElement('br', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }), 'feugiat. Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet.'))), _react2.default.createElement('div', { className: 'content style4 featured', __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, _react2.default.createElement('div', { className: 'container percent-75', __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, _react2.default.createElement('form', { method: 'post', action: '#', __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  }, _react2.default.createElement('div', { className: 'row percent-50', __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }, _react2.default.createElement('div', { className: 'u6 u12-mobile', __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }, _react2.default.createElement('input', { type: 'text', placeholder: 'Name', __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  })), _react2.default.createElement('div', { className: 'u6 u12-mobile', __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, _react2.default.createElement('input', { type: 'text', placeholder: 'Email', __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }))), _react2.default.createElement('div', { className: 'row percent-50', __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }, _react2.default.createElement('div', { className: 'u12', __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }, _react2.default.createElement('textarea', { name: 'message', placeholder: 'Message', defaultValue: "", __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }))), _react2.default.createElement('div', { className: 'row', __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, _react2.default.createElement('div', { className: 'u12', __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  }, _react2.default.createElement('ul', { className: 'actions', __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    }
  }, _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    }
  }, _react2.default.createElement('input', { type: 'submit', className: 'button', defaultValue: 'Send Message', __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    }
  })), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    }
  }, _react2.default.createElement('input', { type: 'reset', className: 'button alt', defaultValue: 'Clear Form', __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    }
  }))))))))), _react2.default.createElement('section', { id: 'footer', __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    }
  }, _react2.default.createElement('ul', { className: 'icons', __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    }
  }, _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    }
  }, _react2.default.createElement('a', { href: '#', className: 'icon fa-twitter', __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    }
  }, _react2.default.createElement('span', { className: 'label', __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    }
  }, 'Twitter'))), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  }, _react2.default.createElement('a', { href: '#', className: 'icon fa-facebook', __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  }, _react2.default.createElement('span', { className: 'label', __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  }, 'Facebook'))), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    }
  }, _react2.default.createElement('a', { href: '#', className: 'icon fa-instagram', __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    }
  }, _react2.default.createElement('span', { className: 'label', __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    }
  }, 'Instagram'))), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    }
  }, _react2.default.createElement('a', { href: '#', className: 'icon fa-dribbble', __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    }
  }, _react2.default.createElement('span', { className: 'label', __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    }
  }, 'Dribbble'))), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    }
  }, _react2.default.createElement('a', { href: '#', className: 'icon fa-github', __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    }
  }, _react2.default.createElement('span', { className: 'label', __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    }
  }, 'GitHub')))), _react2.default.createElement('div', { className: 'copyright', __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    }
  }, _react2.default.createElement('ul', { className: 'menu', __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    }
  }, _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    }
  }, '\xA9 Untitled. All rights reserved.'), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    }
  }, 'Design: ', _react2.default.createElement('a', { href: 'http://html5up.net', __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    }
  }, 'HTML5 UP'))))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJTZWN0aW9uT25lIiwiTWFpbkNzcyIsIlNlY3Rpb25Ub3VycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQWtCLEFBR3pCOzs7Ozs7OztrQkFBZSxZQUFBO3lCQUNiLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsMENBQ1EsTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEI7Z0JBQTlCO2tCQURGLEFBQ0UsQUFFQTtBQUZBO3NCQUVBLEFBQUM7O2dCQUFEO2tCQUhGLEFBR0UsQUFDQTtBQURBO0FBQUEsc0JBQ0EsQUFBQzs7Z0JBQUQ7a0JBSkYsQUFJRSxBQUNBO0FBREE7QUFBQSxzQkFDQSxBQUFDOztnQkFBRDtrQkFMRixBQUtFLEFBQ0E7QUFEQTtBQUFBLHNCQUNBLEFBQUM7O2dCQUFEO2tCQU5GLEFBTUUsQUFFQTtBQUZBO0FBQUEsc0JBRUEsY0FBQSxhQUFTLElBQVQsQUFBWSxTQUFRLFdBQXBCLEFBQThCO2dCQUE5QjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBREYsQUFDRSxBQUNBLG1GQUFBLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUE0SDs7Z0JBQUE7a0JBQTVILEFBQTRIO0FBQUE7QUFBQSxNQUpsSSxBQUNFLEFBQ0UsQUFFRSxBQUlKLGdKQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsVUFBTSxXQUFOLEFBQWdCO2dCQUFoQjtrQkFBQSxBQUFpQztBQUFqQzs0Q0FBc0MsS0FBTCxBQUFTLDJCQUEwQixLQUFuQztnQkFBQTtrQkFEbkMsQUFDRSxBQUFpQyxBQUNqQztBQURpQzt1QkFDakMsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBREYsQUFDRSxBQUNBLG9FQUFBLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUZGLEFBRUUsQUFLQSw2WEFBQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FSSixBQUNFLEFBT0UsQUFNRixtV0FBQSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FERixBQUNFLEFBS0EsNlhBQUEsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBTkYsQUFNRSxBQUlBLCtVQUFBLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQXhCSixBQWNFLEFBVUUsQUFHRiw4SEFBQSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FERixBQUNFLEFBTUEsa2NBQUEsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBUEYsQUFPRSxBQUdBLDJQQUFBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUEsT0FBRyxNQUFILEFBQVEsV0FBVSxXQUFsQixBQUE0QjtnQkFBNUI7a0JBQUE7QUFBQTtLQXpEZCxBQVFFLEFBUUUsQUFDRSxBQUVFLEFBMkJFLEFBVUUsQUFDRSxBQVNaLG1EQUFBLGNBQUEsYUFBUyxJQUFULEFBQVksVUFBUyxXQUFyQixBQUErQjtnQkFBL0I7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFDQSxnREFBQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FBNEg7O2dCQUFBO2tCQUE1SCxBQUE0SDtBQUFBO0FBQUEsTUFKbEksQUFDRSxBQUNFLEFBRUUsQUFJSixnSkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLFVBQU0sUUFBTixBQUFhLFFBQU8sUUFBcEIsQUFBMkI7Z0JBQTNCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQStCO0FBQS9COzhDQUFzQyxNQUFQLEFBQVksUUFBTyxhQUFuQixBQUErQjtnQkFBL0I7a0JBRGpDLEFBQ0UsQUFBK0IsQUFDL0I7QUFEK0I7dUJBQy9CLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFBK0I7QUFBL0I7OENBQXNDLE1BQVAsQUFBWSxRQUFPLGFBQW5CLEFBQStCO2dCQUEvQjtrQkFIbkMsQUFDRSxBQUVFLEFBQStCLEFBRWpDO0FBRmlDO3dCQUVqQyxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQXFCO0FBQXJCO2lEQUErQixNQUFWLEFBQWUsV0FBVSxhQUF6QixBQUFxQyxXQUFVLGNBQS9DLEFBQTZEO2dCQUE3RDtrQkFOekIsQUFLRSxBQUNFLEFBQXFCLEFBRXZCO0FBRnVCO3dCQUV2QixjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLFFBQUksV0FBSixBQUFjO2dCQUFkO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUFJO0FBQUo7QUFBQSw4Q0FBVyxNQUFQLEFBQVksVUFBUyxXQUFyQixBQUErQixVQUFTLGNBQXhDLEFBQXFEO2dCQUFyRDtrQkFETixBQUNFLEFBQUksQUFDSjtBQURJO3VCQUNKLGNBQUE7O2dCQUFBO2tCQUFBLEFBQUk7QUFBSjtBQUFBLDhDQUFXLE1BQVAsQUFBWSxTQUFRLFdBQXBCLEFBQThCLGNBQWEsY0FBM0MsQUFBd0Q7Z0JBQXhEO2tCQXhGcEIsQUFrRUUsQUFRRSxBQUNFLEFBQ0UsQUFRRSxBQUNFLEFBQ0UsQUFFRSxBQUFJLEFBU2xCO0FBVGtCOzhCQVNsQixjQUFBLGFBQVMsSUFBVCxBQUFZO2dCQUFaO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLFFBQUksV0FBSixBQUFjO2dCQUFkO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUFJO0FBQUo7QUFBQSxxQkFBSSxjQUFBLE9BQUcsTUFBSCxBQUFRLEtBQUksV0FBWixBQUFzQjtnQkFBdEI7a0JBQUEsQUFBd0M7QUFBeEM7cUJBQXdDLGNBQUEsVUFBTSxXQUFOLEFBQWdCO2dCQUFoQjtrQkFBQTtBQUFBO0tBRDlDLEFBQ0UsQUFBSSxBQUF3QyxBQUM1Qyw4QkFBQSxjQUFBOztnQkFBQTtrQkFBQSxBQUFJO0FBQUo7QUFBQSxxQkFBSSxjQUFBLE9BQUcsTUFBSCxBQUFRLEtBQUksV0FBWixBQUFzQjtnQkFBdEI7a0JBQUEsQUFBeUM7QUFBekM7cUJBQXlDLGNBQUEsVUFBTSxXQUFOLEFBQWdCO2dCQUFoQjtrQkFBQTtBQUFBO0tBRi9DLEFBRUUsQUFBSSxBQUF5QyxBQUM3QywrQkFBQSxjQUFBOztnQkFBQTtrQkFBQSxBQUFJO0FBQUo7QUFBQSxxQkFBSSxjQUFBLE9BQUcsTUFBSCxBQUFRLEtBQUksV0FBWixBQUFzQjtnQkFBdEI7a0JBQUEsQUFBMEM7QUFBMUM7cUJBQTBDLGNBQUEsVUFBTSxXQUFOLEFBQWdCO2dCQUFoQjtrQkFBQTtBQUFBO0tBSGhELEFBR0UsQUFBSSxBQUEwQyxBQUM5QyxnQ0FBQSxjQUFBOztnQkFBQTtrQkFBQSxBQUFJO0FBQUo7QUFBQSxxQkFBSSxjQUFBLE9BQUcsTUFBSCxBQUFRLEtBQUksV0FBWixBQUFzQjtnQkFBdEI7a0JBQUEsQUFBeUM7QUFBekM7cUJBQXlDLGNBQUEsVUFBTSxXQUFOLEFBQWdCO2dCQUFoQjtrQkFBQTtBQUFBO0tBSi9DLEFBSUUsQUFBSSxBQUF5QyxBQUM3QywrQkFBQSxjQUFBOztnQkFBQTtrQkFBQSxBQUFJO0FBQUo7QUFBQSxxQkFBSSxjQUFBLE9BQUcsTUFBSCxBQUFRLEtBQUksV0FBWixBQUFzQjtnQkFBdEI7a0JBQUEsQUFBdUM7QUFBdkM7cUJBQXVDLGNBQUEsVUFBTSxXQUFOLEFBQWdCO2dCQUFoQjtrQkFBQTtBQUFBO0tBTi9DLEFBQ0UsQUFLRSxBQUFJLEFBQXVDLEFBRTdDLDhCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWM7Z0JBQWQ7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFBeUMsd0RBQUEsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBQVksNEJBQUEsY0FBQSxPQUFHLE1BQUgsQUFBUTtnQkFBUjtrQkFBQTtBQUFBO0tBNUdoRCxBQUNiLEFBaUdFLEFBUUUsQUFDRSxBQUMyQyxBQUFZO0FBNUcvRCIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9QYXZpbGlvbi9Eb2N1bWVudHMvUHJveWVjdG9zL1dlYkFwcFJpb0RhbnRhIn0=

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


/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _card_item_css = __webpack_require__(401);

var _card_item_css2 = _interopRequireDefault(_card_item_css);

var _TourItem = __webpack_require__(399);

var _TourItem2 = _interopRequireDefault(_TourItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Pavilion\\Documents\\Proyectos\\WebAppRioDanta\\components\\SectionTours.js';

//import ToursData from '../data/ToursData.js'

var ToursData = [{
  "title": "Baldi hot springs",
  "url": "static/images/baldi.jpg",
  "description": "simply dummy text of the printing and typesetting industry.since the 1500s, when an unknown printer "
}, {
  "title": "ATV arenal tour",
  "url": "static/images/atv.jpg",
  "description": "s simply dummy text of the printing and typesetting industry since the 1500s, when an unknown printer"
}, {
  "title": "Canopy tour",
  "url": "static/images/canopy.jpg",
  "description": "s simply dummy text of the printing and typesetting industry since the 1500s, when an unknown printer"
}, {
  "title": "Rio Celeste tour",
  "url": "static/images/celeste.jpg",
  "description": "s simply dummy text of the printing and typesetting industry since the 1500s, when an unknown printer"
}, {
  "title": "Kalambu hot springs",
  "url": "static/images/kalambu.jpg",
  "description": "s simply dummy text of the printing and typesetting industry since the 1500s, when an unknown printer"

}];

var ToursInfo = function ToursInfo() {
  return _react2.default.createElement('section', { id: 'second', className: 'main', __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement(_card_item_css2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }), _react2.default.createElement('header', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, _react2.default.createElement('div', { className: 'container', __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, 'Promociones y Tours'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, 'Si deseas hacer las mejores actividades que brinda la Fortuna de San Carlos, ingresa para ver videos de las diferentes actividades, si deseas recibir los mejores precios solo debes escribirnos en breve te brindaremos la informacion que deseas.'))), _react2.default.createElement('div', { className: 'content dark style2', __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, _react2.default.createElement('div', { className: 'container', __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, _react2.default.createElement('div', { className: 'u12 u12-narrow', __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, _react2.default.createElement('div', { className: 'row', __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, ToursData.map(function (tour) {
    return _react2.default.createElement(_TourItem2.default, { tour: tour, __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      }
    });
  }))))));
};
exports.default = ToursInfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFNlY3Rpb25Ub3Vycy5qcyJdLCJuYW1lcyI6WyJJdGVtU3R5bGUiLCJUb3VySXRlbSIsIlRvdXJzRGF0YSIsIlRvdXJzSW5mbyIsIm1hcCIsInRvdXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSxBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFjOzs7Ozs7OztBQUZyQjs7QUFHQSxJQUFNO1dBQ0YsQUFDWSxBQUNSO1NBRkosQUFFVyxBQUNQO2lCQUpRLEFBQ1osQUFHbUI7QUFIbkIsQUFDSSxDQUZRO1dBTVosQUFDWSxBQUNSO1NBRkosQUFFVyxBQUNQO2lCQVRRLEFBTVosQUFHbUI7QUFIbkIsQUFDSTtXQUlKLEFBQ1ksQUFDUjtTQUZKLEFBRVcsQUFDUDtpQkFkUSxBQVdaLEFBR21CO0FBSG5CLEFBQ0k7V0FJSixBQUNZLEFBQ1I7U0FGSixBQUVXLEFBQ1A7aUJBbkJRLEFBZ0JaLEFBR21CO0FBSG5CLEFBQ0k7V0FJSixBQUNZLEFBQ1I7U0FGSixBQUVXLEFBQ1A7aUJBeEJSLEFBQWdCLEFBcUJaLEFBR21COztBQUhuQixBQUNJOztBQU9SLElBQU0sWUFBWSxTQUFaLEFBQVksWUFBQTt5QkFFaEIsY0FBQSxhQUFTLElBQVQsQUFBWSxVQUFTLFdBQXJCLEFBQStCO2dCQUEvQjtrQkFBQSxBQUNBO0FBREE7R0FBQSxrQkFDQSxBQUFDOztnQkFBRDtrQkFEQSxBQUNBLEFBRUU7QUFGRjtBQUFBLHNCQUVFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFDQSx3Q0FBQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FOTixBQUdFLEFBQ0UsQUFFRSxBQUdKLDBRQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDQTtBQURBO3FCQUNBLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFFSTtBQUZKO2VBRUksQUFBVSxJQUFJLGdCQUFPLEFBQ25COzJCQUNFLEFBQUMsb0NBQVMsTUFBVixBQUFnQjtrQkFBaEI7b0JBREYsQUFDRSxBQUVGO0FBRkU7S0FBQTtBQWxCRSxBQUVoQixBQVNFLEFBQ0UsQUFDRSxBQUNBLEFBRUk7QUFoQlosQUE2QkE7a0JBQUEsQUFBZSIsImZpbGUiOiJTZWN0aW9uVG91cnMuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvUGF2aWxpb24vRG9jdW1lbnRzL1Byb3llY3Rvcy9XZWJBcHBSaW9EYW50YSJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Pavilion\\Documents\\Proyectos\\WebAppRioDanta\\components\\SectionTours.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Pavilion\\Documents\\Proyectos\\WebAppRioDanta\\components\\SectionTours.js"); } } })();

/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Card = __webpack_require__(400);

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\Pavilion\\Documents\\Proyectos\\WebAppRioDanta\\components\\sub-components\\TourItem.js";


var TourItem = function TourItem(props) {
    return _react2.default.createElement("div", { className: "u4 u12-mobile", __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement("div", { className: "video-responsive  ", __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement(_Card2.default, { item: props.tour, __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    })));
};
exports.default = TourItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHN1Yi1jb21wb25lbnRzXFxUb3VySXRlbS5qcyJdLCJuYW1lcyI6WyJDYXJkIiwiVG91ckl0ZW0iLCJwcm9wcyIsInRvdXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxBQUFPLEFBQVU7Ozs7Ozs7OztBQUVqQixJQUFNLFdBQVMsU0FBVCxBQUFTLFNBQUEsQUFBQyxPQUFEOzJCQUNYLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0tBQUEsa0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTtzQkFBZjt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksQUFBQyxnQ0FBSyxNQUFNLE1BQVosQUFBa0I7c0JBQWxCO3dCQUhHLEFBQ1gsQUFDSSxBQUNJO0FBQUE7O0FBSFosQUFRQTtrQkFBQSxBQUFlIiwiZmlsZSI6IlRvdXJJdGVtLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL1BhdmlsaW9uL0RvY3VtZW50cy9Qcm95ZWN0b3MvV2ViQXBwUmlvRGFudGEifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Pavilion\\Documents\\Proyectos\\WebAppRioDanta\\components\\sub-components\\TourItem.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Pavilion\\Documents\\Proyectos\\WebAppRioDanta\\components\\sub-components\\TourItem.js"); } } })();

/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\Pavilion\\Documents\\Proyectos\\WebAppRioDanta\\components\\sub-components\\Card.js";


var Card = function Card(props) {
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, _react2.default.createElement("div", { className: "card medium", __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement("div", { className: "card-image", __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement("img", { src: props.item.url, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), _react2.default.createElement("span", { className: "card-title", __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, props.item.title)), _react2.default.createElement("div", { className: "card-content", __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement("p", { className: "paragraph", __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, props.item.description)), _react2.default.createElement("div", { className: "card-action", __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement("a", { href: "#", __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Ver Mas"))));
};
exports.default = Card;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHN1Yi1jb21wb25lbnRzXFxDYXJkLmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJwcm9wcyIsIml0ZW0iLCJ1cmwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFNLE9BQU8sU0FBUCxBQUFPLEtBQUEsQUFBQyxPQUFEO3lCQUNULGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7NENBQ08sS0FBSyxNQUFBLEFBQU0sS0FBaEIsQUFBcUI7Z0JBQXJCO2tCQURGLEFBQ0UsQUFDQTtBQURBO3NCQUNBLGNBQUEsVUFBTSxXQUFOLEFBQWdCO2dCQUFoQjtrQkFBQSxBQUE4QjtBQUE5QjtXQUE4QixBQUFNLEtBSHhDLEFBQ0UsQUFFRSxBQUF5QyxBQUUzQyx5QkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhO2dCQUFiO2tCQUFBLEFBQTBCO0FBQTFCO1dBQTBCLEFBQU0sS0FOcEMsQUFLRSxBQUNFLEFBQXFDLEFBRXZDLCtCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxNQUFILEFBQVE7Z0JBQVI7a0JBQUE7QUFBQTtLQVhHLEFBQ1QsQUFDRSxBQVFFLEFBQ0U7QUFYVixBQWlCQTtrQkFBQSxBQUFlIiwiZmlsZSI6IkNhcmQuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvUGF2aWxpb24vRG9jdW1lbnRzL1Byb3llY3Rvcy9XZWJBcHBSaW9EYW50YSJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Pavilion\\Documents\\Proyectos\\WebAppRioDanta\\components\\sub-components\\Card.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Pavilion\\Documents\\Proyectos\\WebAppRioDanta\\components\\sub-components\\Card.js"); } } })();

/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\Pavilion\\Documents\\Proyectos\\WebAppRioDanta\\components\\styles-jsx\\card_item_css.js";


var ItemStyle = function ItemStyle() {
  return _react2.default.createElement("style", { jsx: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, "\n\n.black {\nbackground-color: #000000 !important;\n}\n\n.black-text {\n  \n  color: #000000 !important;\n}\n\n.white {\n  background-color: #FFFFFF !important;\n}\n\n.white-text {\n  color: #FFFFFF !important;\n}\n.card-panel {\n  -webkit-transition: -webkit-box-shadow .25s;\n  transition: -webkit-box-shadow .25s;\n  transition: box-shadow .25s;\n  transition: box-shadow .25s, -webkit-box-shadow .25s;\n  padding: 24px;\n  margin: 0.5rem 0 1rem 0;\n  border-radius: 2px;\n  background-color: #fff;\n}\n\n.card {\n  position: relative;\n  margin: 0.5rem 0 1rem 0;\n  background-color: rgba(255,255,255,0.15);\n  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.5);\n  color: #fff;\n  -webkit-transition: -webkit-box-shadow .25s;\n  transition: -webkit-box-shadow .25s;\n  transition: box-shadow .25s;\n  transition: box-shadow .25s, -webkit-box-shadow .25s;\n  border-radius: 2px;\n}\n\n.card .card-title {\n  font-size: 24px;\n  font-weight: 300;\n}\n\n.card .card-title.activator {\n  cursor: pointer;\n}\n\n.card.small, .card.medium, .card.large {\n  position: relative;\n}\n\n.card.small .card-image, .card.medium .card-image, .card.large .card-image {\n  max-height: 60%;\n  overflow: hidden;\n}\n\n.card.small .card-image + .card-content, .card.medium .card-image + .card-content, .card.large .card-image + .card-content {\n  max-height: 40%;\n}\n\n.card.small .card-content, .card.medium .card-content, .card.large .card-content {\n  max-height: 100%;\n  overflow: hidden;\n}\n\n.card.small .card-action, .card.medium .card-action, .card.large .card-action {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.card.small {\n  height: 300px;\n}\n\n.card.medium {\n  height: 400px;\n}\n\n.card.large {\n  height: 500px;\n}\n\n.card.horizontal {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.card.horizontal.small .card-image, .card.horizontal.medium .card-image, .card.horizontal.large .card-image {\n  height: 100%;\n  max-height: none;\n  overflow: visible;\n}\n\n.card.horizontal.small .card-image img, .card.horizontal.medium .card-image img, .card.horizontal.large .card-image img {\n  height: 100%;\n}\n\n.card.horizontal .card-image {\n  max-width: 50%;\n}\n\n.card.horizontal .card-image img {\n  border-radius: 2px 0 0 2px;\n  max-width: 100%;\n  width: auto;\n}\n\n.card.horizontal .card-stacked {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  position: relative;\n}\n\n.card.horizontal .card-stacked .card-content {\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n\n.card.sticky-action .card-action {\n  z-index: 2;\n}\n\n.card.sticky-action .card-reveal {\n  z-index: 1;\n  padding-bottom: 64px;\n}\n\n.card .card-image {\n  position: relative;\n}\n\n.card .card-image img {\n  display: block;\n  border-radius: 2px 2px 0 0;\n  position: relative;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n}\n\n.card .card-image .card-title {\n  color: #fff;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  max-width: 100%;\n  padding: 24px;\n}\n\n.card .card-content {\n  padding: 24px;\n  border-radius: 0 0 2px 2px;\n}\n\n.card .card-content p {\n  font-family: \"times new roman\";\n  text-align:center;\n  font-size:1em;\n  display: block;\n  -webkit-font-smoothing: antialiased;\n  color: inherit;\n}\n\n.card .card-content .card-title {\n  display: block;\n  line-height: 32px;\n  margin-bottom: 8px;\n}\n\n.card .card-content .card-title i {\n  line-height: 32px;\n}\n\n.card .card-action {\n  position: relative;\n  background-color: inherit;\n  border-top: 1px solid rgba(160, 160, 160, 0.2);\n  padding: 6px 14px;\n}\n\n.card .card-action:last-child {\n  border-radius: 0 0 2px 2px;\n}\n\n.card .card-action a:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating) {\n  color: #ffab40;\n  margin-right: 24px;\n  -webkit-transition: color .3s ease;\n  transition: color .3s ease;\n  text-transform: uppercase;\n}\n\n.card .card-action a:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating):hover {\n  color: #ffd8a6;\n}\n\n.card .card-reveal {\n  padding: 24px;\n  position: absolute;\n  background-color: #fff;\n  width: 100%;\n  overflow-y: auto;\n  left: 0;\n  top: 100%;\n  height: 100%;\n  z-index: 3;\n  display: none;\n}\n\n.card .card-reveal .card-title {\n  cursor: pointer;\n  display: block;\n}\n\n    ");
};
exports.default = ItemStyle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHN0eWxlcy1qc3hcXGNhcmRfaXRlbV9jc3MuanMiXSwibmFtZXMiOlsiSXRlbVN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFNLFlBQVksU0FBWixBQUFZLFlBQUE7eUJBQ2QsY0FBQSxXQUFPLEtBQVA7Z0JBQUE7a0JBQUE7QUFBQTtHQUFBLEVBRGMsQUFDZDtBQURKLEFBZ1BBO2tCQUFBLEFBQWUiLCJmaWxlIjoiY2FyZF9pdGVtX2Nzcy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9QYXZpbGlvbi9Eb2N1bWVudHMvUHJveWVjdG9zL1dlYkFwcFJpb0RhbnRhIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Pavilion\\Documents\\Proyectos\\WebAppRioDanta\\components\\styles-jsx\\card_item_css.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Pavilion\\Documents\\Proyectos\\WebAppRioDanta\\components\\styles-jsx\\card_item_css.js"); } } })();

/***/ })
],[391]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzP2EyZjA3NzkiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanM/YTJmMDc3OSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcz9hMmYwNzc5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzP2EyZjA3NzkiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanM/YTJmMDc3OSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcz9hMmYwNzc5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanM/YTJmMDc3OSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcz9hMmYwNzc5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzPzIxODY4OWMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzPzIxODY4OWMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcz8yMTg2ODljIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzPzIxODY4OWMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzPzIxODY4OWMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanM/MjE4Njg5YyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcz8yMTg2ODljIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanM/MjE4Njg5YyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzPzIxODY4OWMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzPzIxODY4OWMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanM/MjE4Njg5YyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanM/MjE4Njg5YyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzPzIxODY4OWMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcz8yMTg2ODljIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzPzIxODY4OWMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanM/MjE4Njg5YyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanM/MjE4Njg5YyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanM/MjE4Njg5YyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcz8yMTg2ODljIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzPzIxODY4OWMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzPzIxODY4OWMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzPzIxODY4OWMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanM/MjE4Njg5YyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qcz8yMTg2ODljIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcz8yMTg2ODljIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanM/MjE4Njg5YyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvd2FybmluZy5qcz8yMTg2ODljIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcz8yMTg2ODljIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcz8yMTg2ODljIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanM/MjE4Njg5YyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcz9mZjZmMDdkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcz9mZjZmMDdkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcz9mZjZmMDdkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzP2ZmNmYwN2QiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzP2ZmNmYwN2QiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcz9mZjZmMDdkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanM/ZmY2ZjA3ZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanM/ZmY2ZjA3ZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanM/ZmY2ZjA3ZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanM/ZmY2ZjA3ZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanM/ZmY2ZjA3ZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzP2ZmNmYwN2QiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzP2ZmNmYwN2QiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcz9mZjZmMDdkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzP2ZmNmYwN2QiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcz9mZjZmMDdkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzP2ZmNmYwN2QiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanM/ZmY2ZjA3ZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcz9mZjZmMDdkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanM/ZmY2ZjA3ZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzP2ZmNmYwN2QiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcz9mZjZmMDdkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcz9mZjZmMDdkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzP2ZmNmYwN2QiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcz9mZjZmMDdkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanM/ZDFmMjJkZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzP2QxZjIyZGYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzP2QxZjIyZGYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL192YWxpZGF0ZS1jb2xsZWN0aW9uLmpzP2QxZjIyZGYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzP2QxZjIyZGYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanM/ZDFmMjJkZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanM/ZDFmMjJkZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanM/ZDFmMjJkZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzP2QxZjIyZGYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3IuanM/ZDFmMjJkZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmctZXMzL2luZGV4LmpzP2QxZjIyZGYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzP2QxZjIyZGYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5T2JqZWN0LmpzP2QxZjIyZGYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanM/ZDFmMjJkZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzP2QxZjIyZGYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzP2QxZjIyZGYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcz9kMWYyMmRmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanM/ZDFmMjJkZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzP2QxZjIyZGYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanM/ZDFmMjJkZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmctZXMzL2RlY29kZS5qcz9kMWYyMmRmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xdWVyeXN0cmluZy1lczMvZW5jb2RlLmpzP2QxZjIyZGYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzP2QxZjIyZGYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzPzZlYWZjNjIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzPzZlYWZjNjIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcz82ZWFmYzYyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanM/NmVhZmM2MiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qcz82ZWFmYzYyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzPzZlYWZjNjIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanM/NmVhZmM2MiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcz82ZWFmYzYyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzPzZlYWZjNjIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanM/NmVhZmM2MiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcz82ZWFmYzYyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzPzZlYWZjNjIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcz82ZWFmYzYyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanM/NmVhZmM2MiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzPzZlYWZjNjIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qcz82ZWFmYzYyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzPzZlYWZjNjIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzPzZlYWZjNjIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzPzZlYWZjNjIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzPzZlYWZjNjIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcz82ZWFmYzYyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ub2RlLWxpYnMtYnJvd3Nlci9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzPzZlYWZjNjIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2xsZWN0aW9uLXN0cm9uZy5qcz82ZWFmYzYyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi5qcz82ZWFmYzYyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktbWV0aG9kcy5qcz82ZWFmYzYyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jcmVhdGUuanM/NmVhZmM2MiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3IuanM/NmVhZmM2MiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvbGxlY3Rpb24tdG8tanNvbi5qcz82ZWFmYzYyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktZnJvbS1pdGVyYWJsZS5qcz82ZWFmYzYyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LWNvbGxlY3Rpb24tb2YuanM/NmVhZmM2MiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1jb2xsZWN0aW9uLWZyb20uanM/NmVhZmM2MiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzPzZlYWZjNjIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qcz82ZWFmYzYyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanM/NmVhZmM2MiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qcz82ZWFmYzYyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci5qcz82ZWFmYzYyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanM/NmVhZmM2MiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlLmpzPzZlYWZjNjIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuaXMtaXRlcmFibGUuanM/NmVhZmM2MiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGVkLWpzeC9kaXN0L3N0eWxlLmpzP2Y1MTM4ZDQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9tYXAuanM/ZjUxMzhkNCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL21hcC5qcz9mNTEzOGQ0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYubWFwLmpzP2Y1MTM4ZDQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5tYXAudG8tanNvbi5qcz9mNTEzOGQ0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcubWFwLm9mLmpzP2Y1MTM4ZDQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5tYXAuZnJvbS5qcz9mNTEzOGQ0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZWQtanN4L2Rpc3Qvc3R5bGVzaGVldC1yZWdpc3RyeS5qcz9mNTEzOGQ0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHJpbmctaGFzaC9pbmRleC5qcz9mNTEzOGQ0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZWQtanN4L2Rpc3QvbGliL3N0eWxlc2hlZXQuanM/ZjUxMzhkNCIsIndlYnBhY2s6Ly8vLi9wYWdlcz9mNTEzOGQ0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzP2Y1MTM4ZDQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdHlsZXMtanN4L2hlYWRlcl9jc3MuanM/ZjUxMzhkNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlY3Rpb25PbmUuanM/ZjUxMzhkNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlcy1qc3gvbWFpbl9jc3MuanM/ZjUxMzhkNCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGVkLWpzeC9zdHlsZS5qcz9mNTEzOGQ0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VjdGlvblRvdXJzLmpzP2Y1MTM4ZDQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdWItY29tcG9uZW50cy9Ub3VySXRlbS5qcz9mNTEzOGQ0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3ViLWNvbXBvbmVudHMvQ2FyZC5qcz9mNTEzOGQ0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3R5bGVzLWpzeC9jYXJkX2l0ZW1fY3NzLmpzP2Y1MTM4ZDQiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS4zJyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBrZXkgaW4gZXhwb3J0cykgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzJyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIEJSRUFLID0ge307XG52YXIgUkVUVVJOID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1IpIHtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpO1xuICB2YXIgZiA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZiAoaXNBcnJheUl0ZXIoaXRlckZuKSkgZm9yIChsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTspIHtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbnZhciBET01JdGVyYWJsZXMgPSAoJ0NTU1J1bGVMaXN0LENTU1N0eWxlRGVjbGFyYXRpb24sQ1NTVmFsdWVMaXN0LENsaWVudFJlY3RMaXN0LERPTVJlY3RMaXN0LERPTVN0cmluZ0xpc3QsJyArXG4gICdET01Ub2tlbkxpc3QsRGF0YVRyYW5zZmVySXRlbUxpc3QsRmlsZUxpc3QsSFRNTEFsbENvbGxlY3Rpb24sSFRNTENvbGxlY3Rpb24sSFRNTEZvcm1FbGVtZW50LEhUTUxTZWxlY3RFbGVtZW50LCcgK1xuICAnTWVkaWFMaXN0LE1pbWVUeXBlQXJyYXksTmFtZWROb2RlTWFwLE5vZGVMaXN0LFBhaW50UmVxdWVzdExpc3QsUGx1Z2luLFBsdWdpbkFycmF5LFNWR0xlbmd0aExpc3QsU1ZHTnVtYmVyTGlzdCwnICtcbiAgJ1NWR1BhdGhTZWdMaXN0LFNWR1BvaW50TGlzdCxTVkdTdHJpbmdMaXN0LFNWR1RyYW5zZm9ybUxpc3QsU291cmNlQnVmZmVyTGlzdCxTdHlsZVNoZWV0TGlzdCxUZXh0VHJhY2tDdWVMaXN0LCcgK1xuICAnVGV4dFRyYWNrTGlzdCxUb3VjaExpc3QnKS5zcGxpdCgnLCcpO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IERPTUl0ZXJhYmxlcy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IERPTUl0ZXJhYmxlc1tpXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmIChwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBcbiAqL1xuXG5mdW5jdGlvbiBtYWtlRW1wdHlGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYXJnO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbmQgZGlzY2FyZHMgaW5wdXRzOyBpdCBoYXMgbm8gc2lkZSBlZmZlY3RzLiBUaGlzIGlzXG4gKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuICogYWx3YXlzIG5lZWQgdG8gYmUgY2FsbGFibGUsIHNpbmNlIEpTIGxhY2tzIGEgbnVsbC1jYWxsIGlkaW9tIGFsYSBDb2NvYS5cbiAqL1xudmFyIGVtcHR5RnVuY3Rpb24gPSBmdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge307XG5cbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnMgPSBtYWtlRW1wdHlGdW5jdGlvbjtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKGZhbHNlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlID0gbWFrZUVtcHR5RnVuY3Rpb24odHJ1ZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCA9IG1ha2VFbXB0eUZ1bmN0aW9uKG51bGwpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RoaXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzO1xufTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIGFyZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW1wdHlGdW5jdGlvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCk7XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcignTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2ludmFyaWFudC5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJy4vZW1wdHlGdW5jdGlvbicpO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGVtcHR5RnVuY3Rpb247XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiBwcmludFdhcm5pbmcoZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcblxuICB3YXJuaW5nID0gZnVuY3Rpb24gd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ0ZhaWxlZCBDb21wb3NpdGUgcHJvcFR5cGU6ICcpID09PSAwKSB7XG4gICAgICByZXR1cm47IC8vIElnbm9yZSBDb21wb3NpdGVDb21wb25lbnQgcHJvcHR5cGUgY2hlY2suXG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mYmpzL2xpYi93YXJuaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gKCFCVUdHWSAmJiAkbmF0aXZlKSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICgodHlwZW9mIGNhbGwgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKGNhbGwpKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYgKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpIGRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHsgdmFsdWU6IHdrc0V4dC5mKG5hbWUpIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9zZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpO1xuXG52YXIgX3NldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldFByb3RvdHlwZU9mKTtcblxudmFyIF9jcmVhdGUgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvY3JlYXRlXCIpO1xuXG52YXIgX2NyZWF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGUpO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgKHR5cGVvZiBzdXBlckNsYXNzID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShzdXBlckNsYXNzKSkpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gKDAsIF9jcmVhdGUyLmRlZmF1bHQpKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQgPyAoMCwgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0KShzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJ2YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBzYWZlKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHtcbiAgICBpZiAoc2FmZSAmJiB0YXJnZXRba2V5XSkgdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIGhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfSByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbiAgdmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAodHlwZVNwZWNzLmhhc093blByb3BlcnR5KHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaW52YXJpYW50KHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSA9PT0gJ2Z1bmN0aW9uJywgJyVzOiAlcyB0eXBlIGAlc2AgaXMgaW52YWxpZDsgaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gJyArICd0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJXNgLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKTtcbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgd2FybmluZyghZXJyb3IgfHwgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciwgJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yKTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHdhcm5pbmcoZmFsc2UsICdGYWlsZWQgJXMgdHlwZTogJXMlcycsIGxvY2F0aW9uLCBlcnJvci5tZXNzYWdlLCBzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmUgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwidmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFRZUEUpIHtcbiAgaWYgKCFpc09iamVjdChpdCkgfHwgaXQuX3QgIT09IFRZUEUpIHRocm93IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdmFsaWRhdGUtY29sbGVjdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgZXhlYykge1xuICB2YXIgZm4gPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV07XG4gIHZhciBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbiAoKSB7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgdmFyIEMgPSB0eXBlb2YgY29yZVtLRVldID09ICdmdW5jdGlvbicgPyBjb3JlW0tFWV0gOiBnbG9iYWxbS0VZXTtcbiAgaWYgKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pIGRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgNSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5kZWNvZGUgPSBleHBvcnRzLnBhcnNlID0gcmVxdWlyZSgnLi9kZWNvZGUnKTtcbmV4cG9ydHMuZW5jb2RlID0gZXhwb3J0cy5zdHJpbmdpZnkgPSByZXF1aXJlKCcuL2VuY29kZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmctZXMzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eU9iamVjdCA9IHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eU9iamVjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9lbXB0eU9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbi8vIElmIG9iai5oYXNPd25Qcm9wZXJ0eSBoYXMgYmVlbiBvdmVycmlkZGVuLCB0aGVuIGNhbGxpbmdcbi8vIG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSB3aWxsIGJyZWFrLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vam95ZW50L25vZGUvaXNzdWVzLzE3MDdcbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocXMsIHNlcCwgZXEsIG9wdGlvbnMpIHtcbiAgc2VwID0gc2VwIHx8ICcmJztcbiAgZXEgPSBlcSB8fCAnPSc7XG4gIHZhciBvYmogPSB7fTtcblxuICBpZiAodHlwZW9mIHFzICE9PSAnc3RyaW5nJyB8fCBxcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgdmFyIHJlZ2V4cCA9IC9cXCsvZztcbiAgcXMgPSBxcy5zcGxpdChzZXApO1xuXG4gIHZhciBtYXhLZXlzID0gMTAwMDtcbiAgaWYgKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubWF4S2V5cyA9PT0gJ251bWJlcicpIHtcbiAgICBtYXhLZXlzID0gb3B0aW9ucy5tYXhLZXlzO1xuICB9XG5cbiAgdmFyIGxlbiA9IHFzLmxlbmd0aDtcbiAgLy8gbWF4S2V5cyA8PSAwIG1lYW5zIHRoYXQgd2Ugc2hvdWxkIG5vdCBsaW1pdCBrZXlzIGNvdW50XG4gIGlmIChtYXhLZXlzID4gMCAmJiBsZW4gPiBtYXhLZXlzKSB7XG4gICAgbGVuID0gbWF4S2V5cztcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICB2YXIgeCA9IHFzW2ldLnJlcGxhY2UocmVnZXhwLCAnJTIwJyksXG4gICAgICAgIGlkeCA9IHguaW5kZXhPZihlcSksXG4gICAgICAgIGtzdHIsIHZzdHIsIGssIHY7XG5cbiAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgIGtzdHIgPSB4LnN1YnN0cigwLCBpZHgpO1xuICAgICAgdnN0ciA9IHguc3Vic3RyKGlkeCArIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBrc3RyID0geDtcbiAgICAgIHZzdHIgPSAnJztcbiAgICB9XG5cbiAgICBrID0gZGVjb2RlVVJJQ29tcG9uZW50KGtzdHIpO1xuICAgIHYgPSBkZWNvZGVVUklDb21wb25lbnQodnN0cik7XG5cbiAgICBpZiAoIWhhc093blByb3BlcnR5KG9iaiwgaykpIHtcbiAgICAgIG9ialtrXSA9IHY7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KG9ialtrXSkpIHtcbiAgICAgIG9ialtrXS5wdXNoKHYpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmpba10gPSBbb2JqW2tdLCB2XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uICh4cykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHhzKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9xdWVyeXN0cmluZy1lczMvZGVjb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3RyaW5naWZ5UHJpbWl0aXZlID0gZnVuY3Rpb24odikge1xuICBzd2l0Y2ggKHR5cGVvZiB2KSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHJldHVybiB2O1xuXG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICByZXR1cm4gdiA/ICd0cnVlJyA6ICdmYWxzZSc7XG5cbiAgICBjYXNlICdudW1iZXInOlxuICAgICAgcmV0dXJuIGlzRmluaXRlKHYpID8gdiA6ICcnO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAnJztcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmosIHNlcCwgZXEsIG5hbWUpIHtcbiAgc2VwID0gc2VwIHx8ICcmJztcbiAgZXEgPSBlcSB8fCAnPSc7XG4gIGlmIChvYmogPT09IG51bGwpIHtcbiAgICBvYmogPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbWFwKG9iamVjdEtleXMob2JqKSwgZnVuY3Rpb24oaykge1xuICAgICAgdmFyIGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShrKSkgKyBlcTtcbiAgICAgIGlmIChpc0FycmF5KG9ialtrXSkpIHtcbiAgICAgICAgcmV0dXJuIG1hcChvYmpba10sIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICByZXR1cm4ga3MgKyBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKHYpKTtcbiAgICAgICAgfSkuam9pbihzZXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGtzICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShvYmpba10pKTtcbiAgICAgIH1cbiAgICB9KS5qb2luKHNlcCk7XG5cbiAgfVxuXG4gIGlmICghbmFtZSkgcmV0dXJuICcnO1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShuYW1lKSkgKyBlcSArXG4gICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG9iaikpO1xufTtcblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uICh4cykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHhzKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbmZ1bmN0aW9uIG1hcCAoeHMsIGYpIHtcbiAgaWYgKHhzLm1hcCkgcmV0dXJuIHhzLm1hcChmKTtcbiAgdmFyIHJlcyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgcmVzLnB1c2goZih4c1tpXSwgaSkpO1xuICB9XG4gIHJldHVybiByZXM7XG59XG5cbnZhciBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24gKG9iaikge1xuICB2YXIgcmVzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgcmVzLnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3F1ZXJ5c3RyaW5nLWVzMy9lbmNvZGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pc0l0ZXJhYmxlMiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2lzLWl0ZXJhYmxlXCIpO1xuXG52YXIgX2lzSXRlcmFibGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNJdGVyYWJsZTIpO1xuXG52YXIgX2dldEl0ZXJhdG9yMiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2dldC1pdGVyYXRvclwiKTtcblxudmFyIF9nZXRJdGVyYXRvcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRJdGVyYXRvcjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7XG4gICAgdmFyIF9hcnIgPSBbXTtcbiAgICB2YXIgX24gPSB0cnVlO1xuICAgIHZhciBfZCA9IGZhbHNlO1xuICAgIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaSA9ICgwLCBfZ2V0SXRlcmF0b3IzLmRlZmF1bHQpKGFyciksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2QgPSB0cnVlO1xuICAgICAgX2UgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfYXJyO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH0gZWxzZSBpZiAoKDAsIF9pc0l0ZXJhYmxlMy5kZWZhdWx0KShPYmplY3QoYXJyKSkpIHtcbiAgICAgIHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xuICAgIH1cbiAgfTtcbn0oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDUiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpIHtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7IGRlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiLy8gMTkuMS4yLjkgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAkZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCkge1xuICAgIHJldHVybiAkZ2V0UHJvdG90eXBlT2YodG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDExMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDExMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMTEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbic7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgJHJlcGxhY2VyID0gcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gZ2V0S2V5cyhpdCk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCk7XG4gICAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDExNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDExN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDExOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Quc2V0UHJvdG90eXBlT2Y7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDEyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCIvLyAxOS4xLjMuMTkgT2JqZWN0LnNldFByb3RvdHlwZU9mKE8sIHByb3RvKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0JywgeyBzZXRQcm90b3R5cGVPZjogcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChPLCBwcm90bykge1xuICBhbk9iamVjdChPKTtcbiAgaWYgKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpIHRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uICh0ZXN0LCBidWdneSwgc2V0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuL19jdHgnKShGdW5jdGlvbi5jYWxsLCByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaCAoZSkgeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmIChidWdneSkgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1wcm90by5qc1xuLy8gbW9kdWxlIGlkID0gMTIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDEyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKSB7XG4gIHJldHVybiAkT2JqZWN0LmNyZWF0ZShQLCBEKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0JywgeyBjcmVhdGU6IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4yLjBcbiAqIHJlYWN0LmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIGVtcHR5T2JqZWN0ID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlPYmplY3QnKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzJyk7XG5cbi8vIFRPRE86IHRoaXMgaXMgc3BlY2lhbCBiZWNhdXNlIGl0IGdldHMgaW1wb3J0ZWQgZHVyaW5nIGJ1aWxkLlxuXG52YXIgUmVhY3RWZXJzaW9uID0gJzE2LjIuMCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2xbJ2ZvciddO1xuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sWydmb3InXSgncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX0NBTExfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbFsnZm9yJ10oJ3JlYWN0LmNhbGwnKSA6IDB4ZWFjODtcbnZhciBSRUFDVF9SRVRVUk5fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbFsnZm9yJ10oJ3JlYWN0LnJldHVybicpIDogMHhlYWM5O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sWydmb3InXSgncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbFsnZm9yJ10oJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG5cbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcblxuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogV0FSTklORzogRE8gTk9UIG1hbnVhbGx5IHJlcXVpcmUgdGhpcyBtb2R1bGUuXG4gKiBUaGlzIGlzIGEgcmVwbGFjZW1lbnQgZm9yIGBpbnZhcmlhbnQoLi4uKWAgdXNlZCBieSB0aGUgZXJyb3IgY29kZSBzeXN0ZW1cbiAqIGFuZCB3aWxsIF9vbmx5XyBiZSByZXF1aXJlZCBieSB0aGUgY29ycmVzcG9uZGluZyBiYWJlbCBwYXNzLlxuICogSXQgYWx3YXlzIHRocm93cy5cbiAqL1xuXG4vKipcbiAqIEZvcmtlZCBmcm9tIGZianMvd2FybmluZzpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mYmpzL2Jsb2IvZTY2YmEyMGFkNWJlNDMzZWI1NDQyM2YyYjA5N2Q4MjkzMjRkOWRlNi9wYWNrYWdlcy9mYmpzL3NyYy9fX2ZvcmtzX18vd2FybmluZy5qc1xuICpcbiAqIE9ubHkgY2hhbmdlIGlzIHdlIHVzZSBjb25zb2xlLndhcm4gaW5zdGVhZCBvZiBjb25zb2xlLmVycm9yLFxuICogYW5kIGRvIG5vdGhpbmcgd2hlbiAnY29uc29sZScgaXMgbm90IHN1cHBvcnRlZC5cbiAqIFRoaXMgcmVhbGx5IHNpbXBsaWZpZXMgdGhlIGNvZGUuXG4gKiAtLS1cbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgbG93UHJpb3JpdHlXYXJuaW5nID0gZnVuY3Rpb24gKCkge307XG5cbntcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG5cbiAgbG93UHJpb3JpdHlXYXJuaW5nID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIGxvd1ByaW9yaXR5V2FybmluZyQxID0gbG93UHJpb3JpdHlXYXJuaW5nO1xuXG52YXIgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50ID0ge307XG5cbmZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XG4gIHtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBwdWJsaWNJbnN0YW5jZS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IGNvbnN0cnVjdG9yICYmIChjb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCBjb25zdHJ1Y3Rvci5uYW1lKSB8fCAnUmVhY3RDbGFzcyc7XG4gICAgdmFyIHdhcm5pbmdLZXkgPSBjb21wb25lbnROYW1lICsgJy4nICsgY2FsbGVyTmFtZTtcbiAgICBpZiAoZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHdhcm5pbmcoZmFsc2UsICclcyguLi4pOiBDYW4gb25seSB1cGRhdGUgYSBtb3VudGVkIG9yIG1vdW50aW5nIGNvbXBvbmVudC4gJyArICdUaGlzIHVzdWFsbHkgbWVhbnMgeW91IGNhbGxlZCAlcygpIG9uIGFuIHVubW91bnRlZCBjb21wb25lbnQuICcgKyAnVGhpcyBpcyBhIG5vLW9wLlxcblxcblBsZWFzZSBjaGVjayB0aGUgY29kZSBmb3IgdGhlICVzIGNvbXBvbmVudC4nLCBjYWxsZXJOYW1lLCBjYWxsZXJOYW1lLCBjb21wb25lbnROYW1lKTtcbiAgICBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0gPSB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogVGhpcyBpcyB0aGUgYWJzdHJhY3QgQVBJIGZvciBhbiB1cGRhdGUgcXVldWUuXG4gKi9cbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHtcbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2Ugd2Ugd2FudCB0byB0ZXN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAZmluYWxcbiAgICovXG4gIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gICAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gICAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gICAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFsbCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyBvciBgc2V0U3RhdGVgIHRvIG11dGF0ZSBzdGF0ZS5cbiAgICogWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICAgKlxuICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICAgKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBsZXRlU3RhdGUgTmV4dCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjb21wbGV0ZVN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAncmVwbGFjZVN0YXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBUaGlzIG9ubHkgZXhpc3RzIGJlY2F1c2UgX3BlbmRpbmdTdGF0ZSBpc1xuICAgKiBpbnRlcm5hbC4gVGhpcyBwcm92aWRlcyBhIG1lcmdpbmcgc3RyYXRlZ3kgdGhhdCBpcyBub3QgYXZhaWxhYmxlIHRvIGRlZXBcbiAgICogcHJvcGVydGllcyB3aGljaCBpcyBjb25mdXNpbmcuIFRPRE86IEV4cG9zZSBwZW5kaW5nU3RhdGUgb3IgZG9uJ3QgdXNlIGl0XG4gICAqIGR1cmluZyB0aGUgbWVyZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBOYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xuICB9XG59O1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgaGVscGVycyBmb3IgdGhlIHVwZGF0aW5nIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICovXG5mdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbkNvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA9IHt9O1xuXG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrKSB7XG4gICEodHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBwYXJ0aWFsU3RhdGUgPT0gbnVsbCkgPyBpbnZhcmlhbnQoZmFsc2UsICdzZXRTdGF0ZSguLi4pOiB0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy4nKSA6IHZvaWQgMDtcbiAgdGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCAnc2V0U3RhdGUnKTtcbn07XG5cbi8qKlxuICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gKlxuICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gKlxuICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAqXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHVwZGF0ZSBpcyBjb21wbGV0ZS5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssICdmb3JjZVVwZGF0ZScpO1xufTtcblxuLyoqXG4gKiBEZXByZWNhdGVkIEFQSXMuIFRoZXNlIEFQSXMgdXNlZCB0byBleGlzdCBvbiBjbGFzc2ljIFJlYWN0IGNsYXNzZXMgYnV0IHNpbmNlXG4gKiB3ZSB3b3VsZCBsaWtlIHRvIGRlcHJlY2F0ZSB0aGVtLCB3ZSdyZSBub3QgZ29pbmcgdG8gbW92ZSB0aGVtIG92ZXIgdG8gdGhpc1xuICogbW9kZXJuIGJhc2UgY2xhc3MuIEluc3RlYWQsIHdlIGRlZmluZSBhIGdldHRlciB0aGF0IHdhcm5zIGlmIGl0J3MgYWNjZXNzZWQuXG4gKi9cbntcbiAgdmFyIGRlcHJlY2F0ZWRBUElzID0ge1xuICAgIGlzTW91bnRlZDogWydpc01vdW50ZWQnLCAnSW5zdGVhZCwgbWFrZSBzdXJlIHRvIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnMgYW5kIHBlbmRpbmcgcmVxdWVzdHMgaW4gJyArICdjb21wb25lbnRXaWxsVW5tb3VudCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcy4nXSxcbiAgICByZXBsYWNlU3RhdGU6IFsncmVwbGFjZVN0YXRlJywgJ1JlZmFjdG9yIHlvdXIgY29kZSB0byB1c2Ugc2V0U3RhdGUgaW5zdGVhZCAoc2VlICcgKyAnaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8zMjM2KS4nXVxuICB9O1xuICB2YXIgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUsIGluZm8pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LnByb3RvdHlwZSwgbWV0aG9kTmFtZSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvd1ByaW9yaXR5V2FybmluZyQxKGZhbHNlLCAnJXMoLi4uKSBpcyBkZXByZWNhdGVkIGluIHBsYWluIEphdmFTY3JpcHQgUmVhY3QgY2xhc3Nlcy4gJXMnLCBpbmZvWzBdLCBpbmZvWzFdKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgZm9yICh2YXIgZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkpIHtcbiAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEJhc2UgY2xhc3MgaGVscGVycyBmb3IgdGhlIHVwZGF0aW5nIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICovXG5mdW5jdGlvbiBQdXJlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIC8vIER1cGxpY2F0ZWQgZnJvbSBDb21wb25lbnQuXG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gIC8vIFdlIGluaXRpYWxpemUgdGhlIGRlZmF1bHQgdXBkYXRlciBidXQgdGhlIHJlYWwgb25lIGdldHMgaW5qZWN0ZWQgYnkgdGhlXG4gIC8vIHJlbmRlcmVyLlxuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG5Db21wb25lbnREdW1teS5wcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xudmFyIHB1cmVDb21wb25lbnRQcm90b3R5cGUgPSBQdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFB1cmVDb21wb25lbnQ7XG4vLyBBdm9pZCBhbiBleHRyYSBwcm90b3R5cGUganVtcCBmb3IgdGhlc2UgbWV0aG9kcy5cbl9hc3NpZ24ocHVyZUNvbXBvbmVudFByb3RvdHlwZSwgQ29tcG9uZW50LnByb3RvdHlwZSk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblxuZnVuY3Rpb24gQXN5bmNDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgLy8gRHVwbGljYXRlZCBmcm9tIENvbXBvbmVudC5cbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbnZhciBhc3luY0NvbXBvbmVudFByb3RvdHlwZSA9IEFzeW5jQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xuYXN5bmNDb21wb25lbnRQcm90b3R5cGUuY29uc3RydWN0b3IgPSBBc3luY0NvbXBvbmVudDtcbi8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxuX2Fzc2lnbihhc3luY0NvbXBvbmVudFByb3RvdHlwZSwgQ29tcG9uZW50LnByb3RvdHlwZSk7XG5hc3luY0NvbXBvbmVudFByb3RvdHlwZS51bnN0YWJsZV9pc0FzeW5jUmVhY3RDb21wb25lbnQgPSB0cnVlO1xuYXN5bmNDb21wb25lbnRQcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgb3duZXIuXG4gKlxuICogVGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIGNvbXBvbmVudCB3aG8gc2hvdWxkIG93biBhbnkgY29tcG9uZW50cyB0aGF0IGFyZVxuICogY3VycmVudGx5IGJlaW5nIGNvbnN0cnVjdGVkLlxuICovXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcblxudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duO1xuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuICAgICAgd2FybmluZyhmYWxzZSwgJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9mYi5tZS9yZWFjdC1zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICB9XG4gIH07XG4gIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcbiAgICAgIHdhcm5pbmcoZmFsc2UsICclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vZmIubWUvcmVhY3Qtc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgfVxuICB9O1xuICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgbm8gaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBpbnRlcm5hbFxuICovXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvdyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG5cbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG5cbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307XG5cbiAgICAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTtcbiAgICAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7XG4gICAgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIHZhciBwcm9wTmFtZTtcblxuICAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG4gIHZhciBwcm9wcyA9IHt9O1xuXG4gIHZhciBrZXkgPSBudWxsO1xuICB2YXIgcmVmID0gbnVsbDtcbiAgdmFyIHNlbGYgPSBudWxsO1xuICB2YXIgc291cmNlID0gbnVsbDtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICB9XG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBzZWxmID0gY29uZmlnLl9fc2VsZiA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NlbGY7XG4gICAgc291cmNlID0gY29uZmlnLl9fc291cmNlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc291cmNlO1xuICAgIC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuICAgIHtcbiAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRBcnJheSk7XG4gICAgICB9XG4gICAgfVxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcbiAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHtcbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgaWYgKHR5cGVvZiBwcm9wcy4kJHR5cGVvZiA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcHMuJCR0eXBlb2YgIT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xufVxuXG4vKipcbiAqIFJldHVybiBhIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgUmVhY3RFbGVtZW50cyBvZiBhIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWZhY3RvcnlcbiAqL1xuXG5cbmZ1bmN0aW9uIGNsb25lQW5kUmVwbGFjZUtleShvbGRFbGVtZW50LCBuZXdLZXkpIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBSZWFjdEVsZW1lbnQob2xkRWxlbWVudC50eXBlLCBuZXdLZXksIG9sZEVsZW1lbnQucmVmLCBvbGRFbGVtZW50Ll9zZWxmLCBvbGRFbGVtZW50Ll9zb3VyY2UsIG9sZEVsZW1lbnQuX293bmVyLCBvbGRFbGVtZW50LnByb3BzKTtcblxuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuLyoqXG4gKiBDbG9uZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCB1c2luZyBlbGVtZW50IGFzIHRoZSBzdGFydGluZyBwb2ludC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY2xvbmVlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIHZhciBwcm9wTmFtZTtcblxuICAvLyBPcmlnaW5hbCBwcm9wcyBhcmUgY29waWVkXG4gIHZhciBwcm9wcyA9IF9hc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpO1xuXG4gIC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcbiAgdmFyIGtleSA9IGVsZW1lbnQua2V5O1xuICB2YXIgcmVmID0gZWxlbWVudC5yZWY7XG4gIC8vIFNlbGYgaXMgcHJlc2VydmVkIHNpbmNlIHRoZSBvd25lciBpcyBwcmVzZXJ2ZWQuXG4gIHZhciBzZWxmID0gZWxlbWVudC5fc2VsZjtcbiAgLy8gU291cmNlIGlzIHByZXNlcnZlZCBzaW5jZSBjbG9uZUVsZW1lbnQgaXMgdW5saWtlbHkgdG8gYmUgdGFyZ2V0ZWQgYnkgYVxuICAvLyB0cmFuc3BpbGVyLCBhbmQgdGhlIG9yaWdpbmFsIHNvdXJjZSBpcyBwcm9iYWJseSBhIGJldHRlciBpbmRpY2F0b3Igb2YgdGhlXG4gIC8vIHRydWUgb3duZXIuXG4gIHZhciBzb3VyY2UgPSBlbGVtZW50Ll9zb3VyY2U7XG5cbiAgLy8gT3duZXIgd2lsbCBiZSBwcmVzZXJ2ZWQsIHVubGVzcyByZWYgaXMgb3ZlcnJpZGRlblxuICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgLy8gU2lsZW50bHkgc3RlYWwgdGhlIHJlZiBmcm9tIHRoZSBwYXJlbnQuXG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgb3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xuICAgIH1cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIG92ZXJyaWRlIGV4aXN0aW5nIHByb3BzXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcbiAgICBpZiAoZWxlbWVudC50eXBlICYmIGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIGRlZmF1bHRQcm9wcyA9IGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgfVxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIGlmIChjb25maWdbcHJvcE5hbWVdID09PSB1bmRlZmluZWQgJiYgZGVmYXVsdFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KGVsZW1lbnQudHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKTtcbn1cblxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSB2YWxpZCBjb21wb25lbnQuXG4gKiBAZmluYWxcbiAqL1xuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5cbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0ge307XG5cbntcbiAgLy8gQ29tcG9uZW50IHRoYXQgaXMgYmVpbmcgd29ya2VkIG9uXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gbnVsbDtcblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGltcGwgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjaztcbiAgICBpZiAoaW1wbCkge1xuICAgICAgcmV0dXJuIGltcGwoKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG59XG5cbnZhciBTRVBBUkFUT1IgPSAnLic7XG52YXIgU1VCU0VQQVJBVE9SID0gJzonO1xuXG4vKipcbiAqIEVzY2FwZSBhbmQgd3JhcCBrZXkgc28gaXQgaXMgc2FmZSB0byB1c2UgYXMgYSByZWFjdGlkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSB0byBiZSBlc2NhcGVkLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgZXNjYXBlZCBrZXkuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZShrZXkpIHtcbiAgdmFyIGVzY2FwZVJlZ2V4ID0gL1s9Ol0vZztcbiAgdmFyIGVzY2FwZXJMb29rdXAgPSB7XG4gICAgJz0nOiAnPTAnLFxuICAgICc6JzogJz0yJ1xuICB9O1xuICB2YXIgZXNjYXBlZFN0cmluZyA9ICgnJyArIGtleSkucmVwbGFjZShlc2NhcGVSZWdleCwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIGVzY2FwZXJMb29rdXBbbWF0Y2hdO1xuICB9KTtcblxuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cblxuLyoqXG4gKiBUT0RPOiBUZXN0IHRoYXQgYSBzaW5nbGUgY2hpbGQgYW5kIGFuIGFycmF5IHdpdGggb25lIGl0ZW0gaGF2ZSB0aGUgc2FtZSBrZXlcbiAqIHBhdHRlcm4uXG4gKi9cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcblxudmFyIHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4ID0gL1xcLysvZztcbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiAoJycgKyB0ZXh0KS5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCAnJCYvJyk7XG59XG5cbnZhciBQT09MX1NJWkUgPSAxMDtcbnZhciB0cmF2ZXJzZUNvbnRleHRQb29sID0gW107XG5mdW5jdGlvbiBnZXRQb29sZWRUcmF2ZXJzZUNvbnRleHQobWFwUmVzdWx0LCBrZXlQcmVmaXgsIG1hcEZ1bmN0aW9uLCBtYXBDb250ZXh0KSB7XG4gIGlmICh0cmF2ZXJzZUNvbnRleHRQb29sLmxlbmd0aCkge1xuICAgIHZhciB0cmF2ZXJzZUNvbnRleHQgPSB0cmF2ZXJzZUNvbnRleHRQb29sLnBvcCgpO1xuICAgIHRyYXZlcnNlQ29udGV4dC5yZXN1bHQgPSBtYXBSZXN1bHQ7XG4gICAgdHJhdmVyc2VDb250ZXh0LmtleVByZWZpeCA9IGtleVByZWZpeDtcbiAgICB0cmF2ZXJzZUNvbnRleHQuZnVuYyA9IG1hcEZ1bmN0aW9uO1xuICAgIHRyYXZlcnNlQ29udGV4dC5jb250ZXh0ID0gbWFwQ29udGV4dDtcbiAgICB0cmF2ZXJzZUNvbnRleHQuY291bnQgPSAwO1xuICAgIHJldHVybiB0cmF2ZXJzZUNvbnRleHQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3VsdDogbWFwUmVzdWx0LFxuICAgICAga2V5UHJlZml4OiBrZXlQcmVmaXgsXG4gICAgICBmdW5jOiBtYXBGdW5jdGlvbixcbiAgICAgIGNvbnRleHQ6IG1hcENvbnRleHQsXG4gICAgICBjb3VudDogMFxuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpIHtcbiAgdHJhdmVyc2VDb250ZXh0LnJlc3VsdCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5rZXlQcmVmaXggPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuZnVuYyA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5jb250ZXh0ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmNvdW50ID0gMDtcbiAgaWYgKHRyYXZlcnNlQ29udGV4dFBvb2wubGVuZ3RoIDwgUE9PTF9TSVpFKSB7XG4gICAgdHJhdmVyc2VDb250ZXh0UG9vbC5wdXNoKHRyYXZlcnNlQ29udGV4dCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7IXN0cmluZ30gbmFtZVNvRmFyIE5hbWUgb2YgdGhlIGtleSBwYXRoIHNvIGZhci5cbiAqIEBwYXJhbSB7IWZ1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFjayB0byBpbnZva2Ugd2l0aCBlYWNoIGNoaWxkIGZvdW5kLlxuICogQHBhcmFtIHs/Kn0gdHJhdmVyc2VDb250ZXh0IFVzZWQgdG8gcGFzcyBpbmZvcm1hdGlvbiB0aHJvdWdob3V0IHRoZSB0cmF2ZXJzYWxcbiAqIHByb2Nlc3MuXG4gKiBAcmV0dXJuIHshbnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuIGluIHRoaXMgc3VidHJlZS5cbiAqL1xuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGRyZW4sIG5hbWVTb0ZhciwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBzd2l0Y2ggKGNoaWxkcmVuLiQkdHlwZW9mKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DQUxMX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9SRVRVUk5fVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGludm9rZUNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sodHJhdmVyc2VDb250ZXh0LCBjaGlsZHJlbixcbiAgICAvLyBJZiBpdCdzIHRoZSBvbmx5IGNoaWxkLCB0cmVhdCB0aGUgbmFtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBhbiBhcnJheVxuICAgIC8vIHNvIHRoYXQgaXQncyBjb25zaXN0ZW50IGlmIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gZ3Jvd3MuXG4gICAgbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldENvbXBvbmVudEtleShjaGlsZHJlbiwgMCkgOiBuYW1lU29GYXIpO1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgdmFyIGNoaWxkO1xuICB2YXIgbmV4dE5hbWU7XG4gIHZhciBzdWJ0cmVlQ291bnQgPSAwOyAvLyBDb3VudCBvZiBjaGlsZHJlbiBmb3VuZCBpbiB0aGUgY3VycmVudCBzdWJ0cmVlLlxuICB2YXIgbmV4dE5hbWVQcmVmaXggPSBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SIDogbmFtZVNvRmFyICsgU1VCU0VQQVJBVE9SO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkLCBpKTtcbiAgICAgIHN1YnRyZWVDb3VudCArPSB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZCwgbmV4dE5hbWUsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4oY2hpbGRyZW4pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAge1xuICAgICAgICAvLyBXYXJuIGFib3V0IHVzaW5nIE1hcHMgYXMgY2hpbGRyZW5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gPT09IGNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICB3YXJuaW5nKGRpZFdhcm5BYm91dE1hcHMsICdVc2luZyBNYXBzIGFzIGNoaWxkcmVuIGlzIHVuc3VwcG9ydGVkIGFuZCB3aWxsIGxpa2VseSB5aWVsZCAnICsgJ3VuZXhwZWN0ZWQgcmVzdWx0cy4gQ29udmVydCBpdCB0byBhIHNlcXVlbmNlL2l0ZXJhYmxlIG9mIGtleWVkICcgKyAnUmVhY3RFbGVtZW50cyBpbnN0ZWFkLiVzJywgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCkpO1xuICAgICAgICAgIGRpZFdhcm5BYm91dE1hcHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChjaGlsZHJlbik7XG4gICAgICB2YXIgc3RlcDtcbiAgICAgIHZhciBpaSA9IDA7XG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIGNoaWxkID0gc3RlcC52YWx1ZTtcbiAgICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldENvbXBvbmVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgIHN1YnRyZWVDb3VudCArPSB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZCwgbmV4dE5hbWUsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBhZGRlbmR1bSA9ICcnO1xuICAgICAge1xuICAgICAgICBhZGRlbmR1bSA9ICcgSWYgeW91IG1lYW50IHRvIHJlbmRlciBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIHVzZSBhbiBhcnJheSAnICsgJ2luc3RlYWQuJyArIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuICAgICAgfVxuICAgICAgdmFyIGNoaWxkcmVuU3RyaW5nID0gJycgKyBjaGlsZHJlbjtcbiAgICAgIGludmFyaWFudChmYWxzZSwgJ09iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogJXMpLiVzJywgY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9JyA6IGNoaWxkcmVuU3RyaW5nLCBhZGRlbmR1bSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YnRyZWVDb3VudDtcbn1cblxuLyoqXG4gKiBUcmF2ZXJzZXMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLCBidXRcbiAqIG1pZ2h0IGFsc28gYmUgc3BlY2lmaWVkIHRocm91Z2ggYXR0cmlidXRlczpcbiAqXG4gKiAtIGB0cmF2ZXJzZUFsbENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4sIC4uLilgXG4gKiAtIGB0cmF2ZXJzZUFsbENoaWxkcmVuKHRoaXMucHJvcHMubGVmdFBhbmVsQ2hpbGRyZW4sIC4uLilgXG4gKlxuICogVGhlIGB0cmF2ZXJzZUNvbnRleHRgIGlzIGFuIG9wdGlvbmFsIGFyZ3VtZW50IHRoYXQgaXMgcGFzc2VkIHRocm91Z2ggdGhlXG4gKiBlbnRpcmUgdHJhdmVyc2FsLiBJdCBjYW4gYmUgdXNlZCB0byBzdG9yZSBhY2N1bXVsYXRpb25zIG9yIGFueXRoaW5nIGVsc2UgdGhhdFxuICogdGhlIGNhbGxiYWNrIG1pZ2h0IGZpbmQgcmVsZXZhbnQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBvYmplY3QuXG4gKiBAcGFyYW0geyFmdW5jdGlvbn0gY2FsbGJhY2sgVG8gaW52b2tlIHVwb24gdHJhdmVyc2luZyBlYWNoIGNoaWxkLlxuICogQHBhcmFtIHs/Kn0gdHJhdmVyc2VDb250ZXh0IENvbnRleHQgZm9yIHRyYXZlcnNhbC5cbiAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICovXG5mdW5jdGlvbiB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICByZXR1cm4gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGRyZW4sICcnLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KTtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBhIGtleSBzdHJpbmcgdGhhdCBpZGVudGlmaWVzIGEgY29tcG9uZW50IHdpdGhpbiBhIHNldC5cbiAqXG4gKiBAcGFyYW0geyp9IGNvbXBvbmVudCBBIGNvbXBvbmVudCB0aGF0IGNvdWxkIGNvbnRhaW4gYSBtYW51YWwga2V5LlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IEluZGV4IHRoYXQgaXMgdXNlZCBpZiBhIG1hbnVhbCBrZXkgaXMgbm90IHByb3ZpZGVkLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRDb21wb25lbnRLZXkoY29tcG9uZW50LCBpbmRleCkge1xuICAvLyBEbyBzb21lIHR5cGVjaGVja2luZyBoZXJlIHNpbmNlIHdlIGNhbGwgdGhpcyBibGluZGx5LiBXZSB3YW50IHRvIGVuc3VyZVxuICAvLyB0aGF0IHdlIGRvbid0IGJsb2NrIHBvdGVudGlhbCBmdXR1cmUgRVMgQVBJcy5cbiAgaWYgKHR5cGVvZiBjb21wb25lbnQgPT09ICdvYmplY3QnICYmIGNvbXBvbmVudCAhPT0gbnVsbCAmJiBjb21wb25lbnQua2V5ICE9IG51bGwpIHtcbiAgICAvLyBFeHBsaWNpdCBrZXlcbiAgICByZXR1cm4gZXNjYXBlKGNvbXBvbmVudC5rZXkpO1xuICB9XG4gIC8vIEltcGxpY2l0IGtleSBkZXRlcm1pbmVkIGJ5IHRoZSBpbmRleCBpbiB0aGUgc2V0XG4gIHJldHVybiBpbmRleC50b1N0cmluZygzNik7XG59XG5cbmZ1bmN0aW9uIGZvckVhY2hTaW5nbGVDaGlsZChib29rS2VlcGluZywgY2hpbGQsIG5hbWUpIHtcbiAgdmFyIGZ1bmMgPSBib29rS2VlcGluZy5mdW5jLFxuICAgICAgY29udGV4dCA9IGJvb2tLZWVwaW5nLmNvbnRleHQ7XG5cbiAgZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBib29rS2VlcGluZy5jb3VudCsrKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0LmNoaWxkcmVuLmZvcmVhY2hcbiAqXG4gKiBUaGUgcHJvdmlkZWQgZm9yRWFjaEZ1bmMoY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZm9yRWFjaEZ1bmNcbiAqIEBwYXJhbSB7Kn0gZm9yRWFjaENvbnRleHQgQ29udGV4dCBmb3IgZm9yRWFjaENvbnRleHQuXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2hDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG4gIHZhciB0cmF2ZXJzZUNvbnRleHQgPSBnZXRQb29sZWRUcmF2ZXJzZUNvbnRleHQobnVsbCwgbnVsbCwgZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KTtcbiAgdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaFNpbmdsZUNoaWxkLCB0cmF2ZXJzZUNvbnRleHQpO1xuICByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIG1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQoYm9va0tlZXBpbmcsIGNoaWxkLCBjaGlsZEtleSkge1xuICB2YXIgcmVzdWx0ID0gYm9va0tlZXBpbmcucmVzdWx0LFxuICAgICAga2V5UHJlZml4ID0gYm9va0tlZXBpbmcua2V5UHJlZml4LFxuICAgICAgZnVuYyA9IGJvb2tLZWVwaW5nLmZ1bmMsXG4gICAgICBjb250ZXh0ID0gYm9va0tlZXBpbmcuY29udGV4dDtcblxuXG4gIHZhciBtYXBwZWRDaGlsZCA9IGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgYm9va0tlZXBpbmcuY291bnQrKyk7XG4gIGlmIChBcnJheS5pc0FycmF5KG1hcHBlZENoaWxkKSkge1xuICAgIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwobWFwcGVkQ2hpbGQsIHJlc3VsdCwgY2hpbGRLZXksIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCk7XG4gIH0gZWxzZSBpZiAobWFwcGVkQ2hpbGQgIT0gbnVsbCkge1xuICAgIGlmIChpc1ZhbGlkRWxlbWVudChtYXBwZWRDaGlsZCkpIHtcbiAgICAgIG1hcHBlZENoaWxkID0gY2xvbmVBbmRSZXBsYWNlS2V5KG1hcHBlZENoaWxkLFxuICAgICAgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgIC8vIHRyYXZlcnNlQWxsQ2hpbGRyZW4gdXNlZCB0byBkbyBmb3Igb2JqZWN0cyBhcyBjaGlsZHJlblxuICAgICAga2V5UHJlZml4ICsgKG1hcHBlZENoaWxkLmtleSAmJiAoIWNoaWxkIHx8IGNoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IGVzY2FwZVVzZXJQcm92aWRlZEtleShtYXBwZWRDaGlsZC5rZXkpICsgJy8nIDogJycpICsgY2hpbGRLZXkpO1xuICAgIH1cbiAgICByZXN1bHQucHVzaChtYXBwZWRDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgYXJyYXksIHByZWZpeCwgZnVuYywgY29udGV4dCkge1xuICB2YXIgZXNjYXBlZFByZWZpeCA9ICcnO1xuICBpZiAocHJlZml4ICE9IG51bGwpIHtcbiAgICBlc2NhcGVkUHJlZml4ID0gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHByZWZpeCkgKyAnLyc7XG4gIH1cbiAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChhcnJheSwgZXNjYXBlZFByZWZpeCwgZnVuYywgY29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIG1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQsIHRyYXZlcnNlQ29udGV4dCk7XG4gIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KTtcbn1cblxuLyoqXG4gKiBNYXBzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0LmNoaWxkcmVuLm1hcFxuICpcbiAqIFRoZSBwcm92aWRlZCBtYXBGdW5jdGlvbihjaGlsZCwga2V5LCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZ1bmMgVGhlIG1hcCBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBDb250ZXh0IGZvciBtYXBGdW5jdGlvbi5cbiAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9yZGVyZWQgbWFwIG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgcmVzdWx0LCBudWxsLCBmdW5jLCBjb250ZXh0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXNcbiAqIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdC5jaGlsZHJlbi5jb3VudFxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuLlxuICovXG5mdW5jdGlvbiBjb3VudENoaWxkcmVuKGNoaWxkcmVuLCBjb250ZXh0KSB7XG4gIHJldHVybiB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCwgbnVsbCk7XG59XG5cbi8qKlxuICogRmxhdHRlbiBhIGNoaWxkcmVuIG9iamVjdCAodHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gKSBhbmRcbiAqIHJldHVybiBhbiBhcnJheSB3aXRoIGFwcHJvcHJpYXRlbHkgcmUta2V5ZWQgY2hpbGRyZW4uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdC5jaGlsZHJlbi50b2FycmF5XG4gKi9cbmZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgY2hpbGQgaW4gYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuIGFuZCB2ZXJpZmllcyB0aGF0IHRoZXJlXG4gKiBpcyBvbmx5IG9uZSBjaGlsZCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0LmNoaWxkcmVuLm9ubHlcbiAqXG4gKiBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGFzc3VtZXMgdGhhdCBhIHNpbmdsZSBjaGlsZCBnZXRzXG4gKiBwYXNzZWQgd2l0aG91dCBhIHdyYXBwZXIsIGJ1dCB0aGUgcHVycG9zZSBvZiB0aGlzIGhlbHBlciBmdW5jdGlvbiBpcyB0b1xuICogYWJzdHJhY3QgYXdheSB0aGUgcGFydGljdWxhciBzdHJ1Y3R1cmUgb2YgY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIHs/b2JqZWN0fSBjaGlsZHJlbiBDaGlsZCBjb2xsZWN0aW9uIHN0cnVjdHVyZS5cbiAqIEByZXR1cm4ge1JlYWN0RWxlbWVudH0gVGhlIGZpcnN0IGFuZCBvbmx5IGBSZWFjdEVsZW1lbnRgIGNvbnRhaW5lZCBpbiB0aGVcbiAqIHN0cnVjdHVyZS5cbiAqL1xuZnVuY3Rpb24gb25seUNoaWxkKGNoaWxkcmVuKSB7XG4gICFpc1ZhbGlkRWxlbWVudChjaGlsZHJlbikgPyBpbnZhcmlhbnQoZmFsc2UsICdSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC4nKSA6IHZvaWQgMDtcbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG52YXIgZGVzY3JpYmVDb21wb25lbnRGcmFtZSA9IGZ1bmN0aW9uIChuYW1lLCBzb3VyY2UsIG93bmVyTmFtZSkge1xuICByZXR1cm4gJ1xcbiAgICBpbiAnICsgKG5hbWUgfHwgJ1Vua25vd24nKSArIChzb3VyY2UgPyAnIChhdCAnICsgc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKSArICc6JyArIHNvdXJjZS5saW5lTnVtYmVyICsgJyknIDogb3duZXJOYW1lID8gJyAoY3JlYXRlZCBieSAnICsgb3duZXJOYW1lICsgJyknIDogJycpO1xufTtcblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZShmaWJlcikge1xuICB2YXIgdHlwZSA9IGZpYmVyLnR5cGU7XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBSZWFjdEVsZW1lbnRWYWxpZGF0b3IgcHJvdmlkZXMgYSB3cmFwcGVyIGFyb3VuZCBhIGVsZW1lbnQgZmFjdG9yeVxuICogd2hpY2ggdmFsaWRhdGVzIHRoZSBwcm9wcyBwYXNzZWQgdG8gdGhlIGVsZW1lbnQuIFRoaXMgaXMgaW50ZW5kZWQgdG8gYmVcbiAqIHVzZWQgb25seSBpbiBERVYgYW5kIGNvdWxkIGJlIHJlcGxhY2VkIGJ5IGEgc3RhdGljIHR5cGUgY2hlY2tlciBmb3IgbGFuZ3VhZ2VzXG4gKiB0aGF0IHN1cHBvcnQgaXQuXG4gKi9cblxue1xuICB2YXIgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBudWxsO1xuXG4gIHZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xuXG4gIHZhciBnZXREaXNwbGF5TmFtZSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcjZW1wdHknO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBlbGVtZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuICcjdGV4dCc7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudC50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGVsZW1lbnQudHlwZTtcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQudHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSkge1xuICAgICAgcmV0dXJuICdSZWFjdC5GcmFnbWVudCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbGVtZW50LnR5cGUuZGlzcGxheU5hbWUgfHwgZWxlbWVudC50eXBlLm5hbWUgfHwgJ1Vua25vd24nO1xuICAgIH1cbiAgfTtcblxuICB2YXIgZ2V0U3RhY2tBZGRlbmR1bSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhY2sgPSAnJztcbiAgICBpZiAoY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0RGlzcGxheU5hbWUoY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQpO1xuICAgICAgdmFyIG93bmVyID0gY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQuX293bmVyO1xuICAgICAgc3RhY2sgKz0gZGVzY3JpYmVDb21wb25lbnRGcmFtZShuYW1lLCBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudC5fc291cmNlLCBvd25lciAmJiBnZXRDb21wb25lbnROYW1lKG93bmVyKSk7XG4gICAgfVxuICAgIHN0YWNrICs9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpIHx8ICcnO1xuICAgIHJldHVybiBzdGFjaztcbiAgfTtcblxuICB2YXIgVkFMSURfRlJBR01FTlRfUFJPUFMgPSBuZXcgTWFwKFtbJ2NoaWxkcmVuJywgdHJ1ZV0sIFsna2V5JywgdHJ1ZV1dKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICBpZiAoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KTtcbiAgICBpZiAobmFtZSkge1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKGVsZW1lbnRQcm9wcykge1xuICBpZiAoZWxlbWVudFByb3BzICE9PSBudWxsICYmIGVsZW1lbnRQcm9wcyAhPT0gdW5kZWZpbmVkICYmIGVsZW1lbnRQcm9wcy5fX3NvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHNvdXJjZSA9IGVsZW1lbnRQcm9wcy5fX3NvdXJjZTtcbiAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gIGlmICghaW5mbykge1xuICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICBpbmZvID0gJ1xcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPCcgKyBwYXJlbnROYW1lICsgJz4uJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGluZm87XG59XG5cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG5cbiAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7XG5cbiAgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG4gIHZhciBjaGlsZE93bmVyID0gJyc7XG4gIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgY2hpbGRPd25lciA9ICcgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gJyArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIpICsgJy4nO1xuICB9XG5cbiAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBlbGVtZW50O1xuICB7XG4gICAgd2FybmluZyhmYWxzZSwgJ0VhY2ggY2hpbGQgaW4gYW4gYXJyYXkgb3IgaXRlcmF0b3Igc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJXMnLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyLCBnZXRTdGFja0FkZGVuZHVtKCkpO1xuICB9XG4gIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gbnVsbDtcbn1cblxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgfVxuICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB2YXIgY29tcG9uZW50Q2xhc3MgPSBlbGVtZW50LnR5cGU7XG4gIGlmICh0eXBlb2YgY29tcG9uZW50Q2xhc3MgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG5hbWUgPSBjb21wb25lbnRDbGFzcy5kaXNwbGF5TmFtZSB8fCBjb21wb25lbnRDbGFzcy5uYW1lO1xuICB2YXIgcHJvcFR5cGVzID0gY29tcG9uZW50Q2xhc3MucHJvcFR5cGVzO1xuICBpZiAocHJvcFR5cGVzKSB7XG4gICAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBlbGVtZW50O1xuICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBnZXRTdGFja0FkZGVuZHVtKTtcbiAgICBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCA9IG51bGw7XG4gIH0gZWxzZSBpZiAoY29tcG9uZW50Q2xhc3MuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlO1xuICAgIHdhcm5pbmcoZmFsc2UsICdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBuYW1lIHx8ICdVbmtub3duJyk7XG4gIH1cbiAgaWYgKHR5cGVvZiBjb21wb25lbnRDbGFzcy5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICB3YXJuaW5nKGNvbXBvbmVudENsYXNzLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCwgJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgfVxufVxuXG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCA9IGZyYWdtZW50O1xuXG4gIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgIHZhciBrZXkgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgaWYgKCFWQUxJRF9GUkFHTUVOVF9QUk9QUy5oYXMoa2V5KSkge1xuICAgICAgICB3YXJuaW5nKGZhbHNlLCAnSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLiVzJywga2V5LCBnZXRTdGFja0FkZGVuZHVtKCkpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvclsncmV0dXJuJ10pIHtcbiAgICAgICAgX2l0ZXJhdG9yWydyZXR1cm4nXSgpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgIHdhcm5pbmcoZmFsc2UsICdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiVzJywgZ2V0U3RhY2tBZGRlbmR1bSgpKTtcbiAgfVxuXG4gIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgdmFsaWRUeXBlID0gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiB0eXBlID09PSAnc3ltYm9sJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ251bWJlcic7XG4gIC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG4gIGlmICghdmFsaWRUeXBlKSB7XG4gICAgdmFyIGluZm8gPSAnJztcbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHByb3BzKTtcbiAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgIH1cblxuICAgIGluZm8gKz0gZ2V0U3RhY2tBZGRlbmR1bSgpIHx8ICcnO1xuXG4gICAgd2FybmluZyhmYWxzZSwgJ1JlYWN0LmNyZWF0ZUVsZW1lbnQ6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZSA9PSBudWxsID8gdHlwZSA6IHR5cGVvZiB0eXBlLCBpbmZvKTtcbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gIC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcbiAgaWYgKHZhbGlkVHlwZSkge1xuICAgIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N5bWJvbCcgJiYgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSkge1xuICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24odHlwZSkge1xuICB2YXIgdmFsaWRhdGVkRmFjdG9yeSA9IGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbi5iaW5kKG51bGwsIHR5cGUpO1xuICAvLyBMZWdhY3kgaG9vayBUT0RPOiBXYXJuIGlmIHRoaXMgaXMgYWNjZXNzZWRcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcblxuICB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbGlkYXRlZEZhY3RvcnksICd0eXBlJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG93UHJpb3JpdHlXYXJuaW5nJDEoZmFsc2UsICdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndHlwZScsIHtcbiAgICAgICAgICB2YWx1ZTogdHlwZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsaWRhdGVkRmFjdG9yeTtcbn1cblxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCBuZXdFbGVtZW50LnR5cGUpO1xuICB9XG4gIHZhbGlkYXRlUHJvcFR5cGVzKG5ld0VsZW1lbnQpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxudmFyIFJlYWN0ID0ge1xuICBDaGlsZHJlbjoge1xuICAgIG1hcDogbWFwQ2hpbGRyZW4sXG4gICAgZm9yRWFjaDogZm9yRWFjaENoaWxkcmVuLFxuICAgIGNvdW50OiBjb3VudENoaWxkcmVuLFxuICAgIHRvQXJyYXk6IHRvQXJyYXksXG4gICAgb25seTogb25seUNoaWxkXG4gIH0sXG5cbiAgQ29tcG9uZW50OiBDb21wb25lbnQsXG4gIFB1cmVDb21wb25lbnQ6IFB1cmVDb21wb25lbnQsXG4gIHVuc3RhYmxlX0FzeW5jQ29tcG9uZW50OiBBc3luY0NvbXBvbmVudCxcblxuICBGcmFnbWVudDogUkVBQ1RfRlJBR01FTlRfVFlQRSxcblxuICBjcmVhdGVFbGVtZW50OiBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24sXG4gIGNsb25lRWxlbWVudDogY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24sXG4gIGNyZWF0ZUZhY3Rvcnk6IGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbixcbiAgaXNWYWxpZEVsZW1lbnQ6IGlzVmFsaWRFbGVtZW50LFxuXG4gIHZlcnNpb246IFJlYWN0VmVyc2lvbixcblxuICBfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDoge1xuICAgIFJlYWN0Q3VycmVudE93bmVyOiBSZWFjdEN1cnJlbnRPd25lcixcbiAgICAvLyBVc2VkIGJ5IHJlbmRlcmVycyB0byBhdm9pZCBidW5kbGluZyBvYmplY3QtYXNzaWduIHR3aWNlIGluIFVNRCBidW5kbGVzOlxuICAgIGFzc2lnbjogX2Fzc2lnblxuICB9XG59O1xuXG57XG4gIF9hc3NpZ24oUmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQsIHtcbiAgICAvLyBUaGVzZSBzaG91bGQgbm90IGJlIGluY2x1ZGVkIGluIHByb2R1Y3Rpb24uXG4gICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTogUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSxcbiAgICAvLyBTaGltIGZvciBSZWFjdCBET00gMTYuMC4wIHdoaWNoIHN0aWxsIGRlc3RydWN0dXJlZCAoYnV0IG5vdCB1c2VkKSB0aGlzLlxuICAgIC8vIFRPRE86IHJlbW92ZSBpbiBSZWFjdCAxNy4wLlxuICAgIFJlYWN0Q29tcG9uZW50VHJlZUhvb2s6IHt9XG4gIH0pO1xufVxuXG5cblxudmFyIFJlYWN0JDIgPSBPYmplY3QuZnJlZXplKHtcblx0ZGVmYXVsdDogUmVhY3Rcbn0pO1xuXG52YXIgUmVhY3QkMyA9ICggUmVhY3QkMiAmJiBSZWFjdCApIHx8IFJlYWN0JDI7XG5cbi8vIFRPRE86IGRlY2lkZSBvbiB0aGUgdG9wLWxldmVsIGV4cG9ydCBmb3JtLlxuLy8gVGhpcyBpcyBoYWNreSBidXQgbWFrZXMgaXQgd29yayB3aXRoIGJvdGggUm9sbHVwIGFuZCBKZXN0LlxudmFyIHJlYWN0ID0gUmVhY3QkM1snZGVmYXVsdCddID8gUmVhY3QkM1snZGVmYXVsdCddIDogUmVhY3QkMztcblxubW9kdWxlLmV4cG9ydHMgPSByZWFjdDtcbiAgfSkoKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qc1xuLy8gbW9kdWxlIGlkID0gMTI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9ub2RlLWxpYnMtYnJvd3Nlci9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyICRpdGVyRGVmaW5lID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgc2V0U3BlY2llcyA9IHJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIGZhc3RLZXkgPSByZXF1aXJlKCcuL19tZXRhJykuZmFzdEtleTtcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBTSVpFID0gREVTQ1JJUFRPUlMgPyAnX3MnIDogJ3NpemUnO1xuXG52YXIgZ2V0RW50cnkgPSBmdW5jdGlvbiAodGhhdCwga2V5KSB7XG4gIC8vIGZhc3QgY2FzZVxuICB2YXIgaW5kZXggPSBmYXN0S2V5KGtleSk7XG4gIHZhciBlbnRyeTtcbiAgaWYgKGluZGV4ICE9PSAnRicpIHJldHVybiB0aGF0Ll9pW2luZGV4XTtcbiAgLy8gZnJvemVuIG9iamVjdCBjYXNlXG4gIGZvciAoZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKSB7XG4gICAgaWYgKGVudHJ5LmsgPT0ga2V5KSByZXR1cm4gZW50cnk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24gKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpIHtcbiAgICB2YXIgQyA9IHdyYXBwZXIoZnVuY3Rpb24gKHRoYXQsIGl0ZXJhYmxlKSB7XG4gICAgICBhbkluc3RhbmNlKHRoYXQsIEMsIE5BTUUsICdfaScpO1xuICAgICAgdGhhdC5fdCA9IE5BTUU7ICAgICAgICAgLy8gY29sbGVjdGlvbiB0eXBlXG4gICAgICB0aGF0Ll9pID0gY3JlYXRlKG51bGwpOyAvLyBpbmRleFxuICAgICAgdGhhdC5fZiA9IHVuZGVmaW5lZDsgICAgLy8gZmlyc3QgZW50cnlcbiAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7ICAgIC8vIGxhc3QgZW50cnlcbiAgICAgIHRoYXRbU0laRV0gPSAwOyAgICAgICAgIC8vIHNpemVcbiAgICAgIGlmIChpdGVyYWJsZSAhPSB1bmRlZmluZWQpIGZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICB9KTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuICAgICAgLy8gMjMuMS4zLjEgTWFwLnByb3RvdHlwZS5jbGVhcigpXG4gICAgICAvLyAyMy4yLjMuMiBTZXQucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgICAgZm9yICh2YXIgdGhhdCA9IHZhbGlkYXRlKHRoaXMsIE5BTUUpLCBkYXRhID0gdGhhdC5faSwgZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKSB7XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYgKGVudHJ5LnApIGVudHJ5LnAgPSBlbnRyeS5wLm4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgZGVsZXRlIGRhdGFbZW50cnkuaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5fZiA9IHRoYXQuX2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoYXRbU0laRV0gPSAwO1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy4zIE1hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcbiAgICAgIC8vIDIzLjIuMy40IFNldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB2YWxpZGF0ZSh0aGlzLCBOQU1FKTtcbiAgICAgICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uO1xuICAgICAgICAgIHZhciBwcmV2ID0gZW50cnkucDtcbiAgICAgICAgICBkZWxldGUgdGhhdC5faVtlbnRyeS5pXTtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZiAocHJldikgcHJldi5uID0gbmV4dDtcbiAgICAgICAgICBpZiAobmV4dCkgbmV4dC5wID0gcHJldjtcbiAgICAgICAgICBpZiAodGhhdC5fZiA9PSBlbnRyeSkgdGhhdC5fZiA9IG5leHQ7XG4gICAgICAgICAgaWYgKHRoYXQuX2wgPT0gZW50cnkpIHRoYXQuX2wgPSBwcmV2O1xuICAgICAgICAgIHRoYXRbU0laRV0tLTtcbiAgICAgICAgfSByZXR1cm4gISFlbnRyeTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4yLjMuNiBTZXQucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIC8vIDIzLjEuMy41IE1hcC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgICAgICB2YWxpZGF0ZSh0aGlzLCBOQU1FKTtcbiAgICAgICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIDMpO1xuICAgICAgICB2YXIgZW50cnk7XG4gICAgICAgIHdoaWxlIChlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoaXMuX2YpIHtcbiAgICAgICAgICBmKGVudHJ5LnYsIGVudHJ5LmssIHRoaXMpO1xuICAgICAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgICAgIHdoaWxlIChlbnRyeSAmJiBlbnRyeS5yKSBlbnRyeSA9IGVudHJ5LnA7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuNyBNYXAucHJvdG90eXBlLmhhcyhrZXkpXG4gICAgICAvLyAyMy4yLjMuNyBTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSkge1xuICAgICAgICByZXR1cm4gISFnZXRFbnRyeSh2YWxpZGF0ZSh0aGlzLCBOQU1FKSwga2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRQKEMucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUodGhpcywgTkFNRSlbU0laRV07XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIEM7XG4gIH0sXG4gIGRlZjogZnVuY3Rpb24gKHRoYXQsIGtleSwgdmFsdWUpIHtcbiAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgIHZhciBwcmV2LCBpbmRleDtcbiAgICAvLyBjaGFuZ2UgZXhpc3RpbmcgZW50cnlcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgIGVudHJ5LnYgPSB2YWx1ZTtcbiAgICAvLyBjcmVhdGUgbmV3IGVudHJ5XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuX2wgPSBlbnRyeSA9IHtcbiAgICAgICAgaTogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksIC8vIDwtIGluZGV4XG4gICAgICAgIGs6IGtleSwgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBrZXlcbiAgICAgICAgdjogdmFsdWUsICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHZhbHVlXG4gICAgICAgIHA6IHByZXYgPSB0aGF0Ll9sLCAgICAgICAgICAgICAvLyA8LSBwcmV2aW91cyBlbnRyeVxuICAgICAgICBuOiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgLy8gPC0gbmV4dCBlbnRyeVxuICAgICAgICByOiBmYWxzZSAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gcmVtb3ZlZFxuICAgICAgfTtcbiAgICAgIGlmICghdGhhdC5fZikgdGhhdC5fZiA9IGVudHJ5O1xuICAgICAgaWYgKHByZXYpIHByZXYubiA9IGVudHJ5O1xuICAgICAgdGhhdFtTSVpFXSsrO1xuICAgICAgLy8gYWRkIHRvIGluZGV4XG4gICAgICBpZiAoaW5kZXggIT09ICdGJykgdGhhdC5faVtpbmRleF0gPSBlbnRyeTtcbiAgICB9IHJldHVybiB0aGF0O1xuICB9LFxuICBnZXRFbnRyeTogZ2V0RW50cnksXG4gIHNldFN0cm9uZzogZnVuY3Rpb24gKEMsIE5BTUUsIElTX01BUCkge1xuICAgIC8vIGFkZCAua2V5cywgLnZhbHVlcywgLmVudHJpZXMsIFtAQGl0ZXJhdG9yXVxuICAgIC8vIDIzLjEuMy40LCAyMy4xLjMuOCwgMjMuMS4zLjExLCAyMy4xLjMuMTIsIDIzLjIuMy41LCAyMy4yLjMuOCwgMjMuMi4zLjEwLCAyMy4yLjMuMTFcbiAgICAkaXRlckRlZmluZShDLCBOQU1FLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgICAgIHRoaXMuX3QgPSB2YWxpZGF0ZShpdGVyYXRlZCwgTkFNRSk7IC8vIHRhcmdldFxuICAgICAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgICAgICAgLy8ga2luZFxuICAgICAgdGhpcy5fbCA9IHVuZGVmaW5lZDsgICAgICAgICAgICAgICAgLy8gcHJldmlvdXNcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICB2YXIga2luZCA9IHRoYXQuX2s7XG4gICAgICB2YXIgZW50cnkgPSB0aGF0Ll9sO1xuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICB3aGlsZSAoZW50cnkgJiYgZW50cnkucikgZW50cnkgPSBlbnRyeS5wO1xuICAgICAgLy8gZ2V0IG5leHQgZW50cnlcbiAgICAgIGlmICghdGhhdC5fdCB8fCAhKHRoYXQuX2wgPSBlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoYXQuX3QuX2YpKSB7XG4gICAgICAgIC8vIG9yIGZpbmlzaCB0aGUgaXRlcmF0aW9uXG4gICAgICAgIHRoYXQuX3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBzdGVwKDEpO1xuICAgICAgfVxuICAgICAgLy8gcmV0dXJuIHN0ZXAgYnkga2luZFxuICAgICAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBlbnRyeS5rKTtcbiAgICAgIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBlbnRyeS52KTtcbiAgICAgIHJldHVybiBzdGVwKDAsIFtlbnRyeS5rLCBlbnRyeS52XSk7XG4gICAgfSwgSVNfTUFQID8gJ2VudHJpZXMnIDogJ3ZhbHVlcycsICFJU19NQVAsIHRydWUpO1xuXG4gICAgLy8gYWRkIFtAQHNwZWNpZXNdLCAyMy4xLjIuMiwgMjMuMi4yLjJcbiAgICBzZXRTcGVjaWVzKE5BTUUpO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvbGxlY3Rpb24tc3Ryb25nLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBtZXRhID0gcmVxdWlyZSgnLi9fbWV0YScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgZWFjaCA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSgwKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE5BTUUsIHdyYXBwZXIsIG1ldGhvZHMsIGNvbW1vbiwgSVNfTUFQLCBJU19XRUFLKSB7XG4gIHZhciBCYXNlID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgQyA9IEJhc2U7XG4gIHZhciBBRERFUiA9IElTX01BUCA/ICdzZXQnIDogJ2FkZCc7XG4gIHZhciBwcm90byA9IEMgJiYgQy5wcm90b3R5cGU7XG4gIHZhciBPID0ge307XG4gIGlmICghREVTQ1JJUFRPUlMgfHwgdHlwZW9mIEMgIT0gJ2Z1bmN0aW9uJyB8fCAhKElTX1dFQUsgfHwgcHJvdG8uZm9yRWFjaCAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIG5ldyBDKCkuZW50cmllcygpLm5leHQoKTtcbiAgfSkpKSB7XG4gICAgLy8gY3JlYXRlIGNvbGxlY3Rpb24gY29uc3RydWN0b3JcbiAgICBDID0gY29tbW9uLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCBtZXRob2RzKTtcbiAgICBtZXRhLk5FRUQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIEMgPSB3cmFwcGVyKGZ1bmN0aW9uICh0YXJnZXQsIGl0ZXJhYmxlKSB7XG4gICAgICBhbkluc3RhbmNlKHRhcmdldCwgQywgTkFNRSwgJ19jJyk7XG4gICAgICB0YXJnZXQuX2MgPSBuZXcgQmFzZSgpO1xuICAgICAgaWYgKGl0ZXJhYmxlICE9IHVuZGVmaW5lZCkgZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGFyZ2V0W0FEREVSXSwgdGFyZ2V0KTtcbiAgICB9KTtcbiAgICBlYWNoKCdhZGQsY2xlYXIsZGVsZXRlLGZvckVhY2gsZ2V0LGhhcyxzZXQsa2V5cyx2YWx1ZXMsZW50cmllcyx0b0pTT04nLnNwbGl0KCcsJyksIGZ1bmN0aW9uIChLRVkpIHtcbiAgICAgIHZhciBJU19BRERFUiA9IEtFWSA9PSAnYWRkJyB8fCBLRVkgPT0gJ3NldCc7XG4gICAgICBpZiAoS0VZIGluIHByb3RvICYmICEoSVNfV0VBSyAmJiBLRVkgPT0gJ2NsZWFyJykpIGhpZGUoQy5wcm90b3R5cGUsIEtFWSwgZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgYW5JbnN0YW5jZSh0aGlzLCBDLCBLRVkpO1xuICAgICAgICBpZiAoIUlTX0FEREVSICYmIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpKSByZXR1cm4gS0VZID09ICdnZXQnID8gdW5kZWZpbmVkIDogZmFsc2U7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9jW0tFWV0oYSA9PT0gMCA/IDAgOiBhLCBiKTtcbiAgICAgICAgcmV0dXJuIElTX0FEREVSID8gdGhpcyA6IHJlc3VsdDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIElTX1dFQUsgfHwgZFAoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jLnNpemU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRUb1N0cmluZ1RhZyhDLCBOQU1FKTtcblxuICBPW05BTUVdID0gQztcbiAgJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYsIE8pO1xuXG4gIGlmICghSVNfV0VBSykgY29tbW9uLnNldFN0cm9uZyhDLCBOQU1FLCBJU19NQVApO1xuXG4gIHJldHVybiBDO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2xsZWN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiLy8gMCAtPiBBcnJheSNmb3JFYWNoXG4vLyAxIC0+IEFycmF5I21hcFxuLy8gMiAtPiBBcnJheSNmaWx0ZXJcbi8vIDMgLT4gQXJyYXkjc29tZVxuLy8gNCAtPiBBcnJheSNldmVyeVxuLy8gNSAtPiBBcnJheSNmaW5kXG4vLyA2IC0+IEFycmF5I2ZpbmRJbmRleFxudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGFzYyA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUWVBFLCAkY3JlYXRlKSB7XG4gIHZhciBJU19NQVAgPSBUWVBFID09IDE7XG4gIHZhciBJU19GSUxURVIgPSBUWVBFID09IDI7XG4gIHZhciBJU19TT01FID0gVFlQRSA9PSAzO1xuICB2YXIgSVNfRVZFUlkgPSBUWVBFID09IDQ7XG4gIHZhciBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2O1xuICB2YXIgTk9fSE9MRVMgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWDtcbiAgdmFyIGNyZWF0ZSA9ICRjcmVhdGUgfHwgYXNjO1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0KSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCgkdGhpcyk7XG4gICAgdmFyIHNlbGYgPSBJT2JqZWN0KE8pO1xuICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsLCByZXM7XG4gICAgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKSB7XG4gICAgICB2YWwgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlcyA9IGYodmFsLCBpbmRleCwgTyk7XG4gICAgICBpZiAoVFlQRSkge1xuICAgICAgICBpZiAoSVNfTUFQKSByZXN1bHRbaW5kZXhdID0gcmVzOyAgIC8vIG1hcFxuICAgICAgICBlbHNlIGlmIChyZXMpIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWw7ICAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiByZXN1bHQucHVzaCh2YWwpOyAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBpZiAoSVNfRVZFUlkpIHJldHVybiBmYWxzZTsgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHJlc3VsdDtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktbWV0aG9kcy5qc1xuLy8gbW9kdWxlIGlkID0gMTM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNSIsIi8vIDkuNC4yLjMgQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aClcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsLCBsZW5ndGgpIHtcbiAgcmV0dXJuIG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKG9yaWdpbmFsKSkobGVuZ3RoKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDEzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWwpIHtcbiAgdmFyIEM7XG4gIGlmIChpc0FycmF5KG9yaWdpbmFsKSkge1xuICAgIEMgPSBvcmlnaW5hbC5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmICh0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpIEMgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGlzT2JqZWN0KEMpKSB7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmIChDID09PSBudWxsKSBDID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSByZXR1cm4gQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgZnJvbSA9IHJlcXVpcmUoJy4vX2FycmF5LWZyb20taXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE5BTUUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICBpZiAoY2xhc3NvZih0aGlzKSAhPSBOQU1FKSB0aHJvdyBUeXBlRXJyb3IoTkFNRSArIFwiI3RvSlNPTiBpc24ndCBnZW5lcmljXCIpO1xuICAgIHJldHVybiBmcm9tKHRoaXMpO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2xsZWN0aW9uLXRvLWpzb24uanNcbi8vIG1vZHVsZSBpZCA9IDEzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCJ2YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlciwgSVRFUkFUT1IpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3JPZihpdGVyLCBmYWxzZSwgcmVzdWx0LnB1c2gsIHJlc3VsdCwgSVRFUkFUT1IpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1mcm9tLWl0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tL1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ09MTEVDVElPTikge1xuICAkZXhwb3J0KCRleHBvcnQuUywgQ09MTEVDVElPTiwgeyBvZjogZnVuY3Rpb24gb2YoKSB7XG4gICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIEEgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgICB3aGlsZSAobGVuZ3RoLS0pIEFbbGVuZ3RoXSA9IGFyZ3VtZW50c1tsZW5ndGhdO1xuICAgIHJldHVybiBuZXcgdGhpcyhBKTtcbiAgfSB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LWNvbGxlY3Rpb24tb2YuanNcbi8vIG1vZHVsZSBpZCA9IDE0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUiLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDT0xMRUNUSU9OKSB7XG4gICRleHBvcnQoJGV4cG9ydC5TLCBDT0xMRUNUSU9OLCB7IGZyb206IGZ1bmN0aW9uIGZyb20oc291cmNlIC8qICwgbWFwRm4sIHRoaXNBcmcgKi8pIHtcbiAgICB2YXIgbWFwRm4gPSBhcmd1bWVudHNbMV07XG4gICAgdmFyIG1hcHBpbmcsIEEsIG4sIGNiO1xuICAgIGFGdW5jdGlvbih0aGlzKTtcbiAgICBtYXBwaW5nID0gbWFwRm4gIT09IHVuZGVmaW5lZDtcbiAgICBpZiAobWFwcGluZykgYUZ1bmN0aW9uKG1hcEZuKTtcbiAgICBpZiAoc291cmNlID09IHVuZGVmaW5lZCkgcmV0dXJuIG5ldyB0aGlzKCk7XG4gICAgQSA9IFtdO1xuICAgIGlmIChtYXBwaW5nKSB7XG4gICAgICBuID0gMDtcbiAgICAgIGNiID0gY3R4KG1hcEZuLCBhcmd1bWVudHNbMl0sIDIpO1xuICAgICAgZm9yT2Yoc291cmNlLCBmYWxzZSwgZnVuY3Rpb24gKG5leHRJdGVtKSB7XG4gICAgICAgIEEucHVzaChjYihuZXh0SXRlbSwgbisrKSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yT2Yoc291cmNlLCBmYWxzZSwgQS5wdXNoLCBBKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyB0aGlzKEEpO1xuICB9IH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtY29sbGVjdGlvbi1mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA1IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgNSIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDUiLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDE2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiA1IiwicmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvcicpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDUiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXQgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3IgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIGl0ZXJGbiA9IGdldChpdCk7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICByZXR1cm4gYW5PYmplY3QoaXRlckZuLmNhbGwoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vaXMtaXRlcmFibGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDE2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiA1IiwicmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vaXMtaXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDE2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiA1IiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmlzSXRlcmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8gPSBPYmplY3QoaXQpO1xuICByZXR1cm4gT1tJVEVSQVRPUl0gIT09IHVuZGVmaW5lZFxuICAgIHx8ICdAQGl0ZXJhdG9yJyBpbiBPXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICAgIHx8IEl0ZXJhdG9ycy5oYXNPd25Qcm9wZXJ0eShjbGFzc29mKE8pKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgNSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9tYXAgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvbWFwJyk7XG5cbnZhciBfbWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hcCk7XG5cbnZhciBfc2xpY2VkVG9BcnJheTIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheScpO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2xpY2VkVG9BcnJheTIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxuZXhwb3J0cy5mbHVzaCA9IGZsdXNoO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9zdHlsZXNoZWV0UmVnaXN0cnkgPSByZXF1aXJlKCcuL3N0eWxlc2hlZXQtcmVnaXN0cnknKTtcblxudmFyIF9zdHlsZXNoZWV0UmVnaXN0cnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3R5bGVzaGVldFJlZ2lzdHJ5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHN0eWxlU2hlZXRSZWdpc3RyeSA9IG5ldyBfc3R5bGVzaGVldFJlZ2lzdHJ5Mi5kZWZhdWx0KCk7XG5cbnZhciBKU1hTdHlsZSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKEpTWFN0eWxlLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBKU1hTdHlsZSgpIHtcbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBKU1hTdHlsZSk7XG4gICAgcmV0dXJuICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKEpTWFN0eWxlLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShKU1hTdHlsZSkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoSlNYU3R5bGUsIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgc3R5bGVTaGVldFJlZ2lzdHJ5LmFkZCh0aGlzLnByb3BzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzaG91bGRDb21wb25lbnRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jc3MgIT09IG5leHRQcm9wcy5jc3M7XG4gICAgfVxuXG4gICAgLy8gVG8gYXZvaWQgRk9VQywgd2UgcHJvY2VzcyBuZXcgY2hhbmdlc1xuICAgIC8vIG9uIGBjb21wb25lbnRXaWxsVXBkYXRlYCByYXRoZXIgdGhhbiBgY29tcG9uZW50RGlkVXBkYXRlYC5cblxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICBzdHlsZVNoZWV0UmVnaXN0cnkudXBkYXRlKHRoaXMucHJvcHMsIG5leHRQcm9wcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHN0eWxlU2hlZXRSZWdpc3RyeS5yZW1vdmUodGhpcy5wcm9wcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6ICdkeW5hbWljJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZHluYW1pYyhpbmZvKSB7XG4gICAgICByZXR1cm4gaW5mby5tYXAoZnVuY3Rpb24gKHRhZ0luZm8pIHtcbiAgICAgICAgdmFyIF90YWdJbmZvID0gKDAsIF9zbGljZWRUb0FycmF5My5kZWZhdWx0KSh0YWdJbmZvLCAyKSxcbiAgICAgICAgICAgIGJhc2VJZCA9IF90YWdJbmZvWzBdLFxuICAgICAgICAgICAgcHJvcHMgPSBfdGFnSW5mb1sxXTtcblxuICAgICAgICByZXR1cm4gc3R5bGVTaGVldFJlZ2lzdHJ5LmNvbXB1dGVJZChiYXNlSWQsIHByb3BzKTtcbiAgICAgIH0pLmpvaW4oJyAnKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEpTWFN0eWxlO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSlNYU3R5bGU7XG5mdW5jdGlvbiBmbHVzaCgpIHtcbiAgdmFyIGNzc1J1bGVzID0gc3R5bGVTaGVldFJlZ2lzdHJ5LmNzc1J1bGVzKCk7XG4gIHN0eWxlU2hlZXRSZWdpc3RyeS5mbHVzaCgpO1xuICByZXR1cm4gbmV3IF9tYXAyLmRlZmF1bHQoY3NzUnVsZXMpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlZC1qc3gvZGlzdC9zdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gMzgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMiA1IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL21hcFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9tYXAuanNcbi8vIG1vZHVsZSBpZCA9IDM4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNSIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXAnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3Lm1hcC50by1qc29uJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5tYXAub2YnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3Lm1hcC5mcm9tJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5NYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vbWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAzODNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDUiLCIndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi1zdHJvbmcnKTtcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBNQVAgPSAnTWFwJztcblxuLy8gMjMuMSBNYXAgT2JqZWN0c1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoTUFQLCBmdW5jdGlvbiAoZ2V0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBNYXAoKSB7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4xLjMuNiBNYXAucHJvdG90eXBlLmdldChrZXkpXG4gIGdldDogZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgIHZhciBlbnRyeSA9IHN0cm9uZy5nZXRFbnRyeSh2YWxpZGF0ZSh0aGlzLCBNQVApLCBrZXkpO1xuICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS52O1xuICB9LFxuICAvLyAyMy4xLjMuOSBNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodmFsaWRhdGUodGhpcywgTUFQKSwga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcsIHRydWUpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm1hcC5qc1xuLy8gbW9kdWxlIGlkID0gMzg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA1IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdNYXAnLCB7IHRvSlNPTjogcmVxdWlyZSgnLi9fY29sbGVjdGlvbi10by1qc29uJykoJ01hcCcpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm1hcC50by1qc29uLmpzXG4vLyBtb2R1bGUgaWQgPSAzODVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDUiLCIvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vI3NlYy1tYXAub2ZcbnJlcXVpcmUoJy4vX3NldC1jb2xsZWN0aW9uLW9mJykoJ01hcCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm1hcC5vZi5qc1xuLy8gbW9kdWxlIGlkID0gMzg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA1IiwiLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tLyNzZWMtbWFwLmZyb21cbnJlcXVpcmUoJy4vX3NldC1jb2xsZWN0aW9uLWZyb20nKSgnTWFwJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcubWFwLmZyb20uanNcbi8vIG1vZHVsZSBpZCA9IDM4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDIgNSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9rZXlzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzJyk7XG5cbnZhciBfa2V5czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9rZXlzKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfc3RyaW5nSGFzaCA9IHJlcXVpcmUoJ3N0cmluZy1oYXNoJyk7XG5cbnZhciBfc3RyaW5nSGFzaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHJpbmdIYXNoKTtcblxudmFyIF9zdHlsZXNoZWV0ID0gcmVxdWlyZSgnLi9saWIvc3R5bGVzaGVldCcpO1xuXG52YXIgX3N0eWxlc2hlZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3R5bGVzaGVldCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBTdHlsZVNoZWV0UmVnaXN0cnkgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0eWxlU2hlZXRSZWdpc3RyeSgpIHtcbiAgICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICAgIF9yZWYkc3R5bGVTaGVldCA9IF9yZWYuc3R5bGVTaGVldCxcbiAgICAgICAgc3R5bGVTaGVldCA9IF9yZWYkc3R5bGVTaGVldCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IF9yZWYkc3R5bGVTaGVldCxcbiAgICAgICAgX3JlZiRvcHRpbWl6ZUZvclNwZWVkID0gX3JlZi5vcHRpbWl6ZUZvclNwZWVkLFxuICAgICAgICBvcHRpbWl6ZUZvclNwZWVkID0gX3JlZiRvcHRpbWl6ZUZvclNwZWVkID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9yZWYkb3B0aW1pemVGb3JTcGVlZCxcbiAgICAgICAgX3JlZiRpc0Jyb3dzZXIgPSBfcmVmLmlzQnJvd3NlcixcbiAgICAgICAgaXNCcm93c2VyID0gX3JlZiRpc0Jyb3dzZXIgPT09IHVuZGVmaW5lZCA/IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnIDogX3JlZiRpc0Jyb3dzZXI7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBTdHlsZVNoZWV0UmVnaXN0cnkpO1xuXG4gICAgdGhpcy5fc2hlZXQgPSBzdHlsZVNoZWV0IHx8IG5ldyBfc3R5bGVzaGVldDIuZGVmYXVsdCh7XG4gICAgICBuYW1lOiAnc3R5bGVkLWpzeCcsXG4gICAgICBvcHRpbWl6ZUZvclNwZWVkOiBvcHRpbWl6ZUZvclNwZWVkXG4gICAgfSk7XG4gICAgdGhpcy5fc2hlZXQuaW5qZWN0KCk7XG4gICAgdGhpcy5faXNCcm93c2VyID0gaXNCcm93c2VyO1xuXG4gICAgdGhpcy5fZnJvbVNlcnZlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9pbmRpY2VzID0ge307XG4gICAgdGhpcy5faW5zdGFuY2VzQ291bnRzID0ge307XG5cbiAgICB0aGlzLmNvbXB1dGVJZCA9IHRoaXMuY3JlYXRlQ29tcHV0ZUlkKCk7XG4gICAgdGhpcy5jb21wdXRlU2VsZWN0b3IgPSB0aGlzLmNyZWF0ZUNvbXB1dGVTZWxlY3RvcigpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoU3R5bGVTaGVldFJlZ2lzdHJ5LCBbe1xuICAgIGtleTogJ2FkZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZChwcm9wcykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gdGhpcy5fb3B0aW1pemVGb3JTcGVlZCkge1xuICAgICAgICB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkID0gQXJyYXkuaXNBcnJheShwcm9wcy5jc3MpO1xuICAgICAgICB0aGlzLl9zaGVldC5zZXRPcHRpbWl6ZUZvclNwZWVkKHRoaXMuX29wdGltaXplRm9yU3BlZWQpO1xuICAgICAgICB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkID0gdGhpcy5fc2hlZXQuaXNPcHRpbWl6ZUZvclNwZWVkKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9pc0Jyb3dzZXIgJiYgIXRoaXMuX2Zyb21TZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5fZnJvbVNlcnZlciA9IHRoaXMuc2VsZWN0RnJvbVNlcnZlcigpO1xuICAgICAgICB0aGlzLl9pbnN0YW5jZXNDb3VudHMgPSAoMCwgX2tleXMyLmRlZmF1bHQpKHRoaXMuX2Zyb21TZXJ2ZXIpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCB0YWdOYW1lKSB7XG4gICAgICAgICAgYWNjW3RhZ05hbWVdID0gMDtcbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCB7fSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBfZ2V0SWRBbmRSdWxlcyA9IHRoaXMuZ2V0SWRBbmRSdWxlcyhwcm9wcyksXG4gICAgICAgICAgc3R5bGVJZCA9IF9nZXRJZEFuZFJ1bGVzLnN0eWxlSWQsXG4gICAgICAgICAgcnVsZXMgPSBfZ2V0SWRBbmRSdWxlcy5ydWxlcztcblxuICAgICAgLy8gRGVkdXBpbmc6IGp1c3QgaW5jcmVhc2UgdGhlIGluc3RhbmNlcyBjb3VudC5cblxuXG4gICAgICBpZiAoc3R5bGVJZCBpbiB0aGlzLl9pbnN0YW5jZXNDb3VudHMpIHtcbiAgICAgICAgdGhpcy5faW5zdGFuY2VzQ291bnRzW3N0eWxlSWRdICs9IDE7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGluZGljZXMgPSBydWxlcy5tYXAoZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLl9zaGVldC5pbnNlcnRSdWxlKHJ1bGUpO1xuICAgICAgfSlcbiAgICAgIC8vIEZpbHRlciBvdXQgaW52YWxpZCBydWxlc1xuICAgICAgLmZpbHRlcihmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGluZGV4ICE9PSAtMTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaW5kaWNlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuX2luZGljZXNbc3R5bGVJZF0gPSBpbmRpY2VzO1xuICAgICAgICB0aGlzLl9pbnN0YW5jZXNDb3VudHNbc3R5bGVJZF0gPSAxO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZShwcm9wcykge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfZ2V0SWRBbmRSdWxlczIgPSB0aGlzLmdldElkQW5kUnVsZXMocHJvcHMpLFxuICAgICAgICAgIHN0eWxlSWQgPSBfZ2V0SWRBbmRSdWxlczIuc3R5bGVJZDtcblxuICAgICAgaW52YXJpYW50KHN0eWxlSWQgaW4gdGhpcy5faW5zdGFuY2VzQ291bnRzLCAnc3R5bGVJZDogYCcgKyBzdHlsZUlkICsgJ2Agbm90IGZvdW5kJyk7XG4gICAgICB0aGlzLl9pbnN0YW5jZXNDb3VudHNbc3R5bGVJZF0gLT0gMTtcblxuICAgICAgaWYgKHRoaXMuX2luc3RhbmNlc0NvdW50c1tzdHlsZUlkXSA8IDEpIHtcbiAgICAgICAgdmFyIHRhZ0Zyb21TZXJ2ZXIgPSB0aGlzLl9mcm9tU2VydmVyICYmIHRoaXMuX2Zyb21TZXJ2ZXJbc3R5bGVJZF07XG4gICAgICAgIGlmICh0YWdGcm9tU2VydmVyKSB7XG4gICAgICAgICAgdGFnRnJvbVNlcnZlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhZ0Zyb21TZXJ2ZXIpO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9mcm9tU2VydmVyW3N0eWxlSWRdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2luZGljZXNbc3R5bGVJZF0uZm9yRWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczIuX3NoZWV0LmRlbGV0ZVJ1bGUoaW5kZXgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9pbmRpY2VzW3N0eWxlSWRdO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9pbnN0YW5jZXNDb3VudHNbc3R5bGVJZF07XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlKHByb3BzLCBuZXh0UHJvcHMpIHtcbiAgICAgIHRoaXMuYWRkKG5leHRQcm9wcyk7XG4gICAgICB0aGlzLnJlbW92ZShwcm9wcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZmx1c2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICAgIHRoaXMuX3NoZWV0LmZsdXNoKCk7XG4gICAgICB0aGlzLl9zaGVldC5pbmplY3QoKTtcbiAgICAgIHRoaXMuX2Zyb21TZXJ2ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbmRpY2VzID0ge307XG4gICAgICB0aGlzLl9pbnN0YW5jZXNDb3VudHMgPSB7fTtcblxuICAgICAgdGhpcy5jb21wdXRlSWQgPSB0aGlzLmNyZWF0ZUNvbXB1dGVJZCgpO1xuICAgICAgdGhpcy5jb21wdXRlU2VsZWN0b3IgPSB0aGlzLmNyZWF0ZUNvbXB1dGVTZWxlY3RvcigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Nzc1J1bGVzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3NzUnVsZXMoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIGZyb21TZXJ2ZXIgPSB0aGlzLl9mcm9tU2VydmVyID8gKDAsIF9rZXlzMi5kZWZhdWx0KSh0aGlzLl9mcm9tU2VydmVyKS5tYXAoZnVuY3Rpb24gKHN0eWxlSWQpIHtcbiAgICAgICAgcmV0dXJuIFtzdHlsZUlkLCBfdGhpczMuX2Zyb21TZXJ2ZXJbc3R5bGVJZF1dO1xuICAgICAgfSkgOiBbXTtcbiAgICAgIHZhciBjc3NSdWxlcyA9IHRoaXMuX3NoZWV0LmNzc1J1bGVzKCk7XG5cbiAgICAgIHJldHVybiBmcm9tU2VydmVyLmNvbmNhdCgoMCwgX2tleXMyLmRlZmF1bHQpKHRoaXMuX2luZGljZXMpLm1hcChmdW5jdGlvbiAoc3R5bGVJZCkge1xuICAgICAgICByZXR1cm4gW3N0eWxlSWQsIF90aGlzMy5faW5kaWNlc1tzdHlsZUlkXS5tYXAoZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIGNzc1J1bGVzW2luZGV4XS5jc3NUZXh0O1xuICAgICAgICB9KS5qb2luKCdcXG4nKV07XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY3JlYXRlQ29tcHV0ZUlkXG4gICAgICpcbiAgICAgKiBDcmVhdGVzIGEgZnVuY3Rpb24gdG8gY29tcHV0ZSBhbmQgbWVtb2l6ZSBhIGpzeCBpZCBmcm9tIGEgYmFzZWRJZCBhbmQgb3B0aW9uYWxseSBwcm9wcy5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnY3JlYXRlQ29tcHV0ZUlkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlQ29tcHV0ZUlkKCkge1xuICAgICAgdmFyIGNhY2hlID0ge307XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGJhc2VJZCwgcHJvcHMpIHtcbiAgICAgICAgaWYgKCFwcm9wcykge1xuICAgICAgICAgIHJldHVybiAnanN4LScgKyBiYXNlSWQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByb3BzVG9TdHJpbmcgPSBTdHJpbmcocHJvcHMpO1xuICAgICAgICB2YXIga2V5ID0gYmFzZUlkICsgcHJvcHNUb1N0cmluZztcbiAgICAgICAgLy8gcmV0dXJuIGBqc3gtJHtoYXNoU3RyaW5nKGAke2Jhc2VJZH0tJHtwcm9wc1RvU3RyaW5nfWApfWBcbiAgICAgICAgaWYgKCFjYWNoZVtrZXldKSB7XG4gICAgICAgICAgY2FjaGVba2V5XSA9ICdqc3gtJyArICgwLCBfc3RyaW5nSGFzaDIuZGVmYXVsdCkoYmFzZUlkICsgJy0nICsgcHJvcHNUb1N0cmluZyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhY2hlW2tleV07XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNyZWF0ZUNvbXB1dGVTZWxlY3RvclxuICAgICAqXG4gICAgICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRvIGNvbXB1dGUgYW5kIG1lbW9pemUgZHluYW1pYyBzZWxlY3RvcnMuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2NyZWF0ZUNvbXB1dGVTZWxlY3RvcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUNvbXB1dGVTZWxlY3RvcigpIHtcbiAgICAgIHZhciBzZWxlY3RvUGxhY2Vob2xkZXJSZWdleHAgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IC9fX2pzeC1zdHlsZS1keW5hbWljLXNlbGVjdG9yL2c7XG5cbiAgICAgIHZhciBjYWNoZSA9IHt9O1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChpZCwgY3NzKSB7XG4gICAgICAgIHZhciBpZGNzcyA9IGlkICsgY3NzO1xuICAgICAgICBpZiAoIWNhY2hlW2lkY3NzXSkge1xuICAgICAgICAgIGNhY2hlW2lkY3NzXSA9IGNzcy5yZXBsYWNlKHNlbGVjdG9QbGFjZWhvbGRlclJlZ2V4cCwgaWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWNoZVtpZGNzc107XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldElkQW5kUnVsZXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJZEFuZFJ1bGVzKHByb3BzKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgaWYgKHByb3BzLmR5bmFtaWMpIHtcbiAgICAgICAgdmFyIHN0eWxlSWQgPSB0aGlzLmNvbXB1dGVJZChwcm9wcy5zdHlsZUlkLCBwcm9wcy5keW5hbWljKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdHlsZUlkOiBzdHlsZUlkLFxuICAgICAgICAgIHJ1bGVzOiBBcnJheS5pc0FycmF5KHByb3BzLmNzcykgPyBwcm9wcy5jc3MubWFwKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM0LmNvbXB1dGVTZWxlY3RvcihzdHlsZUlkLCBydWxlKTtcbiAgICAgICAgICB9KSA6IFt0aGlzLmNvbXB1dGVTZWxlY3RvcihzdHlsZUlkLCBwcm9wcy5jc3MpXVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdHlsZUlkOiB0aGlzLmNvbXB1dGVJZChwcm9wcy5zdHlsZUlkKSxcbiAgICAgICAgcnVsZXM6IEFycmF5LmlzQXJyYXkocHJvcHMuY3NzKSA/IHByb3BzLmNzcyA6IFtwcm9wcy5jc3NdXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHNlbGVjdEZyb21TZXJ2ZXJcbiAgICAgKlxuICAgICAqIENvbGxlY3RzIHN0eWxlIHRhZ3MgZnJvbSB0aGUgZG9jdW1lbnQgd2l0aCBpZCBfX2pzeC1YWFhcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnc2VsZWN0RnJvbVNlcnZlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbGVjdEZyb21TZXJ2ZXIoKSB7XG4gICAgICB2YXIgZWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaWRePVwiX19qc3gtXCJdJykpO1xuXG4gICAgICByZXR1cm4gZWxlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGlkID0gZWxlbWVudC5pZC5zbGljZSgyKTtcbiAgICAgICAgYWNjW2lkXSA9IGVsZW1lbnQ7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBTdHlsZVNoZWV0UmVnaXN0cnk7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFN0eWxlU2hlZXRSZWdpc3RyeTtcblxuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTdHlsZVNoZWV0UmVnaXN0cnk6ICcgKyBtZXNzYWdlICsgJy4nKTtcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlZC1qc3gvZGlzdC9zdHlsZXNoZWV0LXJlZ2lzdHJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAzODhcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDUiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gaGFzaChzdHIpIHtcbiAgdmFyIGhhc2ggPSA1MzgxLFxuICAgICAgaSAgICA9IHN0ci5sZW5ndGg7XG5cbiAgd2hpbGUoaSkge1xuICAgIGhhc2ggPSAoaGFzaCAqIDMzKSBeIHN0ci5jaGFyQ29kZUF0KC0taSk7XG4gIH1cblxuICAvKiBKYXZhU2NyaXB0IGRvZXMgYml0d2lzZSBvcGVyYXRpb25zIChsaWtlIFhPUiwgYWJvdmUpIG9uIDMyLWJpdCBzaWduZWRcbiAgICogaW50ZWdlcnMuIFNpbmNlIHdlIHdhbnQgdGhlIHJlc3VsdHMgdG8gYmUgYWx3YXlzIHBvc2l0aXZlLCBjb252ZXJ0IHRoZVxuICAgKiBzaWduZWQgaW50IHRvIGFuIHVuc2lnbmVkIGJ5IGRvaW5nIGFuIHVuc2lnbmVkIGJpdHNoaWZ0LiAqL1xuICByZXR1cm4gaGFzaCA+Pj4gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3RyaW5nLWhhc2gvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qXG5CYXNlZCBvbiBHbGFtb3IncyBzaGVldFxuaHR0cHM6Ly9naXRodWIuY29tL3RocmVlcG9pbnRvbmUvZ2xhbW9yL2Jsb2IvNjY3YjQ4MGQzMWIzNzIxYTkwNTAyMWIyNmUxMjkwY2U5MmNhMjg3OS9zcmMvc2hlZXQuanNcbiovXG5cbnZhciBpc1Byb2QgPSBwcm9jZXNzLmVudiAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xudmFyIGlzU3RyaW5nID0gZnVuY3Rpb24gaXNTdHJpbmcobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSAnW29iamVjdCBTdHJpbmddJztcbn07XG5cbnZhciBTdHlsZVNoZWV0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdHlsZVNoZWV0KCkge1xuICAgIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fSxcbiAgICAgICAgX3JlZiRuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgICBuYW1lID0gX3JlZiRuYW1lID09PSB1bmRlZmluZWQgPyAnc3R5bGVzaGVldCcgOiBfcmVmJG5hbWUsXG4gICAgICAgIF9yZWYkb3B0aW1pemVGb3JTcGVlZCA9IF9yZWYub3B0aW1pemVGb3JTcGVlZCxcbiAgICAgICAgb3B0aW1pemVGb3JTcGVlZCA9IF9yZWYkb3B0aW1pemVGb3JTcGVlZCA9PT0gdW5kZWZpbmVkID8gaXNQcm9kIDogX3JlZiRvcHRpbWl6ZUZvclNwZWVkLFxuICAgICAgICBfcmVmJGlzQnJvd3NlciA9IF9yZWYuaXNCcm93c2VyLFxuICAgICAgICBpc0Jyb3dzZXIgPSBfcmVmJGlzQnJvd3NlciA9PT0gdW5kZWZpbmVkID8gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgOiBfcmVmJGlzQnJvd3NlcjtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIFN0eWxlU2hlZXQpO1xuXG4gICAgaW52YXJpYW50KGlzU3RyaW5nKG5hbWUpLCAnYG5hbWVgIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICB0aGlzLl9kZWxldGVkUnVsZVBsYWNlaG9sZGVyID0gJyMnICsgbmFtZSArICctZGVsZXRlZC1ydWxlX19fX3t9JztcblxuICAgIGludmFyaWFudCh0eXBlb2Ygb3B0aW1pemVGb3JTcGVlZCA9PT0gJ2Jvb2xlYW4nLCAnYG9wdGltaXplRm9yU3BlZWRgIG11c3QgYmUgYSBib29sZWFuJyk7XG4gICAgdGhpcy5fb3B0aW1pemVGb3JTcGVlZCA9IG9wdGltaXplRm9yU3BlZWQ7XG4gICAgdGhpcy5faXNCcm93c2VyID0gaXNCcm93c2VyO1xuXG4gICAgdGhpcy5fc2VydmVyU2hlZXQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fdGFncyA9IFtdO1xuICAgIHRoaXMuX2luamVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5fcnVsZXNDb3VudCA9IDA7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShTdHlsZVNoZWV0LCBbe1xuICAgIGtleTogJ3NldE9wdGltaXplRm9yU3BlZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRPcHRpbWl6ZUZvclNwZWVkKGJvb2wpIHtcbiAgICAgIGludmFyaWFudCh0eXBlb2YgYm9vbCA9PT0gJ2Jvb2xlYW4nLCAnYHNldE9wdGltaXplRm9yU3BlZWRgIGFjY2VwdHMgYSBib29sZWFuJyk7XG5cbiAgICAgIGludmFyaWFudCh0aGlzLl9ydWxlc0NvdW50ID09PSAwLCAnb3B0aW1pemVGb3JTcGVlZCBjYW5ub3QgYmUgd2hlbiBydWxlcyBoYXZlIGFscmVhZHkgYmVlbiBpbnNlcnRlZCcpO1xuICAgICAgdGhpcy5mbHVzaCgpO1xuICAgICAgdGhpcy5fb3B0aW1pemVGb3JTcGVlZCA9IGJvb2w7XG4gICAgICB0aGlzLmluamVjdCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzT3B0aW1pemVGb3JTcGVlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzT3B0aW1pemVGb3JTcGVlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2luamVjdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluamVjdCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGludmFyaWFudCghdGhpcy5faW5qZWN0ZWQsICdzaGVldCBhbHJlYWR5IGluamVjdGVkJyk7XG4gICAgICB0aGlzLl9pbmplY3RlZCA9IHRydWU7XG4gICAgICBpZiAodGhpcy5faXNCcm93c2VyICYmIHRoaXMuX29wdGltaXplRm9yU3BlZWQpIHtcbiAgICAgICAgdGhpcy5fdGFnc1swXSA9IHRoaXMubWFrZVN0eWxlVGFnKHRoaXMuX25hbWUpO1xuICAgICAgICB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkID0gJ2luc2VydFJ1bGUnIGluIHRoaXMuZ2V0U2hlZXQoKTtcbiAgICAgICAgaWYgKCF0aGlzLl9vcHRpbWl6ZUZvclNwZWVkKSB7XG4gICAgICAgICAgaWYgKCFpc1Byb2QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignU3R5bGVTaGVldDogb3B0aW1pemVGb3JTcGVlZCBtb2RlIG5vdCBzdXBwb3J0ZWQgZmFsbGluZyBiYWNrIHRvIHN0YW5kYXJkIG1vZGUuJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmZsdXNoKCk7XG4gICAgICAgICAgdGhpcy5faW5qZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc2VydmVyU2hlZXQgPSB7XG4gICAgICAgIGNzc1J1bGVzOiBbXSxcbiAgICAgICAgaW5zZXJ0UnVsZTogZnVuY3Rpb24gaW5zZXJ0UnVsZShydWxlLCBpbmRleCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgaW5kZXggPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBfdGhpcy5fc2VydmVyU2hlZXQuY3NzUnVsZXNbaW5kZXhdID0geyBjc3NUZXh0OiBydWxlIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLl9zZXJ2ZXJTaGVldC5jc3NSdWxlcy5wdXNoKHsgY3NzVGV4dDogcnVsZSB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICB9LFxuICAgICAgICBkZWxldGVSdWxlOiBmdW5jdGlvbiBkZWxldGVSdWxlKGluZGV4KSB7XG4gICAgICAgICAgX3RoaXMuX3NlcnZlclNoZWV0LmNzc1J1bGVzW2luZGV4XSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0U2hlZXRGb3JUYWcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTaGVldEZvclRhZyh0YWcpIHtcbiAgICAgIGlmICh0YWcuc2hlZXQpIHtcbiAgICAgICAgcmV0dXJuIHRhZy5zaGVldDtcbiAgICAgIH1cblxuICAgICAgLy8gdGhpcyB3ZWlyZG5lc3MgYnJvdWdodCB0byB5b3UgYnkgZmlyZWZveFxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZG9jdW1lbnQuc3R5bGVTaGVldHNbaV0ub3duZXJOb2RlID09PSB0YWcpIHtcbiAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuc3R5bGVTaGVldHNbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRTaGVldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNoZWV0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U2hlZXRGb3JUYWcodGhpcy5fdGFnc1t0aGlzLl90YWdzLmxlbmd0aCAtIDFdKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpbnNlcnRSdWxlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5zZXJ0UnVsZShydWxlLCBpbmRleCkge1xuICAgICAgaW52YXJpYW50KGlzU3RyaW5nKHJ1bGUpLCAnYGluc2VydFJ1bGVgIGFjY2VwdHMgb25seSBzdHJpbmdzJyk7XG5cbiAgICAgIGlmICghdGhpcy5faXNCcm93c2VyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgaW5kZXggPSB0aGlzLl9zZXJ2ZXJTaGVldC5jc3NSdWxlcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc2VydmVyU2hlZXQuaW5zZXJ0UnVsZShydWxlLCBpbmRleCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9ydWxlc0NvdW50Kys7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9vcHRpbWl6ZUZvclNwZWVkKSB7XG4gICAgICAgIHZhciBzaGVldCA9IHRoaXMuZ2V0U2hlZXQoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICBpbmRleCA9IHNoZWV0LmNzc1J1bGVzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzIHdlaXJkbmVzcyBmb3IgcGVyZiwgYW5kIGNocm9tZSdzIHdlaXJkIGJ1Z1xuICAgICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMDAwNzk5Mi9jaHJvbWUtc3VkZGVubHktc3RvcHBlZC1hY2NlcHRpbmctaW5zZXJ0cnVsZVxuICAgICAgICB0cnkge1xuICAgICAgICAgIHNoZWV0Lmluc2VydFJ1bGUocnVsZSwgaW5kZXgpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBpZiAoIWlzUHJvZCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdTdHlsZVNoZWV0OiBpbGxlZ2FsIHJ1bGU6IFxcblxcbicgKyBydWxlICsgJ1xcblxcblNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMjAwMDc5OTIgZm9yIG1vcmUgaW5mbycpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaW5zZXJ0aW9uUG9pbnQgPSB0aGlzLl90YWdzW2luZGV4XTtcbiAgICAgICAgdGhpcy5fdGFncy5wdXNoKHRoaXMubWFrZVN0eWxlVGFnKHRoaXMuX25hbWUsIHJ1bGUsIGluc2VydGlvblBvaW50KSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9ydWxlc0NvdW50Kys7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVwbGFjZVJ1bGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXBsYWNlUnVsZShpbmRleCwgcnVsZSkge1xuICAgICAgaWYgKHRoaXMuX29wdGltaXplRm9yU3BlZWQgfHwgIXRoaXMuX2lzQnJvd3Nlcikge1xuICAgICAgICB2YXIgc2hlZXQgPSB0aGlzLl9pc0Jyb3dzZXIgPyB0aGlzLmdldFNoZWV0KCkgOiB0aGlzLl9zZXJ2ZXJTaGVldDtcbiAgICAgICAgaWYgKCFydWxlLnRyaW0oKSkge1xuICAgICAgICAgIHJ1bGUgPSB0aGlzLl9kZWxldGVkUnVsZVBsYWNlaG9sZGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzaGVldC5jc3NSdWxlc1tpbmRleF0pIHtcbiAgICAgICAgICAvLyBAVEJEIFNob3VsZCB3ZSB0aHJvdyBhbiBlcnJvcj9cbiAgICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBzaGVldC5kZWxldGVSdWxlKGluZGV4KTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHNoZWV0Lmluc2VydFJ1bGUocnVsZSwgaW5kZXgpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBpZiAoIWlzUHJvZCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdTdHlsZVNoZWV0OiBpbGxlZ2FsIHJ1bGU6IFxcblxcbicgKyBydWxlICsgJ1xcblxcblNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMjAwMDc5OTIgZm9yIG1vcmUgaW5mbycpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gSW4gb3JkZXIgdG8gcHJlc2VydmUgdGhlIGluZGljZXMgd2UgaW5zZXJ0IGEgZGVsZXRlUnVsZVBsYWNlaG9sZGVyXG4gICAgICAgICAgc2hlZXQuaW5zZXJ0UnVsZSh0aGlzLl9kZWxldGVkUnVsZVBsYWNlaG9sZGVyLCBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB0YWcgPSB0aGlzLl90YWdzW2luZGV4XTtcbiAgICAgICAgaW52YXJpYW50KHRhZywgJ29sZCBydWxlIGF0IGluZGV4IGAnICsgaW5kZXggKyAnYCBub3QgZm91bmQnKTtcbiAgICAgICAgdGFnLnRleHRDb250ZW50ID0gcnVsZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkZWxldGVSdWxlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVsZXRlUnVsZShpbmRleCkge1xuICAgICAgaWYgKCF0aGlzLl9pc0Jyb3dzZXIpIHtcbiAgICAgICAgdGhpcy5fc2VydmVyU2hlZXQuZGVsZXRlUnVsZShpbmRleCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX29wdGltaXplRm9yU3BlZWQpIHtcbiAgICAgICAgdGhpcy5yZXBsYWNlUnVsZShpbmRleCwgJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHRhZyA9IHRoaXMuX3RhZ3NbaW5kZXhdO1xuICAgICAgICBpbnZhcmlhbnQodGFnLCAncnVsZSBhdCBpbmRleCBgJyArIGluZGV4ICsgJ2Agbm90IGZvdW5kJyk7XG4gICAgICAgIHRhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhZyk7XG4gICAgICAgIHRoaXMuX3RhZ3NbaW5kZXhdID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdmbHVzaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgICAgdGhpcy5faW5qZWN0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3J1bGVzQ291bnQgPSAwO1xuICAgICAgaWYgKHRoaXMuX2lzQnJvd3Nlcikge1xuICAgICAgICB0aGlzLl90YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZykge1xuICAgICAgICAgIHJldHVybiB0YWcgJiYgdGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3RhZ3MgPSBbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHNpbXBsZXIgb24gc2VydmVyXG4gICAgICAgIHRoaXMuX3NlcnZlclNoZWV0LmNzc1J1bGVzID0gW107XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY3NzUnVsZXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjc3NSdWxlcygpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBpZiAoIXRoaXMuX2lzQnJvd3Nlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VydmVyU2hlZXQuY3NzUnVsZXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fdGFncy5yZWR1Y2UoZnVuY3Rpb24gKHJ1bGVzLCB0YWcpIHtcbiAgICAgICAgaWYgKHRhZykge1xuICAgICAgICAgIHJ1bGVzID0gcnVsZXMuY29uY2F0KF90aGlzMi5nZXRTaGVldEZvclRhZyh0YWcpLmNzc1J1bGVzLm1hcChmdW5jdGlvbiAocnVsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJ1bGUuY3NzVGV4dCA9PT0gX3RoaXMyLl9kZWxldGVkUnVsZVBsYWNlaG9sZGVyID8gbnVsbCA6IHJ1bGU7XG4gICAgICAgICAgfSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJ1bGVzLnB1c2gobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJ1bGVzO1xuICAgICAgfSwgW10pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ21ha2VTdHlsZVRhZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1ha2VTdHlsZVRhZyhuYW1lLCBjc3NTdHJpbmcsIHJlbGF0aXZlVG9UYWcpIHtcbiAgICAgIGlmIChjc3NTdHJpbmcpIHtcbiAgICAgICAgaW52YXJpYW50KGlzU3RyaW5nKGNzc1N0cmluZyksICdtYWtlU3R5bGVUYWcgYWNjZXBzIG9ubHkgc3RyaW5ncyBhcyBzZWNvbmQgcGFyYW1ldGVyJyk7XG4gICAgICB9XG4gICAgICB2YXIgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgIHRhZy50eXBlID0gJ3RleHQvY3NzJztcbiAgICAgIHRhZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUsICcnKTtcbiAgICAgIGlmIChjc3NTdHJpbmcpIHtcbiAgICAgICAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzc1N0cmluZykpO1xuICAgICAgfVxuICAgICAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgICBpZiAocmVsYXRpdmVUb1RhZykge1xuICAgICAgICBoZWFkLmluc2VydEJlZm9yZSh0YWcsIHJlbGF0aXZlVG9UYWcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZCh0YWcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRhZztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdsZW5ndGgnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3J1bGVzQ291bnQ7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBTdHlsZVNoZWV0O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBTdHlsZVNoZWV0O1xuXG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0eWxlU2hlZXQ6ICcgKyBtZXNzYWdlICsgJy4nKTtcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlZC1qc3gvZGlzdC9saWIvc3R5bGVzaGVldC5qc1xuLy8gbW9kdWxlIGlkID0gMzkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiA1IiwiXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIuanMnXHJcbmltcG9ydCBTZWN0aW9uT25lIGZyb20gJy4uL2NvbXBvbmVudHMvU2VjdGlvbk9uZS5qcydcclxuaW1wb3J0IE1haW5Dc3MgZnJvbSAnLi4vY29tcG9uZW50cy9zdHlsZXMtanN4L21haW5fY3NzLmpzJ1xyXG5pbXBvcnQgU2VjdGlvblRvdXJzIGZyb20gJy4uL2NvbXBvbmVudHMvU2VjdGlvblRvdXJzLmpzJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgXHJcbiAgICA8TWFpbkNzcy8+XHJcbiAgICA8SGVhZGVyLz5cclxuICAgIDxTZWN0aW9uT25lLz5cclxuICAgIDxTZWN0aW9uVG91cnMvPlxyXG4gICAgey8qIFRoaXJkICovfVxyXG4gICAgPHNlY3Rpb24gaWQ9XCJ0aGlyZFwiIGNsYXNzTmFtZT1cIm1haW5cIj5cclxuICAgICAgPGhlYWRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGgyPkFwcm92ZWNoYSBEZSBOdWVzdHJvcyBEZXNjdWVudG9zIFNpIFJlc2VydmFzIEhvc3BlZGFqZSArIFRvdXJzPC9oMj5cclxuICAgICAgICAgIDxwPkdyYXZpZGEgZGlzIHBsYWNlcmF0IGxlY3R1cyBhbnRlIHZlbCBudW5jIGV1aXNtb2QgZWdldCBvcm5hcmUgdmFyaXVzIGdyYXZpZGEgZXVpc21vZCBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZXF1YXQ8YnIgLz5cclxuICAgICAgICAgICAgZmV1Z2lhdC4gR3JhdmlkYSBkaXMgcGxhY2VyYXQgbGVjdHVzIGFudGUgdmVsIG51bmMgZXVpc21vZCBlZ2V0IG9ybmFyZSB2YXJpdXMgZ3JhdmlkYSBldWlzbW9kIGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCBkYXJrIHN0eWxlM1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbWFnZSBmZWF0dXJlZFwiPjxpbWcgc3JjPVwic3RhdGljL2ltYWdlcy9waWMwNy5qcGdcIiBhbHQgLz48L3NwYW4+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInU0IHUxMi1uYXJyb3dcIj5cclxuICAgICAgICAgICAgICA8aDM+RGlhbSB2aXZhbXVzIHR1cnBpcyBsb3JlbSBzb2RhbGVzIGxlY3R1cyBvcm5hcmU8L2gzPlxyXG4gICAgICAgICAgICAgIDxwPkdyYXZpZGEgZGlzIHBsYWNlcmF0IGxlY3R1cyBhbnRlIHZlbCBudW5jIGV1aXNtb2QgZXN0IHR1cnBpcyBzb2RhbGVzLiBEaWFtXHJcbiAgICAgICAgICAgICAgICB0ZW1wb3IgZHVpIGxhY2luaWEgZWdldCBvcm5hcmUgdmFyaXVzIGdyYXZpZGEuIEdyYXZpZGEgZGlzIHBsYWNlcmF0IGxlY3R1cyBhbnRlXHJcbiAgICAgICAgICAgICAgICB2ZWwgbnVuYyBldWlzbW9kIGVzdCB0dXJwaXMgc29kYWxlcy4gRGlhbSB0ZW1wb3IgZHVpIGxhY2luaWEgYWNjdW1zYW4gdml2YW11c1xyXG4gICAgICAgICAgICAgICAgYXVndWUgY3ViaWxpYSB2aXZhbXVzIG5pc2kgZXUgZWdldCBvcm5hcmUgdmFyaXVzIGdyYXZpZGEgZXVpc21vZC4gIEdyYXZpZGEgZGlzXHJcbiAgICAgICAgICAgICAgICBsb3JlbSBpcHN1bSBkb2xvciBwbGFjZXJhdCBtYWduYSB0ZW1wdXMgZmV1Z2lhdC48L3A+XHJcbiAgICAgICAgICAgICAgPHA+TGVjdHVzIGFudGUgdmVsIG51bmMgZXVpc21vZCBlc3QgdHVycGlzIHNvZGFsZXMuIERpYW0gdGVtcG9yIGR1aSBsYWNpbmlhXHJcbiAgICAgICAgICAgICAgICBhY2N1bXNhbiB2aXZhbXVzIGF1Z3VlIGN1YmlsaWEgdml2YW11cyBuaXNpIGV1IGVnZXQgb3JuYXJlIHZhcml1cyBncmF2aWRhIGRvbG9yZVxyXG4gICAgICAgICAgICAgICAgZXVpc21vZCBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZXF1YXQuIHZpdmFtdXMgbmlzaSBldSBlZ2V0IG9ybmFyZSB2YXJpdXNcclxuICAgICAgICAgICAgICAgIGdyYXZpZGEgZG9sb3JlIGV1aXNtb2QgbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VxdWF0LiB2aXZhbXVzIG5pc2kgZXVcclxuICAgICAgICAgICAgICAgIGVnZXQgb3JuYXJlIGV0IG1hZ25hLjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidTQgdTEyLW5hcnJvd1wiPlxyXG4gICAgICAgICAgICAgIDxwPkdyYXZpZGEgZGlzIHBsYWNlcmF0IGxlY3R1cyBhbnRlIHZlbCBudW5jIGV1aXNtb2QgZXN0IHR1cnBpcyBzb2RhbGVzLiBEaWFtXHJcbiAgICAgICAgICAgICAgICB0ZW1wb3IgZHVpIGxhY2luaWEgZWdldCBvcm5hcmUgdmFyaXVzIGdyYXZpZGEuIEdyYXZpZGEgZGlzIHBsYWNlcmF0IGxlY3R1cyBhbnRlXHJcbiAgICAgICAgICAgICAgICB2ZWwgbnVuYyBldWlzbW9kIGVzdCB0dXJwaXMgc29kYWxlcy4gRGlhbSB0ZW1wb3IgZHVpIGxhY2luaWEgYWNjdW1zYW4gdml2YW11c1xyXG4gICAgICAgICAgICAgICAgYXVndWUgY3ViaWxpYSB2aXZhbXVzIG5pc2kgZXUgZWdldCBvcm5hcmUgdmFyaXVzIGdyYXZpZGEgZXVpc21vZC4gIEdyYXZpZGEgZGlzXHJcbiAgICAgICAgICAgICAgICBsb3JlbSBpcHN1bSBkb2xvciBwbGFjZXJhdCBtYWduYSB0ZW1wdXMgZmV1Z2lhdC48L3A+XHJcbiAgICAgICAgICAgICAgPHA+TGVjdHVzIGFudGUgdmVsIG51bmMgZXVpc21vZCBlc3QgdHVycGlzIHNvZGFsZXMuIERpYW0gdGVtcG9yIGR1aSBsYWNpbmlhXHJcbiAgICAgICAgICAgICAgICBhY2N1bXNhbiB2aXZhbXVzIGF1Z3VlIGN1YmlsaWEgdml2YW11cyBuaXNpIGV1IGVnZXQgb3JuYXJlIHZhcml1cyBncmF2aWRhIGRvbG9yZVxyXG4gICAgICAgICAgICAgICAgZXVpc21vZCBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZXF1YXQgZWdldCBvcm5hcmUgdmFyaXVzIGdyYXZpZGEgZXVpc21vZC5cclxuICAgICAgICAgICAgICAgIEdyYXZpZGEgZGlzIGxvcmVtIGlwc3VtIGRvbG9yIHBsYWNlcmF0IG1hZ25hIHRlbXB1cyBmZXVnaWF0IG1hZ25hIHRlbXB1cyBsb3JlbS48L3A+XHJcbiAgICAgICAgICAgICAgPHA+TGVjdHVzIGFudGUgdmVsIG51bmMgZXVpc21vZCBlc3QgdHVycGlzIHNvZGFsZXMuIERpYW0gdGVtcG9yIGR1aSBsYWNpbmlhXHJcbiAgICAgICAgICAgICAgICBhY2N1bXNhbiB2aXZhbXVzIGF1Z3VlIGN1YmlsaWEuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1NCB1MTItbmFycm93XCI+XHJcbiAgICAgICAgICAgICAgPHA+UGxhY2VyYXQgbGVjdHVzIGFudGUgdmVsIG51bmMgZXVpc21vZCBlc3QgdHVycGlzIHNvZGFsZXMuIERpYW0gdGVtcG9yIGR1aVxyXG4gICAgICAgICAgICAgICAgbGFjaW5pYSBlZ2V0IG9ybmFyZSB2YXJpdXMgZ3JhdmlkYS4gR3JhdmlkYSBkaXMgcGxhY2VyYXQgbGVjdHVzIGFudGUgdmVsIG51bmNcclxuICAgICAgICAgICAgICAgIGV1aXNtb2QgZXN0IHR1cnBpcyBzb2RhbGVzLiBEaWFtIHRlbXBvciBkdWkgbGFjaW5pYSBhY2N1bXNhbiB2aXZhbXVzIGF1Z3VlXHJcbiAgICAgICAgICAgICAgICBjdWJpbGlhIHZpdmFtdXMgbmlzaSBldSBlZ2V0IG9ybmFyZSB2YXJpdXMgZ3JhdmlkYSBldWlzbW9kLiAgR3JhdmlkYSBkaXNcclxuICAgICAgICAgICAgICAgIGxvcmVtIGlwc3VtIGRvbG9yIHBsYWNlcmF0IG1hZ25hIHRlbXB1cyBmZXVnaWF0LiBMZWN0dXMgYW50ZSB2ZWwgbnVuYyBldWlzbW9kXHJcbiAgICAgICAgICAgICAgICBlc3QgdHVycGlzIHNvZGFsZXMuIERpYW0gdGVtcG9yIGR1aSBsYWNpbmlhIGRvbG9yZS48L3A+XHJcbiAgICAgICAgICAgICAgPHA+QWNjdW1zYW4gdml2YW11cyBhdWd1ZSBjdWJpbGlhIHZpdmFtdXMgbmlzaSBldSBlZ2V0IG9ybmFyZSB2YXJpdXMgZ3JhdmlkYVxyXG4gICAgICAgICAgICAgICAgZG9sb3JlIGV1aXNtb2QgbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2Vpc21vZCBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldFxyXG4gICAgICAgICAgICAgICAgY29uc2VxdWF0IGxvcmVtIGlwc3VtIGNvbnNlcXVhdCBmZXVnaWF0IHNlZCB0ZW1wdXMgZXVpc21vZCBmZXVnaWF0IHZlcm9lcm9zLjwvcD5cclxuICAgICAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNmb3VydGhcIiBjbGFzc05hbWU9XCJidXR0b24gc2Nyb2xseVwiPklwc3VtIG9ybmFyZSBsb3JlbSBkb2xvcjwvYT5cclxuICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICBcclxuICAgIHsvKiBGb3VydGggKi99XHJcbiAgICA8c2VjdGlvbiBpZD1cImZvdXJ0aFwiIGNsYXNzTmFtZT1cIm1haW5cIj5cclxuICAgICAgPGhlYWRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGgyPlNlZCBmZXVnaWF0IGlwc3VtIGNvbnNlcXVhdDwvaDI+XHJcbiAgICAgICAgICA8cD5HcmF2aWRhIGRpcyBwbGFjZXJhdCBsZWN0dXMgYW50ZSB2ZWwgbnVuYyBldWlzbW9kIGVnZXQgb3JuYXJlIHZhcml1cyBncmF2aWRhIGV1aXNtb2QgbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VxdWF0PGJyIC8+XHJcbiAgICAgICAgICAgIGZldWdpYXQuIEdyYXZpZGEgZGlzIHBsYWNlcmF0IGxlY3R1cyBhbnRlIHZlbCBudW5jIGV1aXNtb2QgZWdldCBvcm5hcmUgdmFyaXVzIGdyYXZpZGEgZXVpc21vZCBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldC48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgc3R5bGU0IGZlYXR1cmVkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcGVyY2VudC03NVwiPlxyXG4gICAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIGFjdGlvbj1cIiNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcGVyY2VudC01MFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidTYgdTEyLW1vYmlsZVwiPjxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1NiB1MTItbW9iaWxlXCI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwZXJjZW50LTUwXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1MTJcIj48dGV4dGFyZWEgbmFtZT1cIm1lc3NhZ2VcIiBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIiBkZWZhdWx0VmFsdWU9e1wiXCJ9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidXR0b25cIiBkZWZhdWx0VmFsdWU9XCJTZW5kIE1lc3NhZ2VcIiAvPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48aW5wdXQgdHlwZT1cInJlc2V0XCIgY2xhc3NOYW1lPVwiYnV0dG9uIGFsdFwiIGRlZmF1bHRWYWx1ZT1cIkNsZWFyIEZvcm1cIiAvPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICB7LyogRm9vdGVyICovfVxyXG4gICAgPHNlY3Rpb24gaWQ9XCJmb290ZXJcIj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImljb25zXCI+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaWNvbiBmYS10d2l0dGVyXCI+PHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj5Ud2l0dGVyPC9zcGFuPjwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImljb24gZmEtZmFjZWJvb2tcIj48c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPkZhY2Vib29rPC9zcGFuPjwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImljb24gZmEtaW5zdGFncmFtXCI+PHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj5JbnN0YWdyYW08L3NwYW4+PC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaWNvbiBmYS1kcmliYmJsZVwiPjxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+RHJpYmJibGU8L3NwYW4+PC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaWNvbiBmYS1naXRodWJcIj48c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPkdpdEh1Yjwvc3Bhbj48L2E+PC9saT5cclxuICAgICAgPC91bD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3B5cmlnaHRcIj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgPGxpPsKpIFVudGl0bGVkLiBBbGwgcmlnaHRzIHJlc2VydmVkLjwvbGk+PGxpPkRlc2lnbjogPGEgaHJlZj1cImh0dHA6Ly9odG1sNXVwLm5ldFwiPkhUTUw1IFVQPC9hPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICB7LyogU2NyaXB0cyAqL31cclxuPC9kaXY+XHJcbiAgICBcclxuKVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBIZWFkZXJDc3MgZnJvbSAnLi9zdHlsZXMtanN4L2hlYWRlcl9jc3MuanMnO1xyXG5leHBvcnQgZGVmYXVsdCAoKT0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWRlckNzcy8+XHJcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJoZWFkZXJcIiBjbGFzc05hbWU9XCJkYXJrXCI+XHJcbiAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8aDE+V2VsY29tZSB0byBSaW8gRGFudGEgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwPkhvc3BlZGFqZSB5IFRvdXJzIEVuIEVsIE1pc21vIEx1Z2FyIEEgVW4gUHJlY2lvIEFjY2VzaWJsZTwvcD5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2ZpcnN0XCIgY2xhc3NOYW1lPVwiYnV0dG9uIHNjcm9sbHlcIj48L2E+XHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWRlci5qcyIsImV4cG9ydCBkZWZhdWx0ICgpPT4oXHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgaGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhlYWRlciBoMSwgaGVhZGVyIGgyLCBoZWFkZXIgaDMsIGhlYWRlciBoNCwgaGVhZGVyIGg1LCBoZWFkZXIgaDYge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoZWFkZXIgcCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMjVlbSAwIDAuNWVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIEhlYWRlciAqL1xyXG5cclxuICAgICAgICAgICAgI2hlYWRlciB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDYzLCA0NiwgNjUsIDAuOCksICByZ2JhKDY1LCA1NSwgNDYsIDAuOCkpLCB1cmwoXCJzdGF0aWMvaW1hZ2VzL2JnLmpwZ1wiKTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogIGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogIGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE0ZW0gMCAxNGVtIDA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI2hlYWRlciBoZWFkZXIgaDEge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4yNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjaGVhZGVyIGhlYWRlciBwIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjI1ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI2hlYWRlciBmb290ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxLjVlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICBgfTwvc3R5bGU+XHJcbilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3N0eWxlcy1qc3gvaGVhZGVyX2Nzcy5qcyIsImV4cG9ydCBkZWZhdWx0ICgpPT4oXHJcbiAgICAgIDxzZWN0aW9uIGlkPVwiZmlyc3RcIiBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxoMj5IYWJpdGFjaW9uZXMgJmFtcDsgT2ZlcnRhcyBFc3BlY2lhbGVzPC9oMj5cclxuICAgICAgICAgICAgPHA+UG9kcsOhcyBPYnRlbmVyIEluY3JlaWJsZXMgRGVzY3VlbnRvcyBTaSBSZXNlcnZhcyBIb3NwZWRhamUgKyBUb3VyIERlc2RlIE51ZXN0cmEgUGFnaW5hIFdlYi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsZWZ0XCIgd2lkdGg9XCIyMDBcIiBoZWlndGg9XCI1MFwiIHNyYz1cImh0dHA6Ly93d3cuaG9zdGVscmlvZGFudGEuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzEwL2xvZ29fcmlvZGFudGEtMi5qcGdcIi8+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCBkYXJrIHN0eWxlMSBmZWF0dXJlZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInU0IHUxMi1uYXJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmZWF0dXJlLWljb25cIj48c3BhbiBjbGFzc05hbWU9XCJpY29uIFwiPjxpbWcgc3JjPVwic3RhdGljL2ltYWdlcy9hY2MxLnBuZ1wiIGhlaWdodD17MTAwfSB3aWR0aD17MTAwfSBzdHlsZT17e21hcmdpbmdUb3AgOiAnMTUlJ319IC8+PC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+SGFiaXRhY2lvbmVzIFN1cGVyaW9yZXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgPHA+U2VydmljaW9zOiBEZXNheXVubyBpbmNsdWlkbywgQWlyZSBhY29uZGljaW9uYWRvLCBUViBwb3IgY2FibGUsIEludGVybmV0IGluYWxhbWJyaWNvLCBBZ3VhIGNhbGllbnRlLCBQYXJxdWVvIGNvbiBjYW1hcmFzIGRlIHNlZ3VyaWRhZC48L3A+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1NCB1MTItbmFycm93XCI+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmVhdHVyZS1pY29uXCI+PHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBcIj48aW1nIHNyYz1cInN0YXRpYy9pbWFnZXMvZmFuMS5wbmdcIiBoZWlnaHQ9ezY1fSB3aWR0aD17ODV9IHN0eWxlPXt7bWFyZ2luZ1RvcDogJzE1JSd9fSAvPjwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkhhYml0YWNpb25lcyBFc3RhbmRhcjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8cD5TZXJ2aWNpb3M6IERlc2F5dW5vIGluY2x1aWRvLCBUViBwb3IgY2FibGUsIEludGVybmV0IGluYWxhbWJyaWNvLCBBZ3VhIGNhbGllbnRlLCBQYXJxdWVvIGNvbiBjYW1hcmFzIGRlIHNlZ3VyaWRhZCwgVmVudGlsYWRvciBkZSBwaWUuPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidTQgdTEyLW5hcnJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZlYXR1cmUtaWNvblwiPjxzcGFuIGNsYXNzTmFtZT1cImljb24gXCI+PGltZyBzcmM9XCJzdGF0aWMvaW1hZ2VzL2JlZDEucG5nXCIgaGVpZ2h0PXs3MH0gd2lkdGg9ezYwfSBzdHlsZT17e21hcmdpbmdUb3A6ICcyNSUnfX0gLz48L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5IYWJpdGFjaW9uZXMgQ29tcGFydGlkYXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgPHA+U2VydmljaW9zOiBEZXNheXVubyBpbmNsdWlkbywgVFYgcG9yIGNhYmxlLCBJbnRlcm5ldCBpbmFsYW1icmljbywgQWd1YSBjYWxpZW50ZSwgUGFycXVlbyBjb24gY2FtYXJhcyBkZSBzZWd1cmlkYWQsIFZlbnRpbGFkb3IgZGUgcGllLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1MTJcIj5cclxuICAgICAgICAgICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjc2Vjb25kXCIgY2xhc3NOYW1lPVwiYnV0dG9uIHNjcm9sbHlcIj5OdWVzdHJvcyBUb3VycyAmYW1wOyBEZXNjdWVudG9zPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuKVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1NlY3Rpb25PbmUuanMiLCJleHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG5AaW1wb3J0IHVybChcImZvbnQtYXdlc29tZS5taW4uY3NzXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MTAwLDEwMGl0YWxpYywzMDAsMzAwaXRhbGljLDQwMCw0MDBpdGFsaWNcIik7XHJcblxyXG4vKlxyXG5cdFRlc3NlbGxhdGUgYnkgSFRNTDUgVVBcclxuXHRodG1sNXVwLm5ldCB8IEBhamxrblxyXG5cdEZyZWUgZm9yIHBlcnNvbmFsIGFuZCBjb21tZXJjaWFsIHVzZSB1bmRlciB0aGUgQ0NBIDMuMCBsaWNlbnNlIChodG1sNXVwLm5ldC9saWNlbnNlKVxyXG4qL1xyXG5cclxuLyogUmVzZXQgKi9cclxuXHJcblx0aHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsIGEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSwgZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLCBzbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLCBiLCB1LCBpLCBjZW50ZXIsIGRsLCBkdCwgZGQsIG9sLCB1bCwgbGksIGZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLCB0YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCwgYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIGZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksIHRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XHJcblx0XHRtYXJnaW46IDA7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0Ym9yZGVyOiAwO1xyXG5cdFx0Zm9udC1zaXplOiAxMDAlO1xyXG5cdFx0Zm9udDogaW5oZXJpdDtcclxuXHRcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuXHR9XHJcblxyXG5cdGFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHR9XHJcblxyXG5cdGJvZHkge1xyXG5cdFx0bGluZS1oZWlnaHQ6IDE7XHJcblx0fVxyXG5cclxuXHRvbCwgdWwge1xyXG5cdFx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHR9XHJcblxyXG5cdGJsb2NrcXVvdGUsIHEge1xyXG5cdFx0cXVvdGVzOiBub25lO1xyXG5cdH1cclxuXHJcblx0YmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsIHE6YmVmb3JlLCBxOmFmdGVyIHtcclxuXHRcdGNvbnRlbnQ6ICcnO1xyXG5cdFx0Y29udGVudDogbm9uZTtcclxuXHR9XHJcblxyXG5cdHRhYmxlIHtcclxuXHRcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcblx0XHRib3JkZXItc3BhY2luZzogMDtcclxuXHR9XHJcblxyXG5cdGJvZHkge1xyXG5cdFx0LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xyXG5cdH1cclxuXHJcbi8qIEJveCBNb2RlbCAqL1xyXG5cclxuXHQqLCAqOmJlZm9yZSwgKjphZnRlciB7XHJcblx0XHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdH1cclxuXHJcbi8qIENvbnRhaW5lcnMgKi9cclxuXHJcblx0LmNvbnRhaW5lciB7XHJcblx0XHRtYXJnaW4tbGVmdDogYXV0bztcclxuXHRcdG1hcmdpbi1yaWdodDogYXV0bztcclxuXHR9XHJcblxyXG5cdC5jb250YWluZXIucGVyY2VudC0xMjUge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRtYXgtd2lkdGg6IDE3MDBweDtcclxuXHRcdG1pbi13aWR0aDogMTM2MHB4O1xyXG5cdH1cclxuXHJcblx0LmNvbnRhaW5lci5wZXJjZW50LTc1IHtcclxuXHRcdHdpZHRoOiAxMDIwcHg7XHJcblx0fVxyXG5cclxuXHQuY29udGFpbmVyLnBlcmNlbnQtNTAge1xyXG5cdFx0d2lkdGg6IDY4MHB4O1xyXG5cdH1cclxuXHJcblx0LmNvbnRhaW5lci5wZXJjZW50LTI1IHtcclxuXHRcdHdpZHRoOiAzNDBweDtcclxuXHR9XHJcblxyXG5cdC5jb250YWluZXIge1xyXG5cdFx0d2lkdGg6IDEzNjBweDtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2ODBweCkge1xyXG5cclxuXHRcdC5jb250YWluZXIucGVyY2VudC0xMjUge1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0bWF4LXdpZHRoOiAxNTAwcHg7XHJcblx0XHRcdG1pbi13aWR0aDogMTIwMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5jb250YWluZXIucGVyY2VudC03NSB7XHJcblx0XHRcdHdpZHRoOiA5MDBweDtcclxuXHRcdH1cclxuXHJcblx0XHQuY29udGFpbmVyLnBlcmNlbnQtNTAge1xyXG5cdFx0XHR3aWR0aDogNjAwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LmNvbnRhaW5lci5wZXJjZW50LTI1IHtcclxuXHRcdFx0d2lkdGg6IDMwMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5jb250YWluZXIge1xyXG5cdFx0XHR3aWR0aDogMTIwMHB4O1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG5cclxuXHRcdC5jb250YWluZXIucGVyY2VudC0xMjUge1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0bWF4LXdpZHRoOiAxMjAwcHg7XHJcblx0XHRcdG1pbi13aWR0aDogOTYwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LmNvbnRhaW5lci5wZXJjZW50LTc1IHtcclxuXHRcdFx0d2lkdGg6IDcyMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5jb250YWluZXIucGVyY2VudC01MCB7XHJcblx0XHRcdHdpZHRoOiA0ODBweDtcclxuXHRcdH1cclxuXHJcblx0XHQuY29udGFpbmVyLnBlcmNlbnQtMjUge1xyXG5cdFx0XHR3aWR0aDogMjQwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LmNvbnRhaW5lciB7XHJcblx0XHRcdHdpZHRoOiA5NjBweDtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuXHJcblx0XHQuY29udGFpbmVyLnBlcmNlbnQtMTI1IHtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdG1heC13aWR0aDogMTI1JTtcclxuXHRcdFx0bWluLXdpZHRoOiAxMDAlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5jb250YWluZXIucGVyY2VudC03NSB7XHJcblx0XHRcdHdpZHRoOiA3NSU7XHJcblx0XHR9XHJcblxyXG5cdFx0LmNvbnRhaW5lci5wZXJjZW50LTUwIHtcclxuXHRcdFx0d2lkdGg6IDUwJTtcclxuXHRcdH1cclxuXHJcblx0XHQuY29udGFpbmVyLnBlcmNlbnQtMjUge1xyXG5cdFx0XHR3aWR0aDogMjUlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5jb250YWluZXIge1xyXG5cdFx0XHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSB7XHJcblxyXG5cdFx0LmNvbnRhaW5lci5wZXJjZW50LTEyNSB7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRtYXgtd2lkdGg6IDEyNSU7XHJcblx0XHRcdG1pbi13aWR0aDogMTAwJTtcclxuXHRcdH1cclxuXHJcblx0XHQuY29udGFpbmVyLnBlcmNlbnQtNzUge1xyXG5cdFx0XHR3aWR0aDogNzUlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5jb250YWluZXIucGVyY2VudC01MCB7XHJcblx0XHRcdHdpZHRoOiA1MCU7XHJcblx0XHR9XHJcblxyXG5cdFx0LmNvbnRhaW5lci5wZXJjZW50LTI1IHtcclxuXHRcdFx0d2lkdGg6IDI1JTtcclxuXHRcdH1cclxuXHJcblx0XHQuY29udGFpbmVyIHtcclxuXHRcdFx0d2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuLyogR3JpZCAqL1xyXG5cclxuXHQucm93IHtcclxuXHRcdGJvcmRlci1ib3R0b206IHNvbGlkIDFweCB0cmFuc3BhcmVudDtcclxuXHRcdC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0fVxyXG5cclxuXHQucm93ID4gKiB7XHJcblx0XHRmbG9hdDogbGVmdDtcclxuXHRcdC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0fVxyXG5cclxuXHQucm93OmFmdGVyLCAucm93OmJlZm9yZSB7XHJcblx0XHRjb250ZW50OiAnJztcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0Y2xlYXI6IGJvdGg7XHJcblx0XHRoZWlnaHQ6IDA7XHJcblx0fVxyXG5cclxuXHQucm93LnVuaWZvcm0gPiAqID4gOmZpcnN0LWNoaWxkIHtcclxuXHRcdG1hcmdpbi10b3A6IDA7XHJcblx0fVxyXG5cclxuXHQucm93LnVuaWZvcm0gPiAqID4gOmxhc3QtY2hpbGQge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHR9XHJcblxyXG5cdC5yb3cucGVyY2VudC0wID4gKiB7XHJcblx0XHRwYWRkaW5nOiAwcHggMCAwIDBweDtcclxuXHR9XHJcblxyXG5cdC5yb3cucGVyY2VudC0wIHtcclxuXHRcdG1hcmdpbjogMHB4IDAgLTFweCAwcHg7XHJcblx0fVxyXG5cclxuXHQucm93LnVuaWZvcm0ucGVyY2VudC0wID4gKiB7XHJcblx0XHRwYWRkaW5nOiAwcHggMCAwIDBweDtcclxuXHR9XHJcblxyXG5cdC5yb3cudW5pZm9ybS5wZXJjZW50LTAge1xyXG5cdFx0bWFyZ2luOiAwcHggMCAtMXB4IDBweDtcclxuXHR9XHJcblxyXG5cdC5yb3cgPiAqIHtcclxuXHRcdHBhZGRpbmc6IDUwcHggMCAwIDUwcHg7XHJcblx0fVxyXG5cclxuXHQucm93IHtcclxuXHRcdG1hcmdpbjogLTUwcHggMCAtMXB4IC01MHB4O1xyXG5cdH1cclxuXHJcblx0LnJvdy51bmlmb3JtID4gKiB7XHJcblx0XHRwYWRkaW5nOiA1MHB4IDAgMCA1MHB4O1xyXG5cdH1cclxuXHJcblx0LnJvdy51bmlmb3JtIHtcclxuXHRcdG1hcmdpbjogLTUwcHggMCAtMXB4IC01MHB4O1xyXG5cdH1cclxuXHJcblx0LnJvdy5wZXJjZW50LTIwMCA+ICoge1xyXG5cdFx0cGFkZGluZzogMTAwcHggMCAwIDEwMHB4O1xyXG5cdH1cclxuXHJcblx0LnJvdy5wZXJjZW50LTIwMCB7XHJcblx0XHRtYXJnaW46IC0xMDBweCAwIC0xcHggLTEwMHB4O1xyXG5cdH1cclxuXHJcblx0LnJvdy51bmlmb3JtLnBlcmNlbnQtMjAwID4gKiB7XHJcblx0XHRwYWRkaW5nOiAxMDBweCAwIDAgMTAwcHg7XHJcblx0fVxyXG5cclxuXHQucm93LnVuaWZvcm0ucGVyY2VudC0yMDAge1xyXG5cdFx0bWFyZ2luOiAtMTAwcHggMCAtMXB4IC0xMDBweDtcclxuXHR9XHJcblxyXG5cdC5yb3cucGVyY2VudC0xNTAgPiAqIHtcclxuXHRcdHBhZGRpbmc6IDc1cHggMCAwIDc1cHg7XHJcblx0fVxyXG5cclxuXHQucm93IC5wZXJjZW50LTE1MCB7XHJcblx0XHRtYXJnaW46IC03NXB4IDAgLTFweCAtNzVweDtcclxuXHR9XHJcblxyXG5cdC5yb3cudW5pZm9ybS5wZXJjZW50LTE1MCA+ICoge1xyXG5cdFx0cGFkZGluZzogNzVweCAwIDAgNzVweDtcclxuXHR9XHJcblxyXG5cdC5yb3cudW5pZm9ybS5wZXJjZW50LTE1MCB7XHJcblx0XHRtYXJnaW46IC03NXB4IDAgLTFweCAtNzVweDtcclxuXHR9XHJcblxyXG5cdC5yb3cucGVyY2VudC01MCA+ICoge1xyXG5cdFx0cGFkZGluZzogMjVweCAwIDAgMjVweDtcclxuXHR9XHJcblxyXG5cdC5yb3cucGVyY2VudC01MCB7XHJcblx0XHRtYXJnaW46IC0yNXB4IDAgLTFweCAtMjVweDtcclxuXHR9XHJcblxyXG5cdC5yb3cudW5pZm9ybS5wZXJjZW50LTUwID4gKiB7XHJcblx0XHRwYWRkaW5nOiAyNXB4IDAgMCAyNXB4O1xyXG5cdH1cclxuXHJcblx0LnJvdy51bmlmb3JtLnBlcmNlbnQtNTAge1xyXG5cdFx0bWFyZ2luOiAtMjVweCAwIC0xcHggLTI1cHg7XHJcblx0fVxyXG5cclxuXHQucm93LnBlcmNlbnQtMjUgPiAqIHtcclxuXHRcdHBhZGRpbmc6IDEyLjVweCAwIDAgMTIuNXB4O1xyXG5cdH1cclxuXHJcblx0LnJvdy5wZXJjZW50LTI1IHtcclxuXHRcdG1hcmdpbjogLTEyLjVweCAwIC0xcHggLTEyLjVweDtcclxuXHR9XHJcblxyXG5cdC5yb3cudW5pZm9ybS5wZXJjZW50LTI1ID4gKiB7XHJcblx0XHRwYWRkaW5nOiAxMi41cHggMCAwIDEyLjVweDtcclxuXHR9XHJcblxyXG5cdC5yb3cudW5pZm9ybS5wZXJjZW50LTI1IHtcclxuXHRcdG1hcmdpbjogLTEyLjVweCAwIC0xcHggLTEyLjVweDtcclxuXHR9XHJcblxyXG5cdC51MTIsIC51MTJ4IHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHR9XHJcblxyXG5cdC51MTEsIC51MTF4IHtcclxuXHRcdHdpZHRoOiA5MS42NjY2NjY2NjY3JTtcclxuXHRcdGNsZWFyOiBub25lO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0fVxyXG5cclxuXHQudTEwLCAudTEweCB7XHJcblx0XHR3aWR0aDogODMuMzMzMzMzMzMzMyU7XHJcblx0XHRjbGVhcjogbm9uZTtcclxuXHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdH1cclxuXHJcblx0LnU5LCAudTl4IHtcclxuXHRcdHdpZHRoOiA3NSU7XHJcblx0XHRjbGVhcjogbm9uZTtcclxuXHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdH1cclxuXHJcblx0LnU4LCAudTh4IHtcclxuXHRcdHdpZHRoOiA2Ni42NjY2NjY2NjY3JTtcclxuXHRcdGNsZWFyOiBub25lO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0fVxyXG5cclxuXHQudTcsIC51N3gge1xyXG5cdFx0d2lkdGg6IDU4LjMzMzMzMzMzMzMlO1xyXG5cdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHR9XHJcblxyXG5cdC51NiwgLnU2eCB7XHJcblx0XHR3aWR0aDogNTAlO1xyXG5cdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHR9XHJcblxyXG5cdC51NSwgLnU1eCB7XHJcblx0XHR3aWR0aDogNDEuNjY2NjY2NjY2NyU7XHJcblx0XHRjbGVhcjogbm9uZTtcclxuXHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdH1cclxuXHJcblx0LnU0LCAudTR4IHtcclxuXHRcdHdpZHRoOiAzMy4zMzMzMzMzMzMzJTtcclxuXHRcdGNsZWFyOiBub25lO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0fVxyXG5cclxuXHQudTMsIC51M3gge1xyXG5cdFx0d2lkdGg6IDI1JTtcclxuXHRcdGNsZWFyOiBub25lO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0fVxyXG5cclxuXHQudTIsIC51Mngge1xyXG5cdFx0d2lkdGg6IDE2LjY2NjY2NjY2NjclO1xyXG5cdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHR9XHJcblxyXG5cdC51MSwgLnUxeCB7XHJcblx0XHR3aWR0aDogOC4zMzMzMzMzMzMzJTtcclxuXHRcdGNsZWFyOiBub25lO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0fVxyXG5cclxuXHQudTEyeCArICosXHJcblx0LnUxMXggKyAqLFxyXG5cdC51MTB4ICsgKixcclxuXHQudTl4ICsgKixcclxuXHQudTh4ICsgKixcclxuXHQudTd4ICsgKixcclxuXHQudTZ4ICsgKixcclxuXHQudTV4ICsgKixcclxuXHQudTR4ICsgKixcclxuXHQudTN4ICsgKixcclxuXHQudTJ4ICsgKixcclxuXHQudTF4ICsgKiB7XHJcblx0XHRjbGVhcjogbGVmdDtcclxuXHR9XHJcblxyXG5cdC4tdTExdSB7XHJcblx0XHRtYXJnaW4tbGVmdDogOTEuNjY2NjclO1xyXG5cdH1cclxuXHJcblx0Li11MTB1IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiA4My4zMzMzMyU7XHJcblx0fVxyXG5cclxuXHQuLXU5dSB7XHJcblx0XHRtYXJnaW4tbGVmdDogNzUlO1xyXG5cdH1cclxuXHJcblx0Li11OHUge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDY2LjY2NjY3JTtcclxuXHR9XHJcblxyXG5cdC4tdTd1IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiA1OC4zMzMzMyU7XHJcblx0fVxyXG5cclxuXHQuLXU2dSB7XHJcblx0XHRtYXJnaW4tbGVmdDogNTAlO1xyXG5cdH1cclxuXHJcblx0Li11NXUge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDQxLjY2NjY3JTtcclxuXHR9XHJcblxyXG5cdC4tdTR1IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7XHJcblx0fVxyXG5cclxuXHQuLXUzdSB7XHJcblx0XHRtYXJnaW4tbGVmdDogMjUlO1xyXG5cdH1cclxuXHJcblx0Li11MnUge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDE2LjY2NjY3JTtcclxuXHR9XHJcblxyXG5cdC4tdTF1IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiA4LjMzMzMzJTtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2ODBweCkge1xyXG5cclxuXHRcdC5yb3cgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogNDBweCAwIDAgNDBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93IHtcclxuXHRcdFx0bWFyZ2luOiAtNDBweCAwIC0xcHggLTQwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDQwcHggMCAwIDQwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtIHtcclxuXHRcdFx0bWFyZ2luOiAtNDBweCAwIC0xcHggLTQwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy5wZXJjZW50LTIwMCA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiA4MHB4IDAgMCA4MHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cucGVyY2VudC0yMDAge1xyXG5cdFx0XHRtYXJnaW46IC04MHB4IDAgLTFweCAtODBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ucGVyY2VudC0yMDAgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogODBweCAwIDAgODBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ucGVyY2VudC0yMDAge1xyXG5cdFx0XHRtYXJnaW46IC04MHB4IDAgLTFweCAtODBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtMTUwID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDYwcHggMCAwIDYwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy5wZXJjZW50LTE1MCB7XHJcblx0XHRcdG1hcmdpbjogLTYwcHggMCAtMXB4IC02MHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybS5wZXJjZW50LTE1MCA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiA2MHB4IDAgMCA2MHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybS5wZXJjZW50LTE1MCB7XHJcblx0XHRcdG1hcmdpbjogLTYwcHggMCAtMXB4IC02MHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cucGVyY2VudC01MCA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiAyMHB4IDAgMCAyMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cucGVyY2VudC01MCB7XHJcblx0XHRcdG1hcmdpbjogLTIwcHggMCAtMXB4IC0yMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybS5wZXJjZW50LTUwID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDIwcHggMCAwIDIwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtLnBlcmNlbnQtNTAge1xyXG5cdFx0XHRtYXJnaW46IC0yMHB4IDAgLTFweCAtMjBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtMjUgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogMTBweCAwIDAgMTBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtMjUge1xyXG5cdFx0XHRtYXJnaW46IC0xMHB4IDAgLTFweCAtMTBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ucGVyY2VudC0yNSA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiAxMHB4IDAgMCAxMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybS5wZXJjZW50LTI1IHtcclxuXHRcdFx0bWFyZ2luOiAtMTBweCAwIC0xcHggLTEwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUxMi13aWRlLCAudTEyeC13aWRlIHtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTExLXdpZGUsIC51MTF4LXdpZGUge1xyXG5cdFx0XHR3aWR0aDogOTEuNjY2NjY2NjY2NyU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTEwLXdpZGUsIC51MTB4LXdpZGUge1xyXG5cdFx0XHR3aWR0aDogODMuMzMzMzMzMzMzMyU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTktd2lkZSwgLnU5eC13aWRlIHtcclxuXHRcdFx0d2lkdGg6IDc1JTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51OC13aWRlLCAudTh4LXdpZGUge1xyXG5cdFx0XHR3aWR0aDogNjYuNjY2NjY2NjY2NyU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTctd2lkZSwgLnU3eC13aWRlIHtcclxuXHRcdFx0d2lkdGg6IDU4LjMzMzMzMzMzMzMlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnU2LXdpZGUsIC51Nngtd2lkZSB7XHJcblx0XHRcdHdpZHRoOiA1MCU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTUtd2lkZSwgLnU1eC13aWRlIHtcclxuXHRcdFx0d2lkdGg6IDQxLjY2NjY2NjY2NjclO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnU0LXdpZGUsIC51NHgtd2lkZXtcclxuXHRcdFx0d2lkdGg6IDMzLjMzMzMzMzMzMzMlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUzLXdpZGUsIC51M3gtd2lkZSB7XHJcblx0XHRcdHdpZHRoOiAyNSU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTItd2lkZSwgLnUyeC13aWRlIHtcclxuXHRcdFx0d2lkdGg6IDE2LjY2NjY2NjY2NjclO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUxLXdpZGUsIC51MXgtd2lkZSB7XHJcblx0XHRcdHdpZHRoOiA4LjMzMzMzMzMzMzMlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUxMngtd2lkZSArICosXHJcblx0XHQudTExeC13aWRlICsgKixcclxuXHRcdC51MTB4LXdpZGUgKyAqLFxyXG5cdFx0LnU5eC13aWRlICsgKixcclxuXHRcdC51OHgtd2lkZSArICosXHJcblx0XHQudTd4LXdpZGUgKyAqLFxyXG5cdFx0LnU2eC13aWRlICsgKixcclxuXHRcdC51NXgtd2lkZSArICosXHJcblx0XHQudTR4LXdpZGUrICosXHJcblx0XHQudTN4LXdpZGUgKyAqLFxyXG5cdFx0LnUyeC13aWRlICsgKixcclxuXHRcdC51MXgtd2lkZSArICoge1xyXG5cdFx0XHRjbGVhcjogbGVmdDtcclxuXHRcdH1cclxuXHJcblx0XHQuLXUxMS13aWRlIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDkxLjY2NjY3JTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXUxMC13aWRlIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDgzLjMzMzMzJTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXU5LXdpZGUge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogNzUlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTgtd2lkZSB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA2Ni42NjY2NyU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11Ny13aWRlIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDU4LjMzMzMzJTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXU2LXdpZGUge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogNTAlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTUtd2lkZSB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA0MS42NjY2NyU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11NC13aWRlIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXUzLXdpZGUge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMjUlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTItd2lkZSB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAxNi42NjY2NyU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11MS13aWRlIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDguMzMzMzMlO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG5cclxuXHRcdC5yb3cgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogMzBweCAwIDAgMzBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93IHtcclxuXHRcdFx0bWFyZ2luOiAtMzBweCAwIC0xcHggLTMwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDMwcHggMCAwIDMwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtIHtcclxuXHRcdFx0bWFyZ2luOiAtMzBweCAwIC0xcHggLTMwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy5wZXJjZW50LTIwMCA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiA2MHB4IDAgMCA2MHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cucGVyY2VudC0yMDAge1xyXG5cdFx0XHRtYXJnaW46IC02MHB4IDAgLTFweCAtNjBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ucGVyY2VudC0yMDAgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogNjBweCAwIDAgNjBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ucGVyY2VudC0yMDAge1xyXG5cdFx0XHRtYXJnaW46IC02MHB4IDAgLTFweCAtNjBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtMTUwID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDQ1cHggMCAwIDQ1cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy5wZXJjZW50LTE1MCB7XHJcblx0XHRcdG1hcmdpbjogLTQ1cHggMCAtMXB4IC00NXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybS5wZXJjZW50LTE1MCA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiA0NXB4IDAgMCA0NXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybS5wZXJjZW50LTE1MCB7XHJcblx0XHRcdG1hcmdpbjogLTQ1cHggMCAtMXB4IC00NXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cucGVyY2VudC01MCA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiAxNXB4IDAgMCAxNXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cucGVyY2VudC01MCB7XHJcblx0XHRcdG1hcmdpbjogLTE1cHggMCAtMXB4IC0xNXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybS5wZXJjZW50LTUwID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDE1cHggMCAwIDE1cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtLnBlcmNlbnQtNTAge1xyXG5cdFx0XHRtYXJnaW46IC0xNXB4IDAgLTFweCAtMTVweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtMjUgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogNy41cHggMCAwIDcuNXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cucGVyY2VudC0yNSB7XHJcblx0XHRcdG1hcmdpbjogLTcuNXB4IDAgLTFweCAtNy41cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtLnBlcmNlbnQtMjUgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogNy41cHggMCAwIDcuNXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybS5wZXJjZW50LTI1IHtcclxuXHRcdFx0bWFyZ2luOiAtNy41cHggMCAtMXB4IC03LjVweDtcclxuXHRcdH1cclxuXHJcblx0XHQudTEyLW5vcm1hbCwgLnUxMngtbm9ybWFsIHtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTExLW5vcm1hbCwgLnUxMXgtbm9ybWFsIHtcclxuXHRcdFx0d2lkdGg6IDkxLjY2NjY2NjY2NjclO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUxMC1ub3JtYWwsIC51MTB4LW5vcm1hbCB7XHJcblx0XHRcdHdpZHRoOiA4My4zMzMzMzMzMzMzJTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51OS1ub3JtYWwsIC51OXgtbm9ybWFsIHtcclxuXHRcdFx0d2lkdGg6IDc1JTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51OC1ub3JtYWwsIC51OHgtbm9ybWFsIHtcclxuXHRcdFx0d2lkdGg6IDY2LjY2NjY2NjY2NjclO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnU3LW5vcm1hbCwgLnU3eC1ub3JtYWwge1xyXG5cdFx0XHR3aWR0aDogNTguMzMzMzMzMzMzMyU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTYtbm9ybWFsLCAudTZ4LW5vcm1hbCB7XHJcblx0XHRcdHdpZHRoOiA1MCU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTUtbm9ybWFsLCAudTV4LW5vcm1hbCB7XHJcblx0XHRcdHdpZHRoOiA0MS42NjY2NjY2NjY3JTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51NC1ub3JtYWwsIC51NHgtbm9ybWFsIHtcclxuXHRcdFx0d2lkdGg6IDMzLjMzMzMzMzMzMzMlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUzLW5vcm1hbCwgLnUzeC1ub3JtYWwge1xyXG5cdFx0XHR3aWR0aDogMjUlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUyLW5vcm1hbCwgLnUyeC1ub3JtYWwge1xyXG5cdFx0XHR3aWR0aDogMTYuNjY2NjY2NjY2NyU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTEtbm9ybWFsLCAudTF4LW5vcm1hbCB7XHJcblx0XHRcdHdpZHRoOiA4LjMzMzMzMzMzMzMlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUxMngtbm9ybWFsICsgKixcclxuXHRcdC51MTF4LW5vcm1hbCArICosXHJcblx0XHQudTEweC1ub3JtYWwgKyAqLFxyXG5cdFx0LnU5eC1ub3JtYWwgKyAqLFxyXG5cdFx0LnU4eC1ub3JtYWwgKyAqLFxyXG5cdFx0LnU3eC1ub3JtYWwgKyAqLFxyXG5cdFx0LnU2eC1ub3JtYWwgKyAqLFxyXG5cdFx0LnU1eC1ub3JtYWwgKyAqLFxyXG5cdFx0LnU0eC1ub3JtYWwgKyAqLFxyXG5cdFx0LnUzeC1ub3JtYWwgKyAqLFxyXG5cdFx0LnUyeC1ub3JtYWwgKyAqLFxyXG5cdFx0LnUxeC1ub3JtYWwgKyAqIHtcclxuXHRcdFx0Y2xlYXI6IGxlZnQ7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11MTEtbm9ybWFsIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDkxLjY2NjY3JTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXUxMC1ub3JtYWwge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogODMuMzMzMzMlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTktbm9ybWFsIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDc1JTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXU4LW5vcm1hbCB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA2Ni42NjY2NyU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11Ny1ub3JtYWwge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogNTguMzMzMzMlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTYtbm9ybWFsIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDUwJTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXU1LW5vcm1hbCB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA0MS42NjY2NyU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11NC1ub3JtYWwge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMzMuMzMzMzMlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTMtbm9ybWFsIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDI1JTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXUyLW5vcm1hbCB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAxNi42NjY2NyU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11MS1ub3JtYWwge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogOC4zMzMzMyU7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcblxyXG5cdFx0LnJvdyA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiAyNXB4IDAgMCAyNXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cge1xyXG5cdFx0XHRtYXJnaW46IC0yNXB4IDAgLTFweCAtMjVweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0gPiAqIHtcclxuXHRcdFx0cGFkZGluZzogMjVweCAwIDAgMjVweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ge1xyXG5cdFx0XHRtYXJnaW46IC0yNXB4IDAgLTFweCAtMjVweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtMjAwID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDUwcHggMCAwIDUwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy5wZXJjZW50LTIwMCB7XHJcblx0XHRcdG1hcmdpbjogLTUwcHggMCAtMXB4IC01MHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybS5wZXJjZW50LTIwMCA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiA1MHB4IDAgMCA1MHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybS5wZXJjZW50LTIwMCB7XHJcblx0XHRcdG1hcmdpbjogLTUwcHggMCAtMXB4IC01MHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cucGVyY2VudC0xNTAgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogMzcuNXB4IDAgMCAzNy41cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy5wZXJjZW50LTE1MCB7XHJcblx0XHRcdG1hcmdpbjogLTM3LjVweCAwIC0xcHggLTM3LjVweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ucGVyY2VudC0xNTAgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogMzcuNXB4IDAgMCAzNy41cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtLnBlcmNlbnQtMTUwIHtcclxuXHRcdFx0bWFyZ2luOiAtMzcuNXB4IDAgLTFweCAtMzcuNXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cucGVyY2VudC01MCA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiAxMi41cHggMCAwIDEyLjVweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtNTAge1xyXG5cdFx0XHRtYXJnaW46IC0xMi41cHggMCAtMXB4IC0xMi41cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtLnBlcmNlbnQtNTAgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogMTIuNXB4IDAgMCAxMi41cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtLnBlcmNlbnQtNTAge1xyXG5cdFx0XHRtYXJnaW46IC0xMi41cHggMCAtMXB4IC0xMi41cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy5wZXJjZW50LTI1ID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDYuMjVweCAwIDAgNi4yNXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cucGVyY2VudC0yNSB7XHJcblx0XHRcdG1hcmdpbjogLTYuMjVweCAwIC0xcHggLTYuMjVweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ucGVyY2VudC0yNSA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiA2LjI1cHggMCAwIDYuMjVweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ucGVyY2VudC0yNSB7XHJcblx0XHRcdG1hcmdpbjogLTYuMjVweCAwIC0xcHggLTYuMjVweDtcclxuXHRcdH1cclxuXHJcblx0XHQudTEyLW5hcnJvdywgLnUxMngtbmFycm93IHtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTExLW5hcnJvdywgLnUxMXgtbmFycm93IHtcclxuXHRcdFx0d2lkdGg6IDkxLjY2NjY2NjY2NjclO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUxMC1uYXJyb3csIC51MTB4LW5hcnJvdyB7XHJcblx0XHRcdHdpZHRoOiA4My4zMzMzMzMzMzMzJTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51OS1uYXJyb3csIC51OXgtbmFycm93IHtcclxuXHRcdFx0d2lkdGg6IDc1JTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51OC1uYXJyb3csIC51OHgtbmFycm93IHtcclxuXHRcdFx0d2lkdGg6IDY2LjY2NjY2NjY2NjclO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnU3LW5hcnJvdywgLnU3eC1uYXJyb3cge1xyXG5cdFx0XHR3aWR0aDogNTguMzMzMzMzMzMzMyU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTYtbmFycm93LCAudTZ4LW5hcnJvdyB7XHJcblx0XHRcdHdpZHRoOiA1MCU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTUtbmFycm93LCAudTV4LW5hcnJvdyB7XHJcblx0XHRcdHdpZHRoOiA0MS42NjY2NjY2NjY3JTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51NC1uYXJyb3csIC51NHgtbmFycm93IHtcclxuXHRcdFx0d2lkdGg6IDMzLjMzMzMzMzMzMzMlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUzLW5hcnJvdywgLnUzeC1uYXJyb3cge1xyXG5cdFx0XHR3aWR0aDogMjUlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUyLW5hcnJvdywgLnUyeC1uYXJyb3cge1xyXG5cdFx0XHR3aWR0aDogMTYuNjY2NjY2NjY2NyU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTEtbmFycm93LCAudTF4LW5hcnJvdyB7XHJcblx0XHRcdHdpZHRoOiA4LjMzMzMzMzMzMzMlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUxMngtbmFycm93ICsgKixcclxuXHRcdC51MTF4LW5hcnJvdyArICosXHJcblx0XHQudTEweC1uYXJyb3cgKyAqLFxyXG5cdFx0LnU5eC1uYXJyb3cgKyAqLFxyXG5cdFx0LnU4eC1uYXJyb3cgKyAqLFxyXG5cdFx0LnU3eC1uYXJyb3cgKyAqLFxyXG5cdFx0LnU2eC1uYXJyb3cgKyAqLFxyXG5cdFx0LnU1eC1uYXJyb3cgKyAqLFxyXG5cdFx0LnU0eC1uYXJyb3cgKyAqLFxyXG5cdFx0LnUzeC1uYXJyb3cgKyAqLFxyXG5cdFx0LnUyeC1uYXJyb3cgKyAqLFxyXG5cdFx0LnUxeC1uYXJyb3cgKyAqIHtcclxuXHRcdFx0Y2xlYXI6IGxlZnQ7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11MTEtbmFycm93IHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDkxLjY2NjY3JTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXUxMC1uYXJyb3cge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogODMuMzMzMzMlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTktbmFycm93IHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDc1JTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXU4LW5hcnJvdyB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA2Ni42NjY2NyU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11Ny1uYXJyb3cge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogNTguMzMzMzMlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTYtbmFycm93IHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDUwJTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXU1LW5hcnJvdyB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA0MS42NjY2NyU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11NC1uYXJyb3cge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMzMuMzMzMzMlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTMtbmFycm93IHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDI1JTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXUyLW5hcnJvdyB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAxNi42NjY2NyU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11MS1uYXJyb3cge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogOC4zMzMzMyU7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcclxuXHJcblx0XHQucm93ID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDIwcHggMCAwIDIwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdyB7XHJcblx0XHRcdG1hcmdpbjogLTIwcHggMCAtMXB4IC0yMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybSA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiAyMHB4IDAgMCAyMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybSB7XHJcblx0XHRcdG1hcmdpbjogLTIwcHggMCAtMXB4IC0yMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cucGVyY2VudC0yMDAgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogNDBweCAwIDAgNDBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtMjAwIHtcclxuXHRcdFx0bWFyZ2luOiAtNDBweCAwIC0xcHggLTQwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtLnBlcmNlbnQtMjAwID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDQwcHggMCAwIDQwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy51bmlmb3JtLnBlcmNlbnQtMjAwIHtcclxuXHRcdFx0bWFyZ2luOiAtNDBweCAwIC0xcHggLTQwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy5wZXJjZW50LTE1MCA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiAzMHB4IDAgMCAzMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cucGVyY2VudC0xNTAge1xyXG5cdFx0XHRtYXJnaW46IC0zMHB4IDAgLTFweCAtMzBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ucGVyY2VudC0xNTAgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogMzBweCAwIDAgMzBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ucGVyY2VudC0xNTAge1xyXG5cdFx0XHRtYXJnaW46IC0zMHB4IDAgLTFweCAtMzBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtNTAgPiAqIHtcclxuXHRcdFx0cGFkZGluZzogMTBweCAwIDAgMTBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnBlcmNlbnQtNTAge1xyXG5cdFx0XHRtYXJnaW46IC0xMHB4IDAgLTFweCAtMTBweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ucGVyY2VudC01MCA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiAxMHB4IDAgMCAxMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cudW5pZm9ybS5wZXJjZW50LTUwIHtcclxuXHRcdFx0bWFyZ2luOiAtMTBweCAwIC0xcHggLTEwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdy5wZXJjZW50LTI1ID4gKiB7XHJcblx0XHRcdHBhZGRpbmc6IDVweCAwIDAgNXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cucGVyY2VudC0yNSB7XHJcblx0XHRcdG1hcmdpbjogLTVweCAwIC0xcHggLTVweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ucGVyY2VudC0yNSA+ICoge1xyXG5cdFx0XHRwYWRkaW5nOiA1cHggMCAwIDVweDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LnVuaWZvcm0ucGVyY2VudC0yNSB7XHJcblx0XHRcdG1hcmdpbjogLTVweCAwIC0xcHggLTVweDtcclxuXHRcdH1cclxuXHJcblx0XHQudTEyLW1vYmlsZSwgLnUxMngtbW9iaWxlIHtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTExLW1vYmlsZSwgLnUxMXgtbW9iaWxlIHtcclxuXHRcdFx0d2lkdGg6IDkxLjY2NjY2NjY2NjclO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUxMC1tb2JpbGUsIC51MTB4LW1vYmlsZSB7XHJcblx0XHRcdHdpZHRoOiA4My4zMzMzMzMzMzMzJTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51OS1tb2JpbGUsIC51OXgtbW9iaWxlIHtcclxuXHRcdFx0d2lkdGg6IDc1JTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51OC1tb2JpbGUsIC51OHgtbW9iaWxlIHtcclxuXHRcdFx0d2lkdGg6IDY2LjY2NjY2NjY2NjclO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnU3LW1vYmlsZSwgLnU3eC1tb2JpbGUge1xyXG5cdFx0XHR3aWR0aDogNTguMzMzMzMzMzMzMyU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTYtbW9iaWxlLCAudTZ4LW1vYmlsZSB7XHJcblx0XHRcdHdpZHRoOiA1MCU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTUtbW9iaWxlLCAudTV4LW1vYmlsZSB7XHJcblx0XHRcdHdpZHRoOiA0MS42NjY2NjY2NjY3JTtcclxuXHRcdFx0Y2xlYXI6IG5vbmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC51NC1tb2JpbGUsIC51NHgtbW9iaWxlIHtcclxuXHRcdFx0d2lkdGg6IDMzLjMzMzMzMzMzMzMlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUzLW1vYmlsZSwgLnUzeC1tb2JpbGUge1xyXG5cdFx0XHR3aWR0aDogMjUlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUyLW1vYmlsZSwgLnUyeC1tb2JpbGUge1xyXG5cdFx0XHR3aWR0aDogMTYuNjY2NjY2NjY2NyU7XHJcblx0XHRcdGNsZWFyOiBub25lO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQudTEtbW9iaWxlLCAudTF4LW1vYmlsZSB7XHJcblx0XHRcdHdpZHRoOiA4LjMzMzMzMzMzMzMlO1xyXG5cdFx0XHRjbGVhcjogbm9uZTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUxMngtbW9iaWxlICsgKixcclxuXHRcdC51MTF4LW1vYmlsZSArICosXHJcblx0XHQudTEweC1tb2JpbGUgKyAqLFxyXG5cdFx0LnU5eC1tb2JpbGUgKyAqLFxyXG5cdFx0LnU4eC1tb2JpbGUgKyAqLFxyXG5cdFx0LnU3eC1tb2JpbGUgKyAqLFxyXG5cdFx0LnU2eC1tb2JpbGUgKyAqLFxyXG5cdFx0LnU1eC1tb2JpbGUgKyAqLFxyXG5cdFx0LnU0eC1tb2JpbGUgKyAqLFxyXG5cdFx0LnUzeC1tb2JpbGUgKyAqLFxyXG5cdFx0LnUyeC1tb2JpbGUgKyAqLFxyXG5cdFx0LnUxeC1tb2JpbGUgKyAqIHtcclxuXHRcdFx0Y2xlYXI6IGxlZnQ7XHJcblx0XHR9XHJcblxyXG5cdFx0LnUxMS1tb2JpbGUge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogOTEuNjY2NjclO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTEwLW1vYmlsZSB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA4My4zMzMzMyU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11OS1tb2JpbGUge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogNzUlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTgtbW9iaWxlIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDY2LjY2NjY3JTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXU3LW1vYmlsZSB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA1OC4zMzMzMyU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11Ni1tb2JpbGUge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogNTAlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTUtbW9iaWxlIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDQxLjY2NjY3JTtcclxuXHRcdH1cclxuXHJcblx0XHQuLXU0LW1vYmlsZSB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7XHJcblx0XHR9XHJcblxyXG5cdFx0Li11My1tb2JpbGUge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMjUlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC4tdTItbW9iaWxlIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDE2LjY2NjY3JTtcclxuXHRcdH1cclxuNnVcclxuXHRcdC4tdTEtbW9iaWxlIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDguMzMzMzMlO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG4vKiBCYXNpYyAqL1xyXG5cclxuXHRALW1zLXZpZXdwb3J0IHtcclxuXHRcdHdpZHRoOiBkZXZpY2Utd2lkdGg7XHJcblx0fVxyXG5cclxuXHRib2R5IHtcclxuXHRcdGJhY2tncm91bmQ6ICNGOEY4Rjg7XHJcblx0XHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcblx0XHRmb250LXdlaWdodDogMzAwO1xyXG5cdFx0Zm9udC1zaXplOiAxN3B0O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDEuNzVlbTtcclxuXHRcdGNvbG9yOiAjODg4O1xyXG5cdFx0LXdlYmtpdC10ZXh0LXN0cm9rZTogMC4xcHg7XHJcblx0fVxyXG5cclxuXHRcdGJvZHkuaXMtbG9hZGluZyAqIHtcclxuXHRcdFx0LW1vei10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcblx0XHRcdC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0XHQtbXMtdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0XHR0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcblx0XHRcdC1tb3otYW5pbWF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcblx0XHRcdC13ZWJraXQtYW5pbWF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcblx0XHRcdC1tcy1hbmltYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuXHRcdFx0YW5pbWF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcblx0XHR9XHJcblxyXG5cdC5kYXJrIHtcclxuXHRcdGNvbG9yOiAjYWFhO1xyXG5cdFx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NSk7XHJcblx0fVxyXG5cclxuXHRpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCB7XHJcblx0XHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcblx0XHRmb250LXdlaWdodDogMzAwO1xyXG5cdFx0Zm9udC1zaXplOiAxN3B0O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDEuNzVlbTtcclxuXHRcdGNvbG9yOiAjODg4O1xyXG5cdFx0LXdlYmtpdC10ZXh0LXN0cm9rZTogMC4xcHg7XHJcblx0fVxyXG5cclxuXHRoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuXHRcdGNvbG9yOiAjNjY2O1xyXG5cdFx0bWFyZ2luOiAwIDAgMWVtIDA7XHJcblx0XHRmb250LXdlaWdodDogMTAwO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDEuNWVtO1xyXG5cdH1cclxuXHJcblx0aDEgYSwgaDIgYSwgaDMgYSwgaDQgYSwgaDUgYSwgaDYgYSB7XHJcblx0XHRjb2xvcjogaW5oZXJpdDtcclxuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHR9XHJcblxyXG5cdC5kYXJrIGgxLCAuZGFyayBoMiwgLmRhcmsgaDMsIC5kYXJrIGg0LCAuZGFyayBoNSwgLmRhcmsgaDYge1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0fVxyXG5cclxuXHRzdHJvbmcsIGIge1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdGNvbG9yOiBpbmhlcml0O1xyXG5cdH1cclxuXHJcblx0LmRhcmsgc3Ryb25nLCAuZGFyayBiIHtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XHJcblx0fVxyXG5cclxuXHRlbSwgaSB7XHJcblx0XHRmb250LXN0eWxlOiBpdGFsaWM7XHJcblx0fVxyXG5cclxuXHRhIHtcclxuXHRcdC1tb3otdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHRcdC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHRcdC1tcy10cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cdFx0dHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHRcdGNvbG9yOiBpbmhlcml0O1xyXG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogZG90dGVkIDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG5cdH1cclxuXHJcblx0XHRhOmhvdmVyIHtcclxuXHRcdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0XHR9XHJcblxyXG5cdC5kYXJrIGEge1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcblx0fVxyXG5cclxuXHRcdC5kYXJrIGE6aG92ZXIge1xyXG5cdFx0XHRib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG5cdFx0fVxyXG5cclxuXHRzdWIge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0dG9wOiAwLjVlbTtcclxuXHRcdGZvbnQtc2l6ZTogMC44ZW07XHJcblx0fVxyXG5cclxuXHRzdXAge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0dG9wOiAtMC41ZW07XHJcblx0XHRmb250LXNpemU6IDAuOGVtO1xyXG5cdH1cclxuXHJcblx0aHIge1xyXG5cdFx0Ym9yZGVyOiAwO1xyXG5cdFx0Ym9yZGVyLXRvcDogc29saWQgMXB4ICNlNmU2ZTY7XHJcblx0XHRtYXJnaW46IDJlbSAwIDJlbSAwO1xyXG5cdH1cclxuXHJcblx0LmRhcmsgaHIge1xyXG5cdFx0Ym9yZGVyLXRvcC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG5cdH1cclxuXHJcblx0YmxvY2txdW90ZSB7XHJcblx0XHRib3JkZXItbGVmdDogc29saWQgMC4yNWVtICNlNmU2ZTY7XHJcblx0XHRwYWRkaW5nOiAxZW0gMCAxZW0gMmVtO1xyXG5cdFx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG5cdH1cclxuXHJcblx0LmRhcmsgYmxvY2txdW90ZSB7XHJcblx0XHRib3JkZXItbGVmdC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG5cdH1cclxuXHJcblx0cCwgdWwsIG9sLCBkbCwgdGFibGUge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMWVtO1xyXG5cdH1cclxuXHJcblx0cCB7XHJcblx0XHR0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG5cdH1cclxuXHJcblx0aGVhZGVyIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDFlbTtcclxuXHR9XHJcblxyXG5cdFx0aGVhZGVyIGgxLCBoZWFkZXIgaDIsIGhlYWRlciBoMywgaGVhZGVyIGg0LCBoZWFkZXIgaDUsIGhlYWRlciBoNiB7XHJcblx0XHRcdG1hcmdpbjogMDtcclxuXHRcdH1cclxuXHJcblx0XHRoZWFkZXIgcCB7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdHBhZGRpbmc6IDAuMjVlbSAwIDAuNWVtIDA7XHJcblx0XHR9XHJcblxyXG5cdGZvb3RlciB7XHJcblx0XHRwYWRkaW5nLXRvcDogMS41ZW07XHJcblx0fVxyXG5cclxuXHRici5jbGVhciB7XHJcblx0XHRjbGVhcjogYm90aDtcclxuXHR9XHJcblxyXG5cdC5mZWF0dXJlZCB7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHRcdC5mZWF0dXJlZCBwIHtcclxuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0fVxyXG5cclxuLyogU2VjdGlvbnMvQXJ0aWNsZSAqL1xyXG5cclxuXHRzZWN0aW9uLFxyXG5cdGFydGljbGUge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogM2VtO1xyXG5cdH1cclxuXHJcblx0c2VjdGlvbiA+IDpsYXN0LWNoaWxkLFxyXG5cdGFydGljbGUgPiA6bGFzdC1jaGlsZCxcclxuXHRzZWN0aW9uOmxhc3QtY2hpbGQsXHJcblx0YXJ0aWNsZTpsYXN0LWNoaWxkIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDA7XHJcblx0fVxyXG5cclxuXHQucm93ID4gc2VjdGlvbixcclxuXHQucm93ID4gYXJ0aWNsZSB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdH1cclxuXHJcbi8qIEltYWdlICovXHJcblxyXG5cdC5pbWFnZSB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRib3JkZXI6IDA7XHJcblx0fVxyXG5cclxuXHRcdC5pbWFnZTphZnRlciB7XHJcblx0XHRcdGNvbnRlbnQ6ICcnO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdHRvcDogMDtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0YmFja2dyb3VuZDogdXJsKFwic3RhdGljL2ltYWdlcy9vdmVybGF5LnBuZ1wiKTtcclxuXHRcdH1cclxuXHJcblx0XHQuaW1hZ2UgaW1nIHtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuXHRcdH1cclxuXHJcblx0XHQuaW1hZ2UuZmVhdHVyZWQge1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdG1hcmdpbjogMCAwIDJlbSAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5pbWFnZS5maXQge1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHR9XHJcblxyXG5cdFx0LmltYWdlLmxlZnQge1xyXG5cdFx0XHRmbG9hdDogbGVmdDtcclxuXHRcdFx0bWFyZ2luOiAwIDJlbSAyZW0gMDtcclxuXHRcdH1cclxuXHJcblx0XHQuaW1hZ2UuY2VudGVyZWQge1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0bWFyZ2luOiAwIDAgMmVtIDA7XHJcblx0XHR9XHJcblxyXG5cdFx0XHQuaW1hZ2UuY2VudGVyZWQgaW1nIHtcclxuXHRcdFx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdFx0XHR3aWR0aDogYXV0bztcclxuXHRcdFx0fVxyXG5cclxuLyogTGlzdCAqL1xyXG5cclxuXHR1bC5kZWZhdWx0IHtcclxuXHRcdGxpc3Qtc3R5bGU6IGRpc2M7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDFlbTtcclxuXHR9XHJcblxyXG5cdFx0dWwuZGVmYXVsdCBsaSB7XHJcblx0XHRcdHBhZGRpbmctbGVmdDogMC41ZW07XHJcblx0XHR9XHJcblxyXG5cdHVsLmljb25zIHtcclxuXHRcdGN1cnNvcjogZGVmYXVsdDtcclxuXHR9XHJcblxyXG5cdFx0dWwuaWNvbnMgbGkge1xyXG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdHBhZGRpbmctbGVmdDogMC43NWVtO1xyXG5cdFx0fVxyXG5cclxuXHRcdHVsLmljb25zIGEge1xyXG5cdFx0XHQtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblx0XHRcdC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHRcdFx0LW1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblx0XHRcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0d2lkdGg6IDIuNzVlbTtcclxuXHRcdFx0aGVpZ2h0OiAyLjc1ZW07XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiAyLjhlbTtcclxuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRib3JkZXI6IDA7XHJcblx0XHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZTZlNmU2O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAxMDAlO1xyXG5cdFx0XHRjb2xvcjogI2FhYTtcclxuXHRcdH1cclxuXHJcblx0XHRcdHVsLmljb25zIGE6aG92ZXIge1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMjUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdHVsLm1lbnUge1xyXG5cdFx0Y3Vyc29yOiBkZWZhdWx0O1xyXG5cdH1cclxuXHJcblx0XHR1bC5tZW51IGxpIHtcclxuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRsaW5lLWhlaWdodDogMWVtO1xyXG5cdFx0XHRib3JkZXItbGVmdDogc29saWQgMXB4ICNlNmU2ZTY7XHJcblx0XHRcdHBhZGRpbmc6IDAgMCAwIDAuNWVtO1xyXG5cdFx0XHRtYXJnaW46IDAgMCAwIDAuNWVtO1xyXG5cdFx0fVxyXG5cclxuXHRcdFx0dWwubWVudSBsaTpmaXJzdC1jaGlsZCB7XHJcblx0XHRcdFx0Ym9yZGVyLWxlZnQ6IDA7XHJcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiAwO1xyXG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdHVsLmFjdGlvbnMge1xyXG5cdFx0Y3Vyc29yOiBkZWZhdWx0O1xyXG5cdH1cclxuXHJcblx0XHR1bC5hY3Rpb25zIGxpIHtcclxuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRtYXJnaW46IDAgMCAwIDAuNWVtO1xyXG5cdFx0fVxyXG5cclxuXHRcdFx0dWwuYWN0aW9ucyBsaTpmaXJzdC1jaGlsZCB7XHJcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHRcdH1cclxuXHJcblx0b2wuZGVmYXVsdCB7XHJcblx0XHRsaXN0LXN0eWxlOiBkZWNpbWFsO1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAxLjI1ZW07XHJcblx0fVxyXG5cclxuXHRcdG9sLmRlZmF1bHQgbGkge1xyXG5cdFx0XHRwYWRkaW5nLWxlZnQ6IDAuMjVlbTtcclxuXHRcdH1cclxuXHJcbi8qIEZvcm0gKi9cclxuXHJcblx0Zm9ybSAuYWN0aW9ucyB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdH1cclxuXHJcblx0Zm9ybSBsYWJlbCB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHR9XHJcblxyXG5cdGZvcm0gaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcblx0Zm9ybSBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcblx0Zm9ybSBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXHJcblx0Zm9ybSBzZWxlY3QsXHJcblx0Zm9ybSAuc2VsZWN0LFxyXG5cdGZvcm0gdGV4dGFyZWEge1xyXG5cdFx0LW1vei10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblx0XHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcclxuXHRcdC1tcy10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblx0XHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0XHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0XHQtbXMtYXBwZWFyYW5jZTogbm9uZTtcclxuXHRcdGFwcGVhcmFuY2U6IG5vbmU7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZTZlNmU2O1xyXG5cdFx0YmFja2dyb3VuZDogI2Y4ZjhmODtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0cGFkZGluZzogMC44NWVtIDFlbSAwLjg1ZW0gMWVtO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMC4yNWVtO1xyXG5cdFx0Ym9yZGVyOiAwO1xyXG5cdH1cclxuXHJcblx0XHRmb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLFxyXG5cdFx0Zm9ybSBpbnB1dFt0eXBlPVwiZW1haWxcIl06Zm9jdXMsXHJcblx0XHRmb3JtIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1cyxcclxuXHRcdGZvcm0gc2VsZWN0OmZvY3VzLFxyXG5cdFx0Zm9ybSAuc2VsZWN0OmZvY3VzLFxyXG5cdFx0Zm9ybSB0ZXh0YXJlYTpmb2N1cyB7XHJcblx0XHRcdG91dGxpbmU6IDA7XHJcblx0XHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjYWZkOWUwO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjZmNmY2ZjO1xyXG5cdFx0fVxyXG5cclxuXHRmb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG5cdGZvcm0gaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG5cdGZvcm0gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxyXG5cdGZvcm0gc2VsZWN0IHtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxLjI1ZW07XHJcblx0fVxyXG5cclxuXHRmb3JtIHRleHRhcmVhIHtcclxuXHRcdG1pbi1oZWlnaHQ6IDEzZW07XHJcblx0fVxyXG5cclxuXHRmb3JtIHNlbGVjdCB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cclxuXHRcdGZvcm0gc2VsZWN0IG9wdGlvbjpub3QoOmNoZWNrZWQpIHtcclxuXHRcdFx0Y29sb3I6ICMwMDA7XHJcblx0XHR9XHJcblxyXG5cdGZvcm0gLnNlbGVjdCB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0b3ZlcmZsb3cteDogaGlkZGVuO1xyXG5cdFx0b3V0bGluZTogMDtcclxuXHR9XHJcblxyXG5cdFx0Zm9ybSAuc2VsZWN0IHNlbGVjdCB7XHJcblx0XHRcdHdpZHRoOiBjYWxjKDEwMCUgKyAyZW0pO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcblx0XHRcdGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuXHRcdFx0Ym9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdH1cclxuXHJcblx0XHRcdGZvcm0gLnNlbGVjdCBzZWxlY3Q6Oi1tb3otZm9jdXMtaW5uZXIge1xyXG5cdFx0XHRcdGJvcmRlcjogMDtcclxuXHRcdFx0XHRvdXRsaW5lOiAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0Zm9ybSAuc2VsZWN0OmJlZm9yZSB7XHJcblx0XHRcdGNvbnRlbnQ6ICcnO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHRvcDogMTUlO1xyXG5cdFx0XHRyaWdodDogMWVtO1xyXG5cdFx0XHR3aWR0aDogMS4yNWVtO1xyXG5cdFx0XHRoZWlnaHQ6IDc1JTtcclxuXHRcdFx0YmFja2dyb3VuZDogdXJsKFwic3RhdGljL2ltYWdlcy9hcnJvdy5zdmdcIikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XHJcblx0XHRcdGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuXHRcdFx0ei1pbmRleDogMDtcclxuXHRcdH1cclxuXHJcblx0XHRmb3JtIC5zZWxlY3Qgc2VsZWN0OjotbXMtZXhwYW5kIHtcclxuXHRcdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdH1cclxuXHJcblx0Zm9ybSA6Oi1tb3otZm9jdXMtaW5uZXIge1xyXG5cdFx0Ym9yZGVyOiAwO1xyXG5cdH1cclxuXHJcblx0Zm9ybSAuZm9ybWVyaXplLXBsYWNlaG9sZGVyIHtcclxuXHRcdGNvbG9yOiAjNTU1ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHRmb3JtIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcblx0XHRjb2xvcjogI2FhYSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0Zm9ybSA6LW1vei1wbGFjZWhvbGRlciB7XHJcblx0XHRjb2xvcjogIzU1NSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0Zm9ybSA6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG5cdFx0Y29sb3I6ICM1NTUgIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdGZvcm0gOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcblx0XHRjb2xvcjogIzU1NSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0LmRhcmsgZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuXHQuZGFyayBmb3JtIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuXHQuZGFyayBmb3JtIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcclxuXHQuZGFyayBmb3JtIHNlbGVjdCxcclxuXHQuZGFyayBmb3JtIC5zZWxlY3QsXHJcblx0LmRhcmsgZm9ybSB0ZXh0YXJlYSB7XHJcblx0XHRiYWNrZ3JvdW5kOiBub25lO1xyXG5cdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdH1cclxuXHJcblx0XHQuZGFyayBmb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLFxyXG5cdFx0LmRhcmsgZm9ybSBpbnB1dFt0eXBlPVwiZW1haWxcIl06Zm9jdXMsXHJcblx0XHQuZGFyayBmb3JtIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1cyxcclxuXHRcdC5kYXJrIGZvcm0gc2VsZWN0OmZvY3VzLFxyXG5cdFx0LmRhcmsgZm9ybSAuc2VsZWN0OmZvY3VzLFxyXG5cdFx0LmRhcmsgZm9ybSB0ZXh0YXJlYTpmb2N1cyB7XHJcblx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuXHRcdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNmZmY7XHJcblx0XHR9XHJcblxyXG5cdC5kYXJrIGZvcm0gLnNlbGVjdDpiZWZvcmUge1xyXG5cdFx0YmFja2dyb3VuZDogdXJsKFwic3RhdGljL2ltYWdlcy9kYXJrLWFycm93LnN2Z1wiKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcclxuXHRcdGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuXHR9XHJcblxyXG5cdC5kYXJrIGZvcm0gLmZvcm1lcml6ZS1wbGFjZWhvbGRlciB7XHJcblx0XHRjb2xvcjogI2FhYSAhaW1wb3J0YW50O1xyXG5cdFx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSkgIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC5kYXJrIGZvcm0gOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuXHRcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQuZGFyayBmb3JtIDotbW96LXBsYWNlaG9sZGVyIHtcclxuXHRcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQuZGFyayBmb3JtIDo6LW1vei1wbGFjZWhvbGRlciB7XHJcblx0XHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0LmRhcmsgZm9ybSA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuXHRcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuLyogVGFibGUgKi9cclxuXHJcblx0dGFibGUge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG5cclxuXHRcdHRhYmxlLmRlZmF1bHQge1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHRcdH1cclxuXHJcblx0XHRcdHRhYmxlLmRlZmF1bHQgdGJvZHkgdHIge1xyXG5cdFx0XHRcdGJvcmRlcjogc29saWQgMXB4ICNlNmU2ZTY7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdFx0dGFibGUuZGVmYXVsdCB0Ym9keSB0cjpudGgtY2hpbGQoMm4rMikge1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2Y4ZjhmODtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR0YWJsZS5kZWZhdWx0IHRkIHtcclxuXHRcdFx0XHRwYWRkaW5nOiAwLjVlbSAxZW0gMC41ZW0gMWVtO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0YWJsZS5kZWZhdWx0IHRoIHtcclxuXHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdFx0XHRcdHBhZGRpbmc6IDAuNWVtIDFlbSAxZW0gMWVtO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0YWJsZS5kZWZhdWx0IHRmb290IHRkIHtcclxuXHRcdFx0XHRwYWRkaW5nLXRvcDogMWVtO1xyXG5cdFx0XHR9XHJcblxyXG5cdC5kYXJrIHRhYmxlLmRlZmF1bHQgdGJvZHkgdHIge1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcblx0fVxyXG5cclxuXHRcdC5kYXJrIHRhYmxlLmRlZmF1bHQgdGJvZHkgdHI6bnRoLWNoaWxkKDJuKzIpIHtcclxuXHRcdFx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG5cdFx0fVxyXG5cclxuLyogQnV0dG9uICovXHJcblxyXG5cdGlucHV0W3R5cGU9XCJidXR0b25cIl0sXHJcblx0aW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcclxuXHRpbnB1dFt0eXBlPVwicmVzZXRcIl0sXHJcblx0YnV0dG9uLFxyXG5cdC5idXR0b24ge1xyXG5cdFx0LW1vei10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblx0XHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcclxuXHRcdC1tcy10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblx0XHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRiYWNrZ3JvdW5kOiAjM2QzZDNkO1xyXG5cdFx0cGFkZGluZzogMC44NWVtIDNlbSAwLjg1ZW0gM2VtO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMC4yNWVtO1xyXG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0Ym9yZGVyOiAwO1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0fVxyXG5cclxuXHRcdGlucHV0W3R5cGU9XCJidXR0b25cIl06aG92ZXIsXHJcblx0XHRpbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyLFxyXG5cdFx0aW5wdXRbdHlwZT1cInJlc2V0XCJdOmhvdmVyLFxyXG5cdFx0YnV0dG9uOmhvdmVyLFxyXG5cdFx0LmJ1dHRvbjpob3ZlciB7XHJcblx0XHRcdGJhY2tncm91bmQ6ICM0ZjRmNGY7XHJcblx0XHR9XHJcblxyXG5cdFx0aW5wdXRbdHlwZT1cImJ1dHRvblwiXS5hbHQsXHJcblx0XHRpbnB1dFt0eXBlPVwic3VibWl0XCJdLmFsdCxcclxuXHRcdGlucHV0W3R5cGU9XCJyZXNldFwiXS5hbHQsXHJcblx0XHRidXR0b24uYWx0LFxyXG5cdFx0LmJ1dHRvbi5hbHQge1xyXG5cdFx0XHRjb2xvcjogaW5oZXJpdDtcclxuXHRcdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNlNmU2ZTY7XHJcblx0XHRcdGJhY2tncm91bmQ6IG5vbmU7XHJcblx0XHR9XHJcblxyXG5cdFx0XHRpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLmFsdDpob3ZlcixcclxuXHRcdFx0aW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5hbHQ6aG92ZXIsXHJcblx0XHRcdGlucHV0W3R5cGU9XCJyZXNldFwiXS5hbHQ6aG92ZXIsXHJcblx0XHRcdGJ1dHRvbi5hbHQ6aG92ZXIsXHJcblx0XHRcdC5idXR0b24uYWx0OmhvdmVyIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDI1KTtcclxuXHRcdFx0fVxyXG5cclxuXHQuZGFyayBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLFxyXG5cdC5kYXJrIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXHJcblx0LmRhcmsgaW5wdXRbdHlwZT1cInJlc2V0XCJdLFxyXG5cdC5kYXJrIGJ1dHRvbixcclxuXHQuZGFyayAuYnV0dG9uIHtcclxuXHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XHJcblx0XHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2ZmZjtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdH1cclxuXHJcblx0XHQuZGFyayBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmhvdmVyLFxyXG5cdFx0LmRhcmsgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlcixcclxuXHRcdC5kYXJrIGlucHV0W3R5cGU9XCJyZXNldFwiXTpob3ZlcixcclxuXHRcdC5kYXJrIGJ1dHRvbjpob3ZlcixcclxuXHRcdC5kYXJrIC5idXR0b246aG92ZXIge1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5kYXJrIGlucHV0W3R5cGU9XCJidXR0b25cIl0uYWx0LFxyXG5cdFx0LmRhcmsgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5hbHQsXHJcblx0XHQuZGFyayBpbnB1dFt0eXBlPVwicmVzZXRcIl0uYWx0LFxyXG5cdFx0LmRhcmsgYnV0dG9uLmFsdCxcclxuXHRcdC5kYXJrIC5idXR0b24uYWx0IHtcclxuXHRcdFx0YmFja2dyb3VuZDogbm9uZTtcclxuXHRcdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuXHRcdH1cclxuXHJcblx0XHRcdC5kYXJrIGlucHV0W3R5cGU9XCJidXR0b25cIl0uYWx0OmhvdmVyLFxyXG5cdFx0XHQuZGFyayBpbnB1dFt0eXBlPVwic3VibWl0XCJdLmFsdDpob3ZlcixcclxuXHRcdFx0LmRhcmsgaW5wdXRbdHlwZT1cInJlc2V0XCJdLmFsdDpob3ZlcixcclxuXHRcdFx0LmRhcmsgYnV0dG9uLmFsdDpob3ZlcixcclxuXHRcdFx0LmRhcmsgLmJ1dHRvbi5hbHQ6aG92ZXIge1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XHJcblx0XHRcdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNmZmY7XHJcblx0XHRcdH1cclxuXHJcbi8qIEZlYXR1cmUgSWNvbiAqL1xyXG5cclxuXHQuZmVhdHVyZS1pY29uIHtcclxuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHBhZGRpbmctYm90dG9tOiA1ZW07XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyLjc1ZW07XHJcblx0XHRjdXJzb3I6IGRlZmF1bHQ7XHJcblx0fVxyXG5cclxuXHRcdC5mZWF0dXJlLWljb24gLmljb24ge1xyXG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdHdpZHRoOiAyZW07XHJcblx0XHRcdGhlaWdodDogMmVtO1xyXG5cdFx0XHRmb250LXNpemU6IDQuNWVtO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAxMDAlO1xyXG5cdFx0XHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggIzY2NjtcclxuXHRcdFx0Y29sb3I6ICM2NjY7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiAyLjFlbTtcclxuXHRcdH1cclxuXHJcblx0XHQuZmVhdHVyZS1pY29uOmJlZm9yZSB7XHJcblx0XHRcdGNvbnRlbnQ6ICcnO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjNjY2O1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGJvdHRvbTogMDtcclxuXHRcdFx0bGVmdDogNTAlO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogLTAuMzI1ZW07XHJcblx0XHRcdHdpZHRoOiAwLjY1ZW07XHJcblx0XHRcdGhlaWdodDogMC42NWVtO1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTAwJTtcclxuXHRcdH1cclxuXHJcblx0XHQuZmVhdHVyZS1pY29uOmFmdGVyIHtcclxuXHRcdFx0Y29udGVudDogJyc7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0bGVmdDogNTAlO1xyXG5cdFx0XHRib3R0b206IDAuNjVlbTtcclxuXHRcdFx0d2lkdGg6IDFweDtcclxuXHRcdFx0aGVpZ2h0OiA0LjM1ZW07XHJcblx0XHRcdGJhY2tncm91bmQ6ICM2NjY7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAtMC41cHg7XHJcblx0XHR9XHJcblxyXG5cdC5kYXJrIC5mZWF0dXJlLWljb24gLmljb24ge1xyXG5cdFx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcclxuXHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHR9XHJcblxyXG5cdC5kYXJrIC5mZWF0dXJlLWljb246YmVmb3JlLCAuZGFyayAuZmVhdHVyZS1pY29uOmFmdGVyIHtcclxuXHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuXHR9XHJcblxyXG4vKiBJY29ucyAqL1xyXG5cclxuXHQuaWNvbiB7XHJcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0fVxyXG5cclxuXHRcdC5pY29uOmJlZm9yZSB7XHJcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0Zm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xyXG5cdFx0XHRmb250LXNpemU6IDEuMjVlbTtcclxuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHRmb250LXN0eWxlOiBub3JtYWw7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiAxO1xyXG5cdFx0XHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuXHRcdFx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuXHRcdH1cclxuXHJcblx0XHQuaWNvbiA+IC5sYWJlbCB7XHJcblx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHR9XHJcblxyXG5cclxuLyogTWFpbiBTZWN0aW9ucyAqL1xyXG5cclxuXHQubWFpbiB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRtYXJnaW46IDA7XHJcblx0fVxyXG5cclxuXHRcdC5tYWluID4gaGVhZGVyIHtcclxuXHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRwYWRkaW5nOiA1ZW0gMCA1ZW0gMDtcclxuXHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdFx0Lm1haW4gPiBoZWFkZXIgaDIge1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMi4yNWVtO1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiAxMDA7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Lm1haW4gPiBoZWFkZXIgcCB7XHJcblx0XHRcdFx0bWFyZ2luOiAyZW0gMCAwIDA7XHJcblx0XHRcdFx0cGFkZGluZzogMDtcclxuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdH1cclxuXHJcblx0XHQubWFpbiA+IC5jb250ZW50IHtcclxuXHRcdFx0cGFkZGluZzogNmVtIDAgNmVtIDA7XHJcblx0XHR9XHJcblxyXG5cdFx0XHQubWFpbiA+IC5jb250ZW50IGgzIHtcclxuXHRcdFx0XHRmb250LXNpemU6IDEuNWVtO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQubWFpbiA+IC5jb250ZW50LmRhcmsge1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICM0MzM7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5tYWluID4gLmNvbnRlbnQuc3R5bGUxIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoXCJzdGF0aWMvaW1hZ2VzL2JndHIuc3ZnXCIpIHRvcCByaWdodCBuby1yZXBlYXQsIHVybChcInN0YXRpYy9pbWFnZXMvYmdibC5zdmdcIikgYm90dG9tIGxlZnQgbm8tcmVwZWF0LCB1cmwoXCJzdGF0aWMvaW1hZ2VzL2JnYmwuc3ZnXCIpIGJvdHRvbSBsZWZ0IG5vLXJlcGVhdCwgdXJsKFwic3RhdGljL2ltYWdlcy9vdmVybGF5LnBuZ1wiKSwgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjYjM5YzY4LCAjYTU2MzY1LCAjNDEyZTRjKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Lm1haW4gPiAuY29udGVudC5zdHlsZTIge1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6IHVybChcInN0YXRpYy9pbWFnZXMvYmd0ci5zdmdcIikgdG9wIHJpZ2h0IG5vLXJlcGVhdCwgdXJsKFwic3RhdGljL2ltYWdlcy9iZ2JsLnN2Z1wiKSBib3R0b20gbGVmdCBuby1yZXBlYXQsIHVybChcInN0YXRpYy9pbWFnZXMvb3ZlcmxheS5wbmdcIiksIGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzM4NDk1NSwgIzY1NTM2MSwgIzg1NTA1Zik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5tYWluID4gLmNvbnRlbnQuc3R5bGUzIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoXCJzdGF0aWMvaW1hZ2VzL2JndHIuc3ZnXCIpIHRvcCByaWdodCBuby1yZXBlYXQsIHVybChcInN0YXRpYy9pbWFnZXMvYmdibC5zdmdcIikgYm90dG9tIGxlZnQgbm8tcmVwZWF0LCB1cmwoXCJzdGF0aWMvaW1hZ2VzL292ZXJsYXkucG5nXCIpLCBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM1Zjc5NmIsICMzYTRlNTksICMyZjM5NGUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQubWFpbiA+IC5jb250ZW50LnN0eWxlNCB7XHJcblx0XHRcdFx0cGFkZGluZy10b3A6IDA7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRcdFx0fVxyXG5cclxuLyogRm9vdGVyICovXHJcblxyXG5cdCNmb290ZXIge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0cGFkZGluZzogNGVtIDAgOGVtIDA7XHJcblx0XHRib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIDAgI2U2ZTZlNjtcclxuXHR9XHJcblxyXG5cdFx0I2Zvb3RlciAuY29weXJpZ2h0IHtcclxuXHRcdFx0bWFyZ2luLXRvcDogM2VtO1xyXG5cdFx0XHRmb250LXNpemU6IDAuOGVtO1xyXG5cdFx0XHRjb2xvcjogI2FhYTtcclxuXHRcdH1cclxuXHJcblx0XHRcdCNmb290ZXIgLmNvcHlyaWdodCBhIHtcclxuXHRcdFx0XHRjb2xvcjogaW5oZXJpdDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdCNmb290ZXIgdWwuaWNvbnMgYSB7XHJcblx0XHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZDZkNmQ2O1xyXG5cdFx0fVxyXG5cclxuLyogV2lkZSAqL1xyXG5cclxuXHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjgwcHgpIHtcclxuXHJcblx0XHQvKiBCYXNpYyAqL1xyXG5cclxuXHRcdFx0Ym9keSwgaW5wdXQsIHRleHRhcmVhLCBzZWxlY3Qge1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTVwdDtcclxuXHRcdFx0XHRsaW5lLWhlaWdodDogMS43NWVtO1xyXG5cdFx0XHR9XHJcblxyXG5cdH1cclxuXHJcbi8qIE5vcm1hbCAqL1xyXG5cclxuXHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuXHJcblx0XHQvKiBCYXNpYyAqL1xyXG5cclxuXHRcdFx0Ym9keSwgaW5wdXQsIHRleHRhcmVhLCBzZWxlY3Qge1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTNwdDtcclxuXHRcdFx0XHRsaW5lLWhlaWdodDogMS42NWVtO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0LyogRmVhdHVyZSBJY29uICovXHJcblxyXG5cdFx0XHQuZmVhdHVyZS1pY29uIHtcclxuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyZW07XHJcblx0XHRcdH1cclxuXHJcblx0XHQvKiBIZWFkZXIgKi9cclxuXHJcblx0XHRcdCNoZWFkZXIge1xyXG5cdFx0XHRcdHBhZGRpbmc6IDEyZW0gMCAxMmVtIDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHQvKiBNYWluIFNlY3Rpb25zICovXHJcblxyXG5cdFx0XHQubWFpbiA+IGhlYWRlciB7XHJcblx0XHRcdFx0cGFkZGluZzogNGVtIDAgNGVtIDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5tYWluID4gLmNvbnRlbnQge1xyXG5cdFx0XHRcdHBhZGRpbmc6IDRlbSAwIDRlbSAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdH1cclxuXHJcbi8qIE5hcnJvdyAqL1xyXG5cclxuXHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuXHJcblx0XHQvKiBCYXNpYyAqL1xyXG5cclxuXHRcdFx0aGVhZGVyLCBmb290ZXIsIGgyLCBoMywgaDQsIGg1LCBoNiwgaGVhZGVyID4gcCB7XHJcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0LyogU2VjdGlvbnMvQXJ0aWNsZSAqL1xyXG5cclxuXHRcdFx0c2VjdGlvbiwgYXJ0aWNsZSB7XHJcblx0XHRcdFx0bWFyZ2luOiAwIDAgMi41ZW0gMCAhaW1wb3J0YW50O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQucm93ID4gc2VjdGlvbiwgLnJvdyA+IGFydGljbGUge1xyXG5cdFx0XHRcdG1hcmdpbjogMCAwIDIuNWVtIDAgIWltcG9ydGFudDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdC8qIFRhYmxlICovXHJcblxyXG5cdFx0XHQudGFibGUtd3JhcHBlciB7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0b3ZlcmZsb3cteDogc2Nyb2xsO1xyXG5cdFx0XHRcdHBhZGRpbmctbGVmdDogMXB4O1xyXG5cdFx0XHRcdC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdC8qIExpc3QgKi9cclxuXHJcblx0XHRcdHVsLmFjdGlvbnMge1xyXG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdC8qIEhlYWRlciAqL1xyXG5cclxuXHRcdFx0I2hlYWRlciB7XHJcblx0XHRcdFx0bWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0cGFkZGluZzogOGVtIDJlbSA4ZW0gMmVtO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRcdCNoZWFkZXIgaGVhZGVyIHAge1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMWVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0I2hlYWRlciBmb290ZXIge1xyXG5cdFx0XHRcdFx0cGFkZGluZy10b3A6IDEuMjVlbTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0LyogTWFpbiBTZWN0aW9ucyAqL1xyXG5cclxuXHRcdFx0Lm1haW4ge1xyXG5cdFx0XHRcdG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5tYWluID4gaGVhZGVyIHtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDMuNWVtIDJlbSAzLjVlbSAyZW07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5tYWluID4gaGVhZGVyIGgyIHtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjg1ZW07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Lm1haW4gPiBoZWFkZXIgYnIge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5tYWluID4gaGVhZGVyIHAge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDEuNWVtIDAgMCAwO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQubWFpbiA+IC5jb250ZW50IHtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDMuNWVtIDIwcHggMy41ZW0gMjBweDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Lm1haW4gPiAuY29udGVudCA+IC5jb250YWluZXIgPiA6bGFzdC1jaGlsZCB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHQvKiBGb290ZXIgKi9cclxuXHJcblx0XHRcdCNmb290ZXIge1xyXG5cdFx0XHRcdG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdHBhZGRpbmc6IDNlbSAwIDNlbSAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRcdCNmb290ZXIgLmNvcHlyaWdodCB7XHJcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAyZW07XHJcblx0XHRcdFx0fVxyXG5cclxuXHR9XHJcblxyXG4vKiBNb2JpbGUgKi9cclxuXHJcblx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcclxuXHJcblx0XHQvKiBCYXNpYyAqL1xyXG5cclxuXHRcdFx0Ym9keSwgaW5wdXQsIHRleHRhcmVhLCBzZWxlY3Qge1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTFwdDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdC8qIFNlY3Rpb25zL0FydGljbGUgKi9cclxuXHJcblx0XHRcdHNlY3Rpb24sIGFydGljbGUge1xyXG5cdFx0XHRcdG1hcmdpbjogMCAwIDEuNWVtIDAgIWltcG9ydGFudDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LnJvdyA+IHNlY3Rpb24sIC5yb3cgPiBhcnRpY2xlIHtcclxuXHRcdFx0XHRtYXJnaW46IDAgMCAxLjVlbSAwICFpbXBvcnRhbnQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHQvKiBCdXR0b24gKi9cclxuXHJcblx0XHRcdC5idXR0b24ge1xyXG5cdFx0XHRcdHBhZGRpbmctbGVmdDogMDtcclxuXHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiAwO1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdG1heC13aWR0aDogMzAwcHg7XHJcblx0XHRcdH1cclxuXHJcblx0XHQvKiBMaXN0ICovXHJcblxyXG5cdFx0XHR1bC5pY29ucyBsaSB7XHJcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiAwLjM1ZW07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHVsLmFjdGlvbnMgbGkge1xyXG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdG1hcmdpbjogMWVtIDAgMWVtIDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHVsLm1lbnUgbGkge1xyXG5cdFx0XHRcdGJvcmRlcjogMDtcclxuXHRcdFx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdG1hcmdpbjogMWVtIDAgMWVtIDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHQvKiBIZWFkZXIgKi9cclxuXHJcblx0XHRcdCNoZWFkZXIge1xyXG5cdFx0XHRcdHBhZGRpbmc6IDZlbSAyMHB4IDZlbSAyMHB4O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRcdCNoZWFkZXIgPiBoZWFkZXIge1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMCAxZW0gMCAxZW07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdC8qIE1haW4gU2VjdGlvbnMgKi9cclxuXHJcblx0XHRcdC5tYWluID4gaGVhZGVyIHtcclxuXHRcdFx0XHRwYWRkaW5nOiAzZW0gMjBweCAzZW0gMjBweDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0XHQubWFpbiA+IGhlYWRlciBoMiB7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDEuNWVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdC5tYWluID4gLmNvbnRlbnQge1xyXG5cdFx0XHRcdHBhZGRpbmc6IDNlbSAyMHB4IDNlbSAyMHB4O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5tYWluID4gLmNvbnRlbnQgaDMge1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxLjI1ZW07XHJcblx0XHRcdFx0fVxyXG5cclxuXHR9XHJcbiAgICBgfTwvc3R5bGU+XHJcbilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3N0eWxlcy1qc3gvbWFpbl9jc3MuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9zdHlsZScpXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZWQtanN4L3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAzOTdcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiXHJcbi8vaW1wb3J0IFRvdXJzRGF0YSBmcm9tICcuLi9kYXRhL1RvdXJzRGF0YS5qcydcclxuaW1wb3J0IEl0ZW1TdHlsZSBmcm9tICcuL3N0eWxlcy1qc3gvY2FyZF9pdGVtX2Nzcy5qcydcclxuaW1wb3J0IFRvdXJJdGVtIGZyb20gJy4vc3ViLWNvbXBvbmVudHMvVG91ckl0ZW0uanMnXHJcbmNvbnN0IFRvdXJzRGF0YT1bXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0aXRsZVwiOlwiQmFsZGkgaG90IHNwcmluZ3NcIixcclxuICAgICAgICBcInVybFwiOiBcInN0YXRpYy9pbWFnZXMvYmFsZGkuanBnXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcInNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInRpdGxlXCI6XCJBVFYgYXJlbmFsIHRvdXJcIixcclxuICAgICAgICBcInVybFwiOiBcInN0YXRpYy9pbWFnZXMvYXR2LmpwZ1wiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlclwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidGl0bGVcIjpcIkNhbm9weSB0b3VyXCIsXHJcbiAgICAgICAgXCJ1cmxcIjogXCJzdGF0aWMvaW1hZ2VzL2Nhbm9weS5qcGdcIixcclxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwicyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5IHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInRpdGxlXCI6XCJSaW8gQ2VsZXN0ZSB0b3VyXCIsXHJcbiAgICAgICAgXCJ1cmxcIjogXCJzdGF0aWMvaW1hZ2VzL2NlbGVzdGUuanBnXCIsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcInMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeSBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0aXRsZVwiOlwiS2FsYW1idSBob3Qgc3ByaW5nc1wiLFxyXG4gICAgICAgIFwidXJsXCI6IFwic3RhdGljL2ltYWdlcy9rYWxhbWJ1LmpwZ1wiLFxyXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlclwiXHJcblxyXG4gICAgfVxyXG5dXHJcblxyXG5jb25zdCBUb3Vyc0luZm8gPSAoKT0+KFxyXG5cclxuICA8c2VjdGlvbiBpZD1cInNlY29uZFwiIGNsYXNzTmFtZT1cIm1haW5cIj5cclxuICA8SXRlbVN0eWxlLz5cclxuICBcclxuICAgIDxoZWFkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgyPlByb21vY2lvbmVzIHkgVG91cnM8L2gyPlxyXG4gICAgICAgIDxwPlNpIGRlc2VhcyBoYWNlciBsYXMgbWVqb3JlcyBhY3RpdmlkYWRlcyBxdWUgYnJpbmRhIGxhIEZvcnR1bmEgZGUgU2FuIENhcmxvcywgaW5ncmVzYSBwYXJhIHZlciB2aWRlb3MgZGUgbGFzIGRpZmVyZW50ZXMgYWN0aXZpZGFkZXMsIHNpIGRlc2VhcyByZWNpYmlyIGxvcyBtZWpvcmVzIHByZWNpb3Mgc29sbyBkZWJlcyBlc2NyaWJpcm5vcyBlbiBicmV2ZSB0ZSBicmluZGFyZW1vcyBsYSBpbmZvcm1hY2lvbiBxdWUgZGVzZWFzLjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCBkYXJrIHN0eWxlMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidTEyIHUxMi1uYXJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBUb3Vyc0RhdGEubWFwKHRvdXIgPT57XHJcbiAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPFRvdXJJdGVtIHRvdXI9e3RvdXJ9Lz5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3NlY3Rpb24+XHJcbiAgICAgIFxyXG4pXHJcbmV4cG9ydCBkZWZhdWx0IFRvdXJzSW5mb1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvU2VjdGlvblRvdXJzLmpzIiwiXHJcbmltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZC5qcydcclxuXHJcbmNvbnN0IFRvdXJJdGVtPShwcm9wcyk9PihcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidTQgdTEyLW1vYmlsZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tcmVzcG9uc2l2ZSAgXCI+XHJcbiAgICAgICAgICAgIDxDYXJkIGl0ZW09e3Byb3BzLnRvdXJ9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuKVxyXG5leHBvcnQgZGVmYXVsdCBUb3VySXRlbVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc3ViLWNvbXBvbmVudHMvVG91ckl0ZW0uanMiLCJcclxuY29uc3QgQ2FyZCA9IChwcm9wcyk9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbWVkaXVtXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWltYWdlXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz17cHJvcHMuaXRlbS51cmx9Lz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57cHJvcHMuaXRlbS50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhcmFncmFwaFwiPntwcm9wcy5pdGVtLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYWN0aW9uXCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPlZlciBNYXM8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4pXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3N1Yi1jb21wb25lbnRzL0NhcmQuanMiLCJcclxuY29uc3QgSXRlbVN0eWxlID0gKCk9PihcclxuICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcbi5ibGFjayB7XHJcbmJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJsYWNrLXRleHQge1xyXG4gIFxyXG4gIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi53aGl0ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2hpdGUtdGV4dCB7XHJcbiAgY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcclxufVxyXG4uY2FyZC1wYW5lbCB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LWJveC1zaGFkb3cgLjI1cztcclxuICB0cmFuc2l0aW9uOiAtd2Via2l0LWJveC1zaGFkb3cgLjI1cztcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4yNXM7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuMjVzLCAtd2Via2l0LWJveC1zaGFkb3cgLjI1cztcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIG1hcmdpbjogMC41cmVtIDAgMXJlbSAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMC41cmVtIDAgMXJlbSAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4xNSk7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxuICBjb2xvcjogI2ZmZjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtYm94LXNoYWRvdyAuMjVzO1xyXG4gIHRyYW5zaXRpb246IC13ZWJraXQtYm94LXNoYWRvdyAuMjVzO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjI1cztcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4yNXMsIC13ZWJraXQtYm94LXNoYWRvdyAuMjVzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC10aXRsZS5hY3RpdmF0b3Ige1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhcmQuc21hbGwsIC5jYXJkLm1lZGl1bSwgLmNhcmQubGFyZ2Uge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNhcmQuc21hbGwgLmNhcmQtaW1hZ2UsIC5jYXJkLm1lZGl1bSAuY2FyZC1pbWFnZSwgLmNhcmQubGFyZ2UgLmNhcmQtaW1hZ2Uge1xyXG4gIG1heC1oZWlnaHQ6IDYwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY2FyZC5zbWFsbCAuY2FyZC1pbWFnZSArIC5jYXJkLWNvbnRlbnQsIC5jYXJkLm1lZGl1bSAuY2FyZC1pbWFnZSArIC5jYXJkLWNvbnRlbnQsIC5jYXJkLmxhcmdlIC5jYXJkLWltYWdlICsgLmNhcmQtY29udGVudCB7XHJcbiAgbWF4LWhlaWdodDogNDAlO1xyXG59XHJcblxyXG4uY2FyZC5zbWFsbCAuY2FyZC1jb250ZW50LCAuY2FyZC5tZWRpdW0gLmNhcmQtY29udGVudCwgLmNhcmQubGFyZ2UgLmNhcmQtY29udGVudCB7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY2FyZC5zbWFsbCAuY2FyZC1hY3Rpb24sIC5jYXJkLm1lZGl1bSAuY2FyZC1hY3Rpb24sIC5jYXJkLmxhcmdlIC5jYXJkLWFjdGlvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uY2FyZC5zbWFsbCB7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLmNhcmQubWVkaXVtIHtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG4uY2FyZC5sYXJnZSB7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuLmNhcmQuaG9yaXpvbnRhbCB7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jYXJkLmhvcml6b250YWwuc21hbGwgLmNhcmQtaW1hZ2UsIC5jYXJkLmhvcml6b250YWwubWVkaXVtIC5jYXJkLWltYWdlLCAuY2FyZC5ob3Jpem9udGFsLmxhcmdlIC5jYXJkLWltYWdlIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogbm9uZTtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxufVxyXG5cclxuLmNhcmQuaG9yaXpvbnRhbC5zbWFsbCAuY2FyZC1pbWFnZSBpbWcsIC5jYXJkLmhvcml6b250YWwubWVkaXVtIC5jYXJkLWltYWdlIGltZywgLmNhcmQuaG9yaXpvbnRhbC5sYXJnZSAuY2FyZC1pbWFnZSBpbWcge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNhcmQuaG9yaXpvbnRhbCAuY2FyZC1pbWFnZSB7XHJcbiAgbWF4LXdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5jYXJkLmhvcml6b250YWwgLmNhcmQtaW1hZ2UgaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiAycHggMCAwIDJweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5jYXJkLmhvcml6b250YWwgLmNhcmQtc3RhY2tlZCB7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gIC13ZWJraXQtZmxleDogMTtcclxuICAgICAgLW1zLWZsZXg6IDE7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNhcmQuaG9yaXpvbnRhbCAuY2FyZC1zdGFja2VkIC5jYXJkLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XHJcbiAgICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xyXG4gICAgICAgICAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uY2FyZC5zdGlja3ktYWN0aW9uIC5jYXJkLWFjdGlvbiB7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmNhcmQuc3RpY2t5LWFjdGlvbiAuY2FyZC1yZXZlYWwge1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcGFkZGluZy1ib3R0b206IDY0cHg7XHJcbn1cclxuXHJcbi5jYXJkIC5jYXJkLWltYWdlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYXJkIC5jYXJkLWltYWdlIGltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4IDJweCAwIDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtaW1hZ2UgLmNhcmQtdGl0bGUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMjRweDtcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtY29udGVudCB7XHJcbiAgcGFkZGluZzogMjRweDtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgMnB4IDJweDtcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtY29udGVudCBwIHtcclxuICBmb250LWZhbWlseTogXCJ0aW1lcyBuZXcgcm9tYW5cIjtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBmb250LXNpemU6MWVtO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC1jb250ZW50IC5jYXJkLXRpdGxlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBsaW5lLWhlaWdodDogMzJweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5jYXJkIC5jYXJkLWNvbnRlbnQgLmNhcmQtdGl0bGUgaSB7XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbn1cclxuXHJcbi5jYXJkIC5jYXJkLWFjdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTYwLCAxNjAsIDE2MCwgMC4yKTtcclxuICBwYWRkaW5nOiA2cHggMTRweDtcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtYWN0aW9uOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAycHggMnB4O1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC1hY3Rpb24gYTpub3QoLmJ0bik6bm90KC5idG4tbGFyZ2UpOm5vdCguYnRuLWxhcmdlKTpub3QoLmJ0bi1mbG9hdGluZykge1xyXG4gIGNvbG9yOiAjZmZhYjQwO1xyXG4gIG1hcmdpbi1yaWdodDogMjRweDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIC4zcyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIC4zcyBlYXNlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5jYXJkIC5jYXJkLWFjdGlvbiBhOm5vdCguYnRuKTpub3QoLmJ0bi1sYXJnZSk6bm90KC5idG4tbGFyZ2UpOm5vdCguYnRuLWZsb2F0aW5nKTpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmQ4YTY7XHJcbn1cclxuXHJcbi5jYXJkIC5jYXJkLXJldmVhbCB7XHJcbiAgcGFkZGluZzogMjRweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAzO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jYXJkIC5jYXJkLXJldmVhbCAuY2FyZC10aXRsZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4gICAgYH08L3N0eWxlPlxyXG4pXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW1TdHlsZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3N0eWxlcy1qc3gvY2FyZF9pdGVtX2Nzcy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOzs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDZkE7QUFDQTtBQUNBOzs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0xBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbEJBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNIQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDaEJBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUMxREE7QUFDQTtBQUNBOzs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDWkE7QUFDQTtBQUNBOzs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNKQTtBQUNBOzs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNiQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSEE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDakNBOzs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOzs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDUkE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7OztBQ0ZBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3pPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2xCQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7OztBQ0FBO0FBQ0E7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3hCQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM1MENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQy9JQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBOzs7Ozs7QUNBQTtBQUNBOzs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDUkE7QUFDQTtBQUNBOzs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNOQTs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3ZHQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0hBO0FBQ0E7Ozs7Ozs7QUNEQTtBQUNBOzs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDNVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xSQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7O0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUtBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTUE7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBVEE7QUFTQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTVHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOzs7Ozs7O0FBREE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFNQTtBQU5BOztBQVZBOzs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7Ozs7OztBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7Ozs7OztBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUxBO0FBS0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUE3Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7Ozs7OztBQURBOztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUhBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQUFBO0FBRkE7QUFNQTtBQUNBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFIQTtBQUNBO0FBTUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBRUE7QUFGQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUVBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFGQTtBQWFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBS0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUErT0E7QUFBQTs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        