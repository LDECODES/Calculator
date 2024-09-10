document.addEventListener("DOMContentLoaded", function() {

    let value = 0;
    let pScreen = document.querySelector('.primary-screen')
    let sScreen = document.querySelector('.secondary-screen')
    let savedEquation = ''
    let savedScreen = ""
    let error = false;
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
                clear()
                savedEquation = saveEquation(target.id)
                console.log( savedEquation)
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
            case '÷':
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
        return a * b
    } 

    function saveEquation(value) {
        console.log(equation);
    
        // Initialize equation properties if they are undefined
        if (!equation.firstNumber) equation.firstNumber = [];
        if (!equation.secondNumber) equation.secondNumber = [];
        if (!equation.firstOperator) equation.firstOperator = '';
        if (!equation.secondOperator) equation.secondOperator = '';
    
        // Handle first number and operator
        if (equation.firstOperator === '') {
            if (["+", "-", "x", "÷"].includes(value)) {
                equation.firstOperator = value;
                console.log("First operator set: ", equation.firstOperator);
            } else {
                equation.firstNumber.push(value);
                console.log("First number updated: ", equation.firstNumber);
            }
        }
        // Handle second number and operator
        else if (equation.firstOperator !== '' && equation.secondOperator === '') {
            if (["+", "-", "x", "÷"].includes(value)) {
                equation.secondOperator = value;
                console.log("Second operator set: ", equation.secondOperator);
            } else {
                equation.secondNumber.push(value);
                console.log("Second number updated: ", equation.secondNumber);
            }
        }
        // Handle continuing after second operator
        else if (equation.secondOperator !== '') {
            equation.secondNumber.push(value);
            console.log("Second number continued: ", equation.secondNumber);
        }
    
        // Joining and preparing equation for logging
        let firstNumber = equation.firstNumber.join('');
        let secondNumber = equation.secondNumber.join('');
        let firstOperator = equation.firstOperator;
        let secondOperator = equation.secondOperator || '';
    
        // Clear equationArray before pushing new values
        equationArray = [firstNumber, firstOperator, secondNumber, secondOperator].filter(Boolean);
        let joinedEquation = equationArray.join('');
        console.log("Equation: ", joinedEquation);
    
        return joinedEquation;
    }
    
    


   

    function operate(array){
        
        firstNumber = array[0].
        firstOperator = array[1]
        secondNumber = array[2]
        secondOperator = array[3]
        if (typeof firstNumber === "string"){
            firstNumber = parseint(firstNumber)
            }
        if (typeof secondNumber === "string"){
            secondNumber = parseInt(secondNumber)
            }
     
        


        if(firstNumber == 0 || secondNumber == 0 || firstOperator == ''){
            pScreen.textContent = 'thats a no no'
        }else if (firstOperator == '+' || firstOperator == '-' || firstOperator == 'x' || firstOperator == '÷'){
            switch (firstOperator) {
                case '+':
                    add(firstNumber, secondNumber)
                    break
    
                case '-':
                    subtract(firstNumber, secondNumber)
                    break
    
                case '÷':
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
        clear()
        pScreen.textContent = value
    }

    function clear(){
        pScreen.textContent = ''
        //equationArray = []
         //equation = {
        //    firstNumber: [],
         //   secondNumber: [],
         //   firstOperator: '',
        //    secondOperator: '',
       // }
        
    //if (error = true) {
     //   pScreen.textContent = ''
   // }else {
   //     console.log('nothing wrong here')
   // }
    }
    
}
    )

})



