//jumping statements in loops
//1. break ==> used to break the loop intentionally when a specific condition is met
//2. continue ==> used to skip the current iteration and move to the next iteration when a specific condition is met


for (let i: number = 1; i <= 10; i++) {
    if (i == 5) {
       // break;//break statement will break the entire loop 
       continue;//skip current iteration and go to next iteration
    }
    console.log(i);
}

