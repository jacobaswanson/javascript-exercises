const convertToCelsius = function(temp) {
  let newTemp = (temp - 32) * 5 / 9;
  if(newTemp % 1 !== 0){
    return Number(newTemp.toFixed(1));
  }else{
    return parseInt(newTemp, 10);
  }
};

const convertToFahrenheit = function(temp) {
  let newTemp = (temp * 9 / 5) + 32;
  if(newTemp % 1 !== 0){
    return Number(newTemp.toFixed(1));
  }else{
    return parseInt(newTemp, 10);
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
