import { by, element } from 'protractor';

//This class serves as  a storage for page elements, each page object has its own object repo class - i.e. "home.page.ts" have "homepage.obj.ts" and inherits it
export class qb_companyInfoRepository{
  readonly InternationalCheckBox = element(by.xpath("//mat-checkbox[@formcontrolname='isInternational']"));

}