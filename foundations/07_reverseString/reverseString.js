const reverseString = function (str) {
    return str
        .split('')
        .reverse()
        .join('');
};

console.log(reverseString("hello Prisca"));

// I need a function that takes a string.
// Breaks it down into letters.
// Reverses the letter order.
// Puts it back together into a new string.
// Return the new string.

// Do not edit below this line
module.exports = reverseString;
