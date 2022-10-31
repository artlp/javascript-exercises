const reverseString = function(string) {
    let splitStr = string.split('');
    let splitArr = [];
    for (const i of splitStr) {
        splitArr.unshift(i)
    }
    return splitArr.join('');
};
console.log(reverseString("hello there"))
// Do not edit below this line
module.exports = reverseString;
