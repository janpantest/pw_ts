import { expect, Page } from "@playwright/test";

export default class ValmezMestoUrad{

    constructor(public page: Page) {
        this.page = page;

    }

    //Locators
    titleSuccess = () => this.page.locator('//h1[@class="page-title my-3"]');
    buttonContinue = () => this.page.locator('//a[@class="btn btn-primary"]');

    OMeste_tabMenu = () => this.page.locator('//a[contains(text(), "O našem městě")]');
    Vedeni_tabMenu = () => this.page.locator('//a[contains(text(), "Vedení města")]');
    Rada_tabMenu = () => this.page.locator('//a[contains(text(), "Rada a zastupitelstvo města")]');
    Organizace_tabMenu = () => this.page.locator('//a[contains(text(), "Organizace města")]');


    async clickVedeni() {
        await this.Vedeni_tabMenu().click()
    }


}