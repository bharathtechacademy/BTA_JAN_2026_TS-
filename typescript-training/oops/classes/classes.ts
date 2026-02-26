//OOPS in Type Script

//1. class
//2. object
//3. constructor

//1. class : class is a template that can store data, methods, and objects together at one place. 

//Syntax of class :

// class className{
//     //data
//     //method
//     //object
// }

//2. object : Object is an instance of a class. (Object is a xerox copy of a class. )

//Syntax of object :

// let objectName = new className();
//objectName.methodName();

//3. constructor : Constructor is a special method with the name 'constructor' created by default in every class. 
// It is used to initialize the data members of the class. It is automatically called when an object of the class is created.

//Creating employee class
class Employee{

    //default constructor 
    constructor(){
        console.log("This is constructor of Employee class");
    }

    empId : number = 101;
    empName : string = "John";

    empAddress():void{
        console.log("Noida, UP" );  
    }

}

//Access the data from the class by creating object
let obj = new Employee();//new + constructor = object
console.log(obj.empId);
console.log(obj.empName);
obj.empAddress();