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