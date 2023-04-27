import { Page } from "@playwright/test";

export default class LoginPage{

    constructor(public page: Page) {
        this.page = page;

    }

    //Locators
    fieldUsername = () => this.page.getByLabel('Username');
    fieldPassword = () => this.page.getByLabel('Password');
    buttonLogin = () => this.page.locator('//button[@type="submit"]')

    async goTo() {
        await this.page.waitForTimeout(10000)
        await Promise.all([
            this.page.waitForNavigation({waitUntil: "networkidle"}),
            this.page.goto("https://the-internet.herokuapp.com/login")

        ])
    }

    async goToPage() {
        await this.page.goto('https://the-internet.herokuapp.com/login')
    }

    async login(username: string, password: string) {
        await this.fieldUsername().fill(username);
        await this.fieldPassword().fill(password);
        await this.buttonLogin().click()
    }
}