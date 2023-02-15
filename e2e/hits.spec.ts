import { test, expect } from '@playwright/test';

var hitsPage = 'http://localhost:3000/';
var hitsPage = 'http://localhost:3000/hits';

test.describe('Desktop screen tests', () => {
    test('checking font family', async ({ page }) => {
        await page.goto(hitsPage);
        const main = page.locator('main');

        const computedStyles = await main.evaluate((element) => {
            const styles = window.getComputedStyle(element);
            return {
                fontFamily: styles.fontFamily
            };
        });

        expect(computedStyles.fontFamily).toEqual('inter, sans-serif');
    });
    test('checking number of divs used', async ({ page }) => {
        await page.goto(hitsPage);
        await expect(page.locator('div')).toHaveCount(930);
    });
})

test.describe('iPad screen tests', () => {
    test('checking the min height change when screen is smaller', async ({ page }) => {
        await page.setViewportSize({ width: 601, height: 1000 });
        await page.goto(hitsPage);
        const main = page.locator('main');

        const computedStyles = await main.evaluate((element) => {
            const styles = window.getComputedStyle(element);
            return {
                minHeight: styles.minHeight
            };
        });

        expect(computedStyles.minHeight).toEqual('1000px');
    });
    test('checking font size change of heading', async ({ page }) => {
        await page.setViewportSize({ width: 601, height: 1000 });
        await page.goto(hitsPage);
        const heading = page.locator('main');

        const computedStyles = await heading.evaluate((element) => {
            const styles = window.getComputedStyle(element);
            return {
                fontSize: styles.fontSize
            };
        });


        expect(computedStyles.fontSize).toEqual('16px');
    });
});

test.describe('iPhone screen tests', () => {
    test('checking the adjustment of the heart button', async ({ page }) => {
        await page.setViewportSize({ width: 300, height: 1000 });
        await page.goto(hitsPage);
        const heart = page.locator('main');

        const computedStyles = await heart.evaluate((element) => {
            const styles = window.getComputedStyle(element);
            return {
                width: styles.width
            };
        });

        expect(computedStyles.width).toEqual('300px');
    });
    test('checking the flex display', async ({ page }) => {
        await page.setViewportSize({ width: 300, height: 1000 });
        await page.goto(hitsPage);
        const main = page.locator('main');

        const computedStyles = await main.evaluate((element) => {
            const styles = window.getComputedStyle(element);
            return {
                display: styles.display
            };
        });

        expect(computedStyles.display).toEqual('flex');
    });
});
