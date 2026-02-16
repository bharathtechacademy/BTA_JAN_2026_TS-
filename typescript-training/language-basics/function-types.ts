// Function Types in TypeScript

// There are mainly three different types of functions that will be used in JavaScript and TypeScript. 

// 1. Named functions 
// 2. Arrow functions / lambda functions
// 3. Anonymous function


// 1. Named functions 
// Named functions are nothing but the functions that are declared explicitly with some name. 

// Syntax: 

// function functionName(parameters):returnType {
//   statements
// }

function greet(name:string): string {
    return "hello "+name+", good Morning";
}

//calling function
console.log(greet("Anurag")); // Output: hello Anurag, good Morning

// 2. Arrow functions / lambda functions
// Arrow functions are nothing but the function that we are going to write without any name. And the implementation will be written by using arrow mark. 
// Syntax: 

// let functionName = (parameters):returnType  ==> implementation;


//regular function
function sum(a:number , b: number): number {
    let c:number = a+b;
    return c;
}

//calling function
console.log(sum(10,20));

//arrow function
let add = (a:number , b: number):number => a+b;
let  greeting = (name:string): void => console.log("hello "+name+", good Morning");
let currentYear = ():number =>  new Date().getFullYear();


//calling arrow function
console.log(add(10,20));
greeting("Anurag");
console.log(currentYear());



// 3. Anonymous function