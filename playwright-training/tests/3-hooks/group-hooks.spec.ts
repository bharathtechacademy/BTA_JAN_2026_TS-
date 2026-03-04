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

    test.beforeAll(async () => {
        console.log("***Group before all : This runs once before all test cases. ****")
    });

    test.afterAll(async () => {
        console.log("***Group after all : This runs once after all test cases. ****")
    });

    test.beforeEach(async () => {
        console.log("---Group before each : This runs once before each test cases.---")
    });

    test.afterEach(async () => {
        console.log("---Group after each : This runs once after each test cases.---")
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