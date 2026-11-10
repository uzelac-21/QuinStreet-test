import { test, expect } from '@playwright/test';

test('Invalid ZIP shows an error message', async ({ page }) => {
  // 1. Open the home page
  await page.goto('https://hb-test.stage.sirenltd.dev/');

  // 2. Type an invalid ZIP code
  await page.getByPlaceholder('Enter ZIP Code').first().fill('1234');

  // 3. Click the "Get estimate" button
  await page.getByRole('button', { name: 'Get estimate' }).first().click();

  // 4. Check that the error message is shown
  await expect(page.getByText('The ZIP Code must be 5 digits with no spaces')).toBeVisible();
});
