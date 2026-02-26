class Parent {
    //Parent Class Value
    course: string = "JavaScript";

    printName() {
        console.log("Parent Class Method");
    }
}

class Child extends Parent {
    //Child Class value
    course: string = "TypeScript";

    printName() {
        console.log("Parent Child Method");
    }

    //Method Level
    printCourse(course: string) {
        console.log("Course Name :" + course);
        // console.log("Course Name :" + new Child().course);
        // console.log("Course Name :" + new Parent().course);
        console.log("Course Name :" + this.course);
        console.log("Course Name :" + super.printName());
    }

}

let obj = new Child();
obj.printCourse("Playwright");
