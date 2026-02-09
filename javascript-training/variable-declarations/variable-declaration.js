//In JavaScript, we can declare variables by using three different keywords: 

// 1. var (avoided in modern JS)
// 2. let
// 3. const

// These three different variable declarations will differ mainly based on four important parameters: 

// 1.initialization
// 2.reassignment
// 3.re-declaration
// 4.scope


// 1.initialization ==> Adding the value at the time of declaration. 
const a = 10; //Constant value must be initialized. 
let b; //can be initialized later.
var c; //can be initialized later.

// 2.reassignment ==> Changing the value of a variable after it has been declared.
//a=20; //Error, it's not allowed to reassign a constant variable.
b=20; //Allowed, we can reassign a variable declared with let.
c=20; //Allowed, we can reassign a variable declared with var.

// 3.re-declaration ==> Using the same variable to store some other data within the same file. 
// const a = "abc"; //Error, it's not allowed to re-declare a constant variable.
// let b = "abc"; //Error, it's not allowed to re-declare a variable declared with let.
var c = "abc"; //Allowed, we can re-declare a variable declared with var.

// 4.scope ==> Where can we use the data? 
// const and let are block-scoped
// var is not block-scoped

{
    const x = 100;
    let y = 200;
    var z = 300;
    // console.log(x); //Allowed, x is accessible within this block.
    // console.log(y); //Allowed, y is accessible within this block.
    // console.log(z); //Allowed, z is accessible within this block.
}

   // console.log(x);//Error, x is not accessible outside the block.
   //console.log(y);//Error, y is not accessible outside the block.
    console.log(z);//Allowed, z is accessible outside the block.

console.log("Execution completed successfully!");