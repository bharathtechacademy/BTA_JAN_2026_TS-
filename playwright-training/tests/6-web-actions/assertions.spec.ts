//Assertions: Assertions are default methods provided by Playwright to compare expected result versus actual result. 

 /* =========================================================
      Assertion : Default method provided by Playwright to compare expected results vs actual results. 

      2 Types of Assertions:
      1.Hard Assertions: If the assertion fails, the test will stop executing and will be marked as failed.
      2.Soft Assertions: If the assertion fails, the test will continue executing and will be marked as failed at the end of the test.

      //Syntax for Hard Assertion:
      expect(actual).toBe(expected);

      //Syntax for Soft Assertion:
      expect.soft(actual).toBe(expected);
      ========================================================= */


import { test, expect } from '@playwright/test';

test('CSS selector syntax', async ({ page }) => {

    //Launch the application
    await page.goto('https://www.google.com/');

    //Verify Application is launched successfully by using title. 
    await expect.soft(page).toHaveTitle('Google');

});