//import { assert } from "console";
import { expect } from 'chai';
import { assert } from 'chai';
import { browser, ExpectedConditions, promise, element, by } from "protractor";
import { qb_dashbooardRepository } from "../objectsRepository/qb_dashboard.obj";
import chai = require('chai');

const defaultTimeout = 20000;
//var assert = require('chai').assert;
//This class serves as an actions list on the page can be made, one page equals one class file, i.e. "home.page.ts"
export class newContractPage {

  //Locators      
 // readonly dashboardElements = new qb_dashbooardRepository;


  
  public async SelectLibraryContract(value: string) {

    let ddlElem = element(by.xpath(`//div[@class='cdk-overlay-pane']//span[contains(text(),"${value}")]`));
    browser.sleep(200);
    await ddlElem.click();


  }


  


}