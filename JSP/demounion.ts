let code: (string | number );
code = 123;
code = "ABC";

let empId: string | number;
empId = 111;
empId ="E111";

function displayType(code: (string | number | boolean))
{
    if (typeof(code) === "number")
        console.log('Code is number.')
    else if(typeof(code) === "string")
            console.log('Code is String')
    else
        console.log('Code is boolean')
}