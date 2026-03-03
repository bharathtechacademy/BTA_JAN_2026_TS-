import { test, expect } from '@playwright/test';

//test.describe refers  group of tests related to specific feature
test.describe("Group 1 - Tests", async () => {

    //test refers individual test case
    test("Group 1 - Test 1", async () => {
        console.log("Group 1 - Test 1 is Executing...")
    });

    test("Group 1 - Test 2", async () => {
        console.log("Group 1 - Test 2 is Executing...")
    });


});


test.describe("Group 2 - Tests", async () => {

    test("Group 2 - Test 1", async () => {
        console.log("Group 2 - Test 1 is Executing...")
    });

    test("Group 2 - Test 2", async () => {
        console.log("Group 2 - Test 2 is Executing...")
    });

});