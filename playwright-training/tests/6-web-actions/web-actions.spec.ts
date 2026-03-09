import { test, expect } from '@playwright/test';

test('CSS selector syntax', async ({ page }) => {

    //Launch the application
    await page.goto('https://www.google.com/');

    //Verify Application is launched successfully by using title. 
    await expect(page).toHaveTitle('Google');

    //Locate the element 
    let element = page.locator("a[alt='image']");

    /* =====================================================
        Common Web Element Validations
       ==================================================== */

    //Check if the element is visible. 
    await expect(element).toBeVisible();

    //Check if the element is enabled. 
    await expect(element).toBeEnabled();

    //Check if the element is cheked (if it is a checkbox or radio button).
    await expect(element).toBeChecked();

    //Check if the element is hidden.
    await expect(element).toBeHidden();

    /* =====================================================
    Button Web Element Validations
   ==================================================== */

    //Locate the button element 
    let button = page.locator("button#login");

    //Verify the label of the button. 
    let actualButtonText = await button.textContent(); //if the label is added as a text value 
    let actualButtonValue = await button.getAttribute('value'); //If the label is added as an attribute value 

    await expect(actualButtonText).toBe('Login');
    await expect(actualButtonValue).toBe('Login');

    //direct assertion without storing the value in a variable.
    await expect(button).toHaveText('Login');
    await expect(button).toHaveAttribute('value', 'Login');

    //Click on the button.
    await button.click();

    //Double click on the button. 
    await button.dblclick();

    //Right click on the button. 
    await button.click({ button: 'right' });

    //Hover on the button. 
    await button.hover();

    //Drag and drop the button. 
    let source = page.locator('#source');
    let target = page.locator('#target');
    await source.dragTo(target);

    //Scroll till the button is displayed. 
    await button.scrollIntoViewIfNeeded();

    //Force click on the button. 
    await button.click({ force: true });

    /* =====================================================
            Textbox Web Element Validations
    ==================================================== */

    //Locate the textbox element 
    let textbox = page.locator("input#username");

    //Clear the existing text from the textbox. 
    await textbox.clear();

    //Verify the placeholder of the textbox. 
    let actualPlaceholder = await textbox.getAttribute('placeholder');
    await expect(actualPlaceholder).toBe('Enter your username');

    //Type text into the textbox. 
    await textbox.fill('testuser');

    //Press keys like Enter into the textbox. 
    await textbox.press('Enter');

    //Verify the value entered in the textbox. 
    await expect(textbox).toHaveValue('testuser');


    /* =====================================================
            Dropdown Web Element Validations
    ==================================================== */

    //Locate the dropdown element
    let dropdown = page.locator("select#country");

    //Select an option from the dropdown 
    await dropdown.selectOption({ label: 'Option 1' }); //by visible text
    await dropdown.selectOption({ value: 'option1' }); //by value
    await dropdown.selectOption({ index: 0 }); //by index

    //Verify if the dropdown is multi-select
    let isMultiSelect = await dropdown.getAttribute('multiple') !== null;
    await expect(isMultiSelect).toBe(true);

    //Select an option from the dropdown 
    await dropdown.selectOption({ label: 'Option 1' }); //by visible text
    await dropdown.selectOption({ value: 'option1' }); //by value
    await dropdown.selectOption({ index: 0 }); //by index

    //de-select an option from the dropdown 
    await dropdown.selectOption({ label: 'Option 1' }); //by visible text
    await dropdown.selectOption({ value: 'option1' }); //by value
    await dropdown.selectOption({ index: 0 }); //by index

    //Verify the selected option in the dropdown.
    let selectedOption = await dropdown.inputValue();
    await expect(selectedOption).toBe('option1');

    //Verify total options available in the dropdown. 
    let optionsCount = await dropdown.locator('option').count();
    await expect(optionsCount).toBe(3);

    //Verify the options available in the dropdown. 
    let optionsText = await dropdown.locator('option').allTextContents();
    await expect(optionsText).toEqual(['Option 1', 'Option 2', 'Option 3']);

    /* =====================================================
        Checkbox Web Element Validations
==================================================== */

    //Locate the checkbox element
    let checkbox = page.locator("input#subscribe");

    //Check the checkbox only if it is not already checked.
    if (!(await checkbox.isChecked())) {
        await checkbox.check();
    }

    /* =====================================================
    Radio Web Element Validations
==================================================== */

    //Locate the radio button element
    let radioButton = page.locator("input[name ");

    //Check the radio button
    await radioButton.check();

    /* =====================================================
Image Web Element Validations
==================================================== */

    //Locate the image element
    let image = page.locator("img#logo");

    //Verify the image is visible. 
    await expect(image).toBeVisible();

    //Verify the image source to identify whether it is valid or not. 
    let imageSrc = await image.getAttribute('src');
    await expect(imageSrc).toBe('expected-image-source.png');

    //Verify the image size. 
    const imageSize = await image.boundingBox();
    const width = imageSize?.width;
    const height = imageSize?.height;
    await expect(width).toBe(100);
    await expect(height).toBe(50);

    //Verify the image position
    const imagePosition = await image.boundingBox();
    const x = imagePosition?.x;
    const y = imagePosition?.y;
    await expect(x).toBe(10);
    await expect(y).toBe(20);

    /* =====================================================
Hyperlink Web Element Validations
==================================================== */

    //Locate the hyperlink element
    let hyperlink = page.locator("a#learn-more");

    //Verify the hyperlink. (method 1)
    await expect(hyperlink).toHaveAttribute('href', 'expected-link.html');

    //Verify the hyperlin by click on link and verify url (method 1)
    await hyperlink.click();
    await expect(page).toHaveURL('http://google.com');

    /* =====================================================
Text /Label Web Element Validations
==================================================== */

    //Locate the text/label element
    let label = page.locator("label[for='username']");

    //Verify the text/label content. 
    let labelText = await label.textContent();//if the label is added as a text value
    await expect(labelText).toBe('Username:');

    let labelForAttribute = await label.getAttribute('for');//if the label is added as an attribute value
    await expect(labelForAttribute).toBe('username');

    /* =====================================================
        Upload the file element
    ==================================================== */

    //Locate the file upload element
    let fileUpload = page.locator("input#file-upload");

    //Upload a file
    await fileUpload.setInputFiles('path/to/file.txt');
    
});