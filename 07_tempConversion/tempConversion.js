const convertToCelsius = function(ftemp) {
  return Math.round((ftemp - 32) * (5/9) * 10) / 10;
};

const convertToFahrenheit = function(ctemp) {
  return Math.round(((ctemp * 9) / 5 + 32) * 10) / 10;
};

console.log("Temperatore: ", convertToCelsius(32));
console.log("Temperatore: ", convertToCelsius(100));
console.log("Temperatore: ", convertToCelsius(-100));


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
