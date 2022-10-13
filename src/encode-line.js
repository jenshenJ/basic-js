const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  var res = [];
    var k = 0;
    for (var i = 1; i < str.length; i++) {
        if (str[i] != str[i - 1]) {
            res.push(...[i - k === 1 ? '' : i - k, str[i - 1]]);
            k = i;
        }
    }
    if (str) {
        res.push(...[str.length - k === 1 ? '' : i - k, str[str.length - 1]]);
    }
    return res.join('');

}

console.log(encodeLine("aabbbc"));

module.exports = {
  encodeLine
};
