const removeFromArray = function(arr, ...args) {
    let newArray = [];

    // check if each 
    for (i = 0; i < arr.length; i++) {
        if (args.includes(arr[i]) == false) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

console.log(removeFromArray([5,3,5], 3, 2, 9));

// Do not edit below this line
module.exports = removeFromArray;
