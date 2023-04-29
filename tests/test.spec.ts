
import { expect, test } from "../base/fixture";
import * as data from "../base/data.json"

test('login', async ({ page, login, success }) => {

    await login.goToPage();
    await login.login(data.herokuName, data.herokuPswd);
    await success.checkLogin();
    await success.logout();
  });

  test('register', async ({ page, ecomLogin, ecomSuccess }) => {

    // const ecomLogin = new EcomLoginPage(page);
    // const ecomSuccess = new EcomSuccessLogin(page);
  
    await ecomLogin.goTo();
    await ecomLogin.login(data.eName , data.eSurname, data.eEmail, data.ePhone, data.ePassword, data.ePassword);
    await ecomSuccess.checkRegister();
  
    });