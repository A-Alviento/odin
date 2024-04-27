// operation helpers
const add = (firstNum, secondNum) => {
  return firstNum + secondNum;
};

const subtract = (firstNum, secondNum) => {
  return firstNum - secondNum;
};

const multiply = (firstNum, secondNum) => {
  return firstNum * secondNum;
};

const divide = (firstNum, secondNum) => {
  return firstNum / secondNum;
};

const operator = (firstNum, secondNum, operator) => {
  firstNum = Number(firstNum);
  secondNum = Number(secondNum);
  switch (operator) {
    case "+":
      return add(firstNum, secondNum);
    case "-":
      return subtract(firstNum, secondNum);
    case "*":
      return multiply(firstNum, secondNum);
    case "/":
      return divide(firstNum, secondNum);
  }
};

const isNumeric = (str) => {
  return (!isNaN(str) || str === '.');
};

const processExpression = (str) => {
  const expressionArr = str.split("");

  // convert the numerics into it's own element
  let runningNum = "";
  let processedExpressionArr = [];
  expressionArr.forEach((item, idx) => {
    if (isNumeric(item)) {
      runningNum = runningNum + item;
    } else {
      runningNum.length && processedExpressionArr.push(runningNum);
      processedExpressionArr.push(item);
      runningNum = "";
    }
  });

  runningNum.length && processedExpressionArr.push(runningNum);

  return processedExpressionArr;
};

const precedence = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2,
};

const isComparePrecedence = (operatorOne, operatorTwo) => {
  if (precedence[operatorOne] === precedence[operatorTwo]) return 0;
  if (precedence[operatorOne] > precedence[operatorTwo]) return 1;
  if (precedence[operatorOne] < precedence[operatorTwo]) return -1;
};

// Shunting Yard Algorithm (https://en.wikipedia.org/wiki/Shunting_yard_algorithm)
const infixToPostfix = (arr) => {
  const outputQueue = [];
  const operatorStack = [];
  let idx = 0;

  while (arr.length > 0) {
    if (isNumeric(arr[0])) {
      outputQueue.push(arr.shift());
    } else {
      if (arr[0] === "(") {
        operatorStack.push(arr.shift());
        continue;
      }
      if (arr[0] === ")") {
        if (operatorStack[operatorStack.length - 1] !== "(")
          outputQueue.push(operatorStack.pop());
        operatorStack.pop();
        arr.shift();
        if (arr[0] === "(") arr.unshift("*");
        continue;
      }
      if (operatorStack.length === 0) {
        operatorStack.push(arr.shift());
        continue;
      }

      while (operatorStack.length > 0) {
        if (
          isComparePrecedence(
            arr[0],
            operatorStack[operatorStack.length - 1]
          ) <= 0 &&
          operatorStack[operatorStack.length - 1] !== "("
        ) {
          outputQueue.push(operatorStack.pop());
        } else {
          operatorStack.push(arr.shift());
          break;
        }
      }
    }
  }
  outputQueue.push(...operatorStack.reverse());
  return outputQueue;
};

// basic algorithm to evaluate postfix expressions
const evaluatePostfix = (arr) => {
  let idx = 0;
  while (arr.length > 1) {
    if (isNumeric(arr[idx])) {
      idx++;
    } else {
      let result = operator(arr[idx - 2], arr[idx - 1], arr[idx]);
      arr.splice(idx - 2, 3);
      arr.splice(idx - 2, 0, result);
      idx -= 1;
    }
  }
  return arr[0];
};

// evaluatePostfix(infixToPostfix(processExpression("3+4*2/(1-5)")));
console.log(evaluatePostfix(infixToPostfix(processExpression(""))));


// input logic
const input = document.querySelector('#input')

// button logic
const buttons = document.querySelectorAll('#button')
const resultField = document.querySelector('#result')
let isResultPresent = false
let currentResult = ''

const isAnOperator = (char) => {
  switch (char) {
    case '+':
    case '-':
    case '/':
    case 'x':
      return true
    default:
      return false
  }
}

buttons.forEach((btn) => {
  if (isAnOperator(btn.textContent) || btn.textContent === '=') btn.style.backgroundColor = '#DB5461'
  if (btn.textContent === 'AC' || btn.textContent === 'C') btn.style.backgroundColor = '#8AA29E'
  btn.addEventListener('click', () => {
    switch (btn.textContent) {
      case ('C'):
        input.value = ''
        resultField.textContent = ''
        isResultPresent = false
        break
      case ('AC'):
        if (input.value[input.value.length - 1] === 's') input.value = input.value.slice(0, -3);
        input.value = input.value.slice(0, -1);
        isResultPresent = false
        break
      case ('='):
        if (isAnOperator(input.value[input.value.length - 2])) return
        let processedInput = input.value.replace(/x/g, '*')
        processedInput = processedInput.replace(/ans/g, currentResult)
        currentResult = evaluatePostfix(infixToPostfix(processExpression(processedInput)))
        if (!currentResult) return ``
        if (currentResult === Infinity) {
          resultField.textContent = 'Error: Cannot divide by 0!'
          return
        }
        resultField.textContent = currentResult
        isResultPresent = true
        break;
      default:
        switch (btn.textContent) {
          case '.':
            let currentInputArr = (input.value).split(/([-+x/()])/g)
            console.log('adrian', currentInputArr)
            if (currentInputArr[currentInputArr.length - 1].includes('.')) return
            break
          case '+':
          case '-':
          case '/':
          case 'x':
            if (isResultPresent) {
              input.value = "ans"
              isResultPresent = false
            }
            if (isAnOperator(input.value[input.value.length - 2])) return;
            if (input.value.length == 0) return;
        }
        if (isAnOperator(btn.textContent)) {
          input.value = input.value + ` ${btn.textContent} `
        } else {
          input.value = input.value + `${btn.textContent}`
        }
    }
  })
})
