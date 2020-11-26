import { browser, ExpectedConditions, promise, element, by } from "protractor";
import { headerRepository } from "../objectsRepository/header.obj";
import { assert } from 'chai';

const defaultTimeout = 60000;

export class Header {
    
    readonly onlinerElements = new headerRepository;

    public async Loaded(): promise.Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.onlinerElements.onlinerLogo), defaultTimeout, "Homepage not loaded");
    }

    public async Search(name:string): promise.Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.onlinerElements.fastSearch), defaultTimeout, "Fast Search not visible");
        await this.onlinerElements.fastSearch.sendKeys(name);
    }

    public async VerifyItemIsVisible(name:string): promise.Promise<void> {
        await browser.wait(ExpectedConditions.presenceOf(this.onlinerElements.searchPopupIframe), defaultTimeout, "Iframe not loaded");
        await browser.switchTo().frame(this.onlinerElements.searchPopupIframe.getWebElement());
        let searchedElement = element(by.xpath(`//div[@class='product__title']/a[contains(text(),'${name}')]`));
        await browser.wait(ExpectedConditions.visibilityOf(searchedElement), defaultTimeout, `"${name}" item not found in Search Results`);
    }

    public async  ClickFirstRowInSearchList(): promise.Promise<string> {
        await browser.wait(ExpectedConditions.presenceOf(this.onlinerElements.searchPopupIframe), defaultTimeout, "Iframe not loaded with result not loaded");
        await browser.switchTo().frame(this.onlinerElements.searchPopupIframe.getWebElement());
        let expectedText = await (element(by.xpath("//li[@class='search__result'][1]//a[@class='product__title-link']"))).getAttribute("text");
        await (element(by.xpath("//li[@class='search__result'][1]"))).click();
        return expectedText;
    }
    
    public async ValidateSearchResult(expectedText): promise.Promise<void> {
        let actualText = await (element(by.xpath("//h1[@class='catalog-masthead__title']"))).getAttribute("outerText");
        await assert.equal(expectedText, actualText, "Searc redirect to another result");
    }

    public async ValidateHeaderMenuHome(): promise.Promise<void> {
        await browser.actions().mouseMove(this.onlinerElements.headerNaviArrowHome).perform();
        await browser.wait(ExpectedConditions.presenceOf(this.onlinerElements.headerNaviArrowHomeSold), defaultTimeout, 'Link Продажа is absent');
        await browser.wait(ExpectedConditions.presenceOf(this.onlinerElements.headerNaviArrowHomeRent), defaultTimeout, 'Link Аренда is absent');
    }
}
