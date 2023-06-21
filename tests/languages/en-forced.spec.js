// @ts-check
const {test, expect} = require('@playwright/test');

test.use({
  locale : 'de-DE',
  timezoneId : 'Europe/Berlin',
});

test('test german text display: forced', async ({page}) => {
  await page.route('idpselect_config.js', async (route) => {
    const response = await route.fetch();
    let text = await response.text();
    text = text.replace('this.selectedLanguage = null',
                        'this.selectedLanguage = "en"');
    await route.fulfill({response, body : text});
  });

  await page.goto(
      '/?entityID=https://example.org&returnIDParam=providerUri&return=https%3a%2f%2fexample.org%2fShibboleth.sso%2fLogin%3freturnUrl%3dhttp%253a%252f%252fexample.org');

  // Expect a embedded discovery service to render english text
  await expect(page.getByText("Enter your organization's name")).toBeVisible();
});
