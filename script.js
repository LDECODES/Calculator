document.addEventListener("DOMContentLoaded", function() {
let firstNumber = 0;
let operator = 0;
let lastNumber = 0;

let screen = document.querySelector('.screen')







function add(){

}
function subtract(){

}
function multiply(){

}
function divide(){

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

function display(){
    
}

document.querySelectorAll('button').forEach(button => {
    button.addEventListener("click", function(event) {
    const target = event.target;
    switch (target.id) {
        case "1":
        console.log('hello');
            break;
        case "2":
            console.log('hello');
            break;
        case '3':
            console.log('hello');
            break;
        case '4':
            console.log('hello');
            break;
        case '5':
            console.log('hello');
            break;
        case '6':
            console.log('hello');
            break;
        case '7':
            console.log('hello');
            break;
        case '8':

            break;
        case '9':

            break;
        case '0':

            break;
        case '+':

            break;
        case '-':

            break;
        case 'x':

            break;
        case '/':

            break;
        case 'clear':
            break;
        
        default: 
        console.log('happy')

    };
  });
})
})