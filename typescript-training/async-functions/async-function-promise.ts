
//Asynchronous function  with promise that returns either resolve and reject
//add 10 seconds delay to the function
function sampleAsyncFunction(): Promise<string> {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve(`Success! The random number is ${randomNumber}`);
        } else {
            reject(new Error(`Failure! The random number is ${randomNumber}`));
        }
    });//wait for 10 seconds
};

//Calling the asynchronous function and handling the promise
async function executeTest(): Promise<void> {
    const result: string = await sampleAsyncFunction();
    console.log(result);
}

// Call the async function to see the result
executeTest();