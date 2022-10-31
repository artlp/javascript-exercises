const removeFromArray = function(...args) {
    const array = args[0];
    const newArray = [];

    // console.log(array.indexOf(parameter));
    // array.splice(array.indexOf(parameter), 1);
    // console.log(array);
    // return array.splice(array.indexOf(parameter), 1);
    array.forEach((item) => {
        // push every element into the new array
        // UNLESS it is included in the function arguments
        // so we create a new array with every item, except those that should be removed
        if (!args.includes(item)) {
          newArray.push(item);
        }
      });
      // and return that array
      return newArray;
    };
removeFromArray([1, 2, 3, 4], 2, 3);
// Do not edit below this line
module.exports = removeFromArray;
