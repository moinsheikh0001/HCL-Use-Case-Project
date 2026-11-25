import { Locator, Page } from "@playwright/test";
import { getPage } from "../../corelib/corelib.spec";
import { expect } from "@playwright/test";

export default class LoginPage {

    page: Page;
    accountMenuButton: Locator;
    loginMenuItem: Locator;
    loginHeading: Locator;

    constructor(page: Page) {
        this.page = page;
        this.accountMenuButton = page.getByRole("button", { name: "Show/hide account menu", exact: true })
            .getByText("Account", { exact: true });
        this.loginMenuItem = page.getByRole("menuitem", { name: "Go to login page", exact: true })
            .getByText("Login", { exact: true });
        this.loginHeading = page.getByRole("heading", { name: "Login", exact: true });
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
        await this.accountMenuButton.click();
        await this.page.waitForTimeout(15000);
        await this.loginMenuItem.click();
        await this.page.waitForTimeout(15000);
        await expect(this.loginHeading).toContainText("Login");

        
    }
}