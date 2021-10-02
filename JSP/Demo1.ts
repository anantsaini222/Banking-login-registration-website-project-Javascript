let firstNumber:number=10;

function displayNumber()
{
    //function scope
    let secondNumber:number=20;

    if(secondNumber>0)
    {
            //scope within
            let thirdNumber:number=30;
            console.log(thirdNumber);
    }
    console.log(firstNumber);
   // console.log(secondNumber);
    //console.log(thirdNumber);
}
function printNumber()
{
    console.log(firstNumber);
}

displayNumber();
printNumber();