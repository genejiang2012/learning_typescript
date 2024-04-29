/*
 * @Author: gene.jiang
 * @Date: 2024-04-29 18:54:53
 * @LastEditors: gene.jiang
 * @LastEditTime: 2024-04-29 18:56:43
 * @Description: file content
 * @FilePath: \learning_typescript\playwright\example.spec.ts
 */

// @ts-check
import { expect, test } from '@playwright/test';

test('should have title', async ({ page }) => {
    await page.goto('https://playwright.nodejs.cn');
    await expect(page).toHaveTitle(/Playwright/);
});