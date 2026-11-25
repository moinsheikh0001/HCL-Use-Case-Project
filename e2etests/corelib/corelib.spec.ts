
import cucumber = require("@cucumber/cucumber");
import { Browser, BrowserContext, Page, chromium } from "playwright";
const { Given, When, Then, Before, After, setDefaultTimeout } = cucumber;

setDefaultTimeout(60_000);

let browser: Browser | undefined;
let page: Page | undefined;

Before(async function () {
  browser = await chromium.launch({ headless: false, channel: 'chrome' });
  let bCtx: BrowserContext = await browser.newContext();
  page = await bCtx.newPage();
});

After(async function () {
  if (browser) {
    await browser.close();
    browser = undefined;
  }
});

export function getPage(): Page | undefined {
  return page;
} 