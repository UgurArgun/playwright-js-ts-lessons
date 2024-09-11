import { test, expect } from "@playwright/test";

test.describe("Assertion Practice in UI testing", async () => {
let elements;
let elementCount;

    test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    elements = await page.locator("//ul[@class='list-group']/li");

    });

  test("Verify that there are 50 elements under the url tag", async ({ page }) => {
    const elements = await page.locator("//ul[@class='list-group']/li");
    let elementCount = await elements.count();
    expect(elementCount).toBe(50);

  });

  test("Verify that all 50 elements under the url are visible", async ({ page }) => {
  // create a for loop that has 50 iterations
  for (let i= 0; i < elementCount; i++) {
    //get the i-th element
    const element = elements.nth(i);
    //expect the element to be visible
    await expect(element).toBeVisible();
    //expect(await expect(element).isVisible()).toBeTruthy();
    //display the text of the each element
    console.log(await element.innerText());

  }

  });

  test("Verify that all 50 elements under the url tag are enabled", async ({ page }) => {
    for (let i= 0; i < elementCount; i++) {
        //get the i-th element
        const element = elements.nth(i);
        //expect the element to be enabled
        expect(await element.isEnabled()).toBeTruthy();
        //await expect(element).toBeEnabled();
        //display the href of the each element
        console.log(await element.getAttribute('href'));
    }
  });

  test("Verify that all 50 elements under the url tag have href attribute", async ({ page }) => {
 
  });
});