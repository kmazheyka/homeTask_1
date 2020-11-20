import { browser, ExpectedConditions, promise, element, by } from "protractor";


export class BrowserHacks {

    public async NavigateWithClearCache(url: string) {
        await browser.navigate().to(url);
        await this.ClearBrowserData(); 
        await browser.navigate().to(url);
    }

    public async ClearBrowserData() {       
        await browser.executeScript('window.localStorage.clear();');
        await browser.executeScript('window.sessionStorage.clear();');
        await browser.driver.manage().deleteAllCookies();         
    }
}