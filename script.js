document.addEventListener("DOMContentLoaded", function() {
let equationOb = {
    firstNumber : [],
    firstOperator : "",
    lastNumber : [],
    secondOperator : ""

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
            if (!firstNumberC) {
                equationOb.firstNumber.push(target.id)
                let first = equationOb.firstNumber.join(" ")
                console.log(first)
                firstNumberC = true
                equation = `${first}`

                
            
                }else {
                 equationOb.lastNumber.push(target.id) 
                 lastNumberC = true
                 let second = equationOb.lastNumber.join()
            
                equation = `${second}`
                }
                display(equation)

            break;
        case "2":
            if (firstNumberC = false) {
                equationOb.firstNumber.push(target.id)
                firstNumberC = true
                
            
                }else {
                 equationOb.lastNumber.push(target.id) 
                 lastNumberC = true
                }
                display()
            break;
        case '3':
            if (firstNumberC = false) {
                equationOb.firstNumber.push(target.id)
                firstNumberC = true
                
            
                }else {
                 equationOb.lastNumber.push(target.id) 
                 lastNumberC = true
                }
                display()
            break;
        case '4':
            if (firstNumberC = false) {
                equationOb.firstNumber.push(target.id)
                firstNumberC = true
                
            
                }else {
                 equationOb.lastNumber.push(target.id) 
                 lastNumberC = true
                }
                display()
            break;
        case '5':
            if (firstNumberC = false) {
                equationOb.firstNumber.push(target.id)
                firstNumberC = true
                
            
                }else {
                 equationOb.lastNumber.push(target.id) 
                 lastNumberC = true
                }
                display()
            break;
        case '6':
            if (firstNumberC = false) {
                equationOb.firstNumber.push(target.id)
                firstNumberC = true
                
            
                }else {
                 equationOb.lastNumber.push(target.id) 
                 lastNumberC = true
                }
                display()
            break;
        case '7':
            if (firstNumberC = false) {
                equationOb.firstNumber.push(target.id)
                firstNumberC = true
                
            
                }else {
                 equationOb.lastNumber.push(target.id) 
                 lastNumberC = true
                }
                display()
            break;
        case '8':
            if (firstNumberC = false) {
                equationOb.firstNumber.push(target.id)
                firstNumberC = true
                
            
                }else {
                 equationOb.lastNumber.push(target.id) 
                 lastNumberC = true
                }
                display()
            break;
        case '9':
            if (firstNumberC = false) {
                equationOb.firstNumber.push(target.id)
                firstNumberC = true
                
            
                }else {
                 equationOb.lastNumber.push(target.id) 
                 lastNumberC = true
                }
                display()
            break;
        case '0':
            if (firstNumberC = false) {
                equationOb.firstNumber.push(target.id)
                firstNumberC = true
                
            
                }else {
                 equationOb.lastNumber.push(target.id) 
                 lastNumberC = true
                }
                display()

            break;
        case '+':
            if (firstOperatorC = false) {
                equationOb.firstOperator = target.id
            }else {
                equationOb.secondOperator = target.id
            }
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