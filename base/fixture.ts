import { test as base } from '@playwright/test';
import LoginPage from "../pages/login";
import SuccessLoginPage from "../pages/successLogin";

type pages = {
    login: LoginPage;
    success: SuccessLoginPage;
};

export const testPages = base.extend<pages>({
    login: async ({ page }, use) => {
        await use(new LoginPage(page))
    },
    success: async ({ page }, use) => {
        await use(new SuccessLoginPage(page))
    },
})

export const test = testPages;
export const expect = testPages.expect;