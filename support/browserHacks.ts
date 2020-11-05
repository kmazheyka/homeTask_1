import { browser, ExpectedConditions, promise, element, by } from "protractor";
import { qb_loginRepository } from "../features/objectsRepository/qb_login.obj";

export class BrowserHacks {
//Useful class with few tricks for Protactor, like clearing browser data (due to the fact, that browser.restart() gives NoSession error)    

    readonly loginElements = new qb_loginRepository;

    public async NavigateWithClearCache(url: string) {
        //Alternative to ClearBrowserData() in hooks
        await browser.navigate().to(url);
        await this.ClearBrowserData(); 
        await browser.navigate().to(url);
    }

    public async ClearBrowserData() {       
        //Use this method in Before/After hooks to make sure you don't have any issues because of the saved data from previous test 
        await browser.executeScript('window.localStorage.clear();');
        await browser.executeScript('window.sessionStorage.clear();');
        await browser.driver.manage().deleteAllCookies();         
    }

    public async logInAsDefaulUser(): promise.Promise<void> {
        await browser.navigate().to(browser.params.base_url);
        await this.loginElements.LoginInput.sendKeys(browser.params.default_user);
        await this.loginElements.PasswordInput.sendKeys(browser.params.default_password);
        await this.loginElements.LoginButton.click();
      }
}