const sumAll = function(a,b) {
let sum = 0;
if ((!a) || (!b) || (a<0) || (b<0) || isNaN(a) || isNaN(b) || typeof(a) === `string` || typeof(b) === `string`) {
    console.log(`error`);
    return "ERROR"
}
if (a >= b) {
    for (i = b; i <= a; i++) {
        sum += i;
    }
} else {
for (i = a; i <= b; i++) {
    sum += i;
} }
console.log(sum);
return sum;
};
sumAll(10, `90`)
// Do not edit below this line
module.exports = sumAll;
