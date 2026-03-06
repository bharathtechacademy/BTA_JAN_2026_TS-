//XPATH ==> XPath is all about XML Path. 

//Absolute Xpath : /html/body/div[1]/div[1]/a[2]/img  (Full XPath starts with a single forward slash. Starts from the root HTML element to the target element. )
//Relative Xapth : starts with //

/******************LEVEL 1: BASIC XPATH*******************/
//Syntax 1 : //tagName[@attribute='attribute-value']
//Syntax 2 : //tagName[text()='text-value']

/******************LEVEL 2: contains , starts-with*******************/
//Syntax 3 : //tagName[contains(@attribute,'partial-attribute-value')]
//Syntax 4 : //tagName[contains(text(),'partial-text-value')]

//Syntax 5 : //tagName[starts-with(@attribute,'partial-attribute-value')]
//Syntax 6 : //tagName[starts-with(text(),'partial-text-value')]

/******************LEVEL 3: Combine multiple attributes and text values together by using the `and` operator. *******************/
//Syntax 7 : //tagName[@attribute1='attribute-value1' and @attribute2='attribute-value2']
//Syntax 8 : //tagName[text()='text-value' and @attribute='attribute-value']

/******************LEVEL 4: Advanced Xapth with Relationships*******************/
//Syntax 9 : reference-element-xpath/relationship::target-element-xpath

//child
//parent
//ancestor
//following-sibling
//preceding-sibling
//following
//preceding
// / (child)
// // (within the entire family)

// target --> sibling --> parent --> ancestor --> ancestor's parent

//ancestor: //ul[@class="leftmenu"]
//parent: //li
//target: //a[text()="Services"]

//ul[@class="leftmenu"]/child::li/child::a[text()="Services"]
//ul[@class="leftmenu"]//a[text()="Services"]
//ul[@class="leftmenu"]/li/a[text()="Services"]
//li[text()="Solutions"]/following-sibling::li[2]/child::a[text()="Services"]

import { test, expect, Locator } from '@playwright/test';

test('CSS selector syntax', async ({ page }) => {

    //Launch the application
   await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    //Locate the 'Logo' image using Syntax 1 
    await page.locator("//img[@alt='ParaBank']");

    //Locate the 'Caption' text using Syntax 2
    await page.locator("//p[text()='Experience the difference']");

    //Locate the 'Logo' image using Syntax 3
    await page.locator('//img[contains(@src,"logo")]');

    //Locate the 'Caption' text using Syntax 4
    await page.locator("//p[contains(text(),'difference')]");

    //Locate the 'Logo' image using Syntax 5
    await page.locator('//img[starts-with(@src,"images/logo")]');

    //Locate the 'Caption' text using Syntax 6
    await page.locator("//p[starts-with(text(),'Experience')]");

    //Locate the 'Logo' image using Syntax 7
    await page.locator('//img[@class="logo" and @title="ParaBank"  and @alt="ParaBank"]');

    //Locate the 'Caption' text using Syntax 8
    await page.locator("//p[text()='Experience the difference' and @class='caption']");

    //Locate the 'Services' hyperlink using Syntax 9 
    await page.locator("//ul[@class='leftmenu']//a[text()='Services']");

});