//WebElement : element displayed within the UI (example text box, button, hyperlink, dropdown, etc)
//Locator : locator is a default Playwright method to identify the location of a WebElement. (Based on the HTML tags and additional attributes)

// There are multiple locator strategies available in Playwright to locate the web element. 

//1.getByRole()
//2.getByLabel()
//3.getByPlaceholder()
//4.getByText()
//5.getByAltText()
//6.getByTitle()
//7.getByTestId()
//8.locator() (css and xpath)

//1.getByRole(): this locator method is going to help us to locate the element based on the role or nature of the element. 
//syntax : page.getByRole(role, options);
//Ex: page.getByRole('link', { name: 'Gmail' });
/*
* role = 'textbox' for text box
* role = 'button' for button
* role = 'link' for hyperlink
* role = 'combobox' for dropdown
* role = 'checkbox' for checkbox
* role = 'radio' for radio button
* role = 'switch' for toggle button
* role = 'heading' for heading
* role = 'list' for list
* role = 'listitem' for list item
*/

//2.getByLabel(): you need to identify the label of the element, and you need to use it as a locator. 
//Syntax : page.getByLabel('label-text-value');
//Example Html :  <label class="form-label" id="dateOfBirth-label">Date of Birth</label>
//Locator : page.getByLabel('Date of Birth');

//3.getByPlaceholder():  placeholder attribute value of the element
//Syntax : page.getByPlaceholder('placeholder-text-value');
//Example Html : <input type="text" placeholder="Enter your name">
//Locator : page.getByPlaceholder('Enter your name');

//4.getByText(): text content of the element
//Syntax : page.getByText('text-content-value');
//Example Html : <button>Submit</button>
//Locator : page.getByText('Submit');

//5.getByAltText(): alt attribute value of the element
//Syntax : page.getByAltText('alt-text-value');
//Example Html : <img src="logo.png" alt="Company Logo">
//Locator : page.getByAltText('Company Logo');

//6.getByTitle(): title attribute value of the element
//Syntax : page.getByTitle('title-text-value');
//Example Html : <a href="#" title="Home Page">Home</a>
//Locator : page.getByTitle('Home Page');

//7.getByTestId(): data-testid attribute value of the element
//Syntax : page.getByTestId('test-id-value');
//Example Html : <div data-testid="user-profile">User Profile</div>
//Locator : page.getByTestId('user-profile');

//8.locator() : locator method will be used to locate the element by using CSS selector or XPath. 