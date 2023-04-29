import { test as base } from '@playwright/test';
import LoginPage from "../pages/login";
import SuccessLoginPage from "../pages/successLogin";
import EcomLoginPage from '../pages/ecomLogin';
import EcomSuccessLogin from '../pages/ecomSuccessLogin';

type pages = {
    login: LoginPage;
    success: SuccessLoginPage;
    ecomLogin: EcomLoginPage;
    ecomSuccess: EcomSuccessLogin;
};

export const testPages = base.extend<pages>({
    login: async ({ page }, use) => {
        await use(new LoginPage(page))
    },
    success: async ({ page }, use) => {
        await use(new SuccessLoginPage(page))
    },
    ecomLogin: async ({ page }, use) => {
        await use(new EcomLoginPage(page))
    },
    ecomSuccess: async ({ page }, use) => {
        await use(new EcomSuccessLogin(page))
    },
})

export const test = testPages;
export const expect = testPages.expect;