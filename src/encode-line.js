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

// Моё решение с (https://www.codewars.com/kata/run-length-encoding) Username: rsschool_5f44fbb09dc12692
function encodeLine( str ) {
  let res = ''
  for(index = 0; index < str.length;){
    let count = 1
    for(i = index + 1; i <= str.length; i++){
      if(str[index] === str[i]) { count++ } else {
        res += (count === 1 ? '': count) + str[index]
        index = i
        break
      }
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
