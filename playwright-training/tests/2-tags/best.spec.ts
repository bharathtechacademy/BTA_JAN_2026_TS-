import { test, expect } from '@playwright/test';

//test.describe refers  group of tests related to specific feature
test.describe("Group 1 - Best", async () => {

    //test refers individual test case
    test("Group 1 - Best 1",{tag:'@smoke'}, async () => {
        console.log("Group 1 - Test 1 is Executing...")
    });

    test("Group 1 - Best 2",{tag:'@sanity'}, async () => {
        console.log("Group 1 - Test 2 is Executing...")
    });


});