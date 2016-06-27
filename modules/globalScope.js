//hack of IE and safari bug : Super expression must either be null or a function, not undefined
if (typeof HTMLElement !== 'function') {
    var _HTMLElement = function() {};
    _HTMLElement.prototype = HTMLElement.prototype;
    HTMLElement = _HTMLElement;
}

export function objectPath(path, obj) {
    if (path) {
        var obj = obj || window;
        return new Function('_', 'return _.' + path)(obj);
    }
}

export function checkIsAttribute(val) {
    return (val && val !== "undefined") ? val : "";
}
