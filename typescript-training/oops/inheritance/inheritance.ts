//Inheritance : Inheritance is a concept of extending parent class properties into child class without creating an object. 

//1. single inheritance
//2. Multilevel inheritence
//3. Hierarchical inheritance
//4. Multiple inheritance (this is not supported in typescript but we can achieve this using interfaces)



//class1
class class1{

    empName: string = "Bharath";
    empId: number = 1234;
}


//class2
class class2 extends class1{  //child extends parent

    empSalary : number = 50000;

    printEmpDetails() {

        console.log("Employee Name : " + this.empName); //this means current class instance
        console.log("Employee Id : " + this.empId);
        console.log("Employee Salary : " + this.empSalary);
    }

} 

class class3 extends class1{  //child extends parent

    empDept : string = "IT";
}


