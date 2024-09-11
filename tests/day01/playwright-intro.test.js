import test from "playwright/test";

test('Search for playwright on google', async ({page}) =>{

    /*
    Steps:
    Navigate to Google
    Locate the search box
    type "Playwright"
    press Enter
    */
   await page.goto("https://www.google.com/");
   await page.waitForTimeout(3000);
   const searchInput = await page.locator("//textarea[@id='APjFqb']");
   await searchInput.type('Playwright Automation');
   //searchInput.fill('Playwright Automation');

   await page.waitForTimeout(3000);

   await searchInput.press('Enter');

   await page.waitForTimeout(3000);


 })
