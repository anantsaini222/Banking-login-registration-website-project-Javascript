enum volume{
    low=10,
    medium=11,
    high=12
};
// enum colors{
//     colo0= FF#33,
//     colo1= FF#33,
//     colo2= FF#33,
//     colo3= FF#33
// }

enum SalaryComponent{
    basicSalary=5000,
    deduction = getDeduction(basicSalary),
    allowances = getAllowances(basicSalary),
    netSalary=((basicSalary+allowances)-deduction)
}
function getAllowances (basicSalary: number) : number {
    if (basicSalary>=5000)
    {
        return 15000;
    }
    else{
        return 10000;
    }
}
function getDeduction (basicSalary: number) : number {
    if (basicSalary>=5000){
        return 3500;
    }
    else{
        return 15000;
    }
}
console.log('Net Salary is')
console.log(SalaryComponent.netSalary)


enum Car{
    Model = 'Dizel',
    Year = 2015,
    running=100
}
console.log(Car)
console.log(Car.Year)
console.log(Car.running)