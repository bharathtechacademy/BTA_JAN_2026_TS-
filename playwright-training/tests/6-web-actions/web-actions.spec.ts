import { test, expect } from '@playwright/test';

test('CSS selector syntax', async ({ page }) => {

    //Launch the application
    await page.goto('https://www.google.com/');

    //Verify Application is launched successfully by using title. 
    await expect(page).toHaveTitle('Google');

});