const fibonacci = function(num) {
    num = Number(num);
    let temp = 0;
    let numbers = [1,1];
    if(num < 1){
        return 'OOPS';
    }else{
        for(let i = 1; i < num; i++){
            numbers.push(numbers[i] + numbers[i - 1]);
        }
    return numbers[num - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
