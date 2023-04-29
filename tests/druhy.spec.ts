
import { expect, test } from "@playwright/test";
import * as data from "../base/data.json"
import EcomLoginPage from '../pages/ecomLogin'
import EcomSuccessLogin from  '../pages/ecomSuccessLogin'

test('register', async ({ page }) => {

  const ecomLogin = new EcomLoginPage(page);
  const ecomSuccess = new EcomSuccessLogin(page);

  await ecomLogin.goTo();
  await ecomLogin.login(data.eName , data.eSurname, data.eEmail, data.ePhone, data.ePassword, data.ePassword);
  await ecomSuccess.checkRegister();

  });