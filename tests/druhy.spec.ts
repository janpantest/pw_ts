
import { expect, test } from "@playwright/test";
import * as data from "../base/data.json";
import ValmezMestoUrad from "../pages/valmezMestoUrad";
import ValmezVedeniMesta from "../pages/valmezVedeni";
import ValmezHome from "../pages/valmezHome";


test('register', async ({ page }) => {

  const valmezHome = new ValmezHome(page);
  const valmezMestoUrad = new ValmezMestoUrad(page);
  const valmezVedeniMesta = new ValmezVedeniMesta(page);

  await valmezHome.goTo();
  // await valmezHome.checkIfExists()
  await valmezHome.clickIfExists()
  await valmezHome.clickMestoUrad();
  await valmezMestoUrad.clickVedeni();
  // await valmezVedeniMesta.getText();
  // const vedeni = await valmezVedeniMesta.getText();
  // console.log(vedeni)
  console.log(await valmezVedeniMesta.getText())


  });