//function: a function is a block of code or a collection of statements written together to complete a specific task. 

//1.function without parameters and without return type
//Creating a common function that is not at all going to take any input. At the same time, it is not going to give you any output as well.

function greet(): void { //void specifies that the function does not return any value.
    console.log("Hello Buddy, welcome to TypeScript training!");
}

//calling the function
greet();

//2.function with parameters and without return type
//Creating a common function that is going to take input, but it is not going to give you any output data.

function greetPerson(name: string): void { //void specifies that the function does not return any value.
    console.log(`Hello ${name}, welcome to TypeScript training!`);
}

//calling the function
greetPerson("Amit");

//3. Function with parameters and return type. 
// Creating a common function that is going to take some input and finally it is going to provide you some output value as well. 
function addNumbers(a:number, b:number) :number{
    return a+b;  //return keyword will be used to return the data
} 

//calling the function
console.log(addNumbers(10,20));

//4. Function without parameters but with return type. 
//Creating a common function that is going to provide some output without taking any input parameters. 
function getCurrentYear():number{
    let currentDate = new Date();
    return currentDate.getFullYear();
}

//calling the function
console.log(getCurrentYear());

//5. Function with optional parameters. 
//Creating a common function that can take some input parameters, out of that some parameters are optional to enter. 
//? Represents the parameter is optional. 
function printEmpData(name:string, age?:number): void{
    if(age !== undefined){
        console.log("Emplyee Name : "+name +", Emp Age is : "+age)
    }else{
         console.log("Emplyee Name : "+name +", Emp Age is not provided")
    }
}

//calling the function
printEmpData("Bharath",34);
printEmpData("Anusha");

//6. Function with default parameters. 
//Creating a function that can take some input parameters and some of those parameters having default values. 
//default value ==> If the user is not going to provide any value, by default it is going to consider the default value. 
function printEmpVisaInfo(name:string , visaStatus:boolean=false): void{
    console.log("Employee name is : "+name +", Employee visa status is :"+visaStatus);
}

//calling the function
printEmpVisaInfo("Bharath",true);
printEmpVisaInfo("Kala");

//7. Function with rest parameters. 
// Creating a common function that can take multiple input parameters as an array. 
function sumOfNumbers(...numbers:number[]):void {
    let sum:number =0;
    for(let num of numbers){
        sum +=num;
    }
    console.log(sum);
}

//calling the function
sumOfNumbers(10,20);
sumOfNumbers(10,20,30);
sumOfNumbers(10,20,30,40);