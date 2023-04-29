import { expect, Page } from "@playwright/test";

export default class EcomSuccessLogin{

    constructor(public page: Page) {
        this.page = page;

    }

    //Locators
    titleSuccess = () => this.page.locator('//h1[@class="page-title my-3"]');
    buttonContinue = () => this.page.locator('//a[@class="btn btn-primary"]')

    async checkRegister() {
        await expect(this.page.locator('//h1[@class="page-title my-3"]')).toContainText(' Your Account Has Been Created!')
        await this.buttonContinue().click()
    }
}