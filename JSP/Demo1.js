var firstNumber = 10;
function displayNumber() {
    //function scope
    var secondNumber = 20;
    if (secondNumber > 0) {
        //scope within
        var thirdNumber = 30;
        console.log(thirdNumber);
    }
    console.log(firstNumber);
    // console.log(secondNumber);
    //console.log(thirdNumber);
}
function printNumber() {
    console.log(firstNumber);
}
displayNumber();
printNumber();
