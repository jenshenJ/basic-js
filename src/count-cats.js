const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
    arr = [].concat(...matrix);
    
    return Number(arr.reduce((sum, curr) => {return sum + (curr === '^^')}, 0));
}


console.log(countCats([
    [0, 1, '^^'],
    [0, '^^', 2],
    ['^^', 1, 2]
   ]))
module.exports = {
  countCats
};
