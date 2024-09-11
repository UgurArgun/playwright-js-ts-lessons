import { test, expect } from "@playwright/test";
import path from "path";

// create a new test group with 3 test in it.
test.describe("File upload and download", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });

  // after each, pause the automation for 2 seconds.
  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(2000);
  });

  test("File upload test", async ({ page }) => {
    await page.click("text='File Upload'");
    expect(page.url()).toBe("https://practice.cydeo.com/upload");

    // file path:
    const filePath = path.join(__dirname, "upload", "upload file.txt");

    // upload file:
    page.setInputFiles("//input[@id='file-upload' and @type='file']", filePath);
    await page.waitForTimeout(2000);

    // click on submit button:
    await page.click("//input[@id='file-submit']");

    // check the uploaded file:
    await expect(page.locator("text=File uploaded!")).toBeVisible();
  
});

  test("File download test", async ({ page }) => {
    //set listener for download event
    const downloadPromise = page.waitForEvent("download");  // promise is created: pending promise
    await page.click("text='File Download'");
    expect(page.url()).toBe("https://practice.cydeo.com/download");

    page.click("//a[@href='download/Sesson3.txt']");

    // wait for the download to complete
    const download = await downloadPromise;  //promise is either fulfilled or rejected
    expect(download.suggestedFilename().toBe("Session3.txt"));
});
    test("Save the file taht's downloaded", async ({ page }) => {
        const downloadPromise = page.waitForEvent("download");  // promise is created: pending promise
        await page.click("text='File Download'");
        expect(page.url()).toBe("https://practice.cydeo.com/download");
    
        page.click("//a[@href='download/Sesson3.txt']");
    
        const download = await downloadPromise;  //promise is either fulfilled or rejected
        
        expect(download.suggestedFilename()).toBe("Sesson3.txt");
        
        const downloadPath = path.join(__dirname, "download", download.suggestedFilename()); 

        await download.saveAs(downloadPath);
    });        
});