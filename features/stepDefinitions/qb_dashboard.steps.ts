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
   
    this.Given(/^I am on homepage$/, async () => {
    await dashboard.IsUserOnDashboard();
    });

    this.Then(/^Is User logged in$/, async () => {
        await dashboard.CheckUserLogin();
    });
  
    this.When(/^Switch my stats toggle$/, async () => {
      await dashboard.SwitchMyStatsToggleAndCheckState();
    });

    this.Then(/^Go ot Contract Center$/, async () => {
      await dashboard.GoToContractCenter();
    });
  
    this.Then(/^Check Hover Text$/, async () => {
      await dashboard.CheckMyProfileHover();
    });
  
    this.Then(/^Check Jira Icon on Dashboard$/, async () => {
    await dashboard.CheckJiraIcon();
    });
  
    this.Then(/^Go to Setup$/, async () => {
      await dashboard.GoToSetup();
    });
}
  