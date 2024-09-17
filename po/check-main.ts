import { expect, Locator, Page } from '@playwright/test';

export class CheckMain {
    readonly page: Page;
    readonly moveFreeHeader: Locator;
    readonly compareBikesSection: Locator;
    readonly theDetailsSection: Locator;
    readonly exploreButton: Locator;
    readonly bike1: Locator;
    readonly bike2: Locator;
    readonly bike3: Locator;

    constructor(page: Page) {
        this.page = page;
        this.moveFreeHeader = this.page.locator('.moveFree .headerOfText');
        this.compareBikesSection = this.page.locator('.compareBikes');
        this.theDetailsSection = this.page.locator('.theDetails');
        this.exploreButton = this.page.locator('.buttonGallary');
        this.bike1 = this.page.locator("img[alt='Bike 1']");
        this.bike2 = this.page.locator("img[alt='Bike 2']");
        this.bike3 = this.page.locator("img[alt='Bike 3']");
    }

    async navigate() {
        await this.page.goto('https://my-bike-six.vercel.app/')
    }

    async verifyBikeImagesVisible() {
        await expect(this.bike1).toBeVisible();
        await expect(this.bike2).toBeVisible();
        await expect(this.bike3).toBeVisible();
    }

    async clickExploreButton() {
        await this.exploreButton.click();
    }
}
