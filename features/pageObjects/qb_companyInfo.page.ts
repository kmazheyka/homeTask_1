
import { assert } from 'chai';
import { browser, ExpectedConditions, promise, element, by } from "protractor";
import chai = require('chai');
import { qb_companyInfoRepository } from "../objectsRepository/qb_companyInfo.obj";
const defaultTimeout = 30000;

let InternationalCheckBoxState: any;

export class companyInfoPage {

  //Locators      
    readonly companyInfoElements = new qb_companyInfoRepository;
  
  public async CheckInternationalCompany(): promise.Promise<void>{
    InternationalCheckBoxState = await this.companyInfoElements.InternationalCheckBox_atr.getAttribute("ariaChecked");
    await this.companyInfoElements.InternationalCheckBox.click();
    browser.sleep(1000);
    await browser.refresh();
  }

  public async ValidateInternationalCheckBoxState(): promise.Promise<void>{
    let InternationalCheckBoxSrateActual = await this.companyInfoElements.InternationalCheckBox_atr.getAttribute("ariaChecked");
    if (InternationalCheckBoxState == 'true') {
      assert.equal(InternationalCheckBoxSrateActual, 'false', "International CheckBox Is not saved state");
    } else {
      assert.equal(InternationalCheckBoxSrateActual, 'true', "International CheckBox Is not saved state");
    }
  }
}