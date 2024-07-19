document.addEventListener("DOMContentLoaded", function() {
let equationOb = {
    firstNumber : [],
    operator : "",
    lastNumber : []

}

let firstNumber = 0;
let  firstOperator= "";
let secondOperator
let lastNumber = 0;
let equation = ``;


let answer = 0;
let firstOperatorC = false ;
let secondOperatorC = false;
let firstNumberC = false;
let lastNumberC = false;


let screen = document.querySelector('.screen')







function add(a, b){
    answer =  a + b
    return answer
}
function subtract(a, b){
 answer = a - b
 return answer
}
function multiply(){
 answer = a * b
 return answer
}
function divide(a, b){
answer = a / b
return answer;

}

function operate(a, o , b){
    o = operator

    if(o = '+'){
        add()
    }else if (o = '-') {
       subtract()
    }else if (o = '*') {
        multiply()
    }else if (o = "/") {
        divide()
    }else {
        console.log('error')
    }


}

function display(equation){
   screen.textContent = `${equation}`
}

function clear() {
 screen.textContent = "";

};

document.querySelectorAll('button').forEach(button => {
    button.addEventListener("click", function(event) {
    const target = event.target;
    switch (target.id) {
        case "1":
            if (firstNumberC = false) {
                equationOb.firstNumber.push(target.id)
                equation = `$`
            
                }else {
                 equationOb.lastNumber.push(target.id) 
                }
                display()

            break;
        case "2":
            if (firstNumberC = false) {
                equationOb.firstNumber.push(target.id)
                }else {
                 equationOb.lastNumber.push(target.id) 
                }
                display()
            break;
        case '3':
            if (firstNumberC = false) {
               equationOb.firstNumber.push(target.id)
               }else {
                equationOb.lastNumber.push(target.id) 
               }
               display()
            break;
        case '4':
            if (firstNumberC = false) {
                equationOb.firstNumber.push(target.id)
                }else {
                 equationOb.lastNumber.push(target.id) 
                }
                display()
            break;
        case '5':
            if (firstNumberC = false) {
                equationOb.firstNumber.push(target.id)
                }else {
                 equationOb.lastNumber.push(target.id) 
                }
                display()
            break;
        case '6':
            if (firstNumberC = false) {
                equationOb.firstNumber.push(target.id)
                }else {
                 equationOb.lastNumber.push(target.id) 
                }
                display()
                console.log(equationOb.firstNumber)
            break;
        case '7':
            if (firstNumberC = false) {
                equationOb.firstNumber.push(target.id)
                }else {
                 equationOb.lastNumber.push(target.id) 
                }
                display()
            break;
        case '8':
            if (firstNumberC = false) {
                equationOb.firstNumber.push(target.id)
                }else {
                 equationOb.lastNumber.push(target.id) 
                }
                display()
            break;
        case '9':
            if (firstNumberC = false) {
                equationOb.firstNumber.push(target.id)
                }else {
                 equationOb.lastNumber.push(target.id) 
                }
                display()
            break;
        case '0':
            if (firstNumberC = false) {
                equationOb.firstNumber.push(target.id)
                }else {
                 equationOb.lastNumber.push(target.id) 

                }
                display()

            break;
        case '+':
            equationOb.operator = target.id
            status = "changed"
            display()
            break;
        case '-':
            equationOb.operator = target.id
            status = "changed"
            display()
            break
        case 'x':
            equationOb.operator = target.id
            status = "changed"
            display()
            break;
        case '/':
            equationOb.operator = target.id
            status = "changed"
            console.log(equationOb.operator)
            display()
            break;
        case 'clear':
            clear()
            break;
        case '=':
            operate()
            break
        
        default: 
        console.log('something went wrong')

    };
  });
})
})