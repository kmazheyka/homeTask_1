import { by, element } from 'protractor';

//This class serves as  a storage for page elements, each page object has its own object repo class - i.e. "home.page.ts" have "homepage.obj.ts" and inherits it
export class qb_loginRepository {
  readonly LoginInput = element(by.xpath("//input[@formcontrolname='userName']"));
  readonly PasswordInput = element(by.xpath("//input[@formcontrolname='password']"));
  readonly LoginButton = element(by.xpath("//button[@type='submit']"));









  //Iframe, needed to enter and find some elements in DOM, if you won't switch to it - you will have error "Element Not Found"
  readonly searchPopupIframe = element(by.css(".modal-iframe"));
}