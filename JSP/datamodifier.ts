// public
/*
class Employee {
    public empCode: string;
    empName: string;
}

 

let emp = new Employee();
emp.empCode = "123";
emp.empName = "Swati";
console.log(emp.empCode);
console.log(emp.empName);
*/

 

//private
class Employee {
    private empCode: number;
    empName: string;
    
    constructor(empCode: number) {
            this.empCode = empCode;
    }
    dipsplay():void
    {
        console.log(this.empCode);
    }
    
}

 

let emp = new Employee(123);
//emp.empCode = 123; // Compiler Error
emp.empName = "Swati";//OK
//console.log(emp.empCode);
console.log(emp.empName);
emp.display();

 

//protected
class Employee {
    public empName: string;
    protected empCode: number;

 

    constructor(name: string, code: number){
        this.empName = name;
        this.empCode = code;
    }
}

 
class SalesEmployee extends Employee{
    private department: string;
    
    constructor(name: string, code: number, department: string) {
        super(name, code);
        this.department = department;
    }
    dipsplay():void
    {
        console.log(this.empCode);
        console.log(this.department);
    }
    
}

 

let emp = new SalesEmployee("Rajiv", 123, "Sales");
empObj.empCode; //Compiler Error
