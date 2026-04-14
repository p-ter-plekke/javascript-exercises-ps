const sumAll = function (a, b) {
    if (!Number.isInteger(a)
        || !Number.isInteger(b)
        || a < 0
        || b < 0) {
        return "ERROR";
    } else {
        let smallToBig = [a, b].sort();
        let first = smallToBig.at(0);
        let last = smallToBig.at(1);
        let sum = 0;

        for (i = first; i <= last; i++) {
            sum += i;
        }
        return sum;
    }
};

sumAll(8, 3);

// Do not edit below this line
module.exports = sumAll;

// I need a function that takes to integers as input.
// Sets them in the order from small to big.
// And then adds the first number, and then the second which is +1 and adds that, and so on.
// Until the added number is bigger then the biggest input. 
// Then it sould return the outcome.
