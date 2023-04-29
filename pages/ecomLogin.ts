import { expect, Page } from "@playwright/test";

export default class EcomLoginPage{

    constructor(public page: Page) {
        this.page = page;

    }

    //Locators
    fieldUsername = () => this.page.locator('//input[@id="input-firstname"]');
    fieldLastname = () => this.page.locator('//input[@id="input-lastname"]');
    fieldEmail = () => this.page.locator('//input[@id="input-email"]');
    fieldPhone = () => this.page.locator('//input[@id="input-telephone"]');
    fieldPassword = () => this.page.locator('//input[@id="input-password"]');
    fieldPasswordConfirm = () => this.page.locator('//input[@id="input-confirm"]');
    radioNo = () => this.page.locator('//button[@type="submit"]')
    checkboxAgree = () => this.page.locator('//div[@class="custom-control custom-checkbox custom-control-inline"]')
    buttonContinue = () => this.page.locator('//input[@class="btn btn-primary"]')
    buttonLogin = () => this.page.locator('//button[@type="submit"]')

    async goTo() {
            this.page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/register");
    }

    async goToPage() {
        await this.page.goto('https://the-internet.herokuapp.com/login')
    }

    async login(username: string, lastname: string, email: string, phone: string, password: string, passwordConfirm: string) {
        await this.fieldUsername().fill(username);
        await this.fieldLastname().fill(lastname);
        await this.fieldEmail().fill(email);
        await this.fieldPhone().fill(phone);
        await this.fieldPassword().fill(password);
        await this.fieldPasswordConfirm().fill(passwordConfirm);
        // await expect(this.radioNo).toBeChecked()
        await this.checkboxAgree().click()
        await this.buttonContinue().click()
    }
}