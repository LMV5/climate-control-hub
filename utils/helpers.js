export const convertToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

export const convertToCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};
