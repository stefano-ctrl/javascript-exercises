const removeFromArray = function(array, valueToRemove, optionalValue, optionalValue2, optionalValue3) {
    for (let i = 0; i < array.length; i++) {
        if (arguments[i] === valueToRemove) {
            let filteredItems = array.filter(value => ((value !== valueToRemove && value !== optionalValue && value !== optionalValue2 && value !== optionalValue3)));
            return filteredItems;
    }
    
    }
}
 /* array.splice(array.indexOf(value), 1); else if (array[i] !== valueToRemove && array[i] !== optionalValue) { //not working at the same. condition if else might need to be removed
        return array;
    } */
// Do not edit below this line
module.exports = removeFromArray;

 