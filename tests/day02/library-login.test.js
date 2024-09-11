import { test, expect } from '@playwright/test';
import dotenv from "dotenv";

// load environment variables from .env file
dotenv.config("./.env");

test('Library login', async ({ page }) => {
    await page.goto(process.env.LIBRARY_URL);
    await page.waitForTimeout(3000);
    const usernameInput = await page.locator("#inputEmail");
    const passwordInput = await page.locator("#inputPassword");

    //create a locator variable named signinButton and use this to locate the submit button
    const signinButton = await page.locator("//button[@type='submit']");

    await usernameInput.fill(process.env.LIBRARY_STUDENT_USERNAME);
    await passwordInput.fill(process.env.LIBRARY_STUDENT_PASSWORD);
    //await page.waitForTimeout(3000);

    await signinButton.click();
    await page.waitForTimeout(3000);
    //expect(page).toHaveURL(/library2.cydeo.com\/dashboard/);


});