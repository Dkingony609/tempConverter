const defaultResult = 0;

let currentResult = defaultResult;

const standardFahrValue = 32;

// collects user's input
function usrInput() {
  return parseFloat(userInput.value);
}

// Description Logic
function createAndWriteDescription() {
  outputResult(currentResult);
}

// converts from celsius to fahrenheit
function convertFahrToCelsius() {
  let celsiusValue = usrInput();

  let finalResult = (celsiusValue * 1.8) + standardFahrValue;

  currentResult = finalResult.toFixed(4);

  createAndWriteDescription();
}


convertButton.addEventListener('click', convertFahrToCelsius);
