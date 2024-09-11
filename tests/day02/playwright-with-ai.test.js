import { test } from '@playwright/test';

test('Youtube test', async ({ page }) => {
    
  await page.goto('https://www.youtube.com/');

  const searchBox = await page.locator("//input[@id='search']");

  await page.waitForTimeout(3000);

  await searchBox.click();

  await searchBox.fill('AI propmt engineering');

  await searchBox.press('Enter');


});