const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    let res = '';
    let repeatTimes = options.repeatTimes ?? 1;
    let separator = '+'
    if('separator' in options) separator = String(options.separator);

    let addition = '';
    if('addition' in options) addition = options.addition;
    let additionRepeatTimes = options.additionRepeatTimes ?? 1;
    let additionSeparator = '|';
    if('additionSeparator' in options) additionSeparator = String(options.additionSeparator);

    
    for(let i = 0; i < repeatTimes; i++){
        res += String(str);
        for(let j = 0; j < additionRepeatTimes; j++){
          res += String(addition);
          if(j != additionRepeatTimes - 1) res += additionSeparator;
        }
        if(i != repeatTimes - 1) res += separator;
    }
    return res;
}

module.exports = {
  repeater
};
