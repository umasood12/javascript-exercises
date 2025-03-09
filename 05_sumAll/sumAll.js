const sumAll = function(num1, num2) {
    let sum = 0;
    
    // CHECK IF NUMBER IS POSITIVE
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } else if (Number.isInteger(num1) == false || Number.isInteger(num2) == false) {
        return "ERROR";
    }
    
    if (num1 > num2) {
        for (let i = num2; i <= num1; i++) {
            sum += i;
        }
        return sum;
    }
    else {
        for ( let i = num1; i <= num2; i++) {
            sum +=i; 
        }
        return sum;
    }
};

console.log(sumAll(2.5, 4));

// Do not edit below this line
module.exports = sumAll;
