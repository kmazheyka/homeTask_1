import { by, element } from 'protractor';


export class headerRepository {
    readonly onlinerLogo = element(by.css(".onliner_logo"));
    readonly fastSearch = element(by.className("fast-search__input"));
    readonly searchPopupIframe = element(by.css(".modal-iframe"));
    readonly headerNaviArrowHome = element(by.xpath("//li[@class='b-main-navigation__item b-main-navigation__item_arrow'][3]"));
    readonly headerNaviArrowHomeSold = element(by.xpath("//a[.='Продажа']"));
    readonly headerNaviArrowHomeRent = element(by.xpath("//a[.='Аренда']"));
}