
var roll = function(maxAmount){
    return Promise.resolve(Math.floor(Math.random() * Math.floor(maxAmount)) + 1);
    
}


module.exports = {roll};
