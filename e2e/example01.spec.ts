/*
 * @Author: gene.jiang
 * @Date: 2024-04-29 19:08:40
 * @LastEditors: gene.jiang
 * @LastEditTime: 2024-04-29 19:42:43
 * @Description: file content
 * @FilePath: \learning_typescript\e2e\example01.spec.ts
 */
// @te-check

import {test, expect} from '@playwright/test';

test('open the product-qa', async ({page}) => {
    await page.goto('https://xxx-.xxx.com/');    
});