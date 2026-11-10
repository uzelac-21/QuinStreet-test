import { test, expect } from '@playwright/test';

test('Happy path finishes the wizard and shows the thank-you screen', async ({ page }) => {
  test.setTimeout(90_000);

  // 1. Open the home page
  await page.goto('https://hb-test.stage.sirenltd.dev/');

  // 2. Type a valid ZIP code
  await page.getByPlaceholder('Enter ZIP Code').first().fill('10001');

  // 3. Click the "Get estimate" button
  await page.getByRole('button', { name: 'Get estimate' }).first().click();

  // 4. Choose "Kitchen cabinets" and click Next
  await page.getByText('Kitchen cabinets', { exact: true }).click();
  await page.getByRole('button', { name: 'Next' }).click();

  // 5. Choose "Replace all or most cabinets" and click Next
  await page.getByText('Replace all or most cabinets', { exact: true }).click();
  await page.getByRole('button', { name: 'Next' }).click();

  // 6. Choose "Single family home" and click Next
  await page.getByText('Single family home', { exact: true }).click();
  await page.getByRole('button', { name: 'Next' }).click();

  // 7. Answer "No" to the mobile / modular / manufactured home question and click Next
  await page.getByText('No', { exact: true }).click();
  await page.getByRole('button', { name: 'Next' }).click();

  // 8. Answer "Yes" to the homeowner question and click Next
  await page.getByText('Yes', { exact: true }).click();
  await page.getByRole('button', { name: 'Next' }).click();

  // 9. Type a kitchen size of 150 square feet (do not choose "Not sure") and click Next
  await page.getByRole('textbox', { name: 'Kitchen size in sq. ft.' }).fill('150');
  await page.getByRole('button', { name: 'Next' }).click();

  // 10. Choose a real budget ("Up to $5K"). The site asks if you still want to continue — click Yes.
  await page.getByText('Up to $5K', { exact: true }).click();
  await page.getByRole('button', { name: 'Yes' }).click();

  // 11. Enter a name and a unique email (so a second run is not blocked as a duplicate) and click Next
  await page.getByRole('textbox', { name: 'Full name' }).fill('Aleksandar Test');
  await page.getByRole('textbox', { name: 'Email address' }).fill('aleksandar.test+qa' + Date.now() + '@example.com');
  await page.getByRole('button', { name: 'Next' }).click();

  // 12. Enter a unique US phone number and click "Submit my request"
  await page.getByRole('textbox', { name: 'Phone number' }).fill('20255501' + String(Date.now()).slice(-2));
  await page.getByRole('button', { name: 'Submit my request' }).click();

  // 13. Confirm the phone number
  await page.getByRole('button', { name: 'Phone number is correct' }).click();

  // 14. Check that the thank-you screen is shown
  await expect(page.getByText('No-Obligation Appointment')).toBeVisible();
  await expect(
    page.getByText("Please don't miss the call or the contractor won't be able to provide a free estimate!"),
  ).toBeVisible();
});
