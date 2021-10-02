function printDATA(): void {
    console.log('Notes of types script')
    return null;
}
let notes : void = printDATA() ;
console.log(notes);

function throwError(errorMsg: string) : never {
    throw new Error(errorMsg);
}
function keepProcessing(): never {
    while (true) {
        throwError("Error occur")
//console.log('I always does')
    }
}
keepProcessing();