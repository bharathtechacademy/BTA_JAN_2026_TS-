import { test, expect } from '@playwright/test';

//test.only() ==> It will execute only particular test case by skipping all other test cases. 
//test.skip() ==> It will skip the particular test case and execute all other test cases.
//test.fail() ==> I'm expecting a particular test case to be failed. Highlight this test case if it is not failed. 
//test.fixme() ==> I am sure this test case is not working. Please ignore even if it is failed. 
//test.slow() ==> Playwright will consider that there are loading issues, and it may face slowness in the test execution. It can increase the timeout 3x more than the normal timeout. 

test.describe("Group 1 - Tests", async () => {

    test.skip("Group 1 - Test 1", async () => {
        console.log("Group 1 - Test 1 is Executing...");
        expect(1).toBe(2);
    });

    test("Group 1 - Test 2", async () => {
        test.slow();
        console.log("Group 1 - Test 2 is Executing...")
        await new Promise(resolve => setTimeout(resolve, 40000));//wait for 40 seconds
    });

    //if test will take even more than 90 sec 
    test("Group 1 - Test 3", async () => {
        test.setTimeout(180000);
        console.log("Group 1 - Test 3 is Executing...")
        await new Promise(resolve => setTimeout(resolve, 100000));//wait for 100 seconds    
    });

    test("Group 1 - Test 4", async () => {
        console.log("Group 1 - Test 4 is Executing...")
    });

});