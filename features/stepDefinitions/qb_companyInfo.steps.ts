import { browser } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import chai = require('chai');
import { loginPage } from "../pageObjects/qb_login.page";
import { dashboardPage } from "../pageObjects/qb_dashboard.page";

export = function cventSteps() {

    //Default cucumber timeout
    this.setDefaultTimeout(600 * 1000);

    //Loading browser hacks
    let browserHacks = new BrowserHacks;

    let dashboard = new dashboardPage; 
 
    let uniqueIndentifier: string;

    chai.use(require('chai-as-promised'));

    //Hooks
    this.Before(async () => {

    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });

    this.Then(/^Go to Setup & validate International Checkbox$/, async () => {
        await dashboard.CheckUserLogin();

    });

  
}
  