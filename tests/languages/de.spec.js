// @ts-check
const { test, expect } = require("@playwright/test");

test.use({
  locale: "de-DE",
  timezoneId: "Europe/Berlin",
});

test("test german text display", async ({ page }) => {
  await page.goto(
    "/?entityID=https://example.org&returnIDParam=providerUri&return=https%3a%2f%2fexample.org%2fShibboleth.sso%2fLogin%3freturnUrl%3dhttp%253a%252f%252fexample.org"
  );

  // Expect a embedded discovery service to render
  await expect(
    page.getByText("Namen (oder Teile davon) der Institution angeben")
  ).toBeVisible();
});

test.use({
  locale: "en-US",
  timezoneId: "America/New_York",
});

test("test german text display: forced", async ({ page }) => {
  await page.goto(
    "/?entityID=https://example.org&returnIDParam=providerUri&return=https%3a%2f%2fexample.org%2fShibboleth.sso%2fLogin%3freturnUrl%3dhttp%253a%252f%252fexample.org"
  );

  // Expect a embedded discovery service to render
  await expect(
    page.getByText("Namen (oder Teile davon) der Institution angeben")
  ).toBeVisible();
});
