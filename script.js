document.addEventListener("DOMContentLoaded", function() {
let firstNumber = 0;
let operator = "?";
let lastNumber = 0;

let answer = 0;
let status = "unchanged"

let screen = document.querySelector('.screen')

screen.textContent = `${firstNumber}  ?  ${lastNumber}` 






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

function display(){
    screen.textContent = `${firstNumber}  ${operator}  ${lastNumber}`
}

function clear() {
    screen.textContent = "0  ?  0"

};

document.querySelectorAll('button').forEach(button => {
    button.addEventListener("click", function(event) {
    const target = event.target;
    switch (target.id) {
        case "1":
        if (status === "unchanged") {
         firstNumber = target.id
         status = "changed"
        }else {
            lastNumber = target.id
        }
        display();

            break;
        case "2":
            if (status === "unchanged") {
                firstNumber = target.id
                status = "changed"
               }else {
                   lastNumber = target.id
               }
               display()
            break;
        case '3':
            if (status === "unchanged") {
                firstNumber = target.id
                status = "changed"
               }else {
                   lastNumber = target.id
               }
               display()
            break;
        case '4':
            if (status === "unchanged") {
                firstNumber = target.id
                status = "changed"
               }else {
                   lastNumber = target.id
               }
               display()
            break;
        case '5':
            if (status === "unchanged") {
                firstNumber = target.id
                status = "changed"
               }else {
                   lastNumber = target.id
               }
               display()
            break;
        case '6':
            if (status === "unchanged") {
                firstNumber = target.id
                status = "changed"
               }else {
                   lastNumber = target.id
               }
               display()
            break;
        case '7':
            if (status === "unchanged") {
                firstNumber = target.id
                status = "changed"
               }else {
                   lastNumber = target.id
               }
               display()
            break;
        case '8':
            if (status === "unchanged") {
                firstNumber = target.id
                status = "changed"
               }else {
                   lastNumber = target.id
               }
               display()
            break;
        case '9':
            console.log('hello')
            if (status === "unchanged") {
                firstNumber = target.id
                status = "changed"
               }else {
                   lastNumber = target.id
               }
               display()
            break;
        case '0':
            if (status === "unchanged") {
                firstNumber = target.id
                status = "changed"
               }else {
                   lastNumber = target.id
               }
               display()

            break;
        case '+':
            operator = target.id
            display()
            break;
        case '-':
            operator = target.id
            display()
            break;
        case 'x':
            operator = target.id
            display()
            break;
        case '/':
            operator = target.id
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