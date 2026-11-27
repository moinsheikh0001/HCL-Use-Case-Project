import { Page } from "@playwright/test";

export const createLoginPageLocators = (page: Page) => ({
    accountMenuButton: page.getByRole("button", { name: "Show/hide account menu", exact: true })
        .getByText("Account", { exact: true }),
    loginMenuItem: page.getByRole("menuitem", { name: "Go to login page", exact: true })
        .getByText("Login", { exact: true }),
    loginHeading: page.getByRole("heading", { name: "Login", exact: true }),
});
