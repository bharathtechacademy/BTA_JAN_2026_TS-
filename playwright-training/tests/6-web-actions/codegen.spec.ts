import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await expect(page.getByRole('img', { name: 'ParaBank' })).toBeVisible();
  await expect(page.getByText('Experience the difference')).toBeVisible();
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('Invalid User');
  await page.locator('input[name="password"]').click();
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.getByText('Please enter a username and')).toBeVisible();
  await page.getByRole('link', { name: 'Admin Page' }).click();
  await page.locator('#accessMode1').check();
  await page.locator('#loanProvider').selectOption('jms');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Settings saved successfully.')).toBeVisible();
  await page.locator('#headerPanel').getByRole('link', { name: 'Services' }).click();
  await expect(page.getByText('Bookstore services:')).toBeVisible();
  await page.getByRole('cell', { name: 'Method' }).first().click();
  await expect(page.locator('#rightPanel')).toContainText('Method');
  await expect(page.locator('#rightPanel')).toContainText('Parameters');
});