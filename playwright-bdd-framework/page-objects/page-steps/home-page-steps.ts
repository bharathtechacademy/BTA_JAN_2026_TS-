import { Page } from "@playwright/test";
import homePage from '../page-elements/home-page-elements.json' with { type: 'json' };
import { WebCommons } from "../../commons/ui/web-commons.ts";

export class HomePageSteps {

    page: Page;
    web: WebCommons;

    constructor(page: Page) {
        this.page = page;
        this.web = new WebCommons(page);
    }
    
    //Method to verify home page is displayed
    async verifyHomePageIsDisplayed() {
        await this.web.isElementVisible
        await this.web.isElementVisible(homePage.homePageHeaderLink);
    }

    //Method to click on the profile icon 
    async clickProfileIcon() {
        await this.web.clickElement(homePage.profile);
    }

    //Method to click on the logout button
    async clickLogoutButton() {
        await this.web.clickElement(homePage.logoutLink);
    }    

}

export default HomePageSteps;