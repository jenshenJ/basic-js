const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteD(arr, i){
  return arr.slice(0, i).concat(arr.slice(i + 1));
}
function deleteDigit(n) {
  n = String(n);
  n = n.split('');
  if(n[0] < n[1]) n = deleteD(n, 0);
  else if(n[0] > n[1]) n = deleteD(n, 1);
  else{
    let j = 1;
    while(j < n.length){
      if(n[j] < n[0]){ n = deleteD(n, j); break; }
      else if(n[j] > n[0]){ n = deleteD(n, 0); break; }
      else{ j++;}
    }
    if(j === n.length) n = deleteD(n, 0);
  }
  return Number(n.join(''));
}



module.exports = {
  deleteDigit
};

