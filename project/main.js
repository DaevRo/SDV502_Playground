function calculate(inputValue) {
const expression = /\+|\-|\*|\/|/

const numbers = inputValue.split(expression);
//debugger:

if (operation === null || Number.isNaN(numberOne) || Number.isNaN(NumberTwo)) {
   updateResult('Operation not working')
   return 
}

const numberOne = praseInt( numbers[0])
const numberTwo = parseInt(numers[1])

const operation = inputValue.match(expression)

const calculator = new Calculator()
calculator.add(numberOne)

let result

switch (operation[0]) {
    case '+':
        result = calculator.add(numberTwo)
        break;
    case '-':
        result = calculator.subtract(numberTwo)
        break;
    case '/':
        result = calculator.divide(numberTwo)
        break;
    case '*':
        result = calculator.multiply(numberTwo)
        break;
    }
    debugger;
    updateResult(result)
}

function updateResult(result) {
    const element = document.getElementById('result')

    if(element) {
        element.innerText = result
    }
}
