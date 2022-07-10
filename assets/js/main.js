const inputDisplay = document.querySelector('.display > input');
const numberButtons = document.querySelectorAll('.number-option');
const clearButton = document.querySelector('.clear');
const optionButtons = document.querySelectorAll('.option');
let operation = [];

numberButtons.forEach((numberButton) => {
  numberButton.addEventListener('click', ({ target }) => {
    inputDisplay.value += target.innerText;
  });
});

clearButton.addEventListener('click', () => {
  operation = [];
  inputDisplay.value = '';
});

optionButtons.forEach((optionButton) => {
  optionButton.addEventListener('click', ({ target: { innerText } }) => {
    const inputValue = inputDisplay.value === '' ? '0' : inputDisplay.value;

    switch (innerText) {
      case '+':
        operation.push(inputValue, '+');
        inputDisplay.value = '';
        break;
  
      case '-':
        operation.push(inputValue, '-');
        inputDisplay.value = '';
        break;
  
      case '*':
        operation.push(inputValue, '*');
        inputDisplay.value = '';
        break;
  
      case '/':
        operation.push(inputValue, '/');
        inputDisplay.value = '';
        break;
  
      case '=':
        const lastItem = operation[operation.length - 1];
        if ((lastItem === '*' || lastItem === '/') && inputValue === '0') {
          operation.push('1');
        } else {
          operation.push(inputValue);
        }
        inputDisplay.value = eval(operation.join(' '));
        operation = [];
    
      default:
        break;
    }
  });
});
