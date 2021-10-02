abstract class SPerson{
private depart : string;
private name : string;
constructor(depart, name){
        this.depart=depart;
        this.name =name;
    }
    getName(){
        return this.name;
    }
    getDepart(){
        return this.depart;
    }
    abstract calculateCommission(): void;
}

class ContractSP extends SPerson{
    calculateCommission(): void {
        throw new Error("Method not implemented.");
    }
    basicSal:number;
    inc:number;
    constructor(basicSal:number, name:string, department:string)
    {
        super(department, name);
        this.basicSal= basicSal;
    }
    calculateComission(){
            this.inc=(5/this.basicSal)*100;
            this.basicSal =this.basicSal + this.inc;
            console.log ( super.getName() = "from department " + super.getDepart() + "Your salary is : "+ this.basicSal)
    }
}

class PayrollSP extends SPerson{
    calculateCommission(): void {
        throw new Error("Method not implemented.");
    }
    basicSal:number;
    inc:number;
    constructor(basicSal:number, name:string, department:string)
    {
        super(department, name);
        this.basicSal= basicSal;
    }
    calculateComission(){
            this.inc=(15/this.basicSal)*100;
            let total = this.basicSal + this.inc;
            console.log(super.getName() + "from department " + super.getDepart() + "Your salary is : " + this.basicSal)
    }
}

let obj1 = new ContractSP(100,"Anant","CSE");
obj1.calculateComission();
let obj2 = new PayrollSP ( 100,"Ritik","IT");
obj2.calculateComission();
