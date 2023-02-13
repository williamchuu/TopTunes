import { test, expect } from '@playwright/test';

var homePage = 'http://localhost:3000/';
var hitsPage = 'http://localhost:3000/hits';

test('should navigate to the hits page', async ({ page }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
    await page.goto('http://localhost:3000/')
    // Find an element with the text 'Check out Top 100 Hits' and click on it
    await page.click('text=Check out Top 100 Hits')
})

