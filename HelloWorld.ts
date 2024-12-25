console.log('Hello, World!');

let x:number = 10;

console.log(`The value of x is: ${x}`);

function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

greet('TypeScript');


let arr: number[] = [1, 2, 3, 4, 5];

for (let number of arr) {
    console.log(number);
}