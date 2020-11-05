//import { assert } from "console";
import { expect } from 'chai';
import { assert } from 'chai';
import { browser, ExpectedConditions, promise, element, by } from "protractor";
import { qb_BaseRepository } from "../objectsRepository/qb_base.obj";

import chai = require('chai');
import { threadId } from 'worker_threads';

const defaultTimeout = 20000;
//var assert = require('chai').assert;
//This class serves as an actions list on the page can be made, one page equals one class file, i.e. "home.page.ts"
export class basePage {

  readonly basePage = new qb_BaseRepository;

  //Locators      



  public async SkipSendingAndMapping(): promise.Promise<void>{
    await browser.wait(ExpectedConditions.presenceOf(this.basePage.NoThanksButton), defaultTimeout);
    await this.basePage.NoThanksButton.click();
    await browser.wait(ExpectedConditions.presenceOf(this.basePage.MapToCrmModalCancelButton), defaultTimeout);
    await this.basePage.MapToCrmModalCancelButton.click();
    await browser.wait(ExpectedConditions.presenceOf(this.basePage.CompletedModalOkButton), defaultTimeout);
    await this.basePage.CompletedModalOkButton.click();
  }



}