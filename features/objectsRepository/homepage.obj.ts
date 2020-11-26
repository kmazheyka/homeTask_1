import { by, element } from 'protractor';


export class homepageRepository {
  readonly mindNews = element(by.xpath("//h2//a[.='Мнения']"));
  readonly autoNews = element(by.xpath("//h2//a[.='Авто']"));
  readonly tecnologyNews = element(by.xpath("//h2//a[.='Технологии']"));
  readonly buildNews = element(by.xpath("//h2//a[.='Недвижимость']"));
  readonly peopleNews = element(by.xpath("//h2//a[.='Люди']"));
  readonly enterButton = element(by.xpath("//div[.='Вход']"));
  readonly cartButton = element(by.xpath("//a[@Title='Корзина']"));
  readonly cartFullButton = element(by.xpath("//a[@Class = 'b-top-profile__cart']"));
  readonly userName = element(by.xpath("//input[@Placeholder='Ник или e-mail']"));
  readonly passWord = element(by.xpath("//input[@Placeholder='Пароль']"));
  readonly logInButton = element(by.xpath("//button[contains(@class,'auth-button auth-button_primary')]"));
  readonly logginedUserName = element(by.xpath("//div[@class='profile-header__name']"));
  readonly offersButton = element(by.xpath("//a[@class = 'button button_orange button_big offers-description__button']"));
  readonly minskButton = element(by.xpath("//div[@class='offers-form']//div[contains(@class, 'offers-form__control')]//span[contains(@class, 'button-style')]"));
  readonly counterInCart = element(by.xpath("//div[@class = 'input-style__wrapper cart-form__input-wrapper cart-form__input-wrapper_nonadaptive']"));
  readonly deleteButtonInCart = element(by.xpath("//div[@class = 'cart-form__offers-part cart-form__offers-part_remove']"));
  readonly cartTitle = element(by.xpath("//div[contains(@class, 'cart-form__title')]"));

}

