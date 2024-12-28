abstract class Shape {

    // calculatePerimeter & calculateArea

        public abstract calculateArea():number;

        public abstract calculatePerimeter():number;

}


class Rectangle extends Shape{

    public width !: number;
    public length !: number;

    constructor(width: number, length: number){
        super();
        this.width = width;
        this.length = length;
    }

    public calculateArea():number{
        return this.width * this.length;
    };

    public calculatePerimeter():number{
        return 2 * (this.width + this.length);
    };
}

class Circle extends Shape{

    public radius!: number;
    public pi = Math.PI;

    constructor(radius: number){
        super();
        this.radius = radius;
    }
    public calculateArea():number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    public calculatePerimeter():number {
        return 2 * Math.PI * this.radius;
    }

 }

class Square extends Shape{

    public side !: number;

    constructor(side: number){

        super();
        this.side = side;

    }


    public calculateArea():number{
        return this.side * this.side;
    }

    public calculatePerimeter():number{
        return 4 * this.side;
    }
}

export interface Volume{
     calculateVolume(): number;
}

export class Cube extends Shape implements Volume{
     // side
     public side !: number;

     constructor(side: number){
         super();
         this.side = side;
     }
     public calculateArea(): number {
         return 6 * Math.pow(this.side, 2);
     }
     public calculatePerimeter(): number {
         return 12 * this.side;
     }
     public calculateVolume(): number {
         return Math.pow(this.side, 3);
     }
}

export class Cylinder extends Shape implements Volume{
     // radius, height
     public radius !: number;
     public height !: number;

     constructor(radius: number, height: number){
         super();
         this.radius = radius;
         this.height = height;
     }
     public calculateArea(): number {
         return 2 * Math.PI * Math.pow(this.radius, 2) + 2 * Math.PI * this.radius * this.height;
     }
     public calculatePerimeter(): number {
         return 2 * Math.PI * this.radius + 2 * Math.PI * this.height;
     }
     public calculateVolume(): number {
         return Math.PI * Math.pow(this.radius, 2) * this.height;
     }
     
}

