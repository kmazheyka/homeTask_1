
import { assert } from 'chai';
import { browser, ExpectedConditions, promise, element, by } from "protractor";
import chai = require('chai');
import { qb_companyInfoRepository } from "../objectsRepository/qb_companyInfo.obj";
const defaultTimeout = 30000;

export class companyInfoPage {

  //Locators      
    readonly companyInfoElements = new qb_companyInfoRepository;
  

  public async CheckInternationalCompanyAndValidate(): promise.Promise<void>{
await this.companyInfoElements.InternationalCheckBox.click

  }
}