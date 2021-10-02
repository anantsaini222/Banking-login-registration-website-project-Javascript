var code;
code = 123;
code = "ABC";
var empId;
empId = 111;
empId = "E111";
function displayType(code) {
    if (typeof (code) === "number")
        console.log('Code is number.');
    else if (typeof (code) === "string")
        console.log('Code is String');
    else
        console.log('Code is boolean');
}
