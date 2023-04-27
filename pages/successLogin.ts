import { Page } from "@playwright/test";

export default class SuccessLogin{

    constructor(public page: Page) {
        this.page = page;
    }

    //Locators
    header = () => this.page.locator('//i[@class="icon-lock"]');
    buttonLogout = () => this.page.getByRole('link', { name: 'Logout' })
 

    async checkLogin() {
        console.log(await this.header().textContent())

    }

    async logout() {
        await this.buttonLogout().click()
    }
}