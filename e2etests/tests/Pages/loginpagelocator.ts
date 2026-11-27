import { Page } from "@playwright/test";

export const createLoginPageLocators = (page: Page) => ({
    dismissButton: page.locator("//span[contains(@class, 'hide-lt-sm') and normalize-space()='Dismiss']"),
    accountMenuButton: page.getByRole("button", { name: "Show/hide account menu", exact: true })
        .getByText("Account", { exact: true }),
    loginMenuItem: page.getByRole("menuitem", { name: "Go to login page", exact: true })
        .getByText("Login", { exact: true }),
    loginHeading: page.getByRole("heading", { name: "Login", exact: true }),
});
