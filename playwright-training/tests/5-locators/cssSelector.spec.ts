

//CSS selector syntaxes 

//Syntax 1: tagName#id
//Syntax 2: tagName.className
//Syntax 3: tagName [attribute ='attribute-value']
//Syntax 4: tagName [attribute *='attribute-value'] //* means contains
//Syntax 5: tagName [attribute ^='attribute-value'] //^ means starts-with
//Syntax 6: tagName [attribute $='attribute-value'] //$ means ends-with
//Syntax 7: tagName[attribute1='value1'][attribute2='value2'] //Multiple attributes
//Syntax 8: advanced CSS Selector with Relationships ==> locato: ancestor > parent > child

//target --> parent --> ancestor --> ancestor's parent --> ancestor's parent's parent

//target: a[href="services.htm"]
// locator: //ul[class="leftmenu"] > li > a[href="services.htm"]


//grand-parent: ul[class="leftmenu"]
//parent: li
//target: a[href="services.htm"]

// locator: div[id="footerPanel"]>ul>li>a[href="about.htm"]


import { test, expect } from '@playwright/test';

test('CSS selector syntax', async ({ page }) => {

    //Launch the application
    await page.goto('https://www.google.com/');

    //Locate the 'Google search' text box using Syntax 1 
    await page.locator('textarea#APjFqb');

    //Locate the 'Google search' text box using Syntax 2
    await page.locator('textarea.gLFyf');

    //Locate the 'Google search' text box using Syntax 3
    await page.locator('textarea[title="Search"]');

    //Locate the 'How search works' hyperlink using Syntax 4
    await page.locator('a[href*="howsearchworks"]');

    //Locate the 'Google search' button using Syntax 5
    await page.locator('input[aria-label^="Google "]');

    //Locate the 'Google search' button using Syntax 6
    await page.locator('input[aria-label$="Search"]');

    //Locate the 'Google search' textbox using Syntax 7
    await page.locator('textarea[title="Search"][aria-label="Search"]');

});