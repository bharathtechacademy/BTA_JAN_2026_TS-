//Polymorphism:Polymorphism is a concept of having multiple implementations with one single method. 

//Two types of polymorphism
//1. Compile-time polymorphism (Method Overloading) ==> Having multiple methods with the same name within the same class, with different parameters 
//2. Runtime polymorphism (Method Overriding)

class Maths {

    // add(a: number, b: number): number {
    //     return a + b;
    // }

    // add(a: string, b: string): string {
    //     return a + b;
    // }

    // add (a,b){
    //     return a+b;
    // }

    // add (a,b){
    //     return a+b;
    // }

    //alternative 1
    add(a: any, b: any): any {
        return a + b;
    }

     //alternative 2
    sum(a: any, b?: any, c?: any): any {
        return a + b;
    }

}



