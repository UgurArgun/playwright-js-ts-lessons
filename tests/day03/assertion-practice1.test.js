import { test, expect } from "@playwright/test";

test.describe("Assertion Practice in UI testing", async () => {

    test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    });

  test("Verify the page title is 'Practice'", async ({ page }) => {
    const pageTitle = await page.title();
    await page.waitForTimeout(3000);
    expect(pageTitle).toEqual("Practice");

  });

  test("Verify the text 'Automation' is included in the header element", async ({ page }) => {
    const firstHeader = await page.locator("h1");
    const headerText = await firstHeader.textContent();
    expect(headerText).toContain("Automation");

  });

  test("Verify the element 'A/B Testing' is clickable", async ({ page }) => {
    const abTestingLink = page.locator('a[href="/abtest"]');
    expect(abTestingLink).toBeTruthy();
    await expect(abTestingLink).toBeEnabled();
  });

  test("Verify the element 'Autocomplete' href is '/autocomplete' ", async ({ page }) => {
    const autoCompleteLink = page.locator('a[href="/autocomplete"]');
    const href = await autoCompleteLink.getAttribute("href");
    expect(href).toBe("/autocomplete");
    expect(autoCompleteLink).toHaveAttribute("href", "/autocomplete");

  });
  
});