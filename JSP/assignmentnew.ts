abstract class sperson{
    department:string;
    sname:string;

    constructor(department,sname){
        this.department=department;
        this.sname=sname;
    }


    abstract calclulatecommission();

}

    class calperson extends sperson
    {
        salary:number;
        incentive:number;
        constructor(salary:number,sname:string,depart:string){
            super(depart,sname);
            this.salary=salary;
        }

        calclulatecommission()
        {
            this.incentive=(5/this.salary)*100;
            this.salary=this.salary;
            let sum=this.salary+this.incentive;

            console.log("employee name:"+this.sname);
            console.log("employee department:"+this.department);
            console.log("employee salary:"+this.salary);
        }
    }
    class cperson extends sperson
    {
        salary:number;
        incentive:number;
        constructor(salary:number,sname:string,depart:string){
            super(depart,sname);
            this.salary=salary;
        }

        calclulatecommission()
        {
            this.incentive=(5/this.salary)*100;
            this.salary=this.salary;
            let sum=this.salary+this.incentive;

            console.log("employee name:"+this.sname);
            console.log("employee department:"+this.department);
            console.log("employee salary:"+this.salary);
        }
    }


let sp=new cperson(1,"Anant","IT");
let pp=new cperson(2,"Ritik","CSE");
sp.calclulatecommission();
pp.calclulatecommission();