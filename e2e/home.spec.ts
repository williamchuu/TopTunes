import { test, expect } from '@playwright/test';

var homePage = 'http://localhost:3000/';
var hitsPage = 'http://localhost:3000/hits';


test.describe('Desktop screen tests', () => {
    test('checking main size', async ({ page }) => {
        await page.goto(homePage);
        const main = page.locator('main');

        const computedStyles = await main.evaluate((element) => {
            const styles = window.getComputedStyle(element);
            return {
                padding: styles.padding
            };
        });

        expect(computedStyles.padding).toEqual('96px');
    });
    test('checking h1 size', async ({ page }) => {
        await page.goto(homePage);
        const h1 = page.locator('h1');

        const computedStyles = await h1.evaluate((element) => {
            const styles = window.getComputedStyle(element);
            return {
                fontSize: styles.fontSize,
                paddingBottom: styles.paddingBottom,
            };
        });

        expect(computedStyles.fontSize).toEqual('50px');
        expect(computedStyles.paddingBottom).toEqual('100px');
    });
})

test.describe('iPad screen tests', () => {
    test('checking h1 changes sizes', async ({ page }) => {
        await page.setViewportSize({ width: 601, height: 1000 });
        await page.goto(homePage);
        const h1 = page.locator('h1');

        const computedStyles = await h1.evaluate((element) => {
            const styles = window.getComputedStyle(element);
            return {
                fontSize: styles.fontSize,
                paddingBottom: styles.paddingBottom,
            };
        });

        expect(computedStyles.fontSize).toEqual('30px');
        expect(computedStyles.paddingBottom).toEqual('40px');
    });

    test('checking the flex direction of the landing page', async ({ page }) => {
        await page.setViewportSize({ width: 601, height: 1000 });
        await page.goto(homePage);
        const landing = page.locator('main');

        const computedStyles = await landing.evaluate((element) => {
            const styles = window.getComputedStyle(element);
            return {
                flexDirection: styles.flexDirection
            };
        });

        expect(computedStyles.flexDirection).toEqual('column');
    }
    );
})

test.describe('iPhone screen tests', () => {
    test('checking the text of the featured artist section', async ({ page }) => {
        await page.setViewportSize({ width: 320, height: 1000 });
        await page.goto(homePage);
        const featuredCont = page.locator('main');

        const computedStyles = await featuredCont.evaluate((element) => {
            const styles = window.getComputedStyle(element);
            return {
                width: styles.width
            };
        });

        expect(computedStyles.width).toEqual('320px');
    });

    test('checking the padding of featured songs', async ({ page }) => {
        await page.setViewportSize({ width: 400, height: 1000 });
        await page.goto(homePage);
        const featuredSongs = page.locator('main');

        const computedStyles = await featuredSongs.evaluate((element) => {
            const styles = window.getComputedStyle(element);
            return {
                paddingTop: styles.paddingTop,
            };
        });

        expect(computedStyles.paddingTop).toEqual('48px');
    }
    );
})