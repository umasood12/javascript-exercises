const sumAll = function(num1, num2) {
    let sum = 0;

    for (let i = num1; i <= num2; i++) {
        sum += i;
    }
    return sum;
};

console.log(sumAll(2, 12));

// Do not edit below this line
module.exports = sumAll;
