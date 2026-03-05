import { test, expect, chromium } from '@playwright/test';

test('Automate browser navigation and interactions', async () => {
  // 1. Launch the browser engine (chrome engine)
  // Note: Playwright test runner handles browser launch, but we can specify channel in config or use chromium.launch if running manually.
  // Here we assume standard test execution which uses the configured browser (usually chromium).
  // To be explicit as per instructions:
  const browser = await chromium.launch({ headless: false, channel: 'chrome' });

  // 2. Launch the browser context or incognito window from the browser engine.
  // Playwright creates an incognito context by default.
  const context = await browser.newContext();

  // 3. Clear all the cookies before beginning the execution.
  await context.clearCookies();

  // 4. Launch a new tab or page within the browser context.
  const page = await context.newPage();

  // 5. Maximize the browser window to a specific resolution. (1920 * 1080)
  await page.setViewportSize({ width: 1920, height: 1080 });

  // 6. Enter URL https://www.google.com and launch the Google application.
  await page.goto('https://www.google.com');

  // 7. Verify application launched by using the title of the application.
  const title = await page.title();
  console.log(`Page title: ${title}`);
  expect(title).toContain('Google');

  // 8. Locate Sign-In button and take screenshot.
  const signInButton = page.locator('text=Sign in').first(); // Adjust selector if needed, e.g. 'a[aria-label="Sign in"]'
  // Verify it's visible before screenshot
  await expect(signInButton).toBeVisible();
  await signInButton.screenshot({ path: 'signin-button.png' });

  // 9. Launch a new application within the same tab or page by using the URL https://playwright.dev.
  await page.goto('https://playwright.dev');

  // 10. Take the screenshot of the entire browser window.
  await page.screenshot({ path: 'playwright-full-page.png', fullPage: true });

  // 11. Go back to the previous Google application.
  await page.goBack();
  await expect(page).toHaveTitle(/Google/);

  // 12. Move forward to the Playwright application.
  await page.goForward();
  await expect(page).toHaveTitle(/Playwright/);

  // 13. Refresh the current application.
  await page.reload();

  // 14. Launch the new tab within the same browser.
  const newPage = await context.newPage();

  // 15. Launch the new application with the URL: https://www.selenium.dev
  await newPage.goto('https://www.selenium.dev');

  // 16. Go back to the previous application available in the previous tab.
  // This implies switching focus back to the first page.
  await page.bringToFront();

  // 17. Get the current browser URL.
  const currentUrl = page.url();
  console.log(`Current URL: ${currentUrl}`);

  // 18. Close the current page.
  await page.close();

  // 19. Close all pages or tabs.
  // Closing the context closes all pages within it.
  await context.close();
  await browser.close();
});
