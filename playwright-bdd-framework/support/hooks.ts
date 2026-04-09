import { Browser, BrowserContext, Page, chromium } from '@playwright/test';
import { Before, After, BeforeAll, AfterAll, Status, setDefaultTimeout } from '@cucumber/cucumber';

let browser: Browser;
let context: BrowserContext;
let page: Page;

setDefaultTimeout(12000);

//Method to launch the browser engine 
BeforeAll(async function () {
    browser = await chromium.launch({ headless: false });
});

//Method to create a new browser context and page for each and every scenario 
Before(async function () {
    context = await browser.newContext();
    page = await context.newPage();
    this.page = page;
});

//Method to close the browser context after each scenario
After(async function (scenario) {
    if (scenario.result?.status === Status.FAILED) {
        const screenshot = await page.screenshot({ path: `./screenshots/${scenario.pickle.name}.png` });
        this.attach(screenshot, 'image/png');
    }
    await context.close();
});

//Method to close the browser engine after all the scenarios are executed
AfterAll(async function () {
    await browser.close();
});