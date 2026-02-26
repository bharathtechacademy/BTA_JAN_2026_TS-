class Employee {

    empId: number;//empty

    constructor(id: number) {
        this.empId = id;
    }

    //method 1
    printEmployeeDetails(empName: string) {
        console.log("Employee Id: " + this.empId);
        console.log("Employee Name: " + empName);
    }

    //method 2
    printEmployeeProjects(empProject: string) {
        console.log("Employee Id: " + this.empId);
        console.log("Employee Projects: " + empProject);
    }

    //method 3
    printEmployeeRole(empRole: string) {
        console.log("Employee Id: " + this.empId);
        console.log("Employee Role: " + empRole);
    }
}

//creating object of Employee class
let emp = new Employee(1234);

//calling method 1
emp.printEmployeeDetails("Bharath Reddy");
//calling method 2
emp.printEmployeeProjects( "TypeScript Training");
//calling method 3
emp.printEmployeeRole("Trainer");