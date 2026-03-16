import { test, expect } from '@playwright/test';

test('Automate Frames', async ({ page }) => {

test.slow();
    
//1. Enter URL and Launch the application (https://demoqa.com/frames)   
await page.goto('https://demoqa.com/frames');

//2. Locate Main window element
const mainWindowElement = page.locator('h1.text-center') ;

//Locate the frame and store in the variable
const frame = page.frameLocator('iframe#frame1');

//3. Locate Frame Element
const frameElement = await frame.locator('h1#sampleHeading');

//4. Copy and Print text from frame element
console.log("Frame Window Element : "+await frameElement.textContent());

//5. Copy and Print text from main window element
console.log("Main Window Element : "+await mainWindowElement.textContent());


});