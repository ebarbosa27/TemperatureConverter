function convertToCelsius(tempF) {
  // (°F − 32) × 5/9 = °C
  return (tempF - 32) * (5 / 9);
}

function describeTemperature(tempF) {
  const tempC = tempF;

  if (tempC < 0) {
    return "very cold";
  }
  if (tempC < 20) {
    return "cold";
  }
  if (tempC < 30) {
    return "warm";
  }
  if (tempC < 40) {
    return "hot";
  }
  return "very hot";
}

const userInput = prompt("What is the temperature? (°F)");
alert(`
  In celcius that is ${convertToCelsius(userInput)}°C,
  seems like it's ${describeTemperature(userInput)} outside today.
  `);
