class Car{
    name:string;

    constructor(name:string)
    {
        this.name=name;
    }
    display():void{
        console.log(this.name);
    }
    abstract find(string)
}