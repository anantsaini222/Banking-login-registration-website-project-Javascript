function printDATA() {
    console.log('Notes of types script');
    return null;
}
var notes = printDATA();
console.log(notes);
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
function keepProcessing() {
    while (true) {
        throwError("Error occur");
        console.log('I always does');
    }
}
keepProcessing();
