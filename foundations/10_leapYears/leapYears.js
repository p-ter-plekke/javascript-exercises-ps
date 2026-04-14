const leapYears = function (year) {
    if (year % 4 == 0 && (year % 100 !== 0 || year % 400 == 0)) {
        return true;
    } else {
        return false;
    }
}

// Do not edit below this line
module.exports = leapYears;

// A function that takes a year and checks if it's a leap year by checking:
// * Leap years are years divisible by four (like 1984 and 2004). So LY: divisible by 4.
// * Years divisible by 100 are not leap years (such as 1800 and 1900). So LY: not divisible by 100.
// * unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years)
// * If it's a leap year it return true and otherwise false.



