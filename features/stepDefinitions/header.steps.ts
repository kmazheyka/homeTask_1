import { browser } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import chai = require('chai');
import { Header } from "../pageObjects/header.page";
import { Homepage } from "../pageObjects/homepage.page";

export = function cventSteps() {

    this.setDefaultTimeout(10000);

    let browserHacks = new BrowserHacks;

      let homepage = new Homepage; 
      let header = new Header;


    chai.use(require('chai-as-promised'));

    this.Before(async () => {
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });
    
    let searchValue: any; 

    this.Given(/^I am on Onliner homepage$/, async () => {
        await browser.navigate().to(browser.params.onlinerByURL);
        await header.Loaded();
    });

    this.Then(/^enter "(.*?)" in Search field/, async (value) => {
        await header.Search(value);
    });

    this.Then(/^Validate Search Result$/, async () => {
        await header.ValidateSearchResult(searchValue);
         });

    this.Then(/^Click first row in list/, async ()=> {
         searchValue = await header.ClickFirstRowInSearchList();
    });

    this.Then(/^I see "(.*?)" item/, async (value) => {
        await header.VerifyItemIsVisible(value);
    });

    this.Then(/^Validate header dropdown Homes/, async ()=> {
        await header.ValidateHeaderMenuHome();
    });
    
    this.Then(/^Add goods to cart and validate/, async ()=> {
        await homepage.AddGoodsToCartAndValidate();
    });

}