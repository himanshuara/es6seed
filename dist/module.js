(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sum = function sum(a) {
    var b = arguments.length <= 1 || arguments[1] === undefined ? 6 : arguments[1];
    return a + b;
};

var square = function square(b) {
    return b * b;
};

var variable = 8;

var MyClass = function () {
    function MyClass(credentials) {
        _classCallCheck(this, MyClass);

        this.name = credentials.name;
        this.enrollmentNo = credentials.enrollmentNo;
    }

    _createClass(MyClass, [{
        key: "getName",
        value: function getName() {
            return this.name;
        }
    }]);

    return MyClass;
}();

exports.sum = sum;
exports.square = square;
exports.variable = variable;
exports.MyClass = MyClass;

},{}],2:[function(require,module,exports){
'use strict';

var _import = require('./import');

var _naukSingleDD = require('./nauk-singleDD');

// 25
console.log((0, _import.square)(5));

var cred = {
    name: 'Ritesh Kumar',
    enrollmentNo: 11115078
};

var x = new _import.MyClass(cred);

//Ritesh Kumar
console.log(x.getName());

},{"./import":1,"./nauk-singleDD":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.singleDD = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _globalScope = require("../src/services/globalScope");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// pushDownCont class extends HTMLElement class to inherit property of it.

var singleDD = function (_HTMLElement) {
    _inherits(singleDD, _HTMLElement);

    function singleDD() {
        _classCallCheck(this, singleDD);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(singleDD).apply(this, arguments));
    }

    _createClass(singleDD, [{
        key: "createdCallback",

        /**
         * [createdCallback: an instance of the element is createdCallback]
         */
        value: function createdCallback() {
            var _t = this;
            var relAttribute;
            if (_t.getAttribute('rel')) {
                relAttribute = "rel=\"" + _t.getAttribute("rel") + "\"";
            } else if (_t.getAttribute('altrel')) {
                relAttribute = "altrel=\"" + _t.getAttribute("altrel") + "\"";
            }
            /**
             * [innerHTML set innerHTML of push-down element]
             * @type {[HTML String]}
             */
            _t.innerHTML = "<div class=\"singleDD\" id=\"" + _t.getAttribute('id') + "\">\n                              <div class=\"dWrap\">\n                                  <span class=\"smArw\"></span>\n                                  <input class=\"sdTxt\" type=\"text\" readonly autocomplete=\"off\" " + relAttribute + " placeholder='" + _t.getAttribute("placeholder") + "'/>\n                              </div>\n                          </div>";
        }

        /**
         * [attachedCallback: an instance was inserted into the document]
         */

    }, {
        key: "attachedCallback",
        value: function attachedCallback() {
            var _t = this;
            try {

                _t.removeAttribute('id');

                $(_t).children().singleDD({
                    data: (0, _globalScope.objectPath)(_t.getAttribute('data')),
                    maxHeight: parseInt(_t.getAttribute('max-height')),
                    sortPrefix: _t.getAttribute('sortPrefix'),
                    callBack: (0, _globalScope.objectPath)(_t.getAttribute('callback')),
                    prefillData: _t.getAttribute('prefillData')
                });
            } catch (e) {
                console.warn(e);
            }
        }
    }]);

    return singleDD;
}(HTMLElement);

/**
 *  Registering new elements: push-down 
 */


document.registerElement('nauk-singleDD', singleDD);
exports.singleDD = singleDD;

},{"../src/services/globalScope":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.objectPath = objectPath;
exports.checkIsAttribute = checkIsAttribute;
//hack of IE and safari bug : Super expression must either be null or a function, not undefined
if (typeof HTMLElement !== 'function') {
    var _HTMLElement = function _HTMLElement() {};
    _HTMLElement.prototype = HTMLElement.prototype;
    HTMLElement = _HTMLElement;
}

function objectPath(path, obj) {
    if (path) {
        var obj = obj || window;
        return new Function('_', 'return _.' + path)(obj);
    }
}

function checkIsAttribute(val) {
    return val && val !== "undefined" ? val : "";
}

},{}]},{},[2]);
