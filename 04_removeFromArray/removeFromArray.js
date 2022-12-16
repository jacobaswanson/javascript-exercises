const removeFromArray = function() {
    let array = arguments[0];
    let final = [];
    let match = false;
    for(let i = 0; i < array.length; i++){
        let testThis = array[i];
        console.log(testThis);
        let c = 1;
        while(c < arguments.length ){
            newArg = arguments[c];
            if(testThis === newArg){
                match = true;
            }
            console.log("testThis = " + testThis);
            console.log("argument = " + newArg);
            c++;
        }

        if(match){
        }else{
            final.push(array[i]);
        }
        match = false;
        }
    return final;
}

// Do not edit below this line
module.exports = removeFromArray;
