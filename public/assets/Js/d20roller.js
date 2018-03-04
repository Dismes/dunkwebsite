
var roll = function(howMany, maxAmount){
    var value = 0;

    for (i=0; i<howMany; i++){
        value = value + Math.floor(Math.random() * Math.floor(maxAmount)) + 1
        console.log(value);
    };
        return Promise.resolve(value);
    
}


module.exports = {roll};
