import { expect, Locator, Page } from "@playwright/test";

export class WebCommons {
    page: Page;

    //Constructor method to provide current browser tab details to perform the actions. 
    constructor(page: Page) {
        this.page = page;
    }

    //Common method to generate web element from the locator 
    element(selectors: string): Locator {
        return this.page.locator(selectors);
    }

    //Common method to launch the application and verify the title 
    async launchApplication(url: string, title?: string) {
        await this.page.goto(url);
        if (title) {
            await expect(this.page).toHaveTitle(title);
        }
    }

    //Common method to scroll to the web element 
    async scrollToElement(selectors: string) {
        await this.element(selectors).scrollIntoViewIfNeeded();
    }

    //Common method to click on the web element 
    async clickElement(selectors: string) {
        await this.scrollToElement(selectors);
        await this.element(selectors).click();
    }

    //Common method to double click on the web element 
    async doubleClickElement(selectors: string) {
        await this.scrollToElement(selectors);
        await this.element(selectors).dblclick();
    }

    //Common method to right click on the web element 
    async rightClickElement(selectors: string) {
        await this.scrollToElement(selectors);
        await this.element(selectors).click({ button: "right" });
    }

    //Common method to hover on the web element 
    async hoverOnElement(selectors: string) {
        await this.scrollToElement(selectors);
        await this.element(selectors).hover();
    }

    //Common method to force click on the element 
    async forceClickElement(selectors: string) {
        await this.scrollToElement(selectors);
        await this.element(selectors).click({ force: true });
    }

    //Common method to click and hold on the web element 
    async clickAndHoldElement(selectors: string) {
        await this.scrollToElement(selectors);
        const elementHandle = await this.element(selectors).elementHandle();
        if (elementHandle) {
            await elementHandle.hover();
            await this.page.mouse.down();
        }
    }

    //Common method to release the click on the web element 
    async releaseClickOnElement() {
        await this.page.mouse.up();
    }

    //Common method to clear the text entered into the text box 
    async clearTextBox(selectors: string) {
        await this.scrollToElement(selectors);
        await this.element(selectors).clear();
    }

    //Common method to enter the text into the text box
    async enterText(selectors: string, text: string) {
        await this.clearTextBox(selectors);
        await this.element(selectors).fill(text);
    }

    //Common method to select the option from the drop-down 
    async selectOption(selectors: string, option: string) {
        await this.scrollToElement(selectors);
        await this.element(selectors).selectOption(option);
    }

    //Common method to check the checkbox only if it is not already checked
    async checkCheckbox(selectors: string) {
        await this.scrollToElement(selectors);
        const isChecked = await this.element(selectors).isChecked();
        if (!isChecked) {
            await this.element(selectors).check();
        }
    }

    //Common method to uncheck the checkbox only if it is already checked
    async uncheckCheckbox(selectors: string) {
        await this.scrollToElement(selectors);
        const isChecked = await this.element(selectors).isChecked();
        if (isChecked) {
            await this.element(selectors).uncheck();
        }
    }

    //Common method to check the radio button 
    async checkRadioButton(selectors: string) {
        await this.scrollToElement(selectors);
        await this.element(selectors).check();
    }

    //Common method to extract the text value from the element 
    async getText(selectors: string): Promise<string | null> {
        await this.scrollToElement(selectors);
        return await this.element(selectors).textContent();
    }

    //Common method to extract the attribute value from the element 
    async getAttribute(selectors: string, attribute: string): Promise<string | null> {
        await this.scrollToElement(selectors);
        return await this.element(selectors).getAttribute(attribute);
    }

    //Common Method to Upload the File 
    async uploadFile(selectors: string, filePath: string) {
        await this.scrollToElement(selectors);
        await this.element(selectors).setInputFiles(filePath);
    }

    //Common method to verify the visibility of an element 
    async isElementVisible(selectors: string) {
        await expect(this.element(selectors)).toBeVisible();
    }

    //Common method to verify the element is enabled or not 
    async isElementEnabled(selectors: string) {
        await expect(this.element(selectors)).toBeEnabled();
    }

    //Common method to verify the text value of the element 
    async isTextValueCorrect(selectors: string, expectedText: string) {
        await expect(this.element(selectors)).toHaveText(expectedText);
    }

    //Common method to verify the attribute value of the element 
    async isAttributeValueCorrect(selectors: string, attribute: string, expectedValue: string) {
        await expect(this.element(selectors)).toHaveAttribute(attribute, expectedValue);
    }

    //Common method to verify the element is not visible 
    async isElementNotVisible(selectors: string) {
        await expect(this.element(selectors)).toBeHidden();
    }

    //Common method to deal with alerts. 
    async handleAlert(action: string) {
        this.page.on("dialog", async (dialog) => {
            if (action === "accept") {
                await dialog.accept();
            } else if (action === "dismiss") {
                await dialog.dismiss();
            }
        });
    }

}
