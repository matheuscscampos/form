const add = function(a, b) {
    console.log(a+b); 
   };
   
const subtract = function(a, b) {
    return a-b;
};

const multiply = function(a,b) {
    return a*b;
};

const divide = function(a,b) {
    return a/b;
};

const operate = function(operator, num1, num2){
    if (operator === 'add'){
        return add(num1, num2);
    } else if (operator === 'subtract'){
        return subtract(num1,num2);
    } else if (operator === 'multiply'){
        return multiply(num1, num2);
    }
    else if (operator === 'divide'){
        return divide(num1, num2);
    }
    }

const num = document.querySelectorAll('.n');
const op = document.querySelectorAll('.or');
const equal = document.querySelectorAll('.eq');
const result = document.querySelector('[name="result"]')

let number = ''; 
let operator = '';
let num1 = '';
let num2 = '';

num.forEach(item => {
    item.addEventListener('click', event => {
    number = number.concat(event.target.value);
    result.setAttribute('value', number);
    })
})

op.forEach(item => {
    item.addEventListener('click', event => {
    num1 = number;
    operator = event.target.name;
    number = '';
    })
})

equal.forEach(item => {
    item.addEventListener('click', event => {
    num2 = number;
    number = operate(operator,num1, num2);
    result.setAttribute('value', number);
    })
})
