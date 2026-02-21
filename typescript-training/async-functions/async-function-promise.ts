
//Asynchronous function  with promise that returns either resolve and reject
function sampleAsyncFunction(): Promise<string> {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve(`Success! The random number is ${randomNumber}`);
        } else {
            reject(new Error(`Failure! The random number is ${randomNumber}`));
        }
    });
};

//Calling the asynchronous function and handling the promise
async function executeTest(): Promise<void> {
    const result: string = await sampleAsyncFunction();
    console.log(result);
}

// Call the async function to see the result
executeTest();