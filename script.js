document.addEventListener("DOMContentLoaded", function() {

    let value = 0;
    let pScreen = document.querySelector('.primary-screen')
    let sScreen = document.querySelector('.secondary-screen')
    let savedEquation = ''
    let savedScreen = ""
    let equationArray = []
    let equation = {
        firstNumber: [],
        secondNumber: [],
        firstOperator: '',
        secondOperator: '',
    }
       

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener("click", function(event) {
        const target = event.target;
        switch (target.id) {
            case '1':
                savedEquation = saveEquation(target.id)
                display(savedEquation)
                break
            case '2':
                value = target.id
                display()
                break
            case '3':
                value = target.id
                display(value)
                break
            case '4':
                value = target.id
                display(value)
                break
            case '5':
                value = target.id
                display(value)
                break
            case '6':
                value = target.id
                display(value)
                break
            case '7':
                value = target.id
                display(value)
                break
            case '8':
                value = target.id
                display(value)
                break
            case '9':
                value = target.id
                display(value)
                break
            case '0':
                value = target.id
                display(value)
                break
            case '+':
                value = target.id
                display(value)
                break
            case '-':
                value = target.id
                display(value)
                break
            case '/':
                value = target.id
                display(value)
                break
            case 'x':
                value = target.id
                display(value)
                break
            case '=':
                operate()
                break
            case 'clear':
                clear()
                break
            case 'Del':
                let newEquation = del()
                display(newEquation)
                break
            case '.':
                value = target.id
                display(value)
                break
            default:
                break
        }
    })


    function add(a, b){
        return a + b
  
    }
    function subtract(a, b){
        return a - b
    }

    function divide(a, b){ 
        return a / b
    } 

    function multiply(a, b){ 
        returna * b
    } 

    function saveEquation (value) {
        if(equation.firstNumber.length > 0 ){
            if (value == "+" ||value ==  "-" || value == "x" || value == "/" ){
                equation.firstOperator.push(value)
            }else {
                equation.firstNumber.push(value)
            }
        }else if(!equation.firstOperator == '' ) {
            equation.secondNumber.push(value)
        }else if (!equation.secondNumber.length < 1 || equation.secondNumber == undefined && value == "+" ||value ==  "-" || value == "x" || value == "/" ){
            equation.secondOperator.push(value)
        }

        let firstNumber = equation.firstNumber.join('')
        let secondNumber = equation.secondNumber.join('')
        let firstOperator = equation.firstOperator
        let secondOperator = equation.secondOperator

        equationArray.push(firstNumber, firstOperator, secondNumber, secondOperator )
        let joinedEquation = equationArray.join(' ')
        return `${firstNumber} ${firstOperator} ${secondNumber} ${secondOperator}`
    }


   

    function operate(operator, a, b){
        switch (operator) {
            case '+':
                add(a, b)
                break

            case '-':
                subtract(a, b)
                break

            case '/':
                divide(a, b)
                break

            case 'x':
                multiply(a, b)
                break
            default:
              return('something went wrong with the operator');
        }
     function del () {
        equationArray.pop()
        joinedEquation = equationArray.join(' ')
        return joinedEquation

    }
    
    function display(value){
        primaryScreen.textContent = value
    }

    function clear(){
    primaryScreen.textContent = ''
    }
    
}
    })

})


