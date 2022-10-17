const { NotImplementedError } = require('../extensions/index.js');
const {assert} = require("chai");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  if(!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!')
  let trance = arr.slice();
  for (let i = 0; i < arr.length; i++) {
    Switch(arr[i], i)
  }
  function Switch(el, index) {
    switch(el) {
      case '--discard-next':
        trance[index] = undefined
        trance[index+1] = undefined
        break
      case '--discard-prev':
        trance[index] = undefined
        trance[index-1] = undefined
        break

      case '--double-next':
        trance[index] = trance[index+1]
        break

      case '--double-prev':
        trance[index] = trance[index-1]
        break
      default:
        break
    }
  }
  return trance.filter(n => n !== undefined)

}

module.exports = {
  transform
};
