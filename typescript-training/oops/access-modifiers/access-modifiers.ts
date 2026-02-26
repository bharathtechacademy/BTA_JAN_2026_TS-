//Access Modifiers in TypeScript

//1. public / no keyword ==> Can be accessed from anywhere. 
//2. protected ==> Can be accessed either within the class or its subclasses 
//3. private ==> Can be accessed only within the class. 

class Person {

    public name: string = "Bharath Reddy"; //public data (accessable everywhere)
    protected age: number = 34;//protected data (can be accessable with in the class and child classes only)
    private salary: number = 100000;//private data (can be accessable only with in the class)

    //Access all the members within the class
    printEmpData() {
        console.log("Accessing members within the class :");
        console.log(this.name);
        console.log(this.age);
        console.log(this.salary);
    }

    public getSalary() {
        return this.salary;
    }

    //private data member
    private pancard: string="";

    public setPancard(pancard: string) {
        this.pancard = pancard;
    }

    public getPancard() {
        return this.pancard;
    }
}

class Project {
    //Access all the members outside of class
    printEmpData() {
        console.log("Accessing members outside of the class :");
        let obj = new Person();
        console.log(obj.name);
        console.log(obj.age);
        console.log(obj.salary);
        console.log(obj.getSalary());

        obj.setPancard("ABCDE1234F");
       console.log(obj.getPancard());

    }
}

class Employee extends Person {
    //Access all the members within the class
    printEmpData() {
        console.log("Accessing members in the child class :");
        console.log(this.name);
        console.log(this.age);
        console.log(this.salary);
    }
}

