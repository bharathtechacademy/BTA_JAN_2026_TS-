import { test, expect } from '@playwright/test';

test('Automate Alerts', async ({ page }) => {
    
//1. Enter URL and Launch the application (https://demoqa.com/alerts)   
await page.goto('https://demoqa.com/alerts');

//2. Locate Alert buttons to trigger the alerts 
const infoAlertButton = page.locator('button#alertButton');
const confirmationAlert = page.locator('button#confirmButton');
const promptAlert = page.locator('button#promtButton');

//3. Click on the information alert and copy the alert message and then select OK button
page.once('dialog', async dialog => {

    //copy and print the alert message
    console.log("Info Alert Message is :"+await dialog.message());

    //click on the OK button
    await dialog.accept();
    
});

//trigger the information alert 
await infoAlertButton.click();

//wait for the 2 sec
await page.waitForTimeout(2000);

//4. Click on the Confirmation alert, copy the alert message, and select the Cancel button.
page.once('dialog', async dialog => {

    //copy and print the alert message
    console.log("Confirmation Alert Message is :"+await dialog.message());

    //click on the CANCEL button
    await dialog.dismiss();
    
});

//trigger the confirmation alert 
await confirmationAlert.click();

//wait for the 2 sec
await page.waitForTimeout(2000);

//5. Click on the prompt alert. Copy the alert message. Enter text. Then Select OK button.
page.once('dialog', async dialog => {

    //copy and print the alert message
    console.log("Prompt Alert Message is :"+await dialog.message());

    //Enter Text in the prompt alert and click on the OK button
    await dialog.accept('Bharath Tech Academy');    
    
});

//trigger the prompt alert
await promptAlert.click();

//wait for the 2 sec
await page.waitForTimeout(2000);

});