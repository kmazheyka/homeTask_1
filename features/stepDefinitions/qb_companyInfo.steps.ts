import { browser } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import chai = require('chai');
import { companyInfoPage } from "../pageObjects/qb_companyinfo.page";

export = function cventSteps() {

    //Default cucumber timeout
    this.setDefaultTimeout(600 * 1000);

    //Loading browser hacks
    let browserHacks = new BrowserHacks;

    let companyInfo = new companyInfoPage; 
 
    let uniqueIndentifier: string;

    chai.use(require('chai-as-promised'));

    //Hooks
    this.Before(async () => {

    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });

    this.Then(/^Check International Checkbox$/, async () => {
        companyInfo.CheckInternationalCompany();
    });

    this.When(/^Validate International Checkbox State$/, async () => {
        companyInfo.ValidateInternationalCheckBoxState();
    });
}
  