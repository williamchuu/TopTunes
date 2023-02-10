import { test, expect } from '@playwright/test';

var homePage = 'http://localhost:3000/';
var hitsPage = 'http://localhost:3000/hits';

test.describe('Button tests', () => {
    test('This is the button component', async ({ page }) => {
        await page.goto(homePage);
        await expect(page.locator('button')).toContainText('Check out Top 100 Hits');
    })
})


test.describe('Home Header Area', () => {
    test('The title tag', async ({ page }) => {
        await page.goto(homePage)

        await expect(page).toHaveTitle('TopTunes');
    })

    test('The meta tag', async ({ page }) => {
        // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
        await page.goto(homePage)

        const metaDescriptionOne = page.locator('meta[name="description"]')
        await expect(metaDescriptionOne).toHaveAttribute("content", "The Tunes of Now, Every Week")
    })

})