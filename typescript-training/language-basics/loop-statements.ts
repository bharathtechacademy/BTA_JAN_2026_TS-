//Loop Statements ==> Loop the statements or execute the same statement multiple times.

//Before Loops
//let empName: string = "Jyothi";
// console.log(empName);
// console.log(empName);
// console.log(empName);
// console.log(empName);
// console.log(empName);
// console.log(empName);
// console.log(empName);
// console.log(empName);
// console.log(empName);
// console.log(empName);

//Loop Statements are 2 categories

//1. for loop ==> when we know the total number of iterations to be executed before itself
//2. while loop ==> when we dont know the total number of iterations to be executed before itself

//1. for loop 
//Syntax:
// for(condition-to-start; condition-to-end; interval){
//     //code to be executed
// }

let empName: string = "Jyothi";

for(let i:number=1; i<=10; i++){
 console.log(empName); //run for 10 times
}

//2. while loop
//Syntax:
// while(condition-to-start){
//     //code to be executed
// }

let i:number=1;
let isPageLoaded: boolean = false;

while(i>0){
    if(isPageLoaded || i==5){
        break; //break the loop intentionally when the page is loaded or when the page is refreshed already for 5 times
    }
    console.log("Refresh the Page"); 
    i++;
}


// Special cases in for loop

//for...of loop ==> used to iterate the values of an array or collection
//for...in loop ==> used to iterate the properties of an object

//for...of loop ==> used to iterate the values of an array or collection

let empNames: string[] = ["Jyothi", "Sowmya", "Sravani", "Sushma"];

//normal for loop
for(let i:number = 0; i<empNames.length ; ++i){    
    console.log(empNames[i])
}

//for...of loop
for( let val of empNames){  // get each and every value of empNames
    console.log(val);
}

//for...in loop 
interface personInfo {
    name: string,
    age: number,
    empId: number,
    visaSatus: boolean,
    address: {
        city: string,
        state: string,
        country: string
    }
}

let person: personInfo = {
    name:"Anurag",
    age:35,
    empId:1234,
    visaSatus:true,
    address:{
        city:"Delhi",
        state:"Delhi",
        country:"India"
    }
}

for( let val in person){  // get each and every property/key inside the person object
    console.log(val);
}

// Special cases in while loop

//do...while loop ==> used to execute the code at least once even if the condition is false

let x:number=0;

//while loop ==> check the condition first and execute code later
// while(x>0){   
//     console.log(x+". Refresh the Page"); 
//     x++;
// }

//do-while loop ==>  execute code first and check the condition later
do{   
 console.log(x+". Refresh the Page"); 
    x++;
}while(x>0);


