document.addEventListener("DOMContentLoaded", function() {

    let value = 0;
    let pScreen = document.querySelector('.primary-screen')
    let sScreen = document.querySelector('.secondary-screen')
    let savedEquation = ''
    let savedScreen = ""
    let equationArray = []
    let error = false;
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
                clear()
                savedEquation = saveEquation(target.id)
                console.log(savedEquation)
                display(savedEquation)
                break
            case '2':
                clear()
                savedEquation = saveEquation(target.id)
                display(savedEquation)
                break
            case '3':
                clear()
                savedEquation = saveEquation(target.id)
                display(savedEquation)
                break
            case '4':
                clear()
                savedEquation = saveEquation(target.id)
                display(savedEquation)
                break
            case '5':
                clear()
                savedEquation = saveEquation(target.id)
                display(savedEquation)
                break
            case '6':
                clear()
                savedEquation = saveEquation(target.id)
                display(savedEquation)
                break
            case '7':
                clear()
                savedEquation = saveEquation(target.id)
                display(savedEquation)
                break
            case '8':
                clear()
                savedEquation = saveEquation(target.id)
                display(savedEquation)
                break
            case '9':
                clear()
                savedEquation = saveEquation(target.id)
                display(savedEquation)
                break
            case '0':
                clear()
                savedEquation = saveEquation(target.id)
                display(savedEquation)
                break
            case '+':
                clear()
                savedEquation = saveEquation(target.id)
                display(savedEquation)
                break
            case '-':
                clear()
                savedEquation = saveEquation(target.id)
                display(savedEquation)
                break
            case '/':
                clear()
                savedEquation = saveEquation(target.id)
                display(savedEquation)
                break
            case 'x':
                clear()
                savedEquation = saveEquation(target.id)
                display(savedEquation)
                break
            case '=':
                operate(equationArray)
                break
            case 'clear':
                clear()
                break
            case 'Del':
                let newEquation = del()
                display(newEquation)
                break
            case '.':
                clear()
                savedEquation = saveEquation(target.id)
                display(savedEquation)
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
                console.log(equation.firstOperator)
            }else {
                equation.firstNumber.push(value)
                console.log(equation.firstNumber)
            }
        }else if(equation.firstOperator == '' ) {
            equation.secondNumber.push(value)

        }else if (equation.secondNumber.length > 0 || equation.secondNumber == undefined && value == "+" ||value ==  "-" || value == "x" || value == "/" ){
            
            equation.secondOperator.push(value)
        }

        let firstNumber = equation.firstNumber.join('')
        let secondNumber = equation.secondNumber.join('')
        let firstOperator = equation.firstOperator
        let secondOperator = equation.secondOperator
        console.log(firstNumber)

        equationArray.push(firstNumber, firstOperator, secondNumber, secondOperator )
        let joinedEquation = equationArray.join(' ')
        return joinedEquation
    }


   

    function operate(array){
        firstNumber = array[0]
        firstOperator = array[1]
        secondNumber = array[2]
        secondOperator = array[3]
        if(firstNumber == 0 || secondNumber == 0 || firstOperator == ''){
            pScreen.textContent = 'thats a no no'
        }else if (firstOperator == '+' || firstOperator == '-' || firstOperator == 'x' || firstOperator == '/'){
            switch (firstOperator) {
                case '+':
                    add(firstNumber, secondNumber)
                    break
    
                case '-':
                    subtract(firstNumber, secondNumber)
                    break
    
                case '/':
                    divide(firstNumber, secondNumber)
                    break
    
                case 'x':
                    multiply(firstNumber, secondNumber)
                    break
                default:
                  return('something went wrong with the operator');
            }
            
        }
            
    
    }
     function del () {
        equationArray.pop()
        joinedEquation = equationArray.join(' ')
        return joinedEquation

    }
    
    function display(value){
        pScreen.textContent = value
    }

    function clear(){
    if (error = true) {
        pScreen.textContent = ''
    }else {
        console.log('nothing wrong here')
    }
    }
    
}
    )

})



