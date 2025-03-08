const reverseString = function(string) {
    let reverseString = '';
    for (let i = string.length; i > 0; i--) {
        reverseString += string[i - 1];
    }
    return reverseString; 
};

console.log(reverseString('test'));
// Do not edit below this line
module.exports = reverseString;
