//Exception Handling ==> Handle the Exceptions

//try..catch...finally blocks ==>When there is an exception, we can handle an exception and continue the execution process. 
//throw an custom exception ==> When there is no exception, but intentionally the user wants to fail the program, by using the `throw` keyword we can fail the program. 

let input: any;

try { 
    console.log(input.toLowerCase()); //plan A
}catch (error) {
    console.log(error);
    console.log("Exception Occured, Please Check"); //plan B
    console.log(input.toUpperCase());
}finally{
    console.log("Execution is Completed"); //mandatory code 
}

