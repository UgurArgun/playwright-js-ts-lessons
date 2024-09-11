import { test, expect } from "playwright/test";

// create a test group with 3 tests in it
test.describe("Web BAsed Authentication", () => {
  test.beforeEach(async ({ page }) => {
  });

    // afterEach, pause the automation for two seconds
    test.afterEach(async ({ page }) => {
      await page.waitForTimeout(2000);
    });

  test("By embedding the credentials in the URL", async ({ page }) => {
    await page.goto("https://admin:admin@practice.cydeo.com/basic_auth");
    expect(await page.getByText("Congratulations! You must have the proper credentials.")).toBeVisible();
    
    // Not recommended to embed the credentials as it is not secure
});

  test("By encoding the credetials", async ({ page }) => {
    //encode the credentials in Base64 format

    const encodedCredentials = Buffer.from("admin:admin").toString("base64");
    await page.setExtraHTTPHeaders({Authorization: `Basic ${encodedCredentials}`,});
    await page.goto("https://practice.cydeo.com/basic_auth");

    /*
    const code = Buffer.from("username:password").toString("Base64");
    await page.setExtraHTTPHeaders({Authorization:  `Basic ${code}`,});
    */
    expect(await page.getByText("Congratulations! You must have the proper credentials.")).toBeVisible();
  });
    
  });