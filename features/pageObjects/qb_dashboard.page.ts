//import { assert } from "console";
import { expect } from 'chai';
import { assert } from 'chai';
import { browser, ExpectedConditions, promise, element, by } from "protractor";
import { qb_dashbooardRepository } from "../objectsRepository/qb_dashboard.obj";
import { qb_BaseRepository } from "../objectsRepository/qb_base.obj";
import chai = require('chai');

const defaultTimeout = 30000;

export class dashboardPage {

  //Locators      
    readonly baseElements = new qb_BaseRepository;
    readonly dashboardElements = new qb_dashbooardRepository;
  
  public async IsUserOnDashboard(): promise.Promise<void> {
       await browser.wait(ExpectedConditions.visibilityOf(this.dashboardElements.SwitchUserButton), defaultTimeout, "user is not on dashboard");
  }

  public async CheckUserLogin(): promise.Promise<void> {
    await browser.wait(ExpectedConditions.textToBePresentInElement(this.dashboardElements.userNameHeader, "Hello, Joe Harzewski"), defaultTimeout, "User is not logged in");
  }

  public async SwitchMyStatsToggleAndCheckState(): promise.Promise<void> {
  //  debugger;
    let flag = await this.dashboardElements.MyStatsToggle_atr.getAttribute("ariaChecked");
    if (await flag == "true") {
      await this.dashboardElements.MyStatsToggle.click();
      browser.refresh();
      flag = await this.dashboardElements.MyStatsToggle_atr.getAttribute("ariaChecked");
     assert.equal(flag, 'false', "MyStats toggle is not saved state");
    }
    else {
      await this.dashboardElements.MyStatsToggle.click();
      await browser.refresh();
       flag = await this.dashboardElements.MyStatsToggle_atr.getAttribute("ariaChecked");
       assert.equal(flag, 'true', "MyStats toggle is not saved state");
    }
  }
 
  public async GoToContractCenter(): promise.Promise<void>{
    await this.baseElements.SideBarContractCenter.click();
  }

  public async GoToSetup(): promise.Promise<void>{
    await this.baseElements.SideBarSetup.click();
  }

  public async CheckMyProfileHover(): promise.Promise<void>{
    browser.waitForAngular();
    await browser.actions().mouseMove(this.dashboardElements.SideBarMyProfileButton).perform();
    await browser.wait(ExpectedConditions.presenceOf(element(by.xpath("//mat-tooltip-component//div[contains(text(), 'My Profile')]"))), defaultTimeout, 'Such Hover isnt displayed');
  }

  public async CheckJiraIcon(): promise.Promise<void>{
    await browser.driver.switchTo().frame(element(by.xpath("//iframe[@id='jsd-widget']")).getWebElement());
    await browser.wait(ExpectedConditions.presenceOf(this.dashboardElements.JiraIcon), defaultTimeout, 'Jira Icon isnt presented');
  }
}