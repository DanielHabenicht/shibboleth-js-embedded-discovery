// @ts-check
const {test, expect} = require("@playwright/test");

test("renders", async ({page}) => {
  await page.goto(
      "/?entityID=https://example.org&returnIDParam=providerUri&return=https%3a%2f%2fexample.org%2fShibboleth.sso%2fLogin%3freturnUrl%3dhttp%253a%252f%252fexample.org");

  // Expect a embedded discovery service to render
  await expect(page.getByText("Enter your organization")).toBeVisible();
  // await page.waitForSelector('text=Log in',{timeout:25000})
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });
