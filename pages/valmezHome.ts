import { expect, Page } from "@playwright/test";

export default class ValmezHome{

    constructor(public page: Page) {
        this.page = page;

    }

    //Locators
    MestoUrad_upperMenu = () => this.page.locator('//a[contains(text(), "Město a úřad")]');
    Potrebuji_upperMenu = () => this.page.locator('//a[contains(text(), "Potřebuji si vyřídit")]');
    Chci_upperMenu = () => this.page.locator('//a[contains(text(), "Chci se dozvědět")]');
    Kontakty_upperMenu = () => this.page.locator('//a[contains(text(), "Kontakty")]');

    async goTo() {
        await this.page.goto('https://www.valasskemezirici.cz/');
    }

    async clickMestoUrad() {
        await this.MestoUrad_upperMenu().click()
    }

    async checkIfExists() {
        // const buttonExist = await this.page.locator('#vismo-cookies-refuse-button').isVisible({ timeout: 20000});
        // console.info('button exists : ' + buttonExist);
        // return buttonExist;
        return await this.page.locator('#vismo-cookies-refuse-button').isVisible({ timeout: 20000});
    }

    async clickIfExists() {
        console.info(await this.checkIfExists())
        if (await this.checkIfExists()) {
            await this.page.locator('//a[@id="vismo-cookies-refuse-button"]').click()
        }
    }

}