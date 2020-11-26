import { browser, ExpectedConditions, promise, element, by, ProtractorExpectedConditions } from "protractor";
import { homepageRepository } from "../objectsRepository/homepage.obj";
import { headerRepository } from "../objectsRepository/header.obj";
import { assert } from 'chai';

const defaultTimeout = 60000;

export class Homepage {

    readonly homepageElements = new homepageRepository;
    readonly onlinerElements = new headerRepository;

    public async CheckMainNewsBlocks(): promise.Promise<void> {
        let arr = [
            this.homepageElements.peopleNews,
            this.homepageElements.autoNews,
            this.homepageElements.mindNews,
            this.homepageElements.peopleNews,
            this.homepageElements.tecnologyNews
        ];
        for (let i = 0; i < arr.length; i++){
            await browser.wait(ExpectedConditions.visibilityOf(arr[i]), defaultTimeout, ` ${arr[i]} is not exist`);
        }
    }

    public async ChecHomePageElements(): promise.Promise<void> {
        let arr = [
            this.onlinerElements.onlinerLogo,
            this.onlinerElements.fastSearch, 
            this.homepageElements.enterButton,
            this.homepageElements.cartButton,

        ];
        for (let i = 0; i < arr.length; i++){
            await browser.wait(ExpectedConditions.visibilityOf(arr[i]), defaultTimeout, ` ${arr[i]} is not exist`);
        }
    }

    public async RedirectToNewsBlock(value): promise.Promise<void> {
        await (element(by.xpath(`//h2//a[.="${value}"]`))).click();
        let activeBlock = await (element(by.xpath("//li[contains(@class, 'project-navigation__item_active')]"))).getAttribute("outerText");
        assert.equal(activeBlock, value, `Block ${value} is not active`);
    }

    public async LogInAndCheck(): promise.Promise<void> {
        await this.homepageElements.enterButton.click();
        await this.homepageElements.userName.sendKeys(browser.params.onlinerUser);
        await this.homepageElements.passWord.sendKeys(browser.params.onlinerPassword);
        await this.homepageElements.logInButton.click();
        browser.sleep(3000);
        await browser.get("https://profile.onliner.by/");
        let logginedUser = await this.homepageElements.logginedUserName.getAttribute("outerText");
        assert.equal(browser.params.onlinerUser, logginedUser, "User in not loggin in ");
    }

    public async LogIn(): promise.Promise<void> {
        await this.homepageElements.enterButton.click();
        await this.homepageElements.userName.sendKeys(browser.params.onlinerUser);
        await this.homepageElements.passWord.sendKeys(browser.params.onlinerPassword);
        await this.homepageElements.logInButton.click();
    }

    public async  AddGoodsToCartAndValidate(): promise.Promise<void> {
        await browser.wait(ExpectedConditions.presenceOf(this.onlinerElements.searchPopupIframe), defaultTimeout, "Iframe not loaded with result not loaded");
        await browser.switchTo().frame(this.onlinerElements.searchPopupIframe.getWebElement());
        let expectedText = await (element(by.xpath("//li[@class='search__result'][1]//a[@class='product__title-link']"))).getAttribute("text");
        await (element(by.xpath("//li[@class='search__result'][1]"))).click();
        await this.homepageElements.offersButton.click();
        browser.sleep(3000);
        await browser.executeScript('window.scrollTo(200,200)');
        await browser.wait(ExpectedConditions.presenceOf(this.homepageElements.minskButton), defaultTimeout);
        debugger;
        await this.homepageElements.minskButton.click();

        var buttonsArr = await browser.findElements(by.xpath("//a[contains(@class,'button-style button-style_base-alter offers-list__button offers-list__button_cart button-style_expletive')]"));

        await buttonsArr[0].click();

        await browser.wait(ExpectedConditions.visibilityOf(this.homepageElements.cartFullButton), defaultTimeout);
        await this.homepageElements.cartFullButton.click();

        await browser.wait(ExpectedConditions.visibilityOf(this.homepageElements.cartTitle), defaultTimeout);

        var part1 = await element(by.xpath("//div[contains(@class,'cart-form__description cart-form__description_other cart-form__description_tiny cart-form__description_condensed-alter helpers_hide_tablet')]")).getAttribute("innerText");
        var part2 = await element(by.xpath("//div[contains(@class,'cart-form__description cart-form__description_primary cart-form__description_base-alter cart-form__description_font-weight_semibold cart-form__description_condensed-other')]//a")).getAttribute("innerText");
        var actualText = part1 + " " + part2
        assert.equal(expectedText, actualText, "In cart  added another goods");
        await browser.actions().mouseMove(this.homepageElements.counterInCart).perform();
        await browser.wait(ExpectedConditions.presenceOf(this.homepageElements.deleteButtonInCart), defaultTimeout);
        await this.homepageElements.deleteButtonInCart.click();
 
    }

}