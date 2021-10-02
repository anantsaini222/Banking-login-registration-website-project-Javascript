// function Enrolling(name: string, course?: string ) : string {
//     return name + 'has enrolled for' + course + "!";
// }
// Enrolling('Jatin','Computer');
// Enrolling('Lalit');
// //deafult parameter
// function CheckGrade( name: string, grade: string = "A") : string {
//     if (grade="B")
//         return name + ' ! has ' + grade + 'Grade ';
//     else 
//         return name + '! has ' + grade + 'Grade';
// }
// CheckGrade('Rutuja','B');
// CheckGrade('Jatin','A');
// CheckGrade('Sumit');
// //Annonymous function
// let GenratePin = function() {
//     let x=10;
//     let y=20;
//     let result = ((x*y)-(x+y))/30;
//     console.log(result);
// };
// //pin();
//function overloading
function callMarks(maths, science) {
    return maths + science;
}
// function callMarks(maths:number, science:number, language:number) : number{
//     return maths + science + language;
// }
// function callMarks(a:any, b:any) : any{
//     return a+b;
// }
callMarks(33, 44);
callMarks(33.33, 44.99);
