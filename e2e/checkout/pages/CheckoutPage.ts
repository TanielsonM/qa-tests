import { type Page, type Locator, expect } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://www.google.com.br/');
    }

    async validateTitle() {
        await expect(this.page).toHaveTitle(/Google/i);
    }
}
