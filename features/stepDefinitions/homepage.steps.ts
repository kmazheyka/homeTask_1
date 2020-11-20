import { browser } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import chai = require('chai');
import { Homepage } from "../pageObjects/homepage.page";

export = function cventSteps() {

    this.setDefaultTimeout(10000);

    let browserHacks = new BrowserHacks;

      let homepage = new Homepage;

    chai.use(require('chai-as-promised'));

    this.Before(async () => {
    });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });

    this.Then(/^Check Main News Blocks/, async () => {
        await homepage.CheckMainNewsBlocks();
    });

    this.When(/^Redirect to "(.*?)" Block/, async (value) => {
        await homepage.RedirectToNewsBlock(value);
    });

    this.Then(/^LoginIn and check user/, async () => {
        await homepage.LogInAndCheck();
    });

    this.Then(/^LogIn/, async () => {
        await homepage.LogIn();
    });


}