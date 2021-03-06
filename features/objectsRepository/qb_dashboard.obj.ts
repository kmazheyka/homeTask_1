import { basename } from 'path';
import { by, element } from 'protractor';
import { qb_BaseRepository } from "../objectsRepository/qb_base.obj";
//This class serves as  a storage for page elements, each page object has its own object repo class - i.e. "home.page.ts" have "homepage.obj.ts" and inherits it
export class qb_dashbooardRepository {
  
  readonly userNameHeader = element(by.xpath("//div[@class='header-toolbar-conatiner']//div[contains(@class,'menu')]//span"));
  readonly SwitchUserButton = element(by.xpath("//button//mat-icon[@svgicon='switch-user']"));
  readonly MyStatsToggle = element(by.xpath("//mat-slide-toggle[@formcontrolname='myStats']"));
  readonly MyStatsToggle_atr = element(by.xpath("//mat-slide-toggle[@formcontrolname='myStats']//input"));
  readonly SideBarMyProfileButton = element(by.xpath("//div[@class='menu-container']//a[contains(@href, 'my-profile')]/mat-icon"));
  readonly JiraIcon = element(by.xpath("//div[@id='help-button']"));
  readonly SideBarContractCenter = element(by.xpath("//div[@class='menu-container']//a[contains(@href, 'contract')]/div"));

}