import { Page } from "@playwright/test";
import { getPage } from "../../corelib/corelib.spec";
import { expect } from "@playwright/test";
import { createLoginPageLocators } from "./loginpagelocator";

export default class LoginPage {

    page: Page;
    locators: ReturnType<typeof createLoginPageLocators>;

    constructor(page: Page) {
        this.page = page;
        this.locators = createLoginPageLocators(page);
    }

    async goToLoginPage() {

        if (!getPage()) {
            throw new Error('Page is not initialized');
        }
        await this.page.goto('https://preview.owasp-juice.shop/#/');
        console.log('User is on Home Page');
    }

    async loginToApp() {
        await this.page.waitForTimeout(5000);
        await this.locators.accountMenuButton.click();
        await this.page.waitForTimeout(15000);
        await this.locators.loginMenuItem.click();
        await this.page.waitForTimeout(15000);
        await expect(this.locators.loginHeading).toContainText("Login");

        
    }
}