var volume;
(function (volume) {
    volume[volume["low"] = 10] = "low";
    volume[volume["medium"] = 11] = "medium";
    volume[volume["high"] = 12] = "high";
})(volume || (volume = {}));
;
// enum colors{
//     colo0= FF#33,
//     colo1= FF#33,
//     colo2= FF#33,
//     colo3= FF#33
// }
var SalaryComponent;
(function (SalaryComponent) {
    SalaryComponent[SalaryComponent["basicSalary"] = 5000] = "basicSalary";
    SalaryComponent[SalaryComponent["deduction"] = getDeduction(SalaryComponent.basicSalary)] = "deduction";
    SalaryComponent[SalaryComponent["allowances"] = getAllowances(SalaryComponent.basicSalary)] = "allowances";
    SalaryComponent[SalaryComponent["netSalary"] = ((SalaryComponent.basicSalary + SalaryComponent.allowances) - SalaryComponent.deduction)] = "netSalary";
})(SalaryComponent || (SalaryComponent = {}));
function getAllowances(basicSalary) {
    if (basicSalary >= 5000) {
        return 15000;
    }
    else {
        return 10000;
    }
}
function getDeduction(basicSalary) {
    if (basicSalary >= 5000) {
        return 3500;
    }
    else {
        return 15000;
    }
}
console.log('Net Salary is');
console.log(SalaryComponent.netSalary);
var Car;
(function (Car) {
    Car["Model"] = "Dizel";
    Car[Car["Year"] = 2015] = "Year";
    Car[Car["running"] = 100] = "running";
})(Car || (Car = {}));
console.log(Car);
console.log(Car.Year);
console.log(Car.running);
