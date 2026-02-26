//Types of Variables in TypeScript

//1. local variable  ==> The variable declared inside the method . This variable we can access only within the method. Outside of the method, it is not allowed. 
//2. instance variable ==> The variable declared outside of the method and inside the class. Whenever we want to access this variable, we can create an instance of that particular class and we can access the data. 
//3. static variable ==> The variable declared outside of the method and inside the class, along with the static keyword. We can access this variable directly by taking a reference to the class name without creating any object. 

class Employee {

 empName: string = "Bharath Reddy"; //instance variable

 static company: string = "Tech Solutions";//static variable

 static printEmpDetails():void {
    let empSalary: number = 100000; //local variable
    console.log("Employee Salary :"+empSalary);
 }

}


let obj = new Employee();
//console.log(obj.empSalary);
console.log(obj.empName);
Employee.company = "Tech Solutions Pvt Ltd";
console.log(Employee.company);
Employee.printEmpDetails();
