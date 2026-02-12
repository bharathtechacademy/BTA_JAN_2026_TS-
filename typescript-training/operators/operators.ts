//Operators in TypeScript : Set of special characters that we are going to use in our TypeScript programming language to perform different types of operations. 

//There are mainly five different types of operators available: 

//1. Arithmetic operators ==> The special characters used in mathematical operations. (+,-,*,/,%,++,--)
//2. Assignment operators==>The special characters used to assign a value to a variable. (=,+=,-=,*=,/=,%=)
//3. Comparison operators==>The special characters used to compare two values. (==,===,!=,!==,>,<,>=,<=)
//4. Logical operators==>The special characters used to perform logical operations. (&&,||,!)
//5. Ternary operator ==> The special character used to perform a conditional operation. (condition ? expression1 : expression2)

//1. Arithmetic operators ==> The special characters used in mathematical operations. (+,-,*,/,%,++,--)
//+ addition
//- subtraction
//* multiplication
/// division
//% modulus (remainder) 
//++ increment (x++ ==> post increment, ++x ==> pre increment)
//-- decrement (x-- ==> post decrement, --x ==> pre decrement)

let a: number = 10;
let b: number = 5;
console.log("Addition: " + (a + b)); // 15
console.log("Subtraction: " + (a - b)); // 5
console.log("Multiplication: " + (a * b)); // 50
console.log("Division: " + (a / b)); // 2
console.log("Modulus: " + (a % b)); // 0

//++  ==> +1 ==> x++ ==> x= x+1;
//-- ==> -1 ==> x-- ==> x = x-1;
console.log("post increment: " + (a++)); //post execution of this line ,then increase the value by 1
console.log("After next line of post increment: "+ a);
console.log("pre-increment: " + (++b)); //before execution of this line , increase the value by 1 
console.log("post decrement: " + (a--)); //post execution of this line ,then decrese the value by 1
console.log("After next line of post decrement: "+ a);
console.log("pre-decrement: " + (--b)); //before execution of this line , decrese the value by 1 

//2. Assignment operators==>The special characters used to assign a value to a variable. (=,+=,-=,*=,/=,%=)
let c: number = 20; // assignment operator
console.log("Initial value of c: " + c);
c+=10;// c= c+10;
console.log("C+=10 value of c: " + c);
c-=10;// c= c-10;
console.log("C-=10 value of c: " + c);
c*=10;// c= c*10;
console.log("C*=10 value of c: " + c);
c/=10;// c= c/10;
console.log("C/=10 value of c: " + c);

//3. Comparison operators==>The special characters used to compare two values. (==,===,!=,!==,>,<,>=,<=)
//== represents loose equality ==> It will just check only the value without considering the datatype. 
//=== represents strict equality ==> It will check Value as well as datatype
let x:number = 10;
let y:any = "10"; 
console.log("Loose Equality with == : "+(x==y));
console.log("Strict Equality with === : "+(x===y));
console.log("Loose Equality with != : "+(x!=y));
console.log("Strict Equality with !== : "+(x!==y));

//4. Logical operators==>The special characters used to perform logical operations. (&&,||,!)
//&& (Logical AND  ==> result will be true only when all conditions are true )
//|| (Logical OR  ==> result will be true if any one of the condition is true )
//! (logical NOT ==> opposite result)

let i:number = 10;
let j:number = 20;

console.log((i<j) && (i==j)); //true and false = false
console.log((i<j) || (i==j)); //true or false = true
console.log(!((i<j) || (i==j))); //not (true or false) = not true =false

//5. Ternary operator ==> The special character used to perform a conditional operation. 
// (condition ? valueIfTrue : valueIfFalse)
let age:number = 17;
let canVote:string = (age>=18) ? "Eligible to Vote" : "Not-eligible to Vote";
let eligible :boolean = (age>=18) ? true :false;
console.log(canVote);
console.log(eligible);

