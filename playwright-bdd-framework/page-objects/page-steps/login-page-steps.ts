import { Page } from "@playwright/test";
import loginPage from '../page-elements/login-page-elements.json';
import { WebCommons } from "../../commons/ui/web-commons";
import config from '../../config/config.json';

export class LoginPageSteps {

    page: Page;
    web: WebCommons;

    constructor(page: Page) {
        this.page = page;
        this.web = new WebCommons(page);
    }

    //Method to launch the application
    async launchApplication() {
        await this.web.launchApplication(config.app.url);
    }

    //Method to verify login page is displayed
    async verifyLoginPageIsDisplayed() {
        await this.web.isElementVisible(loginPage.loginPageHeader);
    }
    
    //Method to enter username and password 
    async enterUsernameAndPassword(username: string, password: string) {
        await this.web.enterText(loginPage.businessEmailTextBox, username);
        await this.web.enterText(loginPage.passwordTextBox, password);
    }

    //Method to click on the login button
    async clickLoginButton() {
        await this.web.clickElement(loginPage.loginButton);
    }

    //Method to verify forgot password link is displayed in the login page
    async verifyForgotPasswordLinkIsDisplayed() {
        await this.web.isElementVisible(loginPage.forgotPasswordLink);
    }

    //Method to click on the Forgot Password link
    async clickForgotPasswordLink() {
        await this.web.clickElement(loginPage.forgotPasswordLink);
    }

    //Method to verify forgot password confirmation message is displayed
    async verifyForgotPasswordConfirmationMessageIsDisplayed() {
        await this.web.isElementVisible(loginPage.forgotPasswordConfirmationMsg);
    }

    //Method to verify error message is displayed for invalid login attempt
    async verifyInvalidLoginErrorMessageIsDisplayed() {
        await this.web.isElementVisible(loginPage.loginErrorMessage);
    }

    //Method to verify the social media login options within the login page 
    async verifySocialMediaLoginOptions() {
        await this.web.isElementVisible(loginPage.linkedInIcon);
        await this.web.isElementVisible(loginPage.googleIcon);
    }

    //Method to click on the sign up link within the login page 
    async clickSignUpLink() {
        await this.web.clickElement(loginPage.signUpLink);
    }

}

export default LoginPageSteps;