import { World, IWorldOptions, setWorldConstructor } from "@cucumber/cucumber";
import { Page } from "@playwright/test";
import LoginPageSteps from "../page-objects/page-steps/login-page-steps.ts";
import CookiesPageSteps from "../page-objects/page-steps/cookies-page-steps.ts";
import HomePageSteps from "../page-objects/page-steps/home-page-steps.ts";

class PlaywrightWorld extends World {
    page!: Page;
    loginPageSteps!: LoginPageSteps;
    cookiesPageSteps!: CookiesPageSteps;
    homePageSteps!: HomePageSteps;

    constructor(options: IWorldOptions) {
        super(options);
    }

    initializePageObjects() {
        this.loginPageSteps = new LoginPageSteps(this.page);
        this.cookiesPageSteps = new CookiesPageSteps(this.page);
        this.homePageSteps = new HomePageSteps(this.page);
    }

}

export type CustomWorld = PlaywrightWorld;
setWorldConstructor(PlaywrightWorld);

//World : World is a class provided by Cucumber.js that represents the context in which your step definitions are executed. It allows you to share state and data between different steps in a scenario. By creating a custom World class, you can define properties and methods that will be available to all your step definitions.
//IWorldOptions: IWorldOptions is an interface provided by Cucumber.js that defines the options that can be passed to the World constructor. It allows you to access scenario-specific data and configuration within your custom World class.
//setWorldConstructor: setWorldConstructor is a function provided by Cucumber.js that allows you to set your custom World class as the constructor for the World. This ensures that your custom World class is used for all scenarios, providing a consistent context for your step definitions.

//cucumber.cjs => setWorldConstructor => World => IWorldOptions => PlaywrightWorld => initializePageObjects => loginPageSteps, cookiesPageSteps, homePageSteps