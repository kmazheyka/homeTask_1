import { by, element } from 'protractor';


export class FooterRepository {

  readonly supportLink = element(by.xpath("//footer//li[10]"));
      
}