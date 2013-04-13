
(function (factory) {
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined' && typeof require !== 'undefined') {
        // CommonJS
        module.exports = factory();
    } else {
        // running in browser
        window.StringBuffer = factory();
    }
})(function() {

function StringBuffer(str) {
    this.str = str || '';
}

StringBuffer.prototype = {
    length: function() {
        return this.str.length;
    },
    substring: function(a, b) {
        return new StringBuffer(this.str.substring(a, b));
    },
    toString: function() {
        return this.str;
    },
    equals: function(x) {
        return this.str === x;
    },
    insert: function(i, s) {
        this._splice(i, 0, s);
    },
    "delete": function(a, b) {
        this._splice(a, b-a);
    },
    replace: function(a, b, s) {
        this._splice(a, b-a, s);
    },
    _splice: function() {
        var characterArray = this.str.split( "" );
        Array.prototype.splice.apply(characterArray, arguments);
        this.str = characterArray.join( "" );
    },
    charAt: function(i) {
        return this.str[i];
    }
}

    return StringBuffer;
});
