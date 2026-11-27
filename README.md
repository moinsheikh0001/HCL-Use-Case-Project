# HCL-Use-Case-Project
Playwrite Automation with BDD cucumber

## Run Tests

Run the tests using:

You should run the command from HCL Use Case project folder:

```bash
npm test
```

## Project Structure

- **Features**: Store BDD scenarios in Gherkin `.feature` files under the `features` directory. Each scenario describes behavior using `Given`, `When`, and `Then` steps.
- **Step Definitions**: Implement feature steps in JavaScript/TypeScript step-definition files, such as `features/step-definitions/*.js` or `features/step-definitions/*.ts`. Each step uses Playwright and Cucumber patterns to perform actions and assertions.
- **Pages**: Keep reusable page-object logic in `pages/*.js` or `pages/*.ts`. Page classes expose actions for a page or flow and encapsulate its locators and interactions.
- **Locators**: Store locators in page objects as class properties or constants using Playwright APIs such as `page.getByRole()`, `page.getByText()`, `page.getByLabel()`, or `page.locator()`.

