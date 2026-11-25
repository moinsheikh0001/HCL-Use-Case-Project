import cucumber = require("@cucumber/cucumber");
import { expect } from "@playwright/test";
import { Browser, BrowserContext, Page, chromium } from "playwright";
const { Given, When, Then, Before, After, setDefaultTimeout } = cucumber;

import { getPage } from "../../corelib/corelib.spec";
import LoginPage from "../Pages/loginpage";

let loginPage: LoginPage;

setDefaultTimeout(60_000);

Given('User launch the Juice Shop application', async function () {
    loginPage = new LoginPage(getPage()!);
    await loginPage.goToLoginPage();
});

When('user enter login page', async function () {
    await loginPage.loginToApp();
    console.log('user enter login details');
});

Then('user enter valid username and password', function () {
    console.log('user enter valid username and password');
});

Then('Click on login button', function () {
    console.log('Click on login button');
});

Then('Login Should be successful', function () {
    console.log('Login Should be successful');
});



