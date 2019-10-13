'use strict';

const origoYear = 1900
const monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function weekdayOfDate(year, month, day) {
    const firstDayIndexOfYear = (year - origoYear) + Math.floor((year - origoYear) / 4)
    const dayIndexOfMonth = day - 1
    const dayIndexOfYear = dayIndexOfMonth + daysInYearUntilFirstDayOfMonth(month)
    return (firstDayIndexOfYear + dayIndexOfYear) % 7;
}

function daysInYearUntilFirstDayOfMonth(month) {
    let daysInYearUntil = 0
    for (let monthIndex = 1; monthIndex < month; monthIndex++) {
        daysInYearUntil += monthLengths[monthIndex - 1]
    }
    return daysInYearUntil
}

module.exports = {
    weekdayOfDate
};
