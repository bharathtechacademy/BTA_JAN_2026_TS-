//Conditional Statements ==> Statements along with conditions
//what is statement ? Statement meaning line of code. 

// (condition){
    //statements
// }

//There are two different types of conditional statements that are available. 
//1. if else conditional statement ==> Will be used when we Don't know the result of condition before itself. 
//2. switch case conditional statement ==> Will be used when we know the result of condition. Now we want to choose one option among multiple. 


let percentage:number =91;
if(percentage > 75){
    console.log("Distinction");
    if(percentage > 90){
        console.log("Bro, you are eligible for a gold medal. Congrats");
    }else{
        console.log("Sorry, you are not eligible for a gold medal. Better luck next time");
    }
} else if(percentage > 60){
    console.log("First Class");
} else if(percentage > 50){
    console.log("Second Class");
} else if(percentage > 35){
    console.log("Pass Class");
} else {
    console.log("Fail");
}