var roller = require("./d20roller.js");


function returnArray() {
    var array = findTheLowestAndRemove([5, 1, 1, 5, 6]);
    return Float64Array;
}



function findTheLowestAndRemove(array) {
    findLowestValue(array).then((res) => {
        dropTheLowest(array, res).then((res) => {
            console.log(res)
            return res;
        });
    })
}


function dropTheLowest(array, lowestPosition) {
    array.splice(lowestPosition, 1);
    return Promise.resolve(array);
}

function findLowestValue(array) {
    var lowestValue;
    var lowetPosition;
    lowestValue = Math.min(...array);
    for (i = 0; i < array.length; i++) {
        if (array[i] === lowestValue) {
            lowetPosition = i;
        }
    }

    return Promise.resolve(lowetPosition);
}

module.exports = returnArray;