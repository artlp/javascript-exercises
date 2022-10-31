const repeatString = function(string,num) {
    let str = '';
    if (num < 0){ return "ERROR"
}   
for (i=1; i<= num; i++) {
    str += string;
}
console.log(str);
return str;
};
repeatString("ad",3)
// Do not edit below this line
module.exports = repeatString;
