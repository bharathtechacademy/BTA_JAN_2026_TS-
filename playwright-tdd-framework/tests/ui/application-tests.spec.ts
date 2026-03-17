import { test, expect ,TestInfo} from '@playwright/test';
import LoginPageSteps from '../../page-objects/page-steps/login-page-steps';
import HomePageSteps from '../../page-objects/page-steps/home-page-steps';
import CookiesPageSteps from '../../page-objects/page-steps/cookies-page-steps';
import data from '../../testdata/ui/data.json';

let loginPage: LoginPageSteps;
let homePage: HomePageSteps;
let cookiesPage: CookiesPageSteps;
let testdata: any;

test.describe('Application Tests', () => {

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPageSteps(page);
        homePage = new HomePageSteps(page);
        cookiesPage = new CookiesPageSteps(page);
    });

    test('Test Case 1: verify Cookies Pop-up is launched.', async () => {
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPageIsDisplayed();
    });

    test('Test Case 2: verify Cookies Pop-up content.', async ({}, testInfo: TestInfo) => {
        testdata = data[testInfo.title as keyof typeof data];
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPageIsDisplayed();
        await cookiesPage.verifyCookiesPageContent(testdata["expectedContent"]);
    });

    test('Test Case 3: verify Cookies Pop-up logos.', async () => {
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPageIsDisplayed();
        await cookiesPage.verifyCookiesPopUpLogos();
    });

    test('Test Case 4: verify Cookies Pop-up selection buttons.', async () => {
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPageIsDisplayed();
        await cookiesPage.verifyCookiesPopUpSelectionButtons();
    });

    test('Test Case 5: verify Cookies Pop-up switch buttons.', async () => {
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPageIsDisplayed();
        await cookiesPage.verifyCookiesPopUpSwitchButtons();
    });

    test('Test Case 6: verify Show details feature in Cookies Pop-up.', async () => {
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPageIsDisplayed();
        await cookiesPage.verifyShowDetailsLinkInCookiesPopUp();
        await cookiesPage.clickShowDetailsLinkInCookiesPopUp();
        await cookiesPage.verifyExpandedViewOfCookiesPopUp();
    });

    test('Test Case 7: verify Cookies Pop-up can be closed successfully.', async () => {
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPageIsDisplayed();
        await cookiesPage.verifyCookiesPopUpSelectionButtons();
        await cookiesPage.clickCookiesSelectionButtons("Allow all");
        await cookiesPage.verifyCookiesPopUpIsClosed();
    });

    test('Test Case 8: verify user is able to login successfully with valid credentials.', async ({}, testInfo: TestInfo) => {
        testdata = data[testInfo.title as keyof typeof data];
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPageIsDisplayed();
        await cookiesPage.verifyCookiesPopUpSelectionButtons();
        await cookiesPage.clickCookiesSelectionButtons("Allow all");
        await cookiesPage.verifyCookiesPopUpIsClosed()
        await loginPage.verifyLoginPageIsDisplayed();
        await loginPage.enterUsernameAndPassword(testdata["username"], testdata["password"]);
        await loginPage.clickLoginButton();
        await homePage.verifyHomePageIsDisplayed();
    });

    test('Test Case 9: verify error message is displayed for invalid login attempt.', async ({}, testInfo: TestInfo) => {
        testdata = data[testInfo.title as keyof typeof data];
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPageIsDisplayed();
        await cookiesPage.verifyCookiesPopUpSelectionButtons();
        await cookiesPage.clickCookiesSelectionButtons("Allow all");
        await cookiesPage.verifyCookiesPopUpIsClosed()
        await loginPage.verifyLoginPageIsDisplayed();
        await loginPage.enterUsernameAndPassword(testdata["username"], testdata["password"]);
        await loginPage.clickLoginButton();
        await loginPage.verifyInvalidLoginErrorMessageIsDisplayed();
    });

    test('Test Case 10: verify forgot password functionality within the login page.', async () => {
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPageIsDisplayed();
        await cookiesPage.verifyCookiesPopUpSelectionButtons();
        await cookiesPage.clickCookiesSelectionButtons("Allow all");
        await cookiesPage.verifyCookiesPopUpIsClosed()
        await loginPage.verifyLoginPageIsDisplayed();
        await loginPage.clickForgotPasswordLink();
        await loginPage.verifyForgotPasswordConfirmationMessageIsDisplayed();
    });

    test('Test Case 11: verify social media login options within the login page.', async () => {
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPageIsDisplayed();
        await cookiesPage.verifyCookiesPopUpSelectionButtons();
        await cookiesPage.clickCookiesSelectionButtons("Allow all");
        await cookiesPage.verifyCookiesPopUpIsClosed()
        await loginPage.verifyLoginPageIsDisplayed();
        await loginPage.verifySocialMediaLoginOptions();
    });

    test.only('Test Case 12: verify logout functionality within the application.', async ({}, testInfo: TestInfo) => {
        test.slow();
        testdata = data[testInfo.title as keyof typeof data];
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPageIsDisplayed();
        await cookiesPage.verifyCookiesPopUpSelectionButtons();
        await cookiesPage.clickCookiesSelectionButtons("Allow all");
        await cookiesPage.verifyCookiesPopUpIsClosed()
        await loginPage.verifyLoginPageIsDisplayed();
        await loginPage.enterUsernameAndPassword(testdata["username"], testdata["password"]);
        await loginPage.clickLoginButton();
        await homePage.verifyHomePageIsDisplayed();
        await homePage.clickProfileIcon();
        await homePage.clickLogoutButton();
        await loginPage.verifyLoginPageIsDisplayed();
    });

});

