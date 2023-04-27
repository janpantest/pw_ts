// import { expect, test } from "@playwright/test";
// import LoginPage from "../pages/login";
// import SuccessLogin from "../pages/successLogin";
import { expect, test } from "../base/fixture";
import * as data from "../base/data.json"

test('login', async ({ page, login, success }) => {

    // const login = new LoginPage(page);
    // const success = new SuccessLogin(page)

    await login.goToPage();
    await login.login(data.herokuName, data.herokuPswd);
    await success.checkLogin();
    await success.logout();
  });