window.onload = function(){
  let calculate = (n1, operator, n2) => {
    let result = ''
  if (operator === 'add') {
    result = parseFloat(n1) + parseFloat(n2)
  } else if (operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2)
  } else if (operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2)
  } else if (operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2)
  }
  return result
  }
    let calculator = document.querySelector(".calculator");
    let keys = calculator.querySelector(".calculator__keys");
    let display = document.getElementById('calculator-display');
    display.onkeydown = (e)=>{
    e.preventDefault();
    }
    display.onmousedown = (e)=>{
      e.preventDefault();
      }
    keys.addEventListener("click", e => {
     if (e.target.matches("button")) {
        let key = e.target;
        let action = key.dataset.action;
        let keyContent = key.textContent;
        let displayedNum = display.value;
        Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));
        let previousKeyType = calculator.dataset.previousKeyType;
        if (!action) {
          if (displayedNum === '0' || previousKeyType === 'operator') {
            display.value = keyContent;
            calculator.dataset.previousKeyType = " ";
          }
          else {
            display.value = displayedNum + keyContent;
          }
        }
       if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
          ) {
            key.classList.add('is-depressed');
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
          }
       if (action === 'decimal') {
        display.value = displayedNum + ".";
          }
          
          if (action === 'clear') {
            display.value = "0";
            calculator.dataset.previousKeyType = "";
          }
          
          if (action === 'calculate') {
            let firstValue = calculator.dataset.firstValue;
            let operator = calculator.dataset.operator;
            let secondValue = displayedNum;
           display.value = calculate(firstValue, operator, secondValue)
          }
     }
    })
}