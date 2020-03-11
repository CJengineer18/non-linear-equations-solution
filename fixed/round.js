// Source: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/round

(function() {
    /**
     * Number decimal adjust.
     *
     * @param {String}  type The type.
     * @param {Number}  value The Value.
     * @param {Integer} exp   The 10 pow.
     * @returns {Number} The ajusted value.
     */
    function decimalAdjust(type, value, exp) {
        // If exp is undefined or zero (0)...
        if (typeof exp === 'undefined' || +exp === 0) {
            return Math[type](value);
        }
        value = +value;
        exp = +exp;
        // If value is not number or exp is not integer...
        if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
            return NaN;
        }
        // Shift
        value = value.toString().split('e');
        value = Math[type](
            +(value[0] + 'e' + (value[1] ? +value[1] - exp : -exp))
        );
        // Shift back
        value = value.toString().split('e');
        return +(value[0] + 'e' + (value[1] ? +value[1] + exp : exp));
    }

    // Decimal round
    if (!Math.round10) {
        Math.round10 = function(value, exp) {
            return decimalAdjust('round', value, exp);
        };
    }

    // Decimal floor
    if (!Math.floor10) {
        Math.floor10 = function(value, exp) {
            return decimalAdjust('floor', value, exp);
        };
    }

    // Decimal ceil
    if (!Math.ceil10) {
        Math.ceil10 = function(value, exp) {
            return decimalAdjust('ceil', value, exp);
        };
    }
})();
