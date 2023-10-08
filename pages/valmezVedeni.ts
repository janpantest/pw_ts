import { expect, Page } from "@playwright/test";

export default class ValmezVedeniMesta{

    constructor(public page: Page) {
        this.page = page;

    }

    //Locators
    OMeste_tabMenu = () => this.page.locator('//a[contains(text(), "O našem městě")]');
    Vedeni_tabMenu = () => this.page.locator('//a[contains(text(), "Vedení města")]');
    Rada_tabMenu = () => this.page.locator('//a[contains(text(), "Rada a zastupitelstvo města")]');
    Organizace_tabMenu = () => this.page.locator('//a[contains(text(), "Organizace města")]');
    // Kontakty = () => this.page.locator('//dl[@class="kontakty"]')

    async clickVedeni() {
        await this.Vedeni_tabMenu().click()
    }

    async getText() {
        return await this.page.locator('//dl[@class="kontakty"]').textContent()
    }

    // async getText() {
    //     return await this.page.evaluate(el => this.page.locator('//dl[@class="kontakty"]').value, await this.page.$('//dl[@class="kontakty"]'))
    // }
}