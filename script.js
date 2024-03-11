function displayNumber(num) {
// display a num in text field
    display.value+=num
    
}

// clear the text 

function cleartext() {
    display.value=""
    
}

// evaluate the expression

function evaluateExpression() {
    // exp=display.value
    // output=eval(exp)
    // display.value=output
display.value=eval(display.value)

}

// to remove the last character
function removeLastChar() {
   display.value= display.value.slice(0,-1)
    
}