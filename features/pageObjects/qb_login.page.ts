import { browser, ExpectedConditions, promise, element, by } from "protractor";
import { onlinerRepository } from "../objectsRepository/onliner.obj";
import { qb_loginRepository } from "../objectsRepository/qb_login.obj";

const defaultTimeout = 60000;

//This class serves as an actions list on the page can be made, one page equals one class file, i.e. "home.page.ts"
export class loginPage {

  //Locators      
  readonly loginElements = new qb_loginRepository;
}