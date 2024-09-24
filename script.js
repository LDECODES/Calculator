document.addEventListener("DOMContentLoaded", function() {

    let value = 0;
    let pScreen = document.querySelector('.primary-screen')
    let sScreen = document.querySelector('.secondary-screen')
    let savedEquation = ''
    let savedScreen = ""
    let noOfOperators = 0;
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

////// The save equations fucntions allows operators in the number array so filter that 

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
    
        if (!equation.firstNumber) equation.firstNumber = [];
        if (!equation.secondNumber) equation.secondNumber = [];
        if (!equation.firstOperator) equation.firstOperator = '';
        if (!equation.secondOperator) equation.secondOperator = '';
    
        // Handle firsrstNut number and operator
        if (equation.firstOperator === '') {
            }if ([1,2,3,4,5,6,7,8,9].includes(value)) {
                equation.firstNumber.push(value);
                console.log("First number updated: ", equation.firstNumber);
            }else if (["+", "-", "x", "÷"].includes(value)) {
                equation.firstOperator = value;
                console.log("First operator set: ", equation.firstOperator);
        }
        // Handle second number and operator
        else if (equation.firstOperator !== '' && equation.secondOperator === '' && noOfOperators !== 2) {
            if ([1,2,3,4,5,6,7,8,9].includes(value)) {
                equation.secondNumber.push(value);
                console.log("First number updated: ", equation.firstNumber);
            }else if (["+", "-", "x", "÷"].includes(value)) {
                equation.firstOperator = value;
                console.log("First operator set: ", equation.firstOperator);
        }
        }
        // Handle continuing after second operator
        else if (equation.secondOperator !== '') {
            equation.secondNumber.push(value);
            
            console.log("Second number continued: ", equation.secondNumber);
        
        }
        // Joining and preparing equation for logging
        let firstNumber = Array.isArray(equation.firstNumber) ? equation.firstNumber.join('') : Array.from(equation.firstNumber).join('');
        let secondNumber = Array.isArray(equation.secondNumber) ? equation.secondNumber.join('') : Array.from(equation.secondNumber).join('');
        let firstOperator = equation.firstOperator;
        let secondOperator = equation.secondOperator || '';
    
        // Clear equationArray before pushing new values
        equationArray = [firstNumber, firstOperator, secondNumber, secondOperator].filter(Boolean);
        let joinedEquation = equationArray.join('');
        console.log("Equation: ", joinedEquation);
    
        return joinedEquation;
        
    }
    
    function operate(array){
        let answer = 0 ;
        
        firstNumber = array[0]
        firstOperator = array[1]
        secondNumber = array[2]
        secondOperator = array[3]
        if (typeof firstNumber === "string"){
            if (firstNumber.includes('.')){
                firstNumber = parseFloat(firstNumber)
            }else{
                firstNumber = parseInt(firstNumber)
            }
            console.log(firstNumber)
            }
        if (typeof secondNumber === "string"){
            if (secondNumber.includes('.')){
                secondNumber = parseFloat(secondNumber)
            }else{
                secondNumber = parseInt(secondNumber)
            }
            console.log(secondNumber)
            }
            console.log(firstOperator)
        if(firstNumber == 0 || secondNumber == 0 || firstOperator == ''){
            pScreen.textContent = 'thats a no no'
        }else if (firstOperator == '+' || firstOperator == '-' || firstOperator == 'x' || firstOperator == '÷'){
            switch (firstOperator) {
                case "+":
                    console.log("adding")
                    answer = add(firstNumber, secondNumber)
                    break
    
                case "-":
                    answer = subtract(firstNumber, secondNumber)
                    break
    
                case "÷":
                    console.log("dividing")
                    answer = divide(firstNumber, secondNumber)
                    break
    
                case "x":
                    answer = multiply(firstNumber, secondNumber)
                    break
                default:
                  return('something went wrong with the operator');
            }
            
            pscreen(answer)
            sScreen.textContent = `${firstNumber} ${firstOperator} ${secondNumber} `
            equationArray = []
            equation = {
                firstNumber: `${answer}`,
                secondNumber: [],
                firstOperator: `${secondOperator}`,
                secondOperator: '',
            }

            pScreen.textContent = `${equation.firstNumber}`
            sScreen.textContent = `${equation.firstNumber} ${equation.firstOperator} ${equation.secondNumber} ${equation.secondOperator}`
            
            equationArray = [equation.firstNumber, equation.firstOperator, equation.secondNumber, equation.secondOperator].filter(Boolean);
            joinedEquation = equationArray.join('')
            
            
            
        }

        
            
    }
    function pscreen (value) {
        pScreen.textContent = value
    }
     function del () {
        equationArray.pop()
        joinedEquation = equationArray.join(' ')
        return joinedEquation
    }
    
    function display(value){
        clear()
        pscreen(value)
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



