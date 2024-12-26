export class Employee{

    //we just added export to make this class exportable to other modules/classes/files
    
    public employeeName!: string;
    public employeeAge!: number;
    public employeeSalary!: number;

    public static isEmployeed: boolean;

    static{
        Employee.isEmployeed = true;
        //in java this would be isEmployeed = true;
        //but in ts, we call it via class name  
    }

    public work():void{
        console.log(`${this.employeeName} is working`);
    }//void means this method doesn't return anything

    public static payTaxes(): void{
        console.log("Paying taxes for all employees");
    }

    constructor(name: string, age: number, salary: number){
        this.employeeName = name;
        this.employeeAge = age;
        this.employeeSalary = salary;
    }

    //this exclamation mark indicates that this variable will be initialized in the constructor soon
    //meaning we say hey compiler, calm down, this variable will be set in the constructor
    //otherwise, it will give a compile error
    //it is because typescript has a very strict type checking mechanism

    //also, IMPORTANT, in ts, objects must be created in another module(ts file)
    //not here!!!



}

export function greeting(): void{
    console.log("Test Employee");
};



