import { browser } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import chai = require('chai');
import { Footer } from "../pageObjects/footer.page";


export = function cventSteps() {

    this.setDefaultTimeout(10000);
    let browserHacks = new BrowserHacks;
    let footer = new Footer;

    chai.use(require('chai-as-promised'));

    this.Before(async () => {
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });

    this.Then(/^Go to support page and validate/, async () => {
        await footer.GoToSupportPageAndValidate();
    });
         
}












