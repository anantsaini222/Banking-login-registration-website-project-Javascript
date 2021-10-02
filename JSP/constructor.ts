class students{
    rollnumber: number;
    sName: string;

    constructor(rollnumber: number, sName:string){
        this.rollnumber = rollnumber;
        this.sName = sName;
    }
    displayData() : string{
        return 'Your name is ' + this.sName;
    }
}

let s = new students(100,"Anant");
console.log(s.displayData());


//inheritance
class diplmastudent extends students
{
        course: string;
        marks: number;
        constructor(rollnumber: number, sName:string,course: string, marks: number){
            super(rollnumber, sName)
            this.course = course;
            this.marks = marks;

        }
        printData(): string
        {
            return 'You have scored '  +this.marks + ' in ' + this.course;
        }

}

let ds= new diplmastudent(22,'Anant','CSE',98)
console.log(ds.displayData());
console.log(ds.printData());
