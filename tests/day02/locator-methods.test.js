import { test } from '@playwright/test';

test('check method', async ({ page }) => {

await page.goto("https://practice.cydeo.com/checkboxes");

//create a locator variable named checkbox1
const checkBox1 = page.locator('//input[@id="box1"]');

await page.waitForTimeout(3000);

await checkBox1.check();

await page.waitForTimeout(3000);

const checkbox2 = page.locator('//input[@id="box2"]');

await checkbox2.uncheck();

await page.waitForTimeout(3000);

});

test('selectOptions method test: can be used for dropdowns', async ({ page }) => {
    
    // go to https://practice.cydeo.com/dropdown
        
    await page.goto('https://practice.cydeo.com/dropdown');

    const simpleDropDown = await page.locator("//select[@id='dropdown']");

    await page.waitForTimeout(3000);

    // select by value:
    // await simpleDropDown.selectOption("1");

    // select by index:
    //await simpleDropDown.selectOption({index:1});

    // select by visible text:
    await simpleDropDown.selectOption( {label: 'Option 1'} );



    await page.waitForTimeout(3000);

    // to get all options from drop down
    const options = await simpleDropDown.evaluate((select) => {
        return Array.from(select.options).map(option => ({
          text: option.text,
          value: option.value
        }));
      });
      
      console.log(options);

});