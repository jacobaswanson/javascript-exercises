const reverseString = function(string) {
    let outputString = '';
    for(let i = string.length; i >= 0; i--){
        outputString += string.substr(i, 1);
    }
    return outputString;

};

// Do not edit below this line
module.exports = reverseString;
