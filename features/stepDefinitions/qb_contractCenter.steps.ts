import { browser } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import chai = require('chai');
import { OnlinerPage } from "../pageObjects/onliner.page";
import { contractCenterPage } from "../pageObjects/qb_contractCenter.page";
import { dashboardPage } from "../pageObjects/qb_dashboard.page";

export = function cventSteps() {

    this.setDefaultTimeout(600 * 1000);

    let browserHacks = new BrowserHacks;



    let contractCenterPare  = new contractCenterPage; 

 //Chai-as-Promised setup
 chai.use(require('chai-as-promised'));

 //Hooks
 this.Before(async () => {
   await browserHacks.logInAsDefaulUser();
 });

 this.After(async () => {
     await browserHacks.ClearBrowserData();
 });
  chai.use(require('chai-as-promised'));
  
  let number;


    this.Then(/^Create Simple Contract$/, async () => {
      number =  await contractCenterPare.CreateSimpleContract();

    });
  
  
  
    this.When(/^Check Contract in Grid$/, async () => {
    await contractCenterPare.CheckContractInGrid(number);
 
     });

}