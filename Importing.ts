import { Employee, greeting } from './ClassAndObjects';

let employee1 = new Employee("Mary", 30, 5000);

employee1.work();

//in ts, if you wanna access static property, you need to use class name
Employee.payTaxes();

//this is one difference between ts and js

let employee2 = new Employee("Omer", 40, 600);

