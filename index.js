const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    '%': (firstOperand, secondOperand) => firstOperand % secondOperand,

}
// const calculate=(btnvalue)=>{
// if(btnvalue==="=" && btnvalue !==""){
//     input=eval(input.replace("%","/100"));
// }
// else(btnvalue=="Del") 
// input = input.toString().slice(0,-1);


// }

function clearDisplay() {
    display.value = "";
}
    
function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";
    }
}