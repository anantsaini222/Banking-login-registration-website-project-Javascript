interface Grading{
    calGrade:(number)=>string;
}


class students{
    rollnumber:number;
    sname:string;

    constructor(rollnumber:number,sname:string)
    {
        this.rollnumber=rollnumber;
        this.sname=sname;
    }
    displayData():string{
         return 'Your name is'+this.sname;
    }

    calGrade(marks:number):string{
        if(marks>70)
          return "A";
        else
        return "B";  
    }
    //overriden method
    calMarks(lang:number,master:number):number
     {
         return (lang+master);
     }
}
let s=new students(234,'Roshan');
//console.log(s.displayData());
console.log(s.calMarks(33,43));
console.log(s.calGrade(s.calMarks(33,43)));

//inheritance
class diplomastudent extends students{
     course:string;
     marks:number;
     constructor(rollnumber:number,sname:string,course:string,marks:number)
     {
         super(rollnumber,sname);
         this.course=course;
         this.marks=marks;
     }
     printData():string{
         return 'you have scored' +this.marks+'in'+this.course;
     }
     //overriden method
     calMarks(lang:number,master:number):number
     {
         return (lang+master)+10;
     }
}

let ds=new diplomastudent(22,'Roshan','CSE',85);
console.log(ds.displayData());
console.log(ds.printData());
console.log(ds.calMarks(33,43));