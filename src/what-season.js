const {NotImplementedError} = require('../extensions/index.js');

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
    if(!date) return 'Unable to determine the time of year!'
    try {
        let checkDate = date - new Date();
        let m = date.getMonth()
        let seasonMap = [
            ["winter", [11, 0, 1]],
            ["spring", [2, 3, 4]],
            ["summer", [5, 6, 7]],
            ["autumn", [8, 9, 10]]]
        for (let [season, month] of seasonMap) {
            let find = month.find((i) => i === m)
            if (find !== undefined) return season
        }
        return 'Unable to determine the time of year!'
    } catch (e) {
        throw new Error('Invalid date!')
    }
}


module.exports = {
    getSeason
};
