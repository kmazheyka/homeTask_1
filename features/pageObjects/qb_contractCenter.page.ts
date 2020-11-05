//import { assert } from "console";
import { expect } from 'chai';
import { assert } from 'chai';
import { browser, ExpectedConditions, promise, element, by } from "protractor";
import { qb_dashbooardRepository } from "../objectsRepository/qb_dashboard.obj";
import { qb_newContractRepository } from "../objectsRepository/qb_newContract.obj";
import { qb_BaseRepository } from "../objectsRepository/qb_base.obj";
import { Randomizer } from "../../support/randomizer";
import { newContractPage } from "../pageObjects/qb_newContract.page";
import { basePage } from "../pageObjects/qb_base.page";

import chai = require('chai');
import { threadId } from 'worker_threads';

const defaultTimeout = 20000;
//var assert = require('chai').assert;
//This class serves as an actions list on the page can be made, one page equals one class file, i.e. "home.page.ts"
export class contractCenterPage {

  //Locators      
  readonly dashboardElements = new qb_dashbooardRepository;
  readonly newContractElements = new qb_newContractRepository;
  readonly baseElements = new qb_BaseRepository;
  readonly random = new Randomizer;
  readonly newContractPage = new newContractPage;
  readonly basePage = new basePage 
 
  public async CreateSimpleContract(): promise.Promise<string>{
    await this.baseElements.ToolBarNewButton.click();
    browser.sleep(3000);
    let number = (await this.newContractElements.ContractNumber.getAttribute("textContent")).replace("Contract", "").trim();
    await this.baseElements.SwitchCrmButton.click();
    browser.sleep(1000);
    await this.newContractElements.AccountBusinessCompanyNameInput.sendKeys(this.random.randomString(10), defaultTimeout);
    await this.newContractElements.ContactNameInput.sendKeys(this.random.randomString(10), defaultTimeout);
    await this.newContractElements.ContractName.sendKeys(this.random.randomString(10), defaultTimeout)
    await this.newContractElements.StateRegionInput.sendKeys(this.random.randomString(10), defaultTimeout);
    await this.newContractElements.DocumentDropdown.click();
    await this.newContractPage.SelectLibraryContract("ESA");
    let doc = this.newContractElements.DocumentDropdown.getAttribute("textContent");
    await browser.wait(ExpectedConditions.textToBePresentInElement(this.newContractElements.DocumentDropdown, "ESA"));


    await this.newContractElements.BuildContractButton.click();
    await this.basePage.SkipSendingAndMapping();
    
    return  number;
  }

  public async CheckContractInGrid(itemId): promise.Promise<void>{
    
    let ContractRow = element(by.xpath(`//qb-data-table//mat-row[not(contains(@class,'expanded-row'))][1]//mat-cell//span[contains(text(),'${itemId}')]`));
    await browser.wait(ExpectedConditions.presenceOf(ContractRow), defaultTimeout, 'Contract isnt exist in Grid');
  }

}