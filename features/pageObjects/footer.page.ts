import { browser, ExpectedConditions, promise, element, by } from "protractor";
import { FooterRepository } from "../objectsRepository/footer.obj";
import { assert } from 'chai';

const defaultTimeout = 10000;


export class Footer {
  
  readonly footerElements = new FooterRepository;
  
  public async GoToSupportPageAndValidate(): promise.Promise<void> {
    await this.footerElements.supportLink.click();
    let currentUrl = await (await browser.getCurrentUrl()).toString();
    assert.equal(currentUrl, "https://support.onliner.by/");
  }
}


