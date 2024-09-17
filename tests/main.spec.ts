import { test, expect } from '@playwright/test';
import { CheckMain } from '../po/check-main';

test.describe('Main component tests', () => {
  let checkMain: CheckMain;

  test.beforeEach(async ({ page }) => {
    checkMain = new CheckMain(page);
    await checkMain.navigate();
  });

  test('Check header text in Move Free section', async () => {
    await expect(checkMain.moveFreeHeader).toHaveText('Move Free');
  });

  test('Check Compare Bikes section is visible', async () => {
    await expect(checkMain.compareBikesSection).toBeVisible();
  });

  test('Verify all bike images are visible', async () => {
    await checkMain.verifyBikeImagesVisible();
  });

  test('Check The Details section is visible', async () => {
    await expect(checkMain.theDetailsSection).toBeVisible();
  });

  test('Check the Explore button functionality', async () => {
    await checkMain.clickExploreButton();
  });
});
