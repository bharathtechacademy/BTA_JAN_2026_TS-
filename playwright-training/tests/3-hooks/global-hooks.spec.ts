import { test, expect } from '@playwright/test';

test.describe('Group 1 Tests', async () => {

    test('Group 1- Test 1', async ({ page }) => {
        console.log("Group 1 - Test 1: Executing");
    });

    test('Group 1- Test 2', async ({ page }) => {
        console.log("Group 1 - Test 2: Executing");
    });

    test('Group 1- Test 3', async ({ page }) => {
        console.log("Group 1 - Test 3: Executing");
    });

});


test.describe('Group 2 Tests', async () => {

    test('Group 2- Test 1', async ({ page }) => {
        console.log("Group 2 - Test 1: Executing");
    });

    test('Group 2- Test 2', async ({ page }) => {
        console.log("Group 2 - Test 2: Executing");
    });

    test('Group 2- Test 3', async ({ page }) => {
        console.log("Group 2 - Test 3: Executing");
    });

});

//Global hooks 
test.beforeAll(async () =>{
    console.log("***Global before all : This runs once before all test cases. ****")
});

test.afterAll(async () =>{
    console.log("***Global after all : This runs once after all test cases. ****")
});

test.beforeEach(async () =>{
    console.log("---Global before each : This runs once before each test cases.---")
});

test.afterEach(async () =>{
    console.log("---Global after each : This runs once after each test cases.---")
});

