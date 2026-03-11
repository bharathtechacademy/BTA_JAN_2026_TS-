import { test, expect } from '@playwright/test';

test('CSS selector syntax', async ({ page }) => {

    // 1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");

    // 2.verify application logo is displayed
    const logo = page.locator('img.logo');
    await expect(logo).toBeVisible();
    console.log("Logo is displayed successfully. ");

    //take logo screenshot
    await logo.screenshot({path:`screenshots/logo_${new Date().getMilliseconds()}.png`});

    // 3.Verify application caption displayed as "Experience the difference"
    const caption = page.locator('p.caption');
    const expectedCaption = "Experience the difference";
    const actualCaption = await caption.textContent();
    await expect(actualCaption).toBe(expectedCaption);
    console.log("Caption is displayed successfully. ");

    // 4.Enter invalid username
    const username = page.locator('input[name="username"]');
    await username.fill("Invalid User");
    console.log("Username is entered successfully. ");

    // 5.Enter empty Password
    const password = page.locator('input[name="password"]');
    await password.fill('');
    console.log("Password is entered successfully. ");

    // 6.Click on login button
    const loginButton = page.locator('input[value="Log In"]');

    //highlight the login button
    await loginButton.focus();

    await loginButton.evaluate(el =>{
        el.style.border = "5px solid red"
    })

    await loginButton.click();
    console.log("Login button is clicked successfully. ");

    // 7.Verify the error message "Please enter a username and password."
    const errorMessage = page.locator('p.error');
    await expect(errorMessage).toHaveText('Please enter a username and password.');
    console.log("Error message is displayed successfully. ");

    //take page screenshot
    await page.screenshot({path:`screenshots/page_${new Date().getMilliseconds()}.png`});

    // 8.Click on admin page link
    const adminPage = page.locator('ul[class="leftmenu"] >li >a[href*="admin"]');
    await adminPage.click();
    console.log("Admin page link is clicked successfully. ");

    // 9.select the option "soap" from dba mode radio button
    await selectDBAMode(page, 'soap');
    console.log("Option soap is selected successfully. ");

    // 10.Scroll to loan provider dropdown
    const loanprovider = page.locator('#loanProvider');
    await loanprovider.scrollIntoViewIfNeeded();
    console.log("Scrolled to loan provider dropdown successfully. ");

    // 11.Select the option web service from the dropdown
    await loanprovider.selectOption({ label: 'Web Service' });

    // 12.click on submit button
    const submitButton = page.locator('input[value="Submit"]');
    await submitButton.click();

    // 13.verify submission is successful by validating success message
    const successMessage = page.locator('//b[text()="Settings saved successfully."]');
    await expect(successMessage).toBeVisible();
    console.log("Success message displayed successfully");

    // 14.Click on services page link
    const servicesPage = page.locator('ul[class="leftmenu"] >li >a[href*="services"]');
    await servicesPage.click();
    console.log("Services page link is clicked successfully. ");

    // 15.wait for service page
    const bookstoreServices = page.locator('//span[text()="Bookstore services:"]');
    await expect(bookstoreServices).toBeVisible();
    console.log("Services page  is displayed successfully.");

    // 16.Scroll down till bookstore services table
    await bookstoreServices.scrollIntoViewIfNeeded();

    // 17.get total rows of books store services table
    const rows = page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tr');
    const totalRows = await rows.count();
    console.log("Total rows displayed in the table are : " + totalRows);

    // 18.get total columns of books store services table
    const columns = page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tr[1]//td');
    const totalColumns = await columns.count();
    console.log("Total columns displayed in the table are : " + totalColumns);

    // 19.Print table data (row wise and column wise data)
    for (let r: number = 1; r <= totalRows; r++) {

        for (let c: number = 1; c <= totalColumns; c++) {
            const cell = page.locator(`//span[text()="Bookstore services:"]/following-sibling::table[1]//tr[${r}]//td[${c}]`);
            const cellValue = await cell.textContent();
            console.log(`Row ${r} Column ${c} value is : `+cellValue);
        }

    }

});

async function selectDBAMode(page: any, option: string) {
    const dbaMode = page.locator(`input[value="${option}"]`);
    await dbaMode.click();
}