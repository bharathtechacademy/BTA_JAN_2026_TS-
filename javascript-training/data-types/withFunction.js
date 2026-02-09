// Test Case 1: verify the home page.
console.log("******************TEST CASE 1: VERIFY THE HOME PAGE******************");
launchBrowserAndLogin("Chrome");
console.log("Verify the home page is displayed or not");
logoutAndCloseBrowser();

// Test Case 2: verify the account balance
console.log("******************TEST CASE 2: VERIFY THE ACCOUNT BALANCE******************");
launchBrowserAndLogin("Firefox");
console.log("Verify the home page is displayed");
console.log("Navigate to the account balance page");
let accountBalance = 100000;
console.log("Verify the account balance is displayed as " + accountBalance);
logoutAndCloseBrowser();

// Test Case 3: verify the account statement
console.log("******************TEST CASE 3: VERIFY THE ACCOUNT STATEMENT******************");
launchBrowserAndLogin("Safari");
console.log("Verify the home page is displayed");
console.log("Navigate to the account statement page");
console.log("Verify the account statement is displayed with the following details:");
logoutAndCloseBrowser();

function launchBrowserAndLogin(browserName) {
    console.log("Launch the " + browserName + " Browser");
    console.log("Enter the URL: https://www.icici.com/");
    console.log("Enter the username as 'Bharath' and password as 'Bharath@123'");
    console.log("Click on the login button");
}

function logoutAndCloseBrowser() {
    console.log("Logout from the application");
    console.log("Close the browser");
}

function getAccountBalance() {
    console.log("Navigate to the account balance page");
    let accountBalance = 100000;
    return accountBalance;
}

console.log(getAccountBalance());