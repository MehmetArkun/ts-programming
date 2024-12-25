function addition(a: number , b: number): number{
return a + b;
};

addition(5, 10); 
// it also gives error if I leave it empty
//in js, fucntions with emtpy arguemnts/parameeters are allowrd and it returns undefined NaN
// in ts, it gives compile error

function addition2(a: number , b: number, c: number = 0): number{
return a + b + c;
};

// by giving 0 as default value to c, we can call the function like this

