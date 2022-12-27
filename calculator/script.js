const formatter = new Intl.NumberFormat('en-US', {      
    maximumFractionDigits: 5,
 });

const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

const operate = (a,op,b) => {
    let result;
    if (isNaN(a) || isNaN(b)) return
    a = Number(a);
    b = Number(b);
    if(op === '+'){
        result = formatter.format(add(a,b))
    }
    if(op === '-'){
        result = formatter.format(subtract(a,b))
    }
    if(op === '*'){
        result = formatter.format(multiply(a,b))
    }
    if(op === '/'){
        if(b == 0){
            result = "Math error"
        }
        else result = formatter.format(divide(a,b));
    }
    if (isNaN(result)){ result = "Add a operation"}
    return result; 
}

const number_buttons = document.querySelectorAll('.calculator-keys .number');
const operater_button = document.querySelectorAll('.calculator-keys .operator');
const calc_display = document.getElementById('display-screen');
const equal_key = document.getElementById('equal-sign');
const operations = document.getElementsByClassName('operations');


let displayvalue = '';
let operator = '';
let prevvalue = '';

const filldisplay = function() {
    if(displayvalue.includes('.') && this.value === '.') return;

    if (displayvalue.length > 10) return
    
    displayvalue += this.value;
    calc_display.value = displayvalue;    
}

number_buttons.forEach(function(number){
    number.addEventListener('click',filldisplay);
})

const calculation = function(){
    if(operator) {
        displayvalue = operate(prevvalue, operator, displayvalue);
        calc_display.value = displayvalue;
    }
    operator = this.value;
    prevvalue = displayvalue;
    displayvalue = '';
}

operater_button.forEach(function(operator){
    operator.addEventListener('click',calculation)
})

const functionality = function(){
    if(this.value === '='){
        displayvalue = operate(prevvalue,operator,displayvalue);
        if (isNaN(displayvalue)){ displayvalue = "Add a operation"}
        calc_display.value = displayvalue;
        prevvalue = displayvalue;
        displayvalue = ''
        operator = ''
    }
    if(this.value === 'all-clear'){
        displayvalue = '';
        calc_display.value = displayvalue;
        prevvalue = ''
        operator = '';
    }
}

Array.from(operations).forEach(function(operation){
    operation.addEventListener('click',functionality);
})