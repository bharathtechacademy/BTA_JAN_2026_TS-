import { Page } from "@playwright/test";
import cookiesPage from '../page-elements/cookies-page-elements.json';
import { WebCommons } from "../../commons/ui/web-commons";

export class CookiesPageSteps {

    page: Page;
    web: WebCommons;

    constructor(page: Page) {
        this.page = page;
        this.web = new WebCommons(page);
    }

    //Method to verify Cookies page is displayed. 
    async verifyCookiesPageIsDisplayed() {
        await this.web.isElementVisible(cookiesPage.cookiesHeader);
    }

    //Method to verify the content of the cookies page.
    async verifyCookiesPageContent(expectedContent: string) {
        await this.web.isElementVisible(cookiesPage.cookiesContent);
        const actualContent = await this.web.getText(cookiesPage.cookiesContent);
        if (actualContent !== expectedContent) {
            throw new Error(`Expected content: ${expectedContent}, but got: ${actualContent}`);
        }
    }



}
