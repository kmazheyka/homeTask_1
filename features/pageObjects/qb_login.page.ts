import { browser, ExpectedConditions, promise, element, by } from "protractor";
import { onlinerRepository } from "../objectsRepository/onliner.obj";
import { qb_loginRepository } from "../objectsRepository/qb_login.obj";

const defaultTimeout = 60000;

//This class serves as an actions list on the page can be made, one page equals one class file, i.e. "home.page.ts"
export class loginPage {

  //Locators      
  readonly loginElements = new qb_loginRepository;
  

  // public async logInAsDefaulUser(): promise.Promise<void> {
  //   await browser.navigate().to(browser.params.base_url);
  //   await this.loginElements.LoginInput.sendKeys(browser.params.default_user);
  //   await this.loginElements.PasswordInput.sendKeys(browser.params.default_password);
  //   await this.loginElements.LoginButton.click();


  //   //await browser.wait(ExpectedConditions.visibilityOf(this.onlinerElements.onlinerLogo), defaultTimeout, "Homepage not loaded");
  // }




}

//     public async Loaded(): promise.Promise<void> {
//         //Check that element is both present in DOM and visible on screen
//         await browser.wait(ExpectedConditions.visibilityOf(this.onlinerElements.onlinerLogo), defaultTimeout, "Homepage not loaded");
//     }

//     public async Search(name:string): promise.Promise<void> {
//         await browser.wait(ExpectedConditions.visibilityOf(this.onlinerElements.fastSearch), defaultTimeout, "Fast Search not visible");
//         await this.onlinerElements.fastSearch.sendKeys(name);
//     }

//     public async VerifyItemIsVisible(name:string): promise.Promise<void> {

//         //Wait till element is present in DOM, but not necessary  visible
//         await browser.wait(ExpectedConditions.presenceOf(this.onlinerElements.searchPopupIframe), defaultTimeout, "Iframe not loaded");
//         //Check that Cvent Online Registration page loaded and you can proceed with next actions
//         await browser.switchTo().frame(this.onlinerElements.searchPopupIframe.getWebElement());

//         //in very rare cases you should put elements in page object directly, not via object repository, like in this case:
//         //we need to search for a specific element by name and easiest way is to search via xpath with expression contains()
//         let searchedElement = element(by.xpath(`//div[@class='product__title']/a[contains(text(),'${name}')]`));

//         //Asserting that element is visible
//         await browser.wait(ExpectedConditions.visibilityOf(searchedElement), defaultTimeout, `"${name}" item not found in Search Results`);
// }
// }