const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (arguments.length === 0) return 'Unable to determine the time of year!';
  if(Object.prototype.toString.call(date) !== '[object Date]') throw new Error('Invalid date!');
  try {
    date.getUTCDate();
  } catch (error) {
    throw new Error('Invalid date!');
  }
  month = date.getMonth();

  console.log(month);
  
  if(month >= 0 && month <= 1 || month === 11) return 'winter';
  if(month >= 2 && month <= 4) return 'spring';
  if(month >= 5 && month <= 7) return 'summer';
  return 'autumn';
  // remove line with error and write your code here
}


console.log(getSeason(new Date(2020, 1, 20)));
// console.log(getSeason(Date(2020, 13, 31)));
module.exports = {
  getSeason
};
