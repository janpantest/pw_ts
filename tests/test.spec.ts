
import { expect, test } from "../base/fixture";
import * as data from "../base/data.json"

test('login', async ({ page, login, success }) => {

    await login.goToPage();
    await login.login(data.herokuName, data.herokuPswd);
    await success.checkLogin();
    await success.logout();
  });