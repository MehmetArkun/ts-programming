import {Shape, Circle, Cube, Cylinder, Square, Rectangle} from "./Abstraction";

let circle: Circle = new Circle(3);

let rectangle: Rectangle = new Rectangle(5, 4);

let square: Square = new Square(6);

let cube: Cube = new Cube(7);

let cylinder: Cylinder = new Cylinder(8, 9);

//we used different reference variables to store objects of different classes

console.log("--------------------------------------");

let shape: Shape;

shape = new Circle(5);

shape = new Square(5);

shape = new Cube(5);

//then here, we used one reference variable to store objects of different classes
//this is called polymorphism in programming

console.log("------------------------------------");

let shapes: Shape[] = [
    new Circle(5), 
    new Square(5), 
    new Cube(5), 
    new Cylinder(5, 6),
    new Rectangle(5, 6)
];

// we crated an array of Shape and added objects of different classes via polymorphism
// in polymorphism, we can only reference to child class objects
// in polymorphism, "is a relationship" between parent and child classes is a must



