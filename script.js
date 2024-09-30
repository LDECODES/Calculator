document.addEventListener("DOMContentLoaded", function() {

    let value = 0;
    let dec1 = false;
    let dec2 = false;
    var periodButton = document.getElementById('.');
    let pScreen = document.querySelector('.primary-screen')
    let sScreen = document.querySelector('.secondary-screen')
    let savedEquation = ''
    let savedScreen = ""
    let noOfOperators = 0;
    let keydownActive = false
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
        handleInput(target.id);  
    });
    });

    document.addEventListener('keydown', event => {
        if (keydownActive) return;  
        keydownActive = true;

        handleInput(event.key);  

    
        setTimeout(() => keydownActive = false, 200);
    });

    
    function handleInput(input) {
        switch(input){
            case '1': case '2': case '3': case '4': case '5': 
            case '6': case '7': case '8': case '9': case '0':
            case '+': case '-': case '÷': case 'x': case '.': 
                savedEquation = saveEquation(input);
                display(savedEquation);
                break;
            case '=':
                operate(equationArray);
                break;
            case 'Enter':
                operate(equationArray);
                break;
           
            case 'c':
                clear();
                break;
            case 'clear':
                clear();
                break;
            case 'Backspace':
                let newEquation = del();
                display(newEquation);
                break;
            case 'del' :
                 newEquation = del();
                display(newEquation);
                break;
            default:
                break;
        }
    }



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
    
        
        const isNumber =  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."].includes(value);
    
       
        const isOperator = ["+", "-", "x", "÷"].includes(value);
     console.log(isNumber)
       
        if (equation.firstOperator === '' && isNumber) {

            if (value === "." && dec1 === false) {
                equation.firstNumber.push(value);
                dec1 = true;
                periodButton.disabled = true;
                console.log("Decimal button disabled");

            }else {
                equation.firstNumber.push(value);
            }
            
        }

        else if (equation.firstOperator === '' && isOperator) {
            if (equation.firstNumber.length > 0) {  // Ensure there's a number before adding operator
                equation.firstOperator = value;
                periodButton.disabled = false;
                console.log("First operator set: ", equation.firstOperator);
            }
        }
    
        
        else if (equation.firstOperator !== '' && equation.secondOperator === '' && isNumber) {
            if (value === "." && dec2 === false) {
                equation.secondNumber.push(value);
                dec2 = true;
                periodButton.disabled = true;
                console.log("Decimal button disabled");

            }else {
                equation.secondNumber.push(value);
            }
        }
    
        
        else if (equation.firstOperator !== '' && equation.secondNumber.length > 0 && isOperator && equation.secondOperator === '') {
            equation.secondOperator = value;
            console.log("Second operator set: ", equation.secondOperator);
        }
    
        
        else if (equation.secondOperator !== '' && isNumber) {
            equation.secondNumber.push(value);
            console.log("Second number continued: ", equation.secondNumber);
        }
    
        
        let firstNumber = Array.isArray(equation.firstNumber) ? equation.firstNumber.join('') : Array.from(equation.firstNumber).join('');
        let secondNumber = Array.isArray(equation.secondNumber) ? equation.secondNumber.join('') : Array.from(equation.secondNumber).join('');
        let firstOperator = equation.firstOperator;
        let secondOperator = equation.secondOperator || '';
        console.log(secondOperator)
        
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
            joinedEquation = array.join('')
            sScreen.textContent = `${joinedEquation}  `
            equationArray = []
            equation = {
                firstNumber: `${answer}`,
                secondNumber: [],
                firstOperator: `${equation.secondOperator}`,
                secondOperator: '',
            }
            dec1 = false
            dec2 = false
            periodButton.disabled = false;

            

            //pScreen.textContent = `${equation.firstNumber}`
            //sScreen.textContent = `${equation.firstNumber} ${equation.firstOperator} ${equation.secondNumber} ${equation.secondOperator}`
            
            equationArray = [equation.firstNumber, equation.firstOperator, equation.secondNumber, equation.secondOperator].filter(Boolean);
            joinedEquation = equationArray.join('')
            
            
            
        }

        
            
    }
    function pscreen (value) {
        pScreen.textContent = value
    }
     function del() {
        if (equation.secondOperator) {
           
            equation.secondOperator = '';
        } else if (equation.secondNumber.length > 0) {
            
            equation.secondNumber.pop();
        } else if (equation.firstOperator) {
          
            equation.firstOperator = '';
        } else if (equation.firstNumber.length > 0) {
           
            equation.firstNumber.pop();
        }
    
      
        let firstNumber = Array.isArray(equation.firstNumber) ? equation.firstNumber.join('') : Array.from(equation.firstNumber).join('');
        let secondNumber = Array.isArray(equation.secondNumber) ? equation.secondNumber.join('') : Array.from(equation.secondNumber).join('');
        let firstOperator = equation.firstOperator;
        let secondOperator = equation.secondOperator || '';
        
        equationArray = [firstNumber, firstOperator, secondNumber, secondOperator].filter(Boolean); 
    
        let joinedEquation = equationArray.join('');
        console.log("Deleted last character, Stack: ", equationArray);
    
        return joinedEquation; 
        
    }
    
    function display(value){
        
        pscreen(value)
    }

    function clear(){
        pScreen.textContent = ''
        equationArray = []
        equation = {
            firstNumber: [],
            secondNumber: [],
            firstOperator: '',
            secondOperator: '',
        }
        dec1 = false
        dec2 = false
        periodButton.disabled = false;
        display("Enter New Equation")
        sScreen.textContent = '';
        
    
    }

    
}
   )