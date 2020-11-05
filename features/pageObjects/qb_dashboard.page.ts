//import { assert } from "console";
import { expect } from 'chai';
import { assert } from 'chai';
import { browser, ExpectedConditions, promise, element, by } from "protractor";
import { qb_dashbooardRepository } from "../objectsRepository/qb_dashboard.obj";
import { qb_BaseRepository } from "../objectsRepository/qb_base.obj";
import chai = require('chai');

const defaultTimeout = 30000;
//var assert = require('chai').assert;
//This class serves as an actions list on the page can be made, one page equals one class file, i.e. "home.page.ts"
export class dashboardPage {

  //Locators      
    readonly baseElements = new qb_BaseRepository;
    readonly dashboardElements = new qb_dashbooardRepository;



  
  public async IsUserOnDashboard(): promise.Promise<void> {
    //Check that element is both present in DOM and visible on screen
    // let userName: string;
    // userName = this.dashboardElements.userNameHeader.getText().toString();

       await browser.wait(ExpectedConditions.visibilityOf(this.dashboardElements.SwitchUserButton), defaultTimeout, "user is not on dashboard");

  }


  public async CheckUserLogin(): promise.Promise<void> {
    //Check that element is both present in DOM and visible on screen
    // let userName: string;
    // userName = this.dashboardElements.userNameHeader.getText().toString();

    await browser.wait(ExpectedConditions.textToBePresentInElement(this.dashboardElements.userNameHeader, "Hello, Joe Harzewski"), defaultTimeout, "User is not logged in"); 

    //await browser.wait(ExpectedConditions.visibilityOf(this.onlinerElements.onlinerLogo), defaultTimeout, "Homepage not loaded");
  }

  public async SwitchMyStatsToggle(): promise.Promise<void> {
  //  debugger;
    let flag = this.dashboardElements.MyStatsToggle_atr.getAttribute("ariaChecked");
    if (await flag == "true") {
      await this.dashboardElements.MyStatsToggle.click();
      browser.refresh();
      flag = this.dashboardElements.MyStatsToggle_atr.getAttribute("ariaChecked");
      assert.isFalse(flag, "MyStats toggle is not saved state");
      assert.equal(Promise.resolve(flag), Promise.resolve('false'), "MyStats toggle is not saved state");
    }
    else {
      await this.dashboardElements.MyStatsToggle.click();
      await browser.refresh();
       flag = this.dashboardElements.MyStatsToggle_atr.getAttribute("ariaChecked");
       assert.equal(Promise.resolve(flag), Promise.resolve('true'), "MyStats toggle is not saved state");
    }
  }
 
  public async GetMyStatsToggleState(): promise.Promise<void> {

  }


  public async GoToContractCenter(): promise.Promise<void>{
    await this.baseElements.SideBarContractCenter.click();
    
  }


}